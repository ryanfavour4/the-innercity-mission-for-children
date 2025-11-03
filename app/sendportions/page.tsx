'use client'
import {
  ChristmasSantaCapIcon,
  ChristmasWreathIcon,
  EventDateFillIcon,
  MealForkPlateKnifeIcon,
} from '@/components/svgs'
import React from 'react'
import Snowfall from 'react-snowfall'
import { useTimer } from 'react-timer-hook'

export default function SendPortionPage() {
  return (
    <div>
      <Snowfall />
      <div className="bg-sendportions-hero min-h-48 bg-cover">
        <div className="container px-3 py-28 text-light md:px-0">
          <h1 className="relative max-w-2xl text-4xl font-black drop-shadow-2xl md:text-balance md:text-6xl">
            <ChristmasSantaCapIcon className="absolute -left-2 -top-3 size-6 -rotate-[30deg] pl-px md:size-8" />
            Create an unforgettable Christmas for a child in need.{' '}
          </h1>
          <div className="mt-6 flex w-full flex-wrap items-center gap-2 gap-y-3 md:max-w-96">
            <a
              href="#intro-video-section"
              className="btn flex items-center justify-center gap-2.5 border px-4 py-3 text-base ring-light/50 md:w-fit"
            >
              <MealForkPlateKnifeIcon className="size-5 pl-px" />
              <p>Give a Portion</p>
            </a>
            <a
              href={'https://sendportions.theinnercitymission.ngo/register'}
              className="btn-white flex items-center justify-center gap-2 border px-8 py-3 text-base ring-light/50 md:w-fit"
            >
              <span className="flex items-center justify-center rounded-full p-1">
                <EventDateFillIcon className="size-4 pl-px text-dark" />
              </span>
              <p>Host Event</p>
            </a>
          </div>{' '}
        </div>
      </div>

      <div className="bg-white">
        <div className="container px-2 py-7">
          <h4 className="mx-auto max-w-4xl text-center text-2xl font-bold capitalize md:text-3xl">
            This Christmas, Share the Joy
          </h4>
          <p className="mb-8 mt-4 text-center font-bold">
            Make Christmas Memorable for 5 Million Indigent Children Around the World
          </p>
          <p className="mx-auto max-w-4xl">
            There’s nothing quite like Christmas to bring out the child in everyone — the gifts, the
            laughter, the warmth. But for millions of indigent children around the world, Christmas
            often comes with no celebration, no gifts, and no hope.
            <br />
            <br />
            At The InnerCity Mission for Children, we believe every child deserves to experience the
            joy of Christmas. Through your giving to the Christmas Gift Fund, we ensure that
            children in our care feel loved and remembered.
            <br />
            This season, you can help us share that joy. Join us as we send 5 million portioned
            packs to indigent children this Christmas.
            <br />
            <br />
            Give a Christmas portion today — and make Christmas truly special for a child.
          </p>
        </div>
      </div>

      <div className="py-6">
        <div className="relative mx-auto w-full max-w-4xl rounded-md bg-[#007853]/85 px-3 py-10 text-light md:px-5">
          <ChristmasSantaCapIcon className="absolute -left-2 -top-3 size-6 -rotate-[30deg] pl-px md:size-8" />
          <ChristmasWreathIcon className="absolute -bottom-3 -right-2 size-6 -rotate-[30deg] pl-px md:size-8" />

          <h4 className="mx-auto mb-6 max-w-4xl text-center text-2xl font-bold capitalize md:text-3xl">
            Don&apos;t wait too long to give! You&apos;ve only got...
          </h4>
          <CountdownTimer />
        </div>
      </div>
    </div>
  )
}

export function CountdownTimer() {
  const expiry = new Date('2025-12-25T00:00:00')
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp: expiry })

  return (
    <div className="flex items-center justify-center gap-4 text-center text-2xl">
      <div className="w-full max-w-24 rounded-md border bg-[#007853] px-2 py-4">
        <h5 className="text-2xl font-bold leading-none md:text-3xl">{days}</h5>
        <p className="text-base">Days</p>
      </div>
      <div className="w-full max-w-24 rounded-md border bg-[#007853] px-2 py-4">
        <h5 className="text-2xl font-bold leading-none md:text-3xl">{hours}</h5>
        <p className="text-base">Days</p>
      </div>
      <div className="w-full max-w-24 rounded-md border bg-[#007853] px-2 py-4">
        <h5 className="text-2xl font-bold leading-none md:text-3xl">{minutes}</h5>
        <p className="text-base">Days</p>
      </div>
      <div className="w-full max-w-24 rounded-md border bg-[#007853] px-2 py-4">
        <h5 className="text-2xl font-bold leading-none md:text-3xl">{seconds}</h5>
        <p className="text-base">Days</p>
      </div>
    </div>
  )
}
