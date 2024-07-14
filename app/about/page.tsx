import React from 'react'
import Image from 'next/image'
import { FacebookIcon } from '@/components/svgs'
import { LinkedlnIcon } from '@/components/svgs'
import { TwitterIcon } from '@/components/svgs'
import { executive, teams } from '@/constant/teams'

export default function AboutUs() {
  return (
    <div className="">
      {/* TOP SECTION */}
      <div className="wrapper p-6 py-10 pb-40 md:pb-56 md:pt-16">
        <p className="sub-header font-semibold uppercase md:text-lg">KNOW ABOUT US</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <p className="text-2xl font-bold md:text-4xl">
            We are the Inner city Mission for Children
          </p>
          <div className="">
            <p className="pb-2 pt-2 text-sm font-semibold md:text-base">
              But Jesus said, suffer little children, and forbid them not, to come unto me: for of
              such is the kingdom of heaven
            </p>
            <p className="flex items-end justify-end pt-2 text-right text-xs font-extrabold md:block md:text-sm">
              Matthew 19:14 KJV
            </p>
          </div>
        </div>
      </div>

      <div className="h-80 w-full bg-secondary">
        <div className="wrapper relative">
          {/* overlay */}
          <div className="absolute -top-1/3 z-10 h-96 w-full rounded-lg bg-black/50" />
          <Image
            width={800}
            height={280}
            className="absolute -top-1/3 h-96 w-full rounded-lg object-cover shadow"
            src="/assets/images/about-us-top-banner.jpg"
            alt="about-us-top-banner.jpg"
          />
        </div>
      </div>

      {/* INTRODUCTION */}
      <div className="">
        <div className="wrapper p-6 py-12 md:pt-16">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Introduction</h2>

          <article className="flex flex-col gap-6">
            <p>
              The InnerCity Mission was birthed in December 2004 after the Founder, Rev Chris
              Oyakhilome (D.Sc., D.Sc., D.D.), the President of LoveWorld Inc, made a profound
              statement “Every Child is your Child”.
            </p>

            <p>
              The InnerCity Mission is a faith-based, Child-Centered, Non-Governmental Organization
              in consultative status with the United Nations Economic and Social Council. We are
              registered in Nigeria with the Corporate Affairs Commission (CAC) Abuja, RC No
              CAC/IT/NO 41931.
            </p>

            <p>
              Believing in the future of indigent children and taking action to reach and meet their
              needs, is the CORE of our work.
            </p>

            <p>
              Over the years, our programs and interventions, have impacted the lives of over 50
              million indigent beneficiaries, mostly children around the world in underserved,
              hard-to-reach communities, from one country in 2005, to over 100 countries in 2022.
            </p>
          </article>
        </div>
      </div>

      {/* OUR MISSION / VISION */}
      <div className="bg-secondary">
        <div className="wrapper grid grid-cols-1 gap-8 p-6 py-12 md:grid-cols-2 md:pt-16">
          <div className="flex flex-col gap-1">
            <h4 className="pb-3 text-sm font-bold uppercase tracking-wide">OUR MISSION</h4>
            <h2 className="mb-2 text-2xl font-bold tracking-wider">
              Ensure every child thrives, escapes poverty, & contributes to progress.
            </h2>
            <p>
              To create an environment where every child survives, lives above poverty, and becomes
              an active participant in socio-economic development irrespective of race, color, or
              gender. Through our Education, Food, Livelihood, Healthcare, Advocacy, Shelter, and
              Humanitarian Aid programs, we strive to ensure indigent children and poor families
              succeed in life by providing them with Christ-centered care and sustained solutions to
              issues caused by poverty.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="pb-3 text-sm font-bold uppercase tracking-wide">our Vision</h4>
            <h2 className="mb-2 text-2xl font-bold tracking-wider">
              A poverty-free world where every child can thrive.
            </h2>
            <p>
              We envision a world, free of poverty, where every child has equal opportunities to
              thrive and fulfill their God-given potential.
            </p>
          </div>
        </div>
      </div>

      {/* OUR HISTORY */}
      <div className="p-4 md:pb-10 md:pl-36 md:pr-36 md:pt-10">
        <p className="text-gray text-center text-xs font-bold italic md:text-sm">
          Remember, every child is your child! Help children, don’t ignore children. They are our
          extension; they are our future. No matter how dirty or untouchable they are, think again.
          You were just that small one day, but you were fortunate to have someone help you. Many of
          these are fortunate to have us if we would only open our hearts, our minds, our eyes and
          ignore them no more. We need to help give them a home, we need to help educate them, we
          need to help clothe them. As small as they are, as needy as they are, as frustrated as
          they are, they have dreams. We can help make those dreams come true!
        </p>
        <p className="text-grey pt-6 text-center text-sm font-bold md:text-lg">
          Founder, The InnerCity Mission: Rev Dr. Chris Oyakhilome (D.Sc., D.Sc., D.D.) 2004
        </p>
      </div>

      {/* OUR CORE VALUES */}
      <div className="bg-secondary">
        <div className="wrapper p-6 py-10">
          <h1 className="mb-10 text-2xl font-bold md:text-3xl">Our core values</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
            <div>
              <div className="flex items-start justify-normal gap-3 align-top">
                <Image
                  width={100}
                  height={100}
                  className="w-6"
                  src="/assets/icons/core-values-wave-icon.png"
                  alt=""
                />
                <div>
                  <p className="font-bold">We are a people of Faith</p>
                  <p className="text-gray">
                    Our Christian faith compels us to respond to the needs of orphaned, vulnerable,
                    and disadvantaged children. We believe that God would transform their lives in
                    partnership with our actions.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start justify-normal gap-3 align-top">
                <Image
                  width={100}
                  height={100}
                  className="w-6"
                  src="/assets/icons/core-values-wave-icon.png"
                  alt=""
                />
                <div>
                  <p className="font-bold">We are a community of Hope</p>
                  <p className="text-gray">
                    We are confident of our expectations that each child we reach will rise to their
                    full potential and realize God’s purpose in their lives. This inspires and
                    drives us daily to bring hope to children and by extension, their families,
                    through our impactful interventions.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start justify-normal gap-3 align-top">
                <Image
                  width={100}
                  height={100}
                  className="w-6"
                  src="/assets/icons/core-values-wave-icon.png"
                  alt=""
                />
                <div>
                  <p className="font-bold">We are Accountable</p>
                  <p className="text-gray">
                    We account for our activities, accept responsibility for them, and transparently
                    share results.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start justify-normal gap-3 align-top">
                <Image
                  width={100}
                  height={100}
                  className="w-6"
                  src="/assets/icons/core-values-wave-icon.png"
                  alt=""
                />
                <div>
                  <p className="font-bold">We are Servants of Love</p>
                  <p className="text-gray">
                    We love all children regardless of their color, race, religion, economic status,
                    and gender. We believe that to bring about the change we seek, we must
                    demonstrate unconditional love.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start justify-normal gap-3 align-top">
                <Image
                  width={100}
                  height={100}
                  className="w-6"
                  src="/assets/icons/core-values-wave-icon.png"
                  alt=""
                />
                <div>
                  <p className="font-bold">We build Authentic Relationships</p>
                  <p className="text-gray">
                    We are dedicated to developing genuine partnerships and relationships based on
                    trust.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start justify-normal gap-3 align-top">
                <Image
                  width={100}
                  height={100}
                  className="w-6"
                  src="/assets/icons/core-values-wave-icon.png"
                  alt=""
                />
                <div>
                  <p className="font-bold">We model Respect and Integrity</p>
                  <p className="text-gray">
                    We value each individual and model honesty in all Donor interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR PROGRAMMATIC AREAS */}
      <div className="flex flex-col items-center justify-center pb-20">
        <h1 className="p-7 text-3xl font-bold">Our programmatic areas</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-8">
          <div className="flex items-center gap-2 p-4 md:pl-16 md:pr-16">
            <Image
              width={100}
              height={100}
              className="w-10 rounded-md bg-primary p-2"
              src="/assets/icons/education.png"
              alt=""
            />
            <p className="text-xs font-bold md:text-sm">Education</p>
          </div>
          <div className="flex items-center gap-2 p-4 md:pl-16 md:pr-16">
            <Image
              width={100}
              height={100}
              className="w-10 rounded-md bg-primary p-2"
              src="/assets/icons/education.png"
              alt=""
            />
            <p className="text-xs font-bold md:text-sm">Feeding</p>
          </div>
          <div className="flex items-center gap-2 p-4 md:pl-16 md:pr-16">
            <Image
              width={100}
              height={100}
              className="w-10 rounded-md bg-primary p-2"
              src="/assets/icons/education.png"
              alt=""
            />
            <p className="text-xs font-bold md:text-sm">Family Strenghtening and Livelihood</p>
          </div>
          <div className="flex items-center gap-2 p-4 md:pl-16 md:pr-16">
            <Image
              width={100}
              height={100}
              className="w-10 rounded-md bg-primary p-2"
              src="/assets/icons/education.png"
              alt=""
            />
            <p className="text-xs font-bold md:text-sm">Shelter</p>
          </div>
          <div className="flex items-center gap-2 p-4 md:pl-16 md:pr-16">
            <Image
              width={100}
              height={100}
              className="w-10 rounded-md bg-primary p-2"
              src="/assets/icons/education.png"
              alt=""
            />
            <p className="text-xs font-bold md:text-sm">Humanitarian Response</p>
          </div>
          <div className="flex items-center gap-2 p-4 md:pl-16 md:pr-16">
            <Image
              width={100}
              height={100}
              className="w-10 rounded-md bg-primary p-2"
              src="/assets/icons/education.png"
              alt=""
            />
            <p className="text-xs font-bold md:text-sm">Health and Nutrition</p>
          </div>
          <div className="flex items-center gap-2 p-4 md:pl-16 md:pr-16">
            <Image
              width={100}
              height={100}
              className="w-10 rounded-md bg-primary p-2"
              src="/assets/icons/education.png"
              alt=""
            />
            <p className="text-xs font-bold md:text-sm">Child Safety and Advocacy</p>
          </div>
          <div className="flex items-center gap-2 p-4 md:pl-16 md:pr-16">
            <Image
              width={100}
              height={100}
              className="w-10 rounded-md bg-primary p-2"
              src="/assets/icons/education.png"
              alt=""
            />
            <p className="text-xs font-bold md:text-sm">Faith and Development</p>
          </div>
        </div>
      </div>

      {/* OUR TEAM */}
      <div>
        <div className="wrapper p-6">
          <p className="sub-header font-semibold uppercase md:text-lg">MEET OUT TEAM</p>
          <p className="text-2xl font-bold md:text-4xl">Board of Directors</p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-12 md:grid-cols-4">
            {teams.map((team) => (
              <div key={team.name} className="flex flex-col items-center gap-3 text-center">
                <Image
                  width={100}
                  height={100}
                  alt="team"
                  className="h-50 w-44 rounded-lg border border-primary object-cover md:h-60 md:w-52"
                  src={team.photo}
                />
                <p className="text-lg font-bold">{team.name}</p>
                <p className="text-sm">{team.role}</p>
                <div className="flex items-center gap-6 text-greytext">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon className="h-9 w-9 text-3xl" />
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon className="h-9 w-9 text-3xl" />
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <LinkedlnIcon className="h-9 w-9 text-3xl" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EXECUTIVE DIRECTOR */}
      <br />
      <br />
      <div className="wrapper p-6 pb-10">
        <h1 className="mb-8 text-2xl font-bold md:text-4xl">Executive director</h1>
        <div className="flex w-fit flex-col items-center gap-3 text-center">
          <Image
            width={100}
            height={100}
            alt="team"
            className="h-50 w-44 rounded-lg border border-primary object-cover shadow-md md:h-60 md:w-52"
            src={executive.photo}
          />
          <p className="text-lg font-bold">{executive.name}</p>
          <p className="text-sm">{executive.title}</p>
          <div className="flex items-center gap-6 text-greytext">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="h-9 w-9 text-3xl" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className="h-9 w-9 text-3xl" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <LinkedlnIcon className="h-9 w-9 text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
