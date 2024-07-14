'use client'
import Marquee from '@/components/custom/marquee'
import { PlayIcon } from '@/components/svgs'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    '/assets/images/hero-section.jpg',
    '/assets/images/hero-section-2.jpg',
    '/assets/images/hero-section.jpg',
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
        <div className="relative z-10 h-dvh min-h-[630px] bg-cover bg-center text-light">
          {/* OVERLAY HERO IMAGE */}
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="hero-bg"
              className={`absolute inset-0 -z-10 h-dvh min-h-[630px] object-cover transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              width={2000}
              height={800}
            />
          ))}
          <div className="absolute inset-0 -z-10 bg-dark opacity-60" />

          <div className="wrapper flex flex-col justify-between p-3 pt-24">
            {/* TOP SECTION */}
            <div className="">
              <h1 className="mb-8 max-w-[600px] text-5xl font-bold shadow md:text-6xl md:leading-snug">
                Inclusive care for children with special needs
              </h1>
              <div className="flex flex-col gap-6 md:flex-row">
                <Link href="/program">
                  <button className="btn-white max-w-fit px-8">What we do</button>
                </Link>
                <span className="flex cursor-pointer items-center gap-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-light">
                    <PlayIcon className="h-5 w-5 text-dark" />
                  </div>
                  <p>Play Video</p>
                </span>
              </div>
            </div>

            {/* BOTTOM SECTION */}
            <div className="flex flex-col items-center justify-center gap-3 pb-10 md:flex-row md:gap-8">
              <small className="text-nowrap">over 230 children under our care</small>
              <div className="h-[2px] w-full bg-light" />
              <small className="text-nowrap">58 donations collected</small>
            </div>
          </div>
        </div>
      </header>
      {/* YEAR THEME */}
      <div className="w-full bg-primary py-3 font-bold text-light">
        <Marquee>
          <p>2024: WELCOME TO THE YEAR OF REDEMPTION! 🎇</p>
        </Marquee>
      </div>
    </>
  )
}
