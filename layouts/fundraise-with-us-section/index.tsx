import Link from 'next/link'
import React from 'react'
import fundraiseImage from '@/public/assets/images/fundraise-with-us-image.jpg'
import Image from 'next/image'

export default function FundraiseWithUsSection() {
  return (
    <div className="bg-light py-10">
      <div className="wrapper px-3 py-10">
        {/* TWIN COL */}
        <div className="grid h-full grid-cols-1 justify-center gap-5 md:grid-cols-2">
          <div className="flex h-full flex-col justify-between gap-5 pb-8">
            <h3 className="sub-header text-2xl font-semibold md:text-3xl">Fund-raise With Us</h3>
            <p className="leading-8">
              By becoming a fundraiser, you have the power to transform the lives of indigent
              children, helping them gain access to quality education and break free from the cycle
              of poverty. Your efforts provide hope and opportunity, equipping children with the
              tools they need to build brighter futures. Together, we can make a difference because
              every child deserves a chance to succeed. Remember, Every Child is Your Child.
            </p>
            <div className="flex items-center gap-5">
              <Link className="btn-primary block w-fit py-2" href={'/'}>
                Learn More
              </Link>
            </div>
          </div>
          <div className="w-full">
            <Image
              alt="fundraise with us"
              className="h-[450px] w-full rounded-md object-cover md:ml-auto md:w-[400px]"
              src={fundraiseImage}
              width={400}
              height={450}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
