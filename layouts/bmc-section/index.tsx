import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import fiveBmcImage from '@/public/assets/images/5-billion-meal-campaign-banner.jpg'

export default function BillionMealCampaignSection() {
  return (
    <div className="bg-light py-10">
      <div className="wrapper border-y border-textcolor/25 px-3 py-10">
        {/* TWIN COL */}
        <div className="grid h-full grid-cols-1 justify-center gap-5 md:grid-cols-2">
          <div className="flex h-full flex-col justify-between gap-5 pb-8">
            <h3 className="sub-header text-2xl font-semibold capitalize md:text-3xl">
              7 billion meals campaign
            </h3>
            <p className="leading-8 md:-mt-14">
              We are excited to announce our &quot;7 Billion Meals Campaign&quot;. This is a
              historic effort of the InnerCity Mission for Children under the Chris Oyakhilome
              Foundation International (COFI) to provide Meals for millions of children and
              households who are in desperate need of food around the world.
            </p>
            <div className="flex items-center gap-5">
              <Link className="btn-primary block w-fit py-2" href={'/donate'}>
                Donate
              </Link>
              <Link className="btn-white block w-fit py-2 ring-textcolor/25" href={'/'}>
                Learn More
              </Link>
            </div>
          </div>
          <div className="w-full">
            <Image
              alt="5 billion campaign"
              className="h-[450px] w-full rounded-md object-cover md:ml-auto md:w-[400px]"
              src={fiveBmcImage}
              width={400}
              height={450}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
