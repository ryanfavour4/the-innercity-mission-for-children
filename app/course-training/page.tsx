'use client'
import Image from 'next/image'
import Link from 'next/link'
import logoDefault from '@/public/assets/icons/logo-black-text.png'
import { MenuFriesIcon } from '@/components/svgs'
import { useState } from 'react'
import { CourseSidebar } from './section'
import VideoPlayer from '@/components/video-player'

export default function CourseTraining() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="flex h-screen bg-ghost-white">
      {/* Sidebar - Navigation */}
      <CourseSidebar navOpen={navOpen} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 pt-16 md:pt-6 lg:p-10">
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

        <div className="mx-auto max-w-5xl space-y-6">
          <header>
            <h1 className="text-2xl font-bold text-dark">Introduction to App Router</h1>
            <p className="mt-2 text-base text-textcolor/75">
              Modern Web Development with Next.js • Module 1
            </p>
          </header>

          {/* Progress */}
          <section className="rounded-xl bg-light p-4 shadow">
            <div className="mb-2 flex justify-between text-sm font-medium">
              <span>Overall Progress</span>
              <span>10%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-ghost-white">
              <div className="h-2 rounded-full bg-primary" style={{ width: `50%` }} />
            </div>
          </section>

          {/* Video or Quiz Toggle */}
          <div className="aspect-video overflow-hidden rounded-2xl bg-light text-base shadow-2xl transition-all">
            <VideoPlayer
              src="https://player.vimeo.com/video/1052568231?h=6234489652"
              className="max-w-full"
            />
          </div>

          <div className="flex items-center justify-between rounded-xl border border-textcolor/25 bg-light p-5">
            <button className="btn-primary w-fit text-base">Back to Video</button>
            <button className="btn w-fit border border-textcolor/25 text-base text-textcolor">
              Next Lesson →
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
