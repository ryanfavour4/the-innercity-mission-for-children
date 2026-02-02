'use client'
export const dynamic = 'force-dynamic'
import Image from 'next/image'
import Link from 'next/link'
import logoDefault from '@/public/assets/icons/logo-black-text.png'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Icon } from '@iconify/react'
import {
  IGetClassesByCourseIdService,
  IPostSubmitAnswersServicePayload,
  IPostSubmitAnswersServiceRes,
  SwrMutateType,
} from '@/services/course-training/types'
import { useStorageListener } from '@/hooks/use-storage'
import { getQuestionsByClassIdService } from '@/services/course-training/questions.service'
import useSWR from 'swr'
import { postSubmitAnswersService } from '@/services/course-training/answers.service'
import useSWRMutation from 'swr/mutation'
import { toast } from 'react-toastify'
import { useRouter, useSearchParams } from 'next/navigation'
import { useHasMounted } from '@/hooks/use-mounted'
import { useUpdateQueryParams } from '@/hooks/use-query-params'

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
  const updateParams = useUpdateQueryParams()
  const hasMounted = useHasMounted()
  const searchParams = useSearchParams()
  const classId = searchParams.get('class')
  const courseId = searchParams.get('course')
  const [checkpoint, setCheckpoint] = useState({ class: '' })
  const courseCheckpoint: { class: string; course: string } = JSON.parse(
    useStorageListener('course-checkpoint') || '{}',
  )

  const onClassClick = ({ classObj }: { classObj: IGetClassesByCourseIdService }) => {
    setActiveClass(classObj)
    const progress = { ...checkpoint, class: classObj._id }
    setCheckpoint(progress)
    updateParams(progress)
    sessionStorage.setItem('course-checkpoint', JSON.stringify({ ...progress, course: courseId }))
  }

  useEffect(() => {
    // if (courseCheckpoint && !courseId && !classId) updateParams(courseCheckpoint)
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
    if (!hasMounted) return
    if (!classes.length) return
    if (courseCheckpoint.class) return

    onClassClick({ classObj: classes[0] })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classes, courseCheckpoint.class, hasMounted])

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
            className={`mb-1 flex w-full items-center gap-3 rounded-lg p-3 text-left text-base text-textcolor/75 transition-colors hover:bg-primary/10 ${checkpoint.class == item._id && 'bg-primary/25 font-medium !text-primary'}`}
          >
            <span className="font-mono text-xs opacity-50">
              {String(item.order).padStart(2, '0')}
            </span>
            <span className="truncate text-base">{item.title}</span>
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
type QuizzesSliderType = {
  setActiveClass: Dispatch<SetStateAction<IGetClassesByCourseIdService | null>>
  activeClass: IGetClassesByCourseIdService | null
}

export function QuizzesSlider({ activeClass }: QuizzesSliderType) {
  const navigate = useRouter()
  const isNavigatingRef = useRef(false)
  const searchParams = useSearchParams()
  const classId = searchParams.get('class')
  const courseId = searchParams.get('course')
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const swiperRef = useRef<SwiperClass | null>(null)
  const [answers, setAnswers] = useState<{ questionId: string; selectedAnswerId: string }[]>([])
  const shouldFetch = !!activeClass?._id
  const { data, isLoading } = useSWR(
    shouldFetch ? `questions/class/${activeClass._id}` : null,
    () => getQuestionsByClassIdService({ id: activeClass!._id }),
  )

  const answerSubmitSwrMutate: SwrMutateType<IPostSubmitAnswersServicePayload> = (_, { arg }) =>
    postSubmitAnswersService(arg)
  const { trigger, isMutating } = useSWRMutation('/answer/submit', answerSubmitSwrMutate)

  const getSelectedAnswer = (questionId: string) =>
    answers.find((a) => a.questionId === questionId)?.selectedAnswerId

  const selectAnswer = (questionId: string, answerId: string) => {
    setAnswers((prev) => {
      const exists = prev.find((a) => a.questionId === questionId)

      if (exists) {
        return prev.map((a) =>
          a.questionId === questionId ? { ...a, selectedAnswerId: answerId } : a,
        )
      }

      return [...prev, { questionId, selectedAnswerId: answerId }]
    })
  }

  const submitQuestion = () => {
    if (!courseId || !classId) return

    trigger({ courseId, classId, answers })
      .then((res: IPostSubmitAnswersServiceRes) => {
        toast.success(`Quiz submitted, you got ${res.correctAnswers} answers right`)
      })
      .catch((err) => {
        if (err?.response?.status === 401 && !isNavigatingRef.current) {
          isNavigatingRef.current = true
          toast.error('Please login to continue your course')
          navigate.replace('/course-training/auth')
        }
      })
  }

  /* ---------------------------- navigation logic ---------------------------- */
  const nextQuizClick = () => {
    if (!swiperRef.current || !data?.length) return

    const currentIndex = swiperRef.current.activeIndex
    const currentQuestion = data[currentIndex]

    const answered = answers.some((a) => a.questionId === currentQuestion._id)

    if (answered) {
      swiperRef.current.slideNext()
    }
  }

  const prevQuizClick = () => {
    swiperRef.current?.slidePrev()
  }

  const resetQuiz = () => {
    setAnswers([])
    sessionStorage.removeItem('quiz-answers')
    swiperRef.current?.slideTo(0)
  }

  /* ------------------ session storage (optional but solid) ------------------ */
  useEffect(() => {
    if (!activeClass?._id || !swiperRef.current) return

    requestAnimationFrame(() => {
      resetQuiz()
    })
  }, [activeClass?._id])

  useEffect(() => {
    const saved = sessionStorage.getItem('quiz-answers')
    if (saved) {
      setAnswers(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem('quiz-answers', JSON.stringify(answers))
  }, [answers])

  if (isLoading) {
    return <p className="text-center">Loading questions…</p>
  }

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      allowTouchMove={false}
      onSlideChange={(e) => setActiveSlideIndex(e.activeIndex)}
      className="mx-auto block h-full px-3 py-10 md:min-h-96 md:w-[95%] md:px-4"
      spaceBetween={40}
    >
      {data?.map((q, idx) => (
        <SwiperSlide className={'flex flex-col items-start'} key={q._id}>
          <p className="mb-2 text-sm text-primary/75">
            Question {idx + 1} of {data.length}
          </p>

          <h3 className="text-lg font-semibold">{q.question}</h3>

          <small className="mb-8 block text-textcolor/50">
            Your result and score will be shown after submission
          </small>

          <div className="flex w-full flex-col gap-4 md:grid md:grid-cols-2">
            {q.options.map((o) => {
              const isSelected = getSelectedAnswer(q._id) === o._id

              return (
                <span
                  key={o._id}
                  onClick={() => selectAnswer(q._id, o._id)}
                  className={`relative flex cursor-pointer items-center justify-between rounded-xl border p-4 py-3 duration-300 ${
                    isSelected
                      ? 'border-primary bg-primary/25'
                      : 'border-textcolor/5 bg-textcolor/10'
                  } hover:scale-[1.01] hover:bg-primary/25 hover:shadow`}
                >
                  <p>{o.text}</p>

                  {isSelected && <Icon icon="entypo:pin" className="text-xl text-primary" />}
                </span>
              )
            })}
          </div>
        </SwiperSlide>
      ))}

      <div className="mt-16 flex h-full items-center gap-5">
        <button onClick={prevQuizClick} className="btn-primary text-sm md:w-fit">
          Prev ←
        </button>

        {data?.length == activeSlideIndex + 1 ? (
          <button onClick={submitQuestion} className="btn-primary text-sm md:w-fit">
            {isMutating ? 'Submitting...' : '  Submit Quiz ✓'}
          </button>
        ) : (
          <button onClick={nextQuizClick} className="btn-primary text-sm md:w-fit">
            Next →
          </button>
        )}
      </div>
    </Swiper>
  )
}
