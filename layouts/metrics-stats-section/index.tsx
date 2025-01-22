import Link from 'next/link'
import React from 'react'

export default function MetricStatsSection() {
  const stats = [
    {
      id: 1,
      link: '/',
      stat: '1M+',
      title: 'House Holds Reached',
      description: 'Dedicated to transforming lives through education, resources, and compassion.',
    },
    {
      id: 2,
      link: '/',

      stat: '4.0B+',
      title: 'Meals Distributed',
      description: 'Supporting communities through food distribution initiatives.',
    },
    {
      id: 3,
      link: '/',

      stat: '100+',
      title: 'Countries Reached',
      description: 'Connecting with numerous countries around the world!',
    },
  ]

  return (
    <div className="bg-primary py-10">
      <div className="wrapper">
        {/* GRID AREA */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-light md:gap-10 md:divide-x-2">
          {stats.map((stat) => (
            <Link
              href={stat.link}
              key={stat.id}
              className="flex max-w-96 flex-col items-center justify-center gap-y-3 px-3 py-5 text-center hover:scale-105 hover:bg-secondary/10"
            >
              <h3 className="text-3xl font-semibold md:text-4xl">{stat.stat}</h3>
              <h4 className='className="text-xl md:text-2xl" font-semibold'>{stat.title}</h4>
              <p className="text-base">{stat.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
