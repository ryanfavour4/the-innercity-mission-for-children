import { GooglePlayStoreColouredIcon, LoveworldAppStoreColouredIcon } from '@/components/svgs'
import Link from 'next/link'
import React from 'react'

export default function ExtraExternalSection() {
  return (
    <div className="bg-light pb-10">
      <div className="wrapper px-3">
        <h3 className="sub-header max-w-md text-2xl font-semibold before:top-4 md:text-3xl">
          We are creating a place where children with special needs can thrive
        </h3>

        {/* TWIN COL */}
        <div className="mt-10 grid h-full min-h-96 grid-cols-1 justify-center gap-x-20 gap-y-10 text-light md:grid-cols-2">
          {/* BOX */}
          <div
            className={`flex w-full flex-col justify-center gap-8 rounded-xl bg-[linear-gradient(rgba(var(--dark),0.6),rgba(var(--dark),0.6)),url('/assets/images/hvn-website-banner-2-volunteer.jpg')] px-4 py-8 shadow-md md:px-6`}
          >
            <h5 className="text-2xl font-semibold">Volunteer With Us</h5>

            <p>
              Join the Humanitarian Volunteer Network (HVN) and help transform lives. Support
              quality education for indigent children through the SP.A.C.E initiative.
            </p>

            <Link className="btn-white block w-fit py-3" href={'/'}>
              Learn More
            </Link>
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
    </div>
  )
}
