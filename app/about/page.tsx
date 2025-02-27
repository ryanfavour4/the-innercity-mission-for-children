import { CrossIcon, GraduationCapIcon } from '@/components/svgs'
import Script from 'next/script'
import React from 'react'

export default function AboutPage() {
  return (
    <div className="bg-light pt-10">
      <div className="wrapper px-3 py-10">
        {/* TWIN COL */}
        <div className="grid h-full grid-cols-1 justify-center gap-5 md:grid-cols-2">
          <div className="flex h-full flex-col justify-between gap-5 pb-8">
            <p className="sub-header">Know about us</p>
            <h3 className="text-2xl font-semibold capitalize leading-8 md:-mt-4 md:text-3xl">
              We are the Inner City Mission for Children
            </h3>
          </div>
          <div className="w-full">
            <p>
              But Jesus said, suffer little children, and forbid them not, to come unto me: for of
              such is the kingdom of heaven
            </p>
            <strong>Matthew 19:14 KJV</strong>
          </div>
        </div>
      </div>
      {/* ABOUT VIDEO */}
      <div className="bg-gradient-to-b from-light to-secondary px-3 py-5 pb-12">
        <iframe
          className="relative mx-auto flex h-[250px] w-full !max-w-4xl flex-col items-center justify-center rounded-lg border-4 border-dashed border-secondary bg-primary md:h-[500px]"
          src="https://player.vimeo.com/video/440604709?h=17c8c981dc"
          data-src="https://player.vimeo.com/video/440604709?h=17c8c981dc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; transcript; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          width="1080"
          height="250"
          allowFullScreen
        >
          <Script src="https://player.vimeo.com/api/player.js"></Script>
        </iframe>
      </div>

      {/* INTRODUCTION BODY SECTION */}
      <div className="wrapper max-w-4xl px-3 py-12">
        <h3 className="text-2xl font-semibold capitalize leading-8 md:-mt-4 md:text-3xl">
          Introduction
        </h3>
        <br />
        <p>
          The InnerCity Mission was birthed in December 2004 after the Founder, Rev Chris Oyakhilome
          (D.Sc., D.Sc., D.D.), the President of LoveWorld Inc, made a profound statement “Every
          Child is your Child”.
          <br />
          <br />
          The InnerCity Mission is a faith-based, Child-Centered, Non-Governmental Organization in
          consultative status with the United Nations Economic and Social Council. We are registered
          in Nigeria with the Corporate Affairs Commission (CAC) Abuja, RC No CAC/IT/NO 41931.
          <br />
          <br />
          Believing in the future of indigent children and taking action to reach and meet their
          needs, is the CORE of our work.
          <br />
          <br />
          Over the years, our programs and interventions, have impacted the lives of over 50 million
          indigent beneficiaries, mostly children around the world in underserved, hard-to-reach
          communities, from one country in 2005, to over 100 countries in 2022.
        </p>
      </div>

      {/* MISSION AND VISION */}
      <div className="bg-secondary px-3 py-12">
        <div className="wrapper grid gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Our Mission</h3>
            <h3 className="text-balance text-xl font-semibold">
              Ensure every child thrives, escapes poverty, & contributes to progress.
            </h3>
            <p>
              To create an environment where every child survives, lives above poverty, and becomes
              an active participant in socio-economic development irrespective of race, color, or
              gender. Through our Education, Food, Livelihood, Healthcare, Advocacy, Shelter, and
              Humanitarian Aid programs, we strive to ensure indigent children and poor families
              succeed in life by providing them with Christ-centered care and sustained solutions to
              issues caused by poverty.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Our Vision</h3>
            <h3 className="text-balance text-xl font-semibold">
              A poverty-free world where every child can thrive.
            </h3>
            <p>
              We envision a world, free of poverty, where every child has equal opportunities to
              thrive and fulfill their God-given potential.
            </p>
          </div>
        </div>
      </div>

      {/* QUOTE BY PASTOR CHRIS */}
      <div className="wrapper max-w-4xl px-3 py-12 text-center">
        <p className="font-semibold italic">
          Remember, every child is your child! Help children, don’t ignore children. They are our
          extension; they are our future. No matter how dirty or untouchable they are, think again.
          You were just that small one day, but you were fortunate to have someone help you. Many of
          these are fortunate to have us if we would only open our hearts, our minds, our eyes and
          ignore them no more. We need to help give them a home, we need to help educate them, we
          need to help clothe them. As small as they are, as needy as they are, as frustrated as
          they are, they have dreams. We can help make those dreams come true!
        </p>
        <br />
        <br />
        <h3 className="text-2xl font-semibold md:text-3xl">
          Founder, The InnerCity Mission: Rev Dr. Chris Oyakhilome (D.Sc., D.Sc., D.D.) 2004
        </h3>
      </div>

      {/* MISSION AND VISION */}
      <div className="bg-secondary px-3 py-12">
        <div className="wrapper">
          <h3 className="text-2xl font-semibold capitalize md:text-3xl">Our Core Values</h3>
          <br />
          <br />
          <div className="grid-cols-2 gap-12 px-3 md:grid md:border-l-2 md:border-textcolor md:pl-6">
            {/* VALUE */}
            <div className="flex items-start gap-2">
              <div className="w-fit rounded-sm bg-textcolor p-1">
                <CrossIcon className="text-base text-secondary" />
              </div>
              <div className="">
                <h4 className="mb-2 text-xl font-semibold">We are a People of Faith</h4>
                <p>
                  Our Christian faith compels us to respond to the needs of orphaned, vulnerable,
                  and disadvantaged children. We believe that God would transform their lives in
                  partnership with our actions.
                </p>
              </div>
            </div>

            {/* VALUE */}
            <div className="flex items-start gap-2">
              <div className="w-fit rounded-sm bg-textcolor p-1">
                <CrossIcon className="text-base text-secondary" />
              </div>
              <div className="">
                <h4 className="mb-2 text-xl font-semibold">We are a Community of Hope</h4>
                <p>
                  We are confident of our expectations that each child we reach will rise to their
                  full potential and realize God’s purpose in their lives. This inspires and drives
                  us daily to bring hope to children and by extension, their families, through our
                  impactful interventions.
                </p>
              </div>
            </div>

            {/* VALUE */}
            <div className="flex items-start gap-2">
              <div className="w-fit rounded-sm bg-textcolor p-1">
                <CrossIcon className="text-base text-secondary" />
              </div>
              <div className="">
                <h4 className="mb-2 text-xl font-semibold">We are Accountable</h4>
                <p>
                  We account for our activities, accept responsibility for them, and transparently
                  share results.
                </p>
              </div>
            </div>

            {/* VALUE */}
            <div className="flex items-start gap-2">
              <div className="w-fit rounded-sm bg-textcolor p-1">
                <CrossIcon className="text-base text-secondary" />
              </div>
              <div className="">
                <h4 className="mb-2 text-xl font-semibold">We are Servants of Love:</h4>
                <p>
                  We love all children regardless of their color, race, religion, economic status,
                  and gender. We believe that to bring about the change we seek, we must demonstrate
                  unconditional love.
                </p>
              </div>
            </div>

            {/* VALUE */}
            <div className="flex items-start gap-2">
              <div className="w-fit rounded-sm bg-textcolor p-1">
                <CrossIcon className="text-base text-secondary" />
              </div>
              <div className="">
                <h4 className="mb-2 text-xl font-semibold">We build Authentic Relationships</h4>
                <p>
                  We are dedicated to developing genuine partnerships and relationships based on
                  trust.
                </p>
              </div>
            </div>

            {/* VALUE */}
            <div className="flex items-start gap-2">
              <div className="w-fit rounded-sm bg-textcolor p-1">
                <CrossIcon className="text-base text-secondary" />
              </div>
              <div className="">
                <h4 className="mb-2 text-xl font-semibold">We model Respect and Integrity</h4>
                <p>We value each individual and model honesty in all Donor interactions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR PROGRAMMATIC AREAS */}
      <div className="wrapper py-16">
        <h3 className="text-center text-2xl font-semibold capitalize leading-8 md:-mt-4 md:text-3xl">
          Our programmatic areas
        </h3>

        <div className="grid grid-cols-3">
          <div className="flex gap-2">
            <GraduationCapIcon />
            <p>Lorem infn on fodoedn onf dvpin</p>
          </div>
        </div>
      </div>
    </div>
  )
}
