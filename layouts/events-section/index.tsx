import { ArrowRightIcon } from '@/components/svgs'
import React from 'react'

export default function EventsSection() {
  const events = [
    {
      id: 1,
      event: 'Anser caerulescens',
      decription:
        'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      day: 31,
      month: 'US',
      date: '7/1/2024',
    },
    {
      id: 2,
      event: 'Corvus albicollis',
      decription:
        'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
      day: 2,
      month: 'US',
      date: '2/17/2024',
    },
    {
      id: 3,
      event: 'Bucephala clangula',
      decription:
        'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
      day: 14,
      month: 'PG',
      date: '11/12/2024',
    },
  ]

  return (
    <div className="bg-light py-5">
      <div className="wrapper px-3">
        <div className="flex w-full items-center gap-4">
          <h3 className="sub-header w-full max-w-md text-nowrap text-2xl font-semibold md:text-3xl">
            Upcoming Events
          </h3>
          <hr className="block w-full" />
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
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

              <button className="btn-white ml-auto flex aspect-1 w-fit flex-col items-center justify-center rounded-full p-3">
                <ArrowRightIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
