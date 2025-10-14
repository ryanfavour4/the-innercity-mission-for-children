"use client"
import Link from 'next/link'
import React, { useRef } from 'react'
import Image from 'next/image'
import { useInView, motion } from 'framer-motion'
import volunteer from "@/public/assets/images/hvn-website-banner-2-volunteer.jpg"

export default function VolunteerWithUs() {
    const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div className="bg-light py-10">
         <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="wrapper px-3 py-10">
        {/* TWIN COL */}
        <div className="grid h-full grid-cols-1 justify-center gap-5 md:grid-cols-2 md:gap-10">

             <div className="w-full">
            <Image
              alt="fundraise with us"
              className="h-[450px] w-full rounded-md object-cover md:ml-auto object-top"
              src={volunteer}
              width={400}
              height={450}
            />
          </div>
          <div className="flex h-full flex-col justify-between gap-5 pb-8">
            <h3 className="sub-header text-2xl font-semibold capitalize md:text-3xl ml-auto">
              VOLUNTEER WITH US
            </h3>
            <p className="leading-8  text-justify">
              Join the Humanitarian Volunteer Network (HVN) to make a tangible impact on the lives of indigent children and families in need. Through our Sponsor a Child&apos;s Education (SP.A.C.E) initiative, you can help provide quality education to indigent children.
            </p>
            <div className="flex items-center gap-5">
              <Link className="btn-primary block w-fit py-2 ml-auto" href={'/'}>
                Learn More
              </Link>
            </div>
          </div>
         
        </div>
      </div>
      </motion.div>
    </div>
  )
}
