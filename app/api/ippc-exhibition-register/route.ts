import { supabase } from '@/lib/supabase/connect'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    return NextResponse.json({
      message: 'Welcome to the IPPC Exhibition!',
      status: 201,
    })
  } catch (error) {
    return NextResponse.json({
      message: 'Error!',
      error,
      status: 500,
    })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, kc_handle, email, phone, country, zone, area_of_interest } = body

    const { error } = await supabase
      .from('icm-exhibition-ippc')
      .insert([{ name, kc_handle, email, phone, country, zone, area_of_interest }])

    if (error) throw error

    return NextResponse.json({ success: true, message: 'Registered successfully!' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ success: false, message: err.message }, { status: 500 })
  }
}
