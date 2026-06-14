// app/api/testimonials/route.ts

import { supabase } from '@/lib/supabase/connect'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const name = formData.get('name')?.toString().trim()
    const country = formData.get('country')?.toString().trim()
    const relation = formData.get('relation')?.toString().trim()
    const message = formData.get('message')?.toString().trim()
    const file = formData.get('image') as File | null

    if (!name || !country || !relation || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'All required fields must be provided.',
        },
        { status: 400 },
      )
    }

    let imageUrl: string | null = null

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      // Prevent spaces and duplicate names
      const extension = file.name.split('.').pop()
      const fileName = `testimonial-${Date.now()}-${crypto.randomUUID()}.${extension}`

      const { error: uploadError } = await supabase.storage
        .from('poa-birthday-testimonials')
        .upload(fileName, buffer, {
          contentType: file.type,
          upsert: false,
        })

      if (uploadError) {
        throw uploadError
      }

      const { data } = supabase.storage.from('poa-birthday-testimonials').getPublicUrl(fileName)

      imageUrl = data.publicUrl
    }

    const { error: insertError } = await supabase.from('poa_birthday_testimonials').insert({
      name,
      country,
      relation,
      message,
      image_url: imageUrl,
      approved: true,
    })

    if (insertError) {
      throw insertError
    }

    return NextResponse.json({
      success: true,
      message: 'Testimonial submitted successfully.',
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong.',
      },
      {
        status: 500,
      },
    )
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('poa_birthday_testimonials')
      .select('*')
      // .eq('approved', true)
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return NextResponse.json({
      success: true,
      data,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong.',
      },
      {
        status: 500,
      },
    )
  }
}
