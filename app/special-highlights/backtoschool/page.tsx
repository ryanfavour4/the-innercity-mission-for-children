import React from 'react'
import backToSchoolFLyer from '@/public/assets/images/back-to-school.jpg'
import Image from 'next/image'
import MetaTags from '@/meta'
import DonateSectionV2 from '@/components/donate-component-v2'
import { VideoCard } from '@/components/video-card'
// import { motion } from 'framer-motion'
import VideoPlayer from '@/components/video-player'
import CtaSection from '@/layouts/cta-section'

const blogs = [
  {
    id: 1,
    video: 'https://player.vimeo.com/video/228488335',
    thumbnail:
      'https://i.vimeocdn.com/video/648552735-4ca7d9bee97f9ce787625a41adb1edf7077d66e4a648c3e2eb6785f084cd1eec-d?mw=1080&mh=1080&q=1080',
    title: 'Helping victims of the Boko Haram Insurgency in North East Nigeria',
  },
  {
    id: 2,
    video: 'https://player.vimeo.com/video/231560451',
    thumbnail:
      'https://i.vimeocdn.com/video/788457180-8212e5d706c5a62d36f38b78466ae73a346b23782bbc19d7490f5fba9405b632-d?mw=1080&mh=1080&q=1080',
    title: 'Pastor Amaechi Udeaku shares his passion for Educating needy children',
  },
  {
    id: 3,
    video: 'https://player.vimeo.com/video/228644776',
    thumbnail:
      'https://i.vimeocdn.com/video/648748355-a51a2a26d444a7f3793ba4ead1b2259934e1710dd4526e95fb44d75ac3b59ec5-d?mw=1080&mh=1080&q=1080',
    title: 'Helping Needy Children in Odoragboyejo Community, Western Nigeria',
  },
]
export default function BackToSchoolPage() {
  return (
    <>
      <MetaTags title="Back To School – InnerCity Mission HQ" />
      <div className="relative h-96">
        <Image
          className="h-full w-full bg-cover bg-center object-cover md:aspect-3"
          width={300}
          height={200}
          src={backToSchoolFLyer}
          alt="backToSchoolFLyer"
        />
      </div>

      <div className="bg-white">
        <div className="relative z-10 mx-auto -mt-8 w-11/12 max-w-4xl rounded-t-lg bg-white py-4 pb-1 text-center">
          <h3 className="text-center text-xl font-bold text-primary md:text-2xl">
            Back to School Campaign
          </h3>
        </div>
      </div>
      <div className="bg-white pt-4">
        <div className="wrapper max-w-4xl">
          <p>
            Support the InnerCity Mission’s Back to School Campaign. This is an opportunity for you
            to make a significant impact by sponsoring a child with 100 Espees
            <br />
            <br />
            Your contribution will cover all school supplies for the entire academic year, including
            all three terms. With your support, you can ensure that a child is equipped with
            everything they need to excel in their studies and thrive with confidence
          </p>
        </div>

        <div className="wrapper grid max-w-4xl grid-cols-2 gap-y-8 pt-9 md:grid-cols-3">
          <div className="text-center">
            <h3 className="text-xl font-bold text-primary">Sponsorship</h3>
            <p className="text-sm text-gray-500">100 Espees (₦200,000)</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-primary">School Supplies</h3>
            <p className="text-sm text-gray-500">All terms</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-primary">Academic Year</h3>
            <p className="text-sm text-gray-500">2025-2026</p>
          </div>
        </div>

        <VideoDonate />

        <div className="bg-secondary pb-10 text-textcolor">
          <div className="wrapper grid h-full grid-cols-1 justify-center gap-x-10 gap-y-10 px-3 pt-10 md:min-h-96">
            <h3 className="sub-header max-w-md text-2xl font-semibold before:top-4 md:text-3xl">
              Recent Back To School Stories
            </h3>

            <div className="grid grid-cols-1 gap-3 rounded-2xl bg-light px-2 py-4 md:grid-cols-2 md:px-4 lg:grid-cols-3">
              {blogs.map((blog, idx) => (
                <div
                  key={idx}
                  className="flex w-full cursor-pointer flex-col items-center gap-3 rounded-xl border border-transparent px-2 py-2 hover:border-textcolor/20 hover:bg-secondary/50 hover:shadow md:gap-6"
                >
                  <div className="w-full">
                    <VideoPlayer
                      thumb={blog.thumbnail}
                      src={blog.video}
                      className="w-full md:!h-full"
                    />
                  </div>
                  <h4 className="ellipsis-2 text-lg font-semibold capitalize">{blog.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  )
}

function VideoDonate({}) {
  return (
    <div className="my-6 border-t px-2 py-10">
      <div className="container max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="md:max-w-md">
            <DonateSectionV2 />
          </div>
          <div className="w-full max-w-3xl md:ml-auto">
            <VideoCard
              className=""
              thumbNail="https://i.vimeocdn.com/video/1919716639-ece272ce01e71688bf9f38e8ae005ee05f2016f35127ee072c2af755a29839cd-d?mw=1080&q=1080"
              videoUrl="https://player.vimeo.com/video/1003317911?h=cb2e7c8cf3"
              iframe={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
