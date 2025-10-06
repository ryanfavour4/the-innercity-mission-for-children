import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import fiveBmcImage from '@/public/assets/images/bags-of-hope.png'

export default function BillionMealCampaignSection() {
  return (
    <div className="bg-light py-10">
      <div className="wrapper border-y border-textcolor/25 px-3 py-10">
        {/* TWIN COL */}
        <div className="grid h-full grid-cols-1 justify-center gap-5 md:grid-cols-2 md:gap-10">
          <div className="flex h-full flex-col justify-between gap-5 pb-8 md:py-10">
            <h3 className="sub-header text-2xl font-semibold capitalize md:text-3xl">
              Bags Of Hope
            </h3>
            <p className="md:-mt-14">
              is a heartfelt initiative dedicated to supporting indigent families by providing
              essential food items such as rice, beans, garri, and other staples. Each bag is more
              than just a meal—it’s a symbol of care, compassion, and community. Through this
              effort, we aim to bring hope and relief to families facing food insecurity, one bag at
              a time.
            </p>
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
              className="w-full rounded-md object-cover object-top md:ml-auto md:aspect-[1.2] md:max-w-lg"
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
