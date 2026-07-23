// app/api/stream/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const streamUrl = searchParams.get('url')

  if (!streamUrl) {
    return new NextResponse('Missing stream URL', { status: 400 })
  }

  try {
    const originUrl = new URL(streamUrl)

    const response = await fetch(streamUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Referer: originUrl.origin,
      },
    })

    if (!response.ok) {
      return new NextResponse(`Remote server returned ${response.status}`, {
        status: response.status,
      })
    }

    const contentType = response.headers.get('content-type') || ''
    const isPlaylist =
      streamUrl.endsWith('.m3u8') ||
      contentType.includes('mpegurl') ||
      contentType.includes('apple')

    // CASE 1: If it's the .m3u8 text playlist, rewrite relative URLs inside it
    if (isPlaylist) {
      let playlistText = await response.text()
      const baseUrl = streamUrl.substring(0, streamUrl.lastIndexOf('/') + 1)

      // Rewrite each chunk path to point back to our proxy endpoint
      playlistText = playlistText.replace(/^(?!#)(.+)$/gm, (line) => {
        const trimmed = line.trim()
        if (!trimmed) return line

        // Resolve full remote URL for the segment
        const absoluteSegmentUrl = trimmed.startsWith('http')
          ? trimmed
          : new URL(trimmed, baseUrl).toString()

        // Wrap it with our local proxy
        return `/api/stream?url=${encodeURIComponent(absoluteSegmentUrl)}`
      })

      return new NextResponse(playlistText, {
        status: 200,
        headers: {
          'Content-Type': 'application/vnd.apple.mpegurl',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache, no-store',
        },
      })
    }

    // CASE 2: It's a binary video chunk (.ts / .m4s / .mp4), return raw buffer
    const videoBuffer = await response.arrayBuffer()
    return new NextResponse(videoBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType || 'video/mp2t',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch (error) {
    console.error('HLS Proxy error:', error)
    return new NextResponse('Proxy server error', { status: 500 })
  }
}
