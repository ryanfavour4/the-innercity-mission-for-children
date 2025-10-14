'use client'
import { GooglePlayStoreColouredIcon, LoveworldAppStoreColouredIcon } from '@/components/svgs'
import { useInView, motion } from 'framer-motion'
import React, { useRef } from 'react'

export default function ExtraExternalSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div className="bg-light pb-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="wrapper px-3">
          <h3 className="sub-header max-w-md text-2xl font-semibold before:top-4 md:text-3xl">
            We are creating a place where children with special needs can thrive
          </h3>

          {/* TWIN COL */}
          <div className="mt-10 grid h-full min-h-96 grid-cols-1 justify-center gap-x-20 gap-y-10 text-light md:grid-cols-2">
            {/* BOX */}
            <div
              className={`flex w-full flex-col justify-center gap-8 rounded-xl bg-[linear-gradient(rgba(var(--dark),0.6),rgba(var(--dark),0.6)),url('/assets/images/icm-logo.jpg')] px-4 py-8 shadow-md md:px-6 bg-center`}
            >
            <h5 className="text-2xl font-semibold">THE INNERCITY MISSION APP</h5>

              <p className='line-clamp-4'>
                Stay connected and make an impact, anytime, anywhere! The InnerCity Mission App is your all-in-one platform for supporting our work and reaching the world’s most vulnerable. You can sponsor a mission, donate to a project, watch inspiring impact stories, shop for good, send food portions to those in need, and stay updated with the latest campaigns and news — all in one place. It’s easy to use, gives you instant access to everything you need, and lets you engage, give, and serve from wherever you are. Join a growing community of changemakers. Download the InnerCity Mission App on the
              </p>
              <div className="flex flex-wrap items-center gap-6 md:gap-4">
                <button className="btn-white flex w-fit items-center gap-3 border border-light px-3 py-2 hover:bg-white">
                  <GooglePlayStoreColouredIcon width={35} height={35} />
                  <span className="flex flex-col items-start text-dark">
                    <small className="text-xs leading-tight">Get it on</small>
                    <p className="text-sm">Google Play Store</p>
                  </span>
                </button>

                <button className="btn-white flex w-fit items-center gap-3 border border-light bg-dark px-3 py-2 hover:bg-dark">
                  <LoveworldAppStoreColouredIcon width={35} height={35} />
                  <span className="flex flex-col items-start text-light">
                    <small className="text-xs leading-tight">Get it on</small>
                    <p className="text-sm">Loveworld App Store</p>
                  </span>
                </button>
              </div>
            </div>

            {/* BOX */}
            <div
              className={`flex w-full flex-col justify-center gap-8 rounded-xl bg-[#dee8f1] bg-[linear-gradient(rgba(var(--dark),0.7),rgba(var(--dark),0.7)),url('/assets/images/give-a-meal-logo.jpg')] bg-contain bg-center bg-no-repeat px-4 py-8 shadow-md md:px-6`}
            >
              <h5 className="text-2xl font-semibold">Give A Meal App</h5>

              <p>
                The &quot;Give a Meal&quot; app by InnerCity Mission tackles global hunger, letting
                you sponsor meals instantly. For just $1, you can feed a hungry child or family.
                Download it now on Google Play or Loveworld App Store!
              </p>

              <div className="flex flex-wrap items-center gap-6 md:gap-4">
                <button className="btn-white flex w-fit items-center gap-3 border border-light px-3 py-2 hover:bg-white">
                  <GooglePlayStoreColouredIcon width={35} height={35} />
                  <span className="flex flex-col items-start text-dark">
                    <small className="text-xs leading-tight">Get it on</small>
                    <p className="text-sm">Google Play Store</p>
                  </span>
                </button>

                <button className="btn-white flex w-fit items-center gap-3 border border-light bg-dark px-3 py-2 hover:bg-dark">
                  <LoveworldAppStoreColouredIcon width={35} height={35} />
                  <span className="flex flex-col items-start text-light">
                    <small className="text-xs leading-tight">Get it on</small>
                    <p className="text-sm">Loveworld App Store</p>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
