'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Marquee from '@/components/marquee/marquee'
import { Icon } from '@iconify/react';

export default function HeroSection7bm() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    '/assets/images/7BMC.jpg',
    '/assets/images/7BMC.jpg',
    '/assets/images/7BMC.jpg',
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
              className={`absolute inset-0 -z-10 h-1/2 min-h-[630px] w-full object-cover transition-opacity duration-1000 brightness-50 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              width={1500}
              height={600}
            />
          ))}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark via-white/0 to-light/0 opacity-40 brightness-50"></div>

          {/* HERO CONTENT */}
          <div className="wrapper absolute inset-0 flex h-full flex-col justify-between gap-16 p-3 ">
            {/* TOP SECTION */}
            <div className="flex h-full flex-col justify-center items-center text-center gap-6">
              <h1 className="text-4xl font-black md:text-5xl">
                7 BILLION MEALS CAMPAIGN
              </h1>
              <h1 className='max-w-lg text-2xl font-black md:text-2xl'>Make GOOD Happen Everywhere</h1>
              <p className="max-w-lg">
               Join us in providing meals for children and families in need around the world.
              </p>
              <div className="flex flex-col gap-6 md:flex-row">
                <Link className="btn-white max-w-fit px-8 py-3 hover:bg-accent flex gap-2" href="/donate">
                <Icon icon="iconoir:donate" width="24" height="24" />                 
                  Donate now
                </Link>

                <Link className="btn-white max-w-fit px-6 py-3 hover:bg-accent flex gap-2 bg-transparent border-2 border-white" href="/donate">
                <Icon icon="material-symbols:event" width="24" height="24" />                 
                  Register Event
                </Link>
                
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
