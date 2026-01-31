import Image from 'next/image'
import Link from 'next/link'
import logoDefault from '@/public/assets/icons/logo-black-text.png'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Icon } from '@iconify/react'
import { questions } from './dummy-data'
import { IGetClassesByCourseIdService } from '@/services/course-training/types'
import { addHashParams } from '@/utils/url-hash'
import { useStorageListener } from '@/hooks/use-storage'

type ClassesSidebarType = {
  navOpen: boolean
  classIsLoading: boolean
  classes: IGetClassesByCourseIdService[] | []
  setActiveClass: Dispatch<SetStateAction<IGetClassesByCourseIdService | null>>
  activeClass: IGetClassesByCourseIdService | null
}

// components/ClassesSidebar.tsx
export function ClassesSidebar({
  navOpen,
  classIsLoading,
  classes,
  setActiveClass,
}: ClassesSidebarType) {
  const searchParams =
    typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null
  const classId = searchParams?.get('class')
  const courseId = searchParams?.get('course')
  const [checkpoint, setCheckpoint] = useState({ class: '' })
  const courseCheckpoint: { class: string; course: string } = JSON.parse(
    useStorageListener('course-checkpoint') || '{}',
  )

  const onClassClick = ({ classObj }: { classObj: IGetClassesByCourseIdService }) => {
    setActiveClass(classObj)
    const progress = { ...checkpoint, class: classObj._id }
    setCheckpoint(progress)
    addHashParams(progress)
    console.log(progress)
    sessionStorage.setItem('course-checkpoint', JSON.stringify({ ...progress, course: courseId }))
  }

  useEffect(() => {
    if (courseCheckpoint && !courseId && !classId) {
      addHashParams(courseCheckpoint)
    }
  }, [classId, courseCheckpoint, courseId])

  useEffect(() => {
    if (courseCheckpoint) setCheckpoint({ class: courseCheckpoint.class })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (courseCheckpoint) {
      const activeCl = classes.find((item) => item._id == courseCheckpoint.class)
      setActiveClass(activeCl || null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseCheckpoint])

  useEffect(() => {
    if (classes.length && !courseCheckpoint.class) {
      console.log(classes)
      onClassClick({ classObj: classes[0] })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classes, courseCheckpoint])

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
        {classes.map((item) => (
          <button
            key={item._id}
            onClick={() => onClassClick({ classObj: item })}
            className={`mb-1 flex w-full items-center gap-3 rounded-lg p-3 text-left text-base text-textcolor/75 transition-colors hover:bg-primary/10 ${checkpoint.class == item._id && 'bg-primary/25 font-semibold !text-primary'}`}
          >
            <span className="font-mono text-xs opacity-50">
              {String(item.order).padStart(2, '0')}
            </span>
            <span className="truncate text-base">Jumping away now</span>
          </button>
        ))}

        {/* skeleton */}
        {classIsLoading &&
          [1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              className={`mb-1 flex w-full items-center gap-3 rounded-lg bg-textcolor/15 p-3 text-left text-base transition-colors`}
            >
              <span className="h-3 w-3 animate-pulse rounded bg-textcolor/50 font-mono text-xs"></span>
              <span className="h-5 w-full animate-pulse truncate rounded-md bg-textcolor/50"></span>
            </button>
          ))}
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
