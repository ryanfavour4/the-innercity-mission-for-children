'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import fiveBmcImage from '@/public/assets/images/7bmc24.jpg'
import { useInView, motion } from 'framer-motion'
import {
  CollectionStackFillIcon,
  DeliveryVanFastFillIcon,
  EventDateFillIcon,
  GiveLeafFillIcon,
  MealForkPlateKnifeIcon,
  PeopleGroupFillIcon,
  WorldGlobeIcon,
} from '@/components/svgs'

export default function DonateVideo7BmcSection() {
  const ref = useRef(null)
  const ref2 = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const isInView2 = useInView(ref2, { once: true, margin: '-50px' })

  return (
    <>
      <div className="bg-light pb-10 md:pt-10">
        <div className="wrapper px-3 py-10">
          {/* TWIN COL */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="grid h-full grid-cols-1 justify-center gap-5 md:grid-cols-2 md:gap-10">
              <div className="flex h-full flex-col justify-between gap-5 pb-2 md:py-6">
                <h3 className="sub-header text-2xl font-semibold capitalize text-dark md:text-3xl">
                  About 7 Billion Meals Campaign
                </h3>
                <p className="md:-mt-6">
                  We are excited to announce the “7 Billion Meals Campaign”. This is a historic
                  effort of the InnerCity Mission for Children under the Chris Oyakhilome Foundation
                  International (COFI) to provide Meals for millions of children and households who
                  are in desperate need of food around the world. We invite you to join us as your
                  support is crucial to the success of this ALL-YEAR ROUND campaign, which will
                  cushion the hardship faced by vulnerable families, empowering them to protect
                  their children as well. Make a difference with us!
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {/* metric */}
                  <div className="col-span-2 flex flex-col gap-1.5 md:col-span-1">
                    <div className="flex items-center gap-2">
                      <div className="w-fit rounded-sm bg-dark p-1">
                        <MealForkPlateKnifeIcon className="size-5 text-base text-secondary" />
                      </div>
                      <h4 className="font-bold">5B+ Meals Distributed in 2024</h4>
                    </div>
                    <p className="text-sm text-textcolor/75">
                      Delivering meals to vulnerable children and families, ensuring they have the
                      nutrition they need.
                    </p>
                  </div>

                  {/* metric */}
                  <div className="col-span-2 flex flex-col gap-1.5 md:col-span-1">
                    <div className="flex items-center gap-2">
                      <div className="w-fit rounded-sm bg-dark p-1">
                        <WorldGlobeIcon className="size-5 text-base text-secondary" />
                      </div>
                      <h4 className="font-bold">100+ Countries Reached</h4>
                    </div>
                    <p className="text-sm text-textcolor/75">
                      Reaching children in need across the globe with essential food and care.
                    </p>
                  </div>

                  {/* metric */}
                  <div className="col-span-2 flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-fit rounded-sm bg-dark p-1">
                        <EventDateFillIcon className="size-5 text-base text-secondary" />
                      </div>
                      <h4 className="font-bold">50+ Events Organized</h4>
                    </div>
                    <p className="text-sm text-textcolor/75">
                      Coordinating impactful food outreaches and drives to support children in
                      underserved communities.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <Link className="btn-primary block w-fit !px-10 py-2" href={'/donate'}>
                    Donate
                  </Link>
                  <a
                    className="btn-white block w-fit py-2 ring-textcolor/25"
                    href={'https://vfd.theinnercitymission.ngo/'}
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="w-full">
                <Image
                  alt="5 billion campaign"
                  className="h-96 w-full rounded-md object-cover object-top md:ml-auto md:h-auto md:max-w-lg"
                  src={fiveBmcImage}
                  width={400}
                  height={450}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-secondary py-10">
        <div className="wrapper px-3 py-10">
          {/* TWIN COL */}
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="grid h-full grid-cols-1 justify-center gap-5 md:grid-cols-2 md:gap-10">
              <div className="w-full">
                <Image
                  alt="5 billion campaign"
                  className="h-96 w-full rounded-md object-cover object-top md:mr-auto md:h-auto md:max-w-lg"
                  src={fiveBmcImage}
                  width={400}
                  height={450}
                />
              </div>

              <div className="flex h-full flex-col gap-5 gap-y-10 pb-2 md:py-6">
                <h3 className="sub-header text-2xl font-semibold capitalize text-dark md:text-3xl">
                  How to Participate. Make G.O.O.D happen
                </h3>
                <p className="md:-mt-6">
                  Make GOOD Happen Everywhere by joining our efforts to fight hunger.
                </p>
                <div className="grid grid-cols-1 gap-y-8">
                  {/* metric */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-dark">
                      <div className="w-fit rounded-sm bg-dark p-1">
                        <GiveLeafFillIcon className="text-secondary" />
                      </div>
                      <h4 className="font-bold">GIVE</h4>
                    </div>
                    <p className="text-sm text-textcolor/75">
                      Delivering meals to vulnerable children and families, ensuring they have the
                      nutrition they need.
                    </p>
                  </div>

                  {/* metric */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-dark">
                      <div className="w-fit rounded-sm bg-dark p-1">
                        <PeopleGroupFillIcon className="size-5 text-xl text-secondary" />
                      </div>
                      <h4 className="font-bold">ORGANIZE</h4>
                    </div>
                    <p className="text-sm text-textcolor/75">
                      ORGANIZE Food Outreaches: Lead or participate in events to provide meals to
                      those in need.
                    </p>
                  </div>

                  {/* metric */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-dark">
                      <div className="w-fit rounded-sm bg-dark p-1">
                        <CollectionStackFillIcon className="size-5 text-xl text-secondary" />
                      </div>
                      <h4 className="font-bold">ORGANIZE</h4>
                    </div>
                    <p className="text-sm text-textcolor/75">
                      ORGANIZE Food Drive: Lead or participate in events to provide meals to those
                      in need. Arrange collection efforts to gather food for distribution
                    </p>
                  </div>

                  {/* metric */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-dark">
                      <div className="w-fit rounded-sm bg-dark p-1">
                        <DeliveryVanFastFillIcon className="text-secondary" />
                      </div>
                      <h4 className="font-bold">DISTRIBUTE</h4>
                    </div>
                    <p className="text-sm text-textcolor/75">
                      DISTRIBUTE: Deliver food directly to individuals and families who need it.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <Link className="btn-primary block w-fit !px-10 py-2" href={'/donate'}>
                    Donate
                  </Link>
                  <a
                    className="btn-white block w-fit py-2 ring-textcolor/25"
                    href={'https://vfd.theinnercitymission.ngo/'}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
