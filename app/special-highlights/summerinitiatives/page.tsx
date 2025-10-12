'use client'
import { StickyScroll } from '@/components/sticky-scroll'
import Image from 'next/image'
import React from 'react'
import init1 from '@/public/assets/images/initiative1.png'
import init2 from '@/public/assets/images/initiative2.png'
import init3 from '@/public/assets/images/initiative3.png'
import init4 from '@/public/assets/images/initiative4.jpeg'
import InitiativeHero from '@/layouts/initiative-hero-section'
import DonateSection from '@/components/donate-component-v2'
import { VideoCard } from '@/components/video-card'

const content = [
  {
    title: 'Community Summer School',
    description:
      'We are turning neighborhoods into hubs of hope and learning!While others enjoy summer break, indigent children often face learning loss. Our Community Summer Schools bring informal education, mentorship,and creative skill-building to underserved neighborhoods. Every center becomes a safe for learning and fun. Join us to turn inner-cites to Schools of Hope',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={init1}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'GO2INC Light Up Children Crusades',
    description:
      'Lighting up hearts, one community at a time.These gospel outreaches are designed to reach vulnerable children and teenagers in villages, rural areas, slums, and IDP/Refugee camps and everywhere they can be found . Through fun and interactive activities, we preach the gospel while meeting their immediate needs such as providing free meals, free school supplies distribution, free care kits and more. Make a Difference Today!',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={init2}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Summer Meal Program',
    description:
      'Because no child should go hungry during the holidays.For many indigent children, summer break brings hunger. With school meals unavailable, children who rely on daily school feeding face increased vulnerability, while families already struggling experience greater hardship. Through Summer Meal Program, we set up pop-up feeding sites in identified underserved communities to provide nutritious meals with love. You can make a difference by Sponsoring a meal or a Feeding site.',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={init3}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Empower Families Initiative',
    description:
      'Families: A Child’s First Circle of Protection. At the InnerCity Mission, we believe that strong families build strong children. Families are a child’s first circle of protection, providing the love, care, and guidance that help them thrive. Through our Empower Families Initiative, we reach vulnerable families with Food Parcels and Empowerment resources, providing them with the support they require to sustain their households Empower a Family this summer.',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={init4}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
]

function SummerInitiative() {
  return (
    <div className="bg-white">
      <InitiativeHero />
      <h1 className="mb-10 mt-10 text-center text-3xl font-bold">
        — This Summer, Be the Change a Child Needs —
      </h1>
      <StickyScroll content={content} />
      <div className="bg-white py-14">
        <div className="container">
          <div className="gap-6 md:grid md:grid-cols-12">
            <div className="md:col-span-5">
              <DonateSection />
            </div>
            <div className="h-96 md:col-span-7">
              <VideoCard
                className="h-96"
                videoUrl="https://player.vimeo.com/video/1113227827?h=9ca3e574ed&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                iframe={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummerInitiative
