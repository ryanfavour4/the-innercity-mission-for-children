// /app/api/test/route.ts
import { NextResponse } from 'next/server'
import { getDB } from '@/lib/db'

export async function GET() {
  try {
    const db = getDB()
    const [rows] = await db.query('SELECT NOW() AS time')
    return NextResponse.json({ ok: true, data: rows })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 })
  }
}
