import {
  BuildingOutlineIcon,
  GiveLeafFillIcon,
  HandShakeOutlineIcon,
  LeafBudOutlineIcon,
  LoveFlowerMoneyOutlineIcon,
  PeopleGroupFillIcon,
} from '@/components/svgs'
import CtaSection from '@/layouts/cta-section'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
      <section className="bg-light py-4">
        <div className="bg-cooperate-partnership wrapper flex min-h-96 flex-col items-start gap-5 rounded-2xl border-2 bg-cover bg-center px-6 py-16 text-light md:rounded-3xl md:px-16 md:py-20 md:pb-32">
          <small className="rounded-full border-2 bg-primary/25 p-2 px-4">
            Become a Corporate Partner
          </small>

          <h1 className="text-3xl font-extrabold md:text-6xl">Corporate Partnership</h1>
          <p className="md:max-w-xl">
            Together, we can grow your business and help children and families in need. We work with
            companies of all sizes to create partnership solutions that align with our programs and
            interventions.
          </p>
          <div className="mt-6 flex w-full flex-wrap items-center gap-2 gap-y-3">
            <Link
              href="/donate"
              className="btn-white flex items-center justify-center gap-2.5 px-4 py-2 text-base ring-light/50 md:w-fit"
            >
              <GiveLeafFillIcon className="size-5 pl-px" />
              <p>Make A Donation</p>
            </Link>
            <Link
              href={'https://gems.theinnercitymission.ngo/home'}
              className="btn flex items-center justify-center gap-2 border px-8 py-2 text-base ring-light/50 md:w-fit"
            >
              <PeopleGroupFillIcon className="size-5 pl-px" />
              <p>Partner With Us</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative bg-light">
        <div className="container flex max-w-2xl flex-col items-center justify-center gap-5 py-10 pb-20 text-center">
          <HandShakeOutlineIcon className="absolute bottom-1 right-3/4 text-primary md:top-3/4" />
          <LeafBudOutlineIcon className="absolute left-3/4 top-3 text-primary md:bottom-1/2" />
          <LoveFlowerMoneyOutlineIcon className="absolute left-[5%] top-3 text-primary" />
          <BuildingOutlineIcon className="absolute -bottom-3 right-[25%] text-primary" />
          <h3 className="text-xl font-extrabold md:text-2xl">Why Partner With Us</h3>

          <p className="text-dark/75">
            Corporate Partnership with the InnerCity Mission is a mutually beneficial relationship:
            this means, funding for us to fight poverty, and for you our partner, it means the
            opportunity to make a real social impact, drive customer and staff loyalty, strengthen
            the brand purpose and increase market outreach.
          </p>
        </div>
      </section>
      <CtaSection />
    </>
  )
}
