import { NextResponse } from 'next/server'

export async function GET() {
  try {
    return NextResponse.json({
      message: 'Welcome to Innercity!',
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
