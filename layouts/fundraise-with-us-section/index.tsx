'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import fundraiseImage from '@/public/assets/images/fundraise-with-us-image.jpg'
import Image from 'next/image'
import { useInView, motion } from 'framer-motion'

export default function FundraiseWithUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div className="bg-light py-0 md:py-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="wrapper px-3 py-6">
          {/* TWIN COL */}
          <div className="flex h-full grid-cols-1 flex-col-reverse justify-center gap-5 md:grid md:grid-cols-2 md:gap-10">
            <div className="flex h-full flex-col justify-between gap-5 pb-8">
              <h3 className="sub-header text-2xl font-semibold uppercase md:text-3xl">
                Fundraise With Us
              </h3>
              <p className="text-justify leading-8">
                By becoming a fundraiser, you have the power to transform the lives of indigent
                children, helping them gain access to quality education and break free from the
                cycle of poverty. Your efforts provide hope and opportunity, equipping children with
                the tools they need to build brighter futures. Together, we can make a difference
                because every child deserves a chance to succeed. Remember, Every Child is Your
                Child.
              </p>
              <div className="flex items-center gap-5">
                <Link
                  className="btn-primary block w-fit py-2"
                  href={'https://fundraise.theinnercitymission.ngo/'}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="w-full">
              <Image
                alt="fundraise with us"
                className="aspect-1 w-full rounded-md object-cover md:ml-auto md:aspect-[unset] md:h-[450px] md:w-11/12"
                src={fundraiseImage}
                width={400}
                height={450}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
