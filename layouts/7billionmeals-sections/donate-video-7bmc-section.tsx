'use client'

import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import DonateSectionV2 from '@/components/donate-component-v2'
import { VideoCard } from '@/components/video-card'

export default function DonateVideo7BmcSection() {
  const ref = useRef(null)
  // const ref2 = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  // const isInView2 = useInView(ref2, { once: true, margin: '-50px' })

  return (
    <>
      <div className="bg-light pb-10 md:pt-10">
        <motion.div
          ref={ref}
          className="wrapper px-3 py-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex h-full flex-col gap-5 gap-y-10 pb-2 md:py-6">
            <h3 className="sub-header text-2xl font-semibold capitalize text-dark md:text-3xl">
              7 Billion Meals Campaign Global Launch: REBROADCAST
            </h3>
            <p className="md:-mt-6">Provide donation options: monetary or meal sponsorship</p>
          </div>
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="md:max-w-md">
              <DonateSectionV2 />
            </div>
            <div className="w-full max-w-3xl md:ml-auto">
              <VideoCard
                className=""
                thumbNail="https://i.vimeocdn.com/video/2051672422-9eeae56bb17ce34f277a44ab6c3688ccd51f8278dda7673cfa8d412b54298cda-d?mw=800&mh=533&q=70"
                videoUrl="https://player.vimeo.com/video/1113227827?h=9ca3e574ed"
                iframe={true}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
