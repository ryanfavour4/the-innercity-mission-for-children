import React from 'react'
import backToSchoolFLyer from '@/public/assets/images/back-to-school.jpg'
import Image from 'next/image'
import MetaTags from '@/meta'
import DonateSectionV2 from '@/components/donate-component-v2'
import { VideoCard } from '@/components/video-card'
// import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon } from '@/components/svgs'
import { formatDate } from '@/utils/format-date'
import blog1Img from '@/public/assets/images/GAM-APP2-1.jpg'
import blog2Img from '@/public/assets/images/WhatsApp-Image-2024-05-02-at-09.45.52_dd992226-1.jpg'
import blog3Img from '@/public/assets/images/WhatsApp-Image-2024-04-29-at-11.11.30_1308a2c2.jpg'
import VideoPlayer from '@/components/video-player'

const blogs = [
  {
    id: 1,
    image: blog1Img,
    title: 'Celebrate Giving with the Give A Meal App',
    body: 'Looking for a fun and meaningful way to spend time with your loved ones? Why not host a giving party with the Give A Meal App! Whether you prefer a virtual gathering or an onsite celebration, this cre...',
  },
  {
    id: 2,
    image: blog2Img,
    title: 'HARVESTING HOPE: HOW HOME GARDENS EMPOWER VULNERABLE WOMEN AND FAMILIES IN ESWATINI',
    body: 'Through our Women Economic Empowerment Initiative, we are committed to uplifting vulnerable women like Mrs. Sihlongonyane, who, due to financial constraints, are often forced to bear the primary respo...',
  },
  {
    id: 3,
    image: blog3Img,
    title: 'Celebrating the Groundbreaking Ceremony for our 15th 100% Free School in Malawi',
    body: 'Just weeks after holding a groundbreaking ceremony for our 14th school in Liberia, we gathered once again on the 20th of April in the beautiful village of Chisikwa, Nsudwe community, Lilongwe, Malawi,...',
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
        <div className="relative z-10 mx-auto -mt-10 w-11/12 max-w-4xl rounded-t-lg bg-white py-4 text-center">
          <h3 className="text-center text-xl font-bold text-primary md:text-2xl">
            Back to School Campaign
          </h3>
        </div>
      </div>
      <div className="bg-white py-8">
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

        <div className="wrapper grid max-w-4xl grid-cols-2 pt-9 md:grid-cols-3">
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
          <div transition={{ duration: 0.8, ease: 'easeOut' }}>
            <div className="wrapper px-3">
              {/* TWIN COL */}
              <div className="grid h-full grid-cols-1 justify-center gap-x-10 gap-y-10 pt-10 md:min-h-96">
                <div>
                  <h3 className="sub-header max-w-md text-2xl font-semibold before:top-4 md:text-3xl">
                    See recent blogs and stories
                  </h3>
                  <Link
                    href={'/blogs'}
                    className="mb-3 mt-2 flex w-fit items-center justify-center gap-1 text-base"
                  >
                    <p>See More Blogs</p>
                    <ArrowRightIcon className="text-sm" />
                  </Link>
                  <small className="text-primary">
                    Today: {formatDate(new Date()).commaDateFormat}
                  </small>
                </div>
                {/* //TODO: ADD A SEE ALL BLOGS AND ADJUST THE LAYOUT OF THE BLOGS */}
                <div className="grid grid-cols-1 gap-3 rounded-2xl bg-light px-4 py-4 pt-1 md:grid-cols-2 lg:grid-cols-3">
                  {/* Blog */}
                  {blogs.map((blog, idx) => (
                    <div
                      key={idx}
                      className="flex w-full cursor-pointer flex-col items-center gap-3 rounded-xl border border-transparent px-2 py-2 hover:border-textcolor/20 hover:bg-secondary/50 hover:shadow md:gap-6"
                    >
                      <div className="aspect-2 h-40 border-2 border-red-600">
                        <VideoPlayer
                          src="https://playlist.dacast.com/live/602498bd0ab279ef90d21c11e370e84f-live-ba817332-b74a-3b86-e4ae-0a059bdc404d/master.m3u8"
                          className="aspect-2 w-full md:!h-full"
                        />
                      </div>
                      <div className="flex h-full w-full flex-col justify-between gap-1 truncate overflow-ellipsis capitalize">
                        <h4 className="ellipsis-2 text-balance text-lg font-semibold">
                          {blog.title}
                        </h4>
                        <p className="ellipsis-2 text-sm">{blog.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function VideoDonate({}) {
  return (
    <div className="my-6 bg-secondary px-2 py-10">
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
