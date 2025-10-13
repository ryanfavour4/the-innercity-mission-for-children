'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EventCalenderIcon, HandGivingHeartIcon } from '@/components/svgs'

export default function HeroSection7bm({ openRegisterModal }: { openRegisterModal: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = ['/assets/images/7BMC.jpg', '/assets/images/7BMC11.jpg']

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <>
      <header className="relative z-10 flex h-1/2 min-h-[35rem] flex-col items-center justify-center overflow-hidden bg-cover bg-center text-light">
        {/* OVERLAY & HERO IMAGE */}
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="hero-bg"
            className={`absolute inset-0 -z-10 min-h-[35em] w-full object-cover brightness-50 transition-opacity duration-1000 md:h-full ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            width={1500}
            height={600}
          />
        ))}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark via-white/0 to-light/0 opacity-40 brightness-50" />

        <div className="flex h-full flex-col items-center justify-center gap-2 text-center md:gap-4 md:py-24 md:pb-48">
          <h1 className="text-4xl font-black md:text-5xl">7 BILLION MEALS CAMPAIGN</h1>
          <p className="mb-3 font-normal uppercase [letter-spacing:10px]">
            Make <span className="text-lg font-black">GOOD</span> Happen Everywhere
          </p>
          <p className="mb-8 max-w-md px-2">
            Join us in providing meals for children and families in need around the world.
          </p>
          <div className="flex w-full max-w-48 flex-wrap items-center justify-center gap-2 md:max-w-96">
            <Link
              href={'/'}
              className="btn-white flex w-fit items-center gap-2 border px-8 text-base ring-light/50"
            >
              <HandGivingHeartIcon className="text-2xl" />
              <p>Donate Meal </p>
            </Link>
            <Link
              onClick={openRegisterModal}
              href="#register-event"
              className="btn flex w-fit items-center gap-2 border px-4 text-base ring-light/50"
            >
              <EventCalenderIcon className="text-2xl" />
              <p>Register Event</p>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
