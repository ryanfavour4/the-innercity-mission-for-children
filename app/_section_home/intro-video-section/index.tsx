'use client'
import React, { useRef } from 'react'
import { VideoCard } from '@/components/video-card'
import { useInView, motion } from 'framer-motion'
// import { formatDate } from '@/utils/format-date'

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
              {/* — School and Learning Center Sponsorship — */}- RACE CONFRENCE -
            </h2>
            <p className="hidden max-w-xl text-center">
              Join us to build more schools, strengthen learning centers, and carry the light of the
              gospel into communities where hope is scarce.
            </p>
          </div>

          {/* VIDEO */}
          <VideoCard
            videoUrl="https://cdn1.kingscloud.co/kingscloud/files/58260ca6f916b94be484ceb0/98e66684-29fb-4f47-a7dd-565233b96511?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJZ7R2RYYHYMD7OLA%2F20260509%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260509T120128Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6524080e53372ce6d51d22b57ff12e67d1c8598238ed9530b34e776f10354ced"
            // videoUrl="https://player.vimeo.com/video/1183429695?h=6b7b217b64" // SHOP FOR FREE
            classNameIframe="md:!h-[33rem]"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default IntroVideoSection
