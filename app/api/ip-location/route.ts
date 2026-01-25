import { encryptServer } from '@/utils/crypt.server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  // Get user's IP
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0] || req.headers.get('x-real-ip') || 'self' // fallback (IPFind supports "self")
  const res = await fetch(`https://ipfind.co/?ip=${ip}&auth=${process.env.IPFIND_API_KEY}`)

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch location' }, { status: 500 })
  }

  const data = await res.json()

  return NextResponse.json(
    encryptServer({
      ...data,
    }),
  )
}
