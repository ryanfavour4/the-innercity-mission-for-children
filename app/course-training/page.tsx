'use client'
import Image from 'next/image'
import Link from 'next/link'
import logoDefault from '@/public/assets/icons/logo-black-text.png'
import { MenuFriesIcon } from '@/components/svgs'
import { useRef, useState } from 'react'
import { CourseSidebar } from './section'
import VideoPlayer from '@/components/video-player'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Icon } from '@iconify/react'
import { questions } from './dummy-data'

export default function CourseTraining() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="flex h-screen bg-ghost-white">
      {/* Sidebar - Navigation */}
      <CourseSidebar navOpen={navOpen} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-3 pt-20 md:p-6 md:pt-6 lg:p-10">
        <nav className="fixed left-0 right-0 top-0 flex h-fit items-center justify-between bg-light px-2 py-2 md:hidden">
          <Link href={'#'}>
            <Image
              src={logoDefault}
              unoptimized
              alt="logo"
              className="w-20 md:w-24"
              width={100}
              height={50}
            />
          </Link>

          <button onClick={() => setNavOpen((p) => !p)} className="inline-block md:hidden">
            <MenuFriesIcon className="btn-white h-12 w-12 rotate-180 px-2 text-5xl font-bold text-primary ring-light hover:bg-white" />
          </button>
        </nav>

        <div className="mx-auto max-w-5xl space-y-5">
          <header>
            <h1 className="text-lg font-bold text-dark md:text-2xl">Introduction to App Router</h1>
            <p className="mt-1 text-sm text-textcolor/75 md:mt-2 md:text-base">
              <span>Modern Web Development with Next.js</span> <b> •</b> <span>Module 1</span>
            </p>
          </header>

          {/* Progress */}
          <section className="rounded-lg bg-light p-3 shadow md:rounded-xl">
            <div className="mb-2 flex justify-between text-sm font-medium">
              <span>Overall Progress</span>
              <span>10%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-ghost-white">
              <div className="h-2 rounded-full bg-primary" style={{ width: `50%` }} />
            </div>
          </section>

          {/* Video or Quiz Toggle */}
          <div className="aspect-video h-full overflow-hidden rounded-xl bg-light text-base shadow-2xl transition-all md:rounded-2xl">
            <QuizzesSlider />

            <VideoPlayer
              src="https://player.vimeo.com/video/1052568231?h=6234489652"
              className="max-w-full"
            />
          </div>

          <div className="flex flex-wrap-reverse items-center justify-between gap-3 rounded-xl border border-textcolor/25 bg-light p-3 md:p-5">
            <button className="btn border border-textcolor/25 text-base text-textcolor md:w-fit">
              Back to Video
            </button>
            <button className="btn-primary text-base md:w-fit">Next Lesson →</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export function QuizzesSlider() {
  const swiperRef = useRef<SwiperClass | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState('1')

  return (
    <>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        allowTouchMove={false}
        className="mx-auto block h-full w-[95%] px-4 py-10 md:min-h-96"
        spaceBetween={40}
      >
        {questions.map((q, idx) => (
          <SwiperSlide key={q._id} className="">
            <p className="mb-2 text-sm text-primary/75">
              Question {idx + 1} of {questions.length}
            </p>
            <h3 className="mb-8 text-lg font-semibold">{q.question}</h3>

            <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
              {q.options.map((o) => (
                <span
                  key={o}
                  onClick={() => setSelectedAnswer(o)}
                  className={`relative flex cursor-pointer items-center justify-between rounded-xl border border-textcolor/5 bg-textcolor/10 p-4 py-3 text-textcolor duration-300 hover:scale-[1.01] hover:bg-primary/25 hover:shadow ${selectedAnswer === o ? '!border-primary !bg-primary/25' : 'bg-textcolor/10'}`}
                >
                  <p>{o}</p>
                  {selectedAnswer === o ? (
                    <Icon icon={'entypo:pin'} className="border text-xl text-primary" />
                  ) : null}
                </span>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
