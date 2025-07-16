import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from './data'
import { ClockIcon, TagIcon } from '../svgs'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-[1.02]">
      <Link href={`/blogs/#`}>
        <Image
          width={200}
          height={200}
          src={post.image}
          alt={post.title}
          className="h-48 w-full bg-primary/75 object-cover"
        />
        <div className="p-6">
          <div className="mb-2 flex items-center space-x-2">
            <TagIcon className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">{post.category}</span>
          </div>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">{post.title}</h2>
          <p className="mb-4 text-base text-gray-600">{post.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{post.author}</span>
            <div className="flex items-center space-x-1">
              <ClockIcon className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
