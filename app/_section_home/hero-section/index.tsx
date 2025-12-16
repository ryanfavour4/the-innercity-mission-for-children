'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon, HandHeartIcon, PlayIcon } from '@/components/svgs'
import Marquee from '@/components/marquee/marquee'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperClass } from 'swiper'
import { circInOut, motion, spring, useInView } from 'framer-motion'

const images = [
  {
    img: '/assets/images/SEND-PORTION-HEADER-WEB.png',
    link: '/sendportions/',
    id: 3,
  },
  {
    img: '/assets/images/icm-at-20.jpeg',
    link: 'https://icmat20.org/',
    id: 4,
  },
  { img: '/assets/images/wen-banner.jpg', link: '/special-highlights/build-a-school/', id: 1 },
  { img: '/assets/images/7BMC11.jpg', link: '/special-highlights/7billionmeals/', id: 2 },
  // { img: '/assets/images/back-to-school.jpg', link: '/special-highlights/backtoschool/', id: 3 },
  // {
  //   img: '/assets/images/Fiji-rebroadcast.png',
  //   link: '/livestream/',
  //   id: 4,
  // },
  // {
  //   img: '/assets/images/october.jpg',
  //   link: '/special-highlights/7billionmeals/',
  //   id: 5,
  // },
  // {
  //   img: '/assets/images/bannerGO.jpg',
  //   link: '/special-highlights/summerinitiatives/',
  //   id: 6,
  // },
  // {
  //   img: '/assets/images/community-center.jpg',
  //   link: '/special-highlights/summerinitiatives/',
  //   id: 7,
  // },
  {
    img: '/assets/images/preserve1.png',
    link: '/special-highlights/summerinitiatives/',
    id: 8,
  },
  // {
  //   img: '/assets/images/summer-meals1.png',
  //   link: '/special-highlights/summerinitiatives/',
  //   id: 9,
  // },
  {
    img: '/assets/images/website-bag-of-hope1.png',
    link: 'https://vfd.theinnercitymission.ngo/',
    id: 10,
  },
]

export default function HeroSection() {
  return (
    <>
      <header className="bg-secondary pb-10">
        {/* Marquee new year roller */}
        <div className="bg-primary py-2 text-sm font-semibold uppercase tracking-widest text-light">
          <Link href={'/special-highlights/7billionmeals/'} className="wrapper">
            <Marquee speed={20}>
              <p>
                DON&apos;T IGNORE CHILDREN,EVERYCHILD IS YOUR CHILD, CLICK TO SUPPORT OUR ON GOING
                CAMPAIGN
              </p>
              {/* <p>2025 Year of Completion!</p> */}
            </Marquee>
          </Link>
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 3000)
    return () => clearInterval(timer)
  }, [])

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
      </div>
      {/* BOTTOM SECTION */}
      <div className="flex flex-col items-center justify-center gap-3 md:gap-8">
        <div className="h-[2px] w-full bg-light" />
        <small className="text-nowrap">Over 5 billion meals donated</small>
      </div>
    </div>
  )
}

export function HeroSection3() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setActiveLink] = useState('#intro-video-section')
  const swiperRef = useRef<SwiperClass | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const transitionSpring = { duration: 0.4, ease: circInOut, type: spring, stiffness: 150 }

  return (
    <>
      <div className="bg-hero-wavy-pattern">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={true ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={transitionSpring}
          className="flex h-full flex-col justify-center gap-6"
        >
          <div className="flex flex-col items-center justify-center gap-6 px-3 py-10 pb-48 text-center text-light selection:bg-primary">
            <h1 className="max-w-xl text-4xl font-black drop-shadow-2xl md:text-6xl">
              A Future for Every Child.
            </h1>
            <p className="max-w-xl drop-shadow-2xl">
              The InnerCity Mission for Children focuses on nurturing, educating, and empowering the
              next generation. Join us to make a lasting difference.
            </p>
            <div className="flex w-full flex-wrap items-center justify-center gap-2 gap-y-3 md:max-w-96">
              <a
                href="#intro-video-section"
                className="btn flex items-center justify-center gap-2.5 border px-4 py-2 text-base ring-light/50 md:w-fit"
              >
                <PlayIcon className="size-5 pl-px" />
                <p>Play Video</p>
              </a>
              <a
                href={'https://gems.theinnercitymission.ngo/home'}
                className="btn-white flex items-center justify-center gap-2 border px-8 py-2 text-base ring-light/50 md:w-fit"
              >
                <span className="flex items-center justify-center rounded-full bg-light p-1">
                  <HandHeartIcon className="size-4 pl-px text-dark" />
                </span>
                <p>Join Us</p>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={transitionSpring}
        className="flex h-full flex-col justify-center gap-6"
      >
        <div className="relative mx-auto -mt-48 aspect-[1800/700] w-fit drop-shadow-xl md:-mt-48">
          <div className="absolute top-1/3 z-10 flex w-full items-center justify-between px-1">
            <button className="btn swiper-prev w-fit rotate-180 border-[1.5px] border-light bg-light/25 px-1 py-1 text-primary backdrop-blur">
              <ChevronRightIcon className="text-2xl" />
            </button>
            <button className="btn swiper-next w-fit border-[1.5px] border-light bg-light/25 px-1 py-1 text-primary backdrop-blur">
              <ChevronRightIcon className="text-2xl" />
            </button>
          </div>
          <div className="clip-hero-illustration mx-auto -mt-0 flex aspect-[1800/700] w-[96dvw] max-w-screen-lg hover:scale-105">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => {
                setActiveLink(images[swiper.realIndex].link)
                console.log('Active:', images[swiper.realIndex])
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={{ prevEl: '.swiper-prev', nextEl: '.swiper-next' }}
              modules={[Autoplay, Pagination, Navigation]}
            >
              {images.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link
                      target={image.link.includes('http') ? '_blank' : '_self'}
                      href={image.link}
                    >
                      <Image
                        className={`w-full object-cover transition-opacity duration-1000 group-hover:scale-105`}
                        unoptimized
                        alt="heroBannerImage"
                        height={100}
                        width={300}
                        src={image.img}
                      />
                    </Link>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </motion.div>
    </>
  )
}
