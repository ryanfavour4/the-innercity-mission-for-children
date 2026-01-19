'use client'
import React, { useRef } from 'react'
import { VideoCard } from '@/components/video-card'
import { useInView, motion } from 'framer-motion'

function IntroVideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="relative min-h-20 overflow-hidden bg-secondary md:py-10">
        <div className="wrapper flex flex-col items-center justify-center">
          <div className="mb-5 flex flex-col items-center justify-center gap-2 px-4 text-center">
            <h2 className="text-2xl font-extrabold uppercase md:text-3xl">
              — School and Learning Center Sponsorship —
            </h2>
            <p className="max-w-xl text-center">
              Join us to build more schools, strengthen learning centers, and carry the light of the
              gospel into communities where hope is scarce.
            </p>
          </div>

          {/* VIDEO */}
          <VideoCard classNameIframe="md:!h-[33rem]" iframe={true} />
        </div>
      </div>
    </motion.div>
  )
}

export default IntroVideoSection
