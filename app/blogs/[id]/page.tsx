import React from 'react'
import { notFound } from 'next/navigation'
import blogsData from '@/json/blog-posts.json'
import Link from 'next/link'
import Image from 'next/image'
import { ClockIcon, TagIcon, UsersIcon } from '@/components/svgs'

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    id: post.id,
  }))
}

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogDetailsPage({ params }: BlogPostPageProps) {
  const post = blogsData.find((p) => p.id === params.id)

  if (!post) {
    notFound() // triggers the 404 page
  }

  console.log(post)
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/blogs"
          className="mb-8 inline-flex items-center text-primary hover:text-primary/75"
        >
          {/* <ArrowLeftIcon className="mr-2 h-4 w-4" /> */}
          Back to blog
        </Link>

        <Image
          width={200}
          height={200}
          src={post.image}
          alt={post.title}
          className="mb-8 h-[400px] w-full rounded-lg object-cover"
        />

        <div className="mb-6 flex items-center space-x-4">
          <div className="flex items-center text-gray-600">
            <UsersIcon className="mr-1 h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <ClockIcon className="mr-1 h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center text-primary">
            <TagIcon className="mr-1 h-4 w-4" />
            <span>{post.category}</span>
          </div>
        </div>

        <h1 className="mb-4 text-4xl font-bold text-gray-900">{post.title}</h1>
        <div className="prose prose-lg max-w-none">
          {<div dangerouslySetInnerHTML={{ __html: post.content }} />}
          {/* {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700">
              {paragraph}
            </p>
          ))} */}
        </div>
      </div>
    </>
  )
}
