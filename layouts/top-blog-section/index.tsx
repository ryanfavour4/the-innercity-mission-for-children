'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import blogBanner from '@/public/assets/images/blog-banner-autism.jpg'
import blog1Img from '@/public/assets/images/GAM-APP2-1.jpg'
import blog2Img from '@/public/assets/images/WhatsApp-Image-2024-05-02-at-09.45.52_dd992226-1.jpg'
import blog3Img from '@/public/assets/images/WhatsApp-Image-2024-04-29-at-11.11.30_1308a2c2.jpg'
import { useInView, motion } from 'framer-motion'
import { formatDate } from '@/utils/format-date'
import Link from 'next/link'
import { ArrowRightIcon } from '@/components/svgs'

export default function TopBlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

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

  return (
    <div className="bg-secondary pb-10 text-textcolor">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
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
                  <Image
                    alt={blog.title + ' - ' + blog.body}
                    className="block h-48 w-full rounded-lg object-cover"
                    src={blog.image || blogBanner}
                    width={200}
                    height={200}
                  />
                  <div className="flex h-full w-full flex-col justify-between gap-1 truncate overflow-ellipsis capitalize">
                    <h4 className="ellipsis-2 text-balance text-lg font-semibold">{blog.title}</h4>
                    <p className="ellipsis-2 text-sm">{blog.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
