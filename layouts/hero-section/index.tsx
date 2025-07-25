'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PlayIcon } from '@/components/svgs'
import Marquee from '@/components/marquee/marquee'

export default function HeroSection2() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    '/assets/images/website-banner-1.jpg',
    '/assets/images/website-banner-1.jpg',
    '/assets/images/website-banner-1.jpg',
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <>
      <header className="">
        {/* HERO BG AREA */}
        <div className="relative z-10 flex h-1/2 min-h-[630px] flex-col items-center justify-center overflow-hidden bg-cover bg-center text-light">
          {/* OVERLAY & HERO IMAGE */}
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="hero-bg"
              className={`absolute inset-0 -z-10 h-1/2 min-h-[630px] w-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              width={2000}
              height={800}
            />
          ))}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark via-white/0 to-light/0 opacity-40" />

          {/* HERO CONTENT */}
          <div className="wrapper absolute inset-0 flex h-full flex-col justify-between gap-16 p-3">
            {/* TOP SECTION */}
            <div className="flex h-full flex-col justify-center gap-6">
              <h1 className="max-w-lg text-5xl font-black md:text-6xl">
                A Future for Every Child.
              </h1>
              <p className="max-w-lg">
                The InnerCity Mission for Children is dedicated to nurturing, educating, and
                empowering the next generation. Join us in making a lasting difference
              </p>
              <div className="flex flex-col gap-6 md:flex-row">
                <Link className="btn-white max-w-fit px-8 py-3 hover:bg-accent" href="/donate">
                  Donate now
                </Link>
                <button className="btn flex w-fit items-center gap-1 p-2 py-3 ring-light/50">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-light">
                    <PlayIcon className="h-6 w-6 pl-px text-dark" />
                  </span>
                  <p>Play Video</p>
                </button>
              </div>
            </div>
            {/* BOTTOM SECTION */}
            <div className="flex flex-col items-center justify-center gap-3 md:gap-8">
              <div className="h-[2px] w-full bg-light" />
              <small className="text-nowrap">Over 5 billion meals donated</small>
            </div>
          </div>
        </div>
      </header>
      {/* Marquee new year roller */}
      <div className="bg-primary py-2 text-lg font-semibold uppercase tracking-widest text-light">
        <div className="wrapper">
          <Marquee speed={10}>
            <p>2025 Year of Completion!</p>
          </Marquee>
        </div>
      </div>
    </>
  )
}
