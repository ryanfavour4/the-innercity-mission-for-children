import Image from 'next/image'
import Link from 'next/link'
import logoDefault from '@/public/assets/icons/logo-black-text.png'
import { useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Icon } from '@iconify/react'
import { questions } from './dummy-data'

// components/CourseSidebar.tsx
export function CourseSidebar({ navOpen }: { navOpen: boolean }) {
  return (
    <aside
      className={`absolute bottom-0 top-0 z-20 w-80 overflow-y-auto border-r bg-light md:relative md:block md:!translate-x-0 ${!navOpen && '!-translate-x-full'}`}
    >
      <div className="flex items-center gap-4 border-b border-textcolor/25 p-6">
        <Link href={'#'}>
          <Image
            src={logoDefault}
            unoptimized
            alt="logo"
            className="w-16 md:w-16"
            width={100}
            height={50}
          />
        </Link>
        <h2 className="text-xl font-bold">Course Content</h2>
      </div>
      <nav className="p-2">
        <button
          className={`mb-1 flex w-full items-center gap-3 rounded-lg p-3 text-left text-base text-textcolor/75 transition-colors ${'bg-primary/25 font-semibold !text-primary'}`}
        >
          <span className="font-mono text-xs opacity-50">{String(0 + 1).padStart(2, '0')}</span>
          <span className="truncate text-base">Jumping away now</span>
        </button>
        <button
          className={`mb-1 flex w-full items-center gap-3 rounded-lg p-3 text-left text-base text-textcolor/75 transition-colors ${''}`}
        >
          <span className="font-mono text-xs opacity-50">{String(0 + 1).padStart(2, '0')}</span>
          <span className="truncate text-base">Jumping away now</span>
        </button>
      </nav>
    </aside>
  )
}

// !! ++++++++
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
                    <Icon icon={'entypo:pin'} className="text-xl text-primary" />
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
