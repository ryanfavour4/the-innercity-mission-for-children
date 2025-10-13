import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'
import { handleError } from '@/app/api/utils'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value)
    }

    // ✅ Send to external backend
    const response = await axios.post(
      `https://theinnercitymission.ngo/wp-admin/admin-ajax.php`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )

    return NextResponse.json({
      message: 'Upload successful',
      data: response.data,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return handleError(error, 'Error while uploading!')
  }
}
