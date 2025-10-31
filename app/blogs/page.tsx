import BlogCard from '@/components/blog-card'
import { blogsData } from '@/json/blog-posts'
import CtaSection from '@/layouts/cta-section'
import React from 'react'

export default function BlogPage() {
  return (
    <>
      <div className="bg-light pt-10">
        <div className="wrapper px-3 pb-10">
          <div className="flex h-full flex-col justify-between gap-5 pb-6">
            <p className="sub-header uppercase">Latest Insights</p>
            <h3 className="text-2xl font-semibold capitalize leading-8 md:-mt-4 md:text-3xl">
              Impact News Blog
            </h3>
          </div>

          <div className="flex w-full gap-5 overflow-x-auto pb-14">
            <button className={`rounded-full border bg-dark/5 px-6 py-1.5`}>
              <p className={`text-nowrap text-sm text-primary`}>Colouring Dreams</p>
            </button>
            <button className={`rounded-full border bg-dark/5 px-6 py-1.5`}>
              <p className={`text-nowrap text-sm text-primary`}>End Child Poverty Now</p>
            </button>
            <button className={`rounded-full border bg-dark/5 px-6 py-1.5`}>
              <p className={`text-nowrap text-sm text-primary`}>Events</p>
            </button>
            <button className={`rounded-full border bg-dark/5 px-6 py-1.5`}>
              <p className={`text-nowrap text-sm text-primary`}>Hope Mission</p>
            </button>
            <button className={`rounded-full border bg-dark/5 px-6 py-1.5`}>
              <p className={`text-nowrap text-sm text-primary`}>Shutter Speak</p>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogsData.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        <CtaSection />
      </div>
    </>
  )
}
