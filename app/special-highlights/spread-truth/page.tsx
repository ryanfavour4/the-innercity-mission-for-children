'use client'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import DonateSectionV2 from '@/components/donate-component-v2'
import { VideoCard } from '@/components/video-card'
import MetaTags from '@/meta'
import Image from 'next/image'
import spreadTruthFlyer from '@/public/assets/images/spread-truth-campaign-banner.jpg'

export default function SpreadTruthPage() {
  return (
    <>
      <MetaTags title="Spread Truth Campaign – InnerCity Mission HQ" />

      <div className="relative h-96">
        <Image
          className="h-full w-full bg-cover bg-center object-cover md:aspect-3"
          width={300}
          height={200}
          unoptimized
          src={spreadTruthFlyer}
          alt="spreadTruthFlyer"
        />
      </div>

      <div className="bg-white">
        <div className="relative z-10 mx-auto -mt-8 w-11/12 max-w-4xl rounded-t-lg bg-white py-4 pb-1 text-center">
          <h3 className="text-center text-xl font-bold text-primary md:text-2xl">
            Spread Truth Campaign
          </h3>
        </div>
      </div>

      <div className="bg-white pb-8 pt-4">
        <div className="wrapper max-w-3xl text-center">
          <p>
            An urgent mission to saturate the inner-cities with our Gospel through the distribution
            of ministry materials to children and influencer in the inner-cities, villages and slums
            all around the world!
          </p>
        </div>
      </div>

      <DonateVideoSection />
    </>
  )
}

function DonateVideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <>
      <div className="bg-light pb-10 md:pt-10">
        <motion.div
          ref={ref}
          className="wrapper px-2 py-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex h-full flex-col gap-5 pb-2 md:gap-y-10 md:py-6">
            <h3 className="sub-header text-2xl font-semibold capitalize text-dark md:text-3xl">
              How to Participate
            </h3>
            <p className="md:-mt-6">Support the spread truth campaign today</p>
          </div>
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="md:max-w-md">
              <DonateSectionV2 />
            </div>
            <div className="w-full max-w-3xl md:ml-auto">
              <VideoCard
                className=""
                thumbNail="https://i.vimeocdn.com/video/1977580625-f352dc3657f2028b4b67bbc41cdd6f897c8c50621e374880a1c1aa3788e716fe-d?mw=1100&mh=620&q=70"
                videoUrl="https://player.vimeo.com/video/1052568231?h=6234489652"
                iframe={true}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
