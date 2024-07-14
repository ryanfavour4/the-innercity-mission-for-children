'use client'
import TitleCase from '@/components/custom/title-case'
import { ArrowRightMiniIcon } from '@/components/svgs'
import { blogs } from '@/constant/blogs'
import HeroSection from '@/layouts/hero-section'
import { getReadableDate } from '@/utils/format-date'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Home() {
  return (
    <>
      <main className="bg-light">
        {/* HERO BG AREA */}
        <HeroSection />
        <FiveBillionMealCampaign />
        <StatsCards />
        <AdvertBanner />
        <FundRaiseWithUs />
        <MoreProjects />
        <OurBlogs />
        <CtaSection />
        <Events />
      </main>
    </>
  )
}

function FiveBillionMealCampaign() {
  return (
    <>
      <div className="">
        <div className="wrapper grid grid-cols-1 gap-7 p-6 pt-10 md:grid-cols-2 md:gap-0 md:pt-20">
          <div className="flex flex-col justify-between gap-4 md:pl-6">
            <div className="flex flex-col gap-4 md:gap-7">
              <p className="sub-header font-semibold uppercase md:text-lg">Support our project</p>
              <p className="text-2xl font-bold md:text-4xl">5 BILLION MEALS CAMPAIGN</p>
              <p className="md:text-lg">
                We are excited to announce our "5 Billion Meals Campaign". This is a historic effort
                of the InnerCity Mission for Children under the Chris Oyakhilome Foundation
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
              className="w-full rounded-lg object-cover md:h-[400px] md:w-[400px]"
              width={450}
              height={600}
            />
          </div>
        </div>
      </div>
      <hr className="wrapper my-4 border-greytext/30" />
    </>
  )
}

function StatsCards() {
  return (
    <>
      <div className="wrapper grid grid-cols-2 gap-4 py-10 md:grid-cols-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-bold">100+</p>
          <p className="text-center text-sm">Volunteers</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-bold">1.1B+</p>
          <p className="text-center text-sm">Meals Served</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-bold">1.1M+</p>
          <p className="text-center text-sm">House Holds Reached</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-bold">100+</p>
          <p className="text-center text-sm">Countries</p>
        </div>
      </div>
    </>
  )
}

function AdvertBanner() {
  return (
    <div className="bg-fade-blue py-4">
      <div className="wrapper grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-3">
          <h3 className="text-3xl font-bold">Join us to build schools.</h3>

          <p className="leading-relaxed">
            The Inner City Mission for Children is committed to providing education to children in
            undeserved communities. Our mission is straightforward - to build schools that will be
            beacons of hope and knowledge for future generations. By supporting us, you are
            investing in the future of many young minds. Together, we can create a brighter tomorrow
            where every child has access to quality education. Join us today in transforming lives
            through education.
          </p>

          <Link className="flex items-center gap-2 font-semibold underline" href={'/'}>
            <p>Sponsor Today</p>
            <ArrowRightMiniIcon />.
          </Link>
        </div>
        <div className="">
          <video
            crossOrigin=""
            playsInline
            className="h-[400px] w-full rounded-lg object-cover"
            poster="/assets/images/building-schools-thumbnail.jpg"
            controls
            src="https://videos.pexels.com/video-files/25682949/11903757_2560_1440_30fps.mp4"
            preload="metadata"
          >
            <track kind="metadata" label="cuepoints" data-removeondestroy="" />
          </video>
        </div>
      </div>
    </div>
  )
}

function FundRaiseWithUs() {
  return (
    <>
      <div className="">
        <div className="wrapper grid grid-cols-1 gap-7 p-6 pt-10 md:grid-cols-2 md:gap-0 md:pt-20">
          <div className="flex flex-col justify-between gap-4 md:pl-6">
            <div className="flex flex-col gap-4 md:gap-7">
              <p className="sub-header font-semibold uppercase md:text-lg">Join our Fundraiser</p>
              <p className="text-2xl font-bold md:text-4xl">Fund-raise With Us</p>
              <p className="md:text-lg">
                By choosing to take on the role of a fundraiser, you are stepping into a position of
                great influence and impact in the lives of underprivileged children. Through your
                dedicated efforts and contributions, you will play a significant part in enhancing
                their opportunities for accessing top-notch education, ultimately equipping them
                with the tools and empowerment needed to break free from the vicious cycle of
                poverty. Remember always that Every Child is Your Child, and your involvement can
                make a world of difference in shaping a brighter future for these deserving
                individuals.
              </p>
            </div>
            <Link
              className="btn-primary inline-block w-fit"
              href={'/https://fundraise.theinnercitymission.ngo/'}
            >
              Learn More
            </Link>
          </div>
          <div className="grid place-items-center">
            <Image
              src="/assets/images/fundraiser-image.jpg"
              alt="fundraiser-image.jpg"
              className="h-[380px] w-full rounded-lg object-cover md:h-full md:w-[450px] "
              width={450}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  )
}

function MoreProjects() {
  return (
    <div className="">
      <div className="wrapper p-6 py-12 md:pt-20">
        <div className="mb-12 flex max-w-[500px] flex-col gap-4 md:gap-7">
          <p className="sub-header font-semibold uppercase md:text-lg">MORE OF OUR projects</p>
          <p className="text-2xl font-bold md:text-4xl">
            We are creating a place where children with special needs can thrive
          </p>
        </div>

        <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2">
          <div className="bg-volunteer-with-us flex h-full max-w-[600px] flex-col gap-7 rounded-xl bg-dark/50 px-4 py-5 text-light md:px-10 md:py-8">
            <h3 className="text-2xl font-semibold">Volunteer With Us</h3>
            <p className="leading-relaxed">
              Join the Humanitarian Volunteer Network (HVN) to make a tangible impact on the lives
              of indigent children and families in need. Through our Sponsor a Child's Education
              (SP.A.C.E) initiative, you can help provide quality education to indigent children.
            </p>
            <Link className="btn-white inline-block w-fit" href={'/volunteer'}>
              Learn More
            </Link>
          </div>

          <div className="bg-give-a-meal-logo flex max-w-[600px] flex-col gap-7 rounded-xl bg-dark/50 bg-contain bg-center px-4 py-5 text-light md:px-10 md:py-8">
            <h3 className="text-2xl font-semibold">Give A Meal App</h3>
            <p className="leading-relaxed">
              The “Give a Meal” app is the InnerCity Mission's response to global hunger Using this
              app enables you to instantly sponsor meals on the go and provide food assistance for
              hungry children and families in countries where we reach. With only $1 you can give a
              meal today! Download The Give A Meal App on{' '}
              <a
                href="http://"
                className="inline-flex items-center gap-1 text-lg font-bold underline"
                target="_blank"
              >
                <span>Google PlayStore</span>
                <img width={25} height={25} src="/assets/icons/google-playstore-logo.png" />
              </a>{' '}
              or{' '}
              <a
                href="http://"
                className="inline-flex items-center gap-1 text-lg font-bold underline"
                target="_blank"
              >
                <span>Loveworld AppStore</span>
                <img width={30} height={30} src="/assets/icons/love-world-app-store-logo.png" />
              </a>
            </p>
            <Link className="btn-white inline-block w-fit" href={'/volunteer'}>
              Donate Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function OurBlogs() {
  const navigate = useRouter()

  return (
    <>
      <div className="bg-fade-blue py-6">
        <div className="wrapper grid-cols-3 md:py-6">
          <div className="mb-12 flex max-w-[500px] flex-col gap-4 px-6 md:gap-7">
            <p className="sub-header font-semibold uppercase md:text-lg">Our Blogs</p>
            <p className="text-2xl font-bold md:text-4xl">See recent blogs and stories</p>
            <p className="font-bold text-greytext">Today: {getReadableDate(new Date())}</p>
          </div>

          <div className="col-span-2 flex flex-col gap-5 rounded-lg bg-white px-3 py-4 md:px-6 md:py-8">
            {blogs.map((blog) => (
              <React.Fragment key={blog.id}>
                <Link
                  href={`/${blog._id.$oid}`}
                  className="flex flex-col gap-6 rounded-lg hover:bg-grey-white/85 hover:shadow-sm md:flex-row"
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    className="h-60 w-full rounded-lg object-cover md:h-44 md:w-64"
                    width={265}
                    height={180}
                  />
                  <span className="flex flex-col justify-between gap-3 py-2 md:gap-0">
                    <TitleCase className="ellipsis text-lg font-bold">{blog.title}</TitleCase>
                    <p className="ellipsis-3">{blog.body}</p>
                    <button
                      onClick={() => navigate.push(`/${blog._id.$oid}`)}
                      className="w-fit font-semibold underline hover:tracking-wider hover:text-primary"
                    >
                      Read More
                    </button>
                  </span>
                </Link>
                <hr />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function CtaSection() {
  return (
    <div className="py-8">
      <div className="wrapper bg-cta-section flex h-96 flex-col items-center justify-center gap-10 bg-center text-white md:rounded-xl">
        <h3 className="text-center text-3xl font-bold tracking-wide md:text-4xl">
          Every Child is your Child!
        </h3>

        <div className="flex flex-row items-center gap-4 md:flex-row md:gap-8">
          <Link
            className="btn-primary inline-block w-fit"
            href={'/https://fundraise.theinnercitymission.ngo/'}
          >
            Join as fundraiser
          </Link>
          <Link className="btn-white inline-block w-fit" href={'/donate'}>
            Donate
          </Link>
        </div>
      </div>
    </div>
  )
}

function Events() {
  return (
    <div>
      <div className="wrapper py-6 pb-8">
        <div className="flex items-center gap-4 py-5">
          <h4 className="whitespace-nowrap text-3xl font-bold">Upcoming Events</h4>
          <hr className="w-full" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* event card */}
          <div className="flex gap-6 rounded-lg bg-primary p-6 text-white">
            <div className="px-4 md:px-8">
              <h3 className="text-3xl font-bold">05</h3>
              <p>Apr</p>
            </div>
            <div className="flex w-full flex-col gap-5">
              <div className="flex items-center gap-4">
                <p className="whitespace-nowrap">Next Events</p>{' '}
                <hr className="w-full max-w-40 border-2" />
              </div>
              <div className="flex w-full justify-between gap-5 text-xl">
                <p className="text-2xl font-semibold">
                  A day with our wonderful children A day with our wonderful children
                </p>
                <Link
                  href={'/'}
                  className="flex h-8 w-full max-w-8 items-center justify-center rounded-full bg-light"
                >
                  <ArrowRightMiniIcon className="w-5 text-dark" />
                </Link>
              </div>
            </div>
          </div>

          {/* event card */}
          <div className="flex gap-6 rounded-lg bg-primary p-6 text-white">
            <div className="px-4 md:px-8">
              <h3 className="text-3xl font-bold">05</h3>
              <p>Apr</p>
            </div>
            <div className="flex w-full flex-col gap-5">
              <div className="flex items-center gap-4">
                <p className="whitespace-nowrap">Next Events</p>{' '}
                <hr className="w-full max-w-40 border-2" />
              </div>
              <div className="flex w-full justify-between gap-5 text-xl">
                <p className="text-2xl font-semibold">
                  A day with our wonderful children A day with our wonderful children
                </p>
                <Link
                  href={'/'}
                  className="flex h-8 w-full max-w-8 items-center justify-center rounded-full bg-light"
                >
                  <ArrowRightMiniIcon className="w-5 text-dark" />
                </Link>
              </div>
            </div>
          </div>

          {/* event card */}
          <div className="flex gap-6 rounded-lg bg-primary p-6 text-white">
            <div className="px-4 md:px-8">
              <h3 className="text-3xl font-bold">05</h3>
              <p>Apr</p>
            </div>
            <div className="flex w-full flex-col gap-5">
              <div className="flex items-center gap-4">
                <p className="whitespace-nowrap">Next Events</p>{' '}
                <hr className="w-full max-w-40 border-2" />
              </div>
              <div className="flex w-full justify-between gap-5 text-xl">
                <p className="text-2xl font-semibold">
                  A day with our wonderful children A day with our wonderful children
                </p>
                <Link
                  href={'/'}
                  className="flex h-8 w-full max-w-8 items-center justify-center rounded-full bg-light"
                >
                  <ArrowRightMiniIcon className="w-5 text-dark" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
