'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import Image from 'next/image'
import { useInView, motion } from 'framer-motion'
import volunteer from '@/public/assets/images/hvn-website-banner-2-volunteer.jpg'

export default function VolunteerWithUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div className="bg-light py-0 md:py-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="wrapper px-3 py-6">
          {/* TWIN COL */}
          <div className="grid h-full grid-cols-1 justify-center gap-5 md:grid-cols-2 md:gap-10">
            <div className="w-full">
              <Image
                alt="fundraise with us"
                className="relative z-10 aspect-1 w-full rounded-md object-cover object-top md:mr-auto md:aspect-[unset] md:h-[450px] md:w-11/12"
                src={volunteer}
                width={400}
                height={450}
              />
            </div>
            <div className="flex h-full flex-col justify-between gap-5 pb-8">
              <h3 className="sub-header text-2xl font-semibold capitalize md:text-3xl">
                VOLUNTEER WITH US
              </h3>
              <p className="text-justify leading-8">
                Join the Humanitarian Volunteer Network (HVN) to make a meaningful impact on the
                lives of indigent children and families in need. Our Sponsor a Child&apos;s
                Education (SP.A.C.E) initiative allows you to help provide quality education to
                children who deserve it. Your support can make a significant difference in their
                future!
              </p>
              <Link
                className="btn-primary block w-fit py-2"
                href={'https://hvn.theinnercitymission.ngo/'}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
