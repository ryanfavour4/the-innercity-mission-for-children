import HeroSection from '@/layouts/hero-section'
import '@/styles/bg.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="bg-grey-white">
        {/* HERO BG AREA */}
        <HeroSection />
        <div className="">
          <div className="wrapper grid grid-cols-1 gap-7 p-6 pt-10 md:grid-cols-2 md:gap-0 md:pt-20">
            <div className="flex flex-col justify-between gap-4 md:pl-6">
              <div className="flex flex-col gap-4 md:gap-7">
                <p className="sub-header font-semibold uppercase md:text-lg">Support our project</p>
                <p className="text-2xl font-bold md:text-4xl">5 BILLION MEALS CAMPAIGN</p>
                <p className="md:text-lg">
                  We are excited to announce our "5 Billion Meals Campaign". This is a historic
                  effort of the InnerCity Mission for Children under the Chris Oyakhilome Foundation
                  International (COFI) to provide Meals for millions of children and households who
                  are in desperate need of food around the world.
                </p>
              </div>
              <Link className="btn-primary inline-block w-fit" href={'/'}>
                Learn More
              </Link>
            </div>
            <div className="grid place-items-center">
              <Image
                src="/assets/images/5billion-meals-campaign.jpg"
                alt="5billion-meals-campaign.jpg"
                className="w-full rounded-lg object-cover md:h-[400px] md:w-[400px] "
                width={450}
                height={600}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
