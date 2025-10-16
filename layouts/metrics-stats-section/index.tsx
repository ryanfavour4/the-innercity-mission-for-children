'use client'
import Link from 'next/link'
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function MetricStatsSection() {
  const stats = [
    {
      id: 1,
      link: '/',
      stat: 1000000,
      suffix: '+',
      title: 'House Holds Reached',
      description: 'Dedicated to transforming lives through education, resources, and compassion.',
    },
    {
      id: 2,
      link: '/donate',
      stat: 4000000000,
      suffix: '+',
      title: 'Meals Distributed',
      description: 'Supporting communities through food distribution initiatives.',
    },
    {
      id: 3,
      link: '/',
      stat: 100,
      suffix: '+',
      title: 'Countries Reached',
      description: 'Connecting with numerous countries around the world!',
    },
  ]

  return (
    <div className="bg-primary py-10">
      <div className="wrapper">
        <div className="flex flex-wrap items-center justify-center gap-5 text-light md:gap-10 md:divide-x-2">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  )
}

function StatCard({
  stat,
}: {
  stat: { stat: number; suffix: string; link: string; title: string; description: string }
}) {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once when it comes into view
    threshold: 0.3, // how much of the component should be visible (30%)
  })

  return (
    <Link
      href={stat.link}
      ref={ref}
      className="flex max-w-96 flex-col items-center justify-center gap-y-3 px-3 py-5 text-center transition-transform duration-300 hover:scale-105 hover:bg-secondary/10"
    >
      <h3 className="text-3xl font-semibold md:text-4xl">
        {inView ? (
          <CountUp start={0} end={stat.stat} duration={2.5} separator="," suffix={stat.suffix} />
        ) : (
          '0' + stat.suffix
        )}
      </h3>
      <h4 className="text-xl font-semibold md:text-2xl">{stat.title}</h4>
      <p className="text-base">{stat.description}</p>
    </Link>
  )
}
