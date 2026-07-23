'use client'
import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

interface VideoPlayerProps {
  src: string
  className?: string
}

export default function VideoPlayer({
  src = '/api/stream?url=https://colouringdreams.tv/public/videos/streams/zGMgZ6iOrB76.m3u8',
  className = '',
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video || !src) return

    let hls: Hls | null = null

    // 1. Check if Hls.js is supported (Desktop Chrome, Firefox, Edge, Android)
    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      })

      hls.loadSource(src)
      hls.attachMedia(video)

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error('HLS Network error encountered, trying to recover...')
              hls?.startLoad()
              break
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error('HLS Media error encountered, trying to recover...')
              hls?.recoverMediaError()
              break
            default:
              console.error('Unrecoverable HLS error, destroying instance.')
              hls?.destroy()
              break
          }
        }
      })
    }
    // 2. Fallback for native HLS support (Safari / iOS)
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
    }

    return () => {
      if (hls) {
        hls.destroy()
      }
    }
  }, [src])

  return (
    <div
      className={`aspect-video relative w-full overflow-hidden rounded-xl bg-black ${className}`}
    >
      <video
        ref={videoRef}
        src={'/api/stream?url=https://colouringdreams.tv/public/videos/streams/zGMgZ6iOrB76.m3u8'}
        controls
        playsInline
        className="h-full w-full object-contain"
      />
    </div>
  )
}
