import { HandGivingHeartIcon, PartnerHandShakeIcon } from '@/components/svgs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import spaceImage from '@/public/assets/images/po.jpg'
import billionMealImage from '@/public/assets/images/7billion.jpg'
import globalMissionImage from '@/public/assets/images/global-missions.jpg'
import indigentChildrenImage from '@/public/assets/images/indigent_children_family.jpg'

export default function PartnerWithUsPage() {
  return (
    <>
      <div className="bg-partner-with-us-hero bg-[100%,250%] bg-right-top px-2 py-24 md:min-h-96 md:bg-cover md:py-48">
        <div className="wrapper text-light">
          <h1 className="text-4xl font-black md:text-5xl">Don&apos;t Ignore Children</h1>
          <p className="mb-8 mt-4 max-w-sm">
            Partner with the InnerCity Mission to to make a difference for needy children
          </p>
          <div className="flex w-full max-w-48 flex-wrap items-center gap-2 md:max-w-96">
            <Link
              href={'/donate'}
              className="btn-white flex w-fit items-center gap-2 border px-4 text-base ring-light/50"
            >
              <HandGivingHeartIcon className="text-2xl" />
              <p>Donate Now</p>
            </Link>
            <Link
              href="#partner-with-us"
              className="btn flex w-fit items-center gap-2 border px-4 text-base ring-light/50"
            >
              <PartnerHandShakeIcon className="text-2xl" />
              <p>Become A GEM</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white px-2.5 py-6">
        <h2 className="mb-12 text-center text-2xl font-extrabold uppercase md:mb-24 md:text-3xl">
          — 5 prolific ways to be an impactful partner —
        </h2>

        {/* section 1 */}
        <div className="container grid h-full max-w-5xl grid-cols-1 justify-center gap-2 md:grid-cols-2">
          <div className="w-full max-w-96">
            <Image
              alt="Space Image"
              className="w-full rounded-md object-cover object-top md:h-auto md:max-w-lg"
              src={spaceImage}
              width={400}
              height={450}
            />
          </div>
          <div className="flex h-full flex-col gap-5 gap-y-6 pb-2 md:gap-y-10 md:py-6">
            <h3 className="sub-header text-2xl font-semibold capitalize text-dark md:text-3xl">
              Sponsor A Child’s Education (SP.A.C.E)
            </h3>
            <p className="md:-mt-6">
              Education is a ticket out of poverty and provides the opportunity to realize their
              God-given potential. Through The SP.A.C.E (Sponsor-A-Child&apos;s Education) Campaign,
              we will be giving 5 million Indigent Children Access to Education and for those who
              have dropped out of school, the opportunity to complete their Education!
            </p>

            <div className="flex items-center gap-5">
              <Link className="btn-primary block w-fit !px-10 py-2" href={'/donate'}>
                Donate
              </Link>
              <a
                className="btn-white block w-fit py-2 ring-textcolor/25"
                href={'/what-we-do/educational-program'}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="container mt-8 flex h-full max-w-5xl flex-col-reverse justify-center gap-2 md:mt-16 md:grid md:grid-cols-2">
          <div className="flex h-full flex-col gap-5 gap-y-6 pb-2 md:gap-y-10 md:py-6">
            <h3 className="sub-header text-2xl font-semibold capitalize text-dark md:text-3xl">
              #7BillionMeals Campaign
            </h3>
            <p className="md:-mt-6">
              The “7 Billion Meals Campaign” is a historic effort of the InnerCity Mission to tackle
              the global issue of hunger by distributing 7 billion meals and more to children and
              families in dire need around the world.
            </p>

            <div className="flex items-center gap-5">
              <Link className="btn-primary block w-fit !px-10 py-2" href={'/donate'}>
                Donate
              </Link>
              <a
                className="btn-white block w-fit py-2 ring-textcolor/25"
                href={'/special-highlights/7billionmeals'}
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="ml-auto w-full max-w-96">
            <Image
              alt="7 billion campaign"
              className="w-full rounded-md object-cover object-top md:h-auto md:max-w-lg"
              src={billionMealImage}
              width={400}
              height={450}
            />
          </div>
        </div>

        {/* section 1 */}
        <div className="container mt-8 grid h-full max-w-5xl grid-cols-1 justify-center gap-2 md:mt-16 md:grid-cols-2">
          <div className="w-full max-w-96">
            <Image
              alt="globalMissionImage"
              className="w-full rounded-md object-cover object-top md:h-auto md:max-w-lg"
              src={globalMissionImage}
              width={400}
              height={450}
            />
          </div>
          <div className="flex h-full flex-col gap-5 gap-y-6 pb-2 md:gap-y-10 md:py-6">
            <h3 className="sub-header text-2xl font-semibold capitalize text-dark md:text-3xl">
              Global Missions
            </h3>
            <p className="md:-mt-6">
              Join us to take the 100 nations identified where the need is greatest and rid the poor
              and needy out of the hands of the wicked and deliver them into their inheritance in
              Christ.
            </p>

            <div className="flex items-center gap-5">
              <Link className="btn-primary block w-fit !px-10 py-2" href={'/donate'}>
                Donate
              </Link>
              <a
                className="btn-white block w-fit py-2 ring-textcolor/25"
                href={'/blogs/global-missions-initiative-takes-full-swing-in-uganda-and-ethiopia/'}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="container mt-8 flex h-full max-w-5xl flex-col-reverse justify-center gap-2 md:mt-16 md:grid md:grid-cols-2">
          <div className="flex h-full flex-col gap-5 gap-y-6 pb-2 md:gap-y-10 md:py-6">
            <h3 className="sub-header text-2xl font-semibold capitalize text-dark md:text-3xl">
              Preserve Families
            </h3>
            <p className="md:-mt-6">
              Through your partnership, we will be reaching and providing Food Support, Skill
              Acquisition, Capacity Building and Grants for families in dire need through our Women
              Economic Empowerment Initiatives [WEEI] in over 5 million households globally
            </p>

            <div className="flex items-center gap-5">
              <Link className="btn-primary block w-fit !px-10 py-2" href={'/donate'}>
                Donate
              </Link>
              <a
                className="btn-white block w-fit py-2 ring-textcolor/25"
                href={'/what-we-do/family-strengthen-program'}
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="ml-auto w-full max-w-96">
            <Image
              alt="7 billion campaign"
              className="w-full rounded-md object-cover object-top md:h-auto md:max-w-lg"
              src={indigentChildrenImage}
              width={400}
              height={450}
            />
          </div>
        </div>
      </div>

      <div className="bg-"></div>
    </>
  )
}
