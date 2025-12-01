'use client'
import { ArrowRightIcon } from '@/components/svgs'
import { useInView, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useRef } from 'react'

export default function EventsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const events = [
    // {
    //   id: 1,
    //   event: 'No Event',
    //   decription: 'No upcoming event',
    //   day: new Date().getDate(),
    //   month: new Date().toLocaleString('default', { month: 'long' }),
    //   date: new Date().toLocaleDateString(),
    // },
    {
      id: 1,
      event: 'Send Portions',
      decription: 'Send Portions at Christmas Outreaches and Crusades',
      day: 25,
      month: 'Dec',
      date: '2025',
      link: '/sendportions',
    },
  ]

  return (
    <div className="bg-light py-5">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="wrapper px-3">
          <div className="flex w-full items-center gap-4">
            <h3 className="sub-header w-full max-w-md text-nowrap text-2xl font-semibold md:text-3xl">
              Upcoming Events
            </h3>
            <hr className="block w-full" />
          </div>

          <div
            className={`mt-6 grid gap-5 md:grid-cols-2 ${events.length < 2 ? '!grid-cols-1' : ''}`}
          >
            {/* Event Card */}
            {events.map((event) => (
              <div
                key={event.id}
                className="flex flex-col items-center gap-3 rounded-xl bg-primary px-6 py-4 text-light md:flex-row md:gap-6 md:px-8 md:py-8"
              >
                <div className="w-full md:w-fit">
                  <h3 className="text-2xl font-semibold md:text-3xl">{event.day}</h3>
                  <small className="">{event.month}</small>
                </div>
                <div className="mr-auto flex flex-col gap-3 md:mr-0">
                  <span className="flex w-full items-center gap-4 font-semibold">
                    <small className="text-nowrap">Next Events</small>
                    <hr className="block w-full max-w-[5rem] border" />
                  </span>

                  <h3 className="text-xl font-semibold md:text-2xl">{event.event}</h3>
                </div>

                <Link
                  href={event.link || '#'}
                  className="btn-white ml-auto flex aspect-1 w-fit flex-col items-center justify-center rounded-full p-3"
                >
                  <ArrowRightIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
