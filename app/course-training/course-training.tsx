'use client'
import Image from 'next/image'
import Link from 'next/link'
import logoDefault from '@/public/assets/icons/logo-black-text.png'
import { MenuFriesIcon } from '@/components/svgs'
import { useEffect, useState } from 'react'
import { ClassesSidebar, QuizzesSlider } from './section'
import VideoPlayer from '@/components/video-player'
import { useRouter, useSearchParams } from 'next/navigation'
import { getClassesByCourseIdService } from '@/services/course-training/classes.service'
import { IGetClassesByCourseIdService } from '@/services/course-training/types'
import { toast } from 'react-toastify'
import useSWR from 'swr'
import { useHasMounted } from '@/hooks/use-mounted'

export default function CourseTraining() {
  const hasMounted = useHasMounted()
  const searchParams = useSearchParams()
  const classId = searchParams.get('class')
  const courseId = searchParams.get('course')
  const navigate = useRouter()
  const [activeClass, setActiveClass] = useState<IGetClassesByCourseIdService | null>(null)
  const { data: classData, isLoading: classIsLoading } = useSWR('classes/id', () =>
    getClassesByCourseIdService({ id: courseId || '' }),
  )
  const [navOpen, setNavOpen] = useState(false)
  const [activeScreen, setActiveScreen] = useState<'quiz' | 'video'>('video')

  useEffect(() => {
    if (!hasMounted) return
    if (courseId !== null) return

    const t = setTimeout(() => {
      toast.warn('Please select a course from the options below')
      navigate.replace('/course-training/home#courses')
    }, 300)

    return () => clearTimeout(t)
  }, [courseId, hasMounted, navigate])

  useEffect(() => {
    console.log(classId)
  }, [classId])

  useEffect(() => {
    console.log(courseId)
  }, [courseId])

  useEffect(() => {
    console.log(activeClass)
  }, [activeClass])

  if (!hasMounted) {
    return <div className="p-6">Loading course…</div>
  }

  return (
    <>
      <div className="flex h-screen bg-ghost-white">
        {/* Sidebar - Navigation */}
        <ClassesSidebar
          setActiveClass={setActiveClass}
          activeClass={activeClass}
          classes={classData || []}
          classIsLoading={classIsLoading}
          navOpen={navOpen}
        />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-2 pt-20 md:p-6 md:pt-6 lg:p-10">
          <nav className="fixed left-0 right-0 top-0 z-20 flex h-fit items-center justify-between bg-light px-2 py-2 md:hidden">
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
              <h1 className="text-lg font-bold text-dark md:text-2xl">{activeClass?.title}</h1>
              <p className="mt-1 text-sm text-textcolor/75 md:mt-2 md:text-base">
                <span>{activeClass?.description}</span> <b> •</b>{' '}
                <span>Module {activeClass?.order}</span>
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
              {activeScreen == 'video' ? (
                <VideoPlayer thumb={''} src={activeClass?.videoUrl || ''} className="max-w-full" />
              ) : (
                <QuizzesSlider setActiveClass={setActiveClass} activeClass={activeClass} />
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-textcolor/25 bg-light p-3 md:p-5">
              {activeScreen == 'video' ? (
                <button onClick={() => setActiveScreen('quiz')} className="btn-primary md:w-fit">
                  Start Quiz
                </button>
              ) : (
                <button onClick={() => setActiveScreen('video')} className="btn-primary md:w-fit">
                  Back to Video
                </button>
              )}
              <button className="btn border border-textcolor/25 text-base text-textcolor md:w-fit">
                Next Lesson →
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
