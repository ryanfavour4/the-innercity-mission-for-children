"use client"
import { useInView, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useRef } from 'react'

export default function CtaSection() {
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
      <div className="wrapper flex h-96 flex-col items-center justify-center gap-10 rounded-xl bg-[url('/assets/images/cta-banner.jpg')] bg-cover bg-center text-white md:rounded-xl">
        <h3 className="text-center text-4xl font-black tracking-wide md:text-6xl">
          Every Child is your Child!
        </h3>

        <div className="flex flex-row items-center gap-4 md:flex-row md:gap-8">
          <Link
            className="btn-primary block w-fit py-3"
            href={'/https://fundraise.theinnercitymission.ngo/'}
          >
            Join as fundraiser
          </Link>
          <Link className="btn-white block w-fit py-3" href={'/donate'}>
            Donate
          </Link>
        </div>
      </div>
      </motion.div>
    </div>
  )
}
