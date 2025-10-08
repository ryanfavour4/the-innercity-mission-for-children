'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PlayIcon } from '@/components/svgs'
import Marquee from '@/components/marquee/marquee'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function HeroSection() {
  return (
    <>
      <header className="bg-secondary pb-10">
        {/* Marquee new year roller */}
        <div className="bg-primary py-2 text-sm font-semibold uppercase tracking-widest text-light">
          <div className="wrapper">
            <Marquee speed={10}>
              <p>2025 Year of Completion!</p>
            </Marquee>
          </div>
        </div>
        {/* HERO BG AREA */}
        {/* <HeroSection2 /> */}
        <HeroSection3 />
      </header>
    </>
  )
}

export function HeroSection2() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    { img: '/assets/images/7BMC11.jpg', link: '/' },
    { img: '/assets/images/wen-banner.jpg', link: '/' },
    { img: '/assets/images/website-bag-of-hope1.png', link: '/' },
    { img: '/assets/images/summer-meals1.png', link: '/' },
    { img: '/assets/images/preserve1.png', link: '/' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative z-10 flex h-1/2 min-h-[630px] flex-col items-center justify-center overflow-hidden bg-cover bg-center text-light">
      {/* OVERLAY & HERO IMAGE */}
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.img}
          alt="hero-bg"
          className={`absolute inset-0 -z-10 h-1/2 min-h-[630px] w-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          width={2000}
          height={800}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark via-white/0 to-light/0" />

      {/* HERO CONTENT */}
      <div className="wrapper absolute inset-0 flex h-full flex-col justify-between gap-16 p-3">
        {/* TOP SECTION */}
        <div className="flex h-full flex-col justify-center gap-6">
          <h1 className="max-w-lg text-5xl font-black md:text-6xl">A Future for Every Child.</h1>
          <p className="max-w-lg">
            The InnerCity Mission for Children is dedicated to nurturing, educating, and empowering
            the next generation. Join us in making a lasting difference
          </p>
          <div className="flex flex-col gap-6 md:flex-row">
            <Link className="btn-white max-w-fit px-8 py-3 hover:bg-accent" href="/donate">
              Donate now
            </Link>
            <a
              href="#intro-video-section"
              className="btn flex w-fit items-center gap-1 p-2 py-3 ring-light/50"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-light">
                <PlayIcon className="h-6 w-6 pl-px text-dark" />
              </span>
              <p>Play Video</p>
            </a>
          </div>
        </div>
        {/* BOTTOM SECTION */}
        <div className="flex flex-col items-center justify-center gap-3 md:gap-8">
          <div className="h-[2px] w-full bg-light" />
          <small className="text-nowrap">Over 5 billion meals donated</small>
        </div>
      </div>
    </div>
  )
}

export function HeroSection3() {
  const images = [
    { img: '/assets/images/wen-banner.jpg', link: '/', id: 1 },
    { img: '/assets/images/7BMC11.jpg', link: '/', id: 0 },
    { img: '/assets/images/website-bag-of-hope1.png', link: '/', id: 2 },
    { img: '/assets/images/summer-meals1.png', link: '/', id: 3 },
    { img: '/assets/images/preserve1.png', link: '/', id: 4 },
  ]

  return (
    <>
      <div className="bg-hero-wavy-pattern">
        <div className="flex flex-col items-center justify-center gap-6 px-3 py-10 pb-48 text-center text-light selection:bg-primary">
          <h1 className="max-w-xl text-4xl font-black drop-shadow-2xl md:text-6xl">
            A Future for Every Child.
          </h1>
          <p className="max-w-xl drop-shadow-2xl">
            The InnerCity Mission for Children focuses on nurturing, educating, and empowering the
            next generation. Join us to make a lasting difference.
          </p>
          <a
            href="#intro-video-section"
            className="btn-white flex w-fit items-center gap-1 border px-8 py-2 text-base ring-light/50"
          >
            <span className="flex items-center justify-center rounded-full bg-light">
              <PlayIcon className="size-5 pl-px text-dark" />
            </span>
            <p>Play Video</p>
          </a>
        </div>
      </div>
      <div className="relative mx-auto -mt-44 aspect-[1800/700] w-fit drop-shadow-xl md:-mt-48">
        <div className="clip-hero-illustration mx-auto -mt-0 flex aspect-[1800/700] max-w-screen-lg">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {images.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <Image
                    className={`w-full object-cover transition-opacity duration-1000`}
                    unoptimized
                    alt="heroBannerImage"
                    height={100}
                    width={300}
                    src={image.img}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </>
  )
}
