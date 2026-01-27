'use client'
import Image from 'next/image'
import Link from 'next/link'
import logoDefault from '@/public/assets/icons/logo-black-text.png'
import { MenuFriesIcon } from '@/components/svgs'
import { useState } from 'react'
import { CourseSidebar } from './section'

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

          {/* Video or Quiz Toggle */}
          <div className="aspect-video overflow-hidden rounded-2xl bg-light text-base shadow-2xl transition-all">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates reiciendis
            delectus, eligendi provident optio dolorem unde aspernatur aperiam aliquam voluptate
            tempora numquam fugiat amet asperiores recusandae. Explicabo aperiam corrupti iure.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi aut dolore autem,
            reprehenderit totam culpa aperiam necessitatibus facilis exercitationem tempore harum
            quas. Officia enim sequi itaque nisi doloribus illo sint. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. At architecto nostrum odit in aliquam incidunt accusamus
            nihil iusto fuga adipisci? Totam beatae quibusdam necessitatibus porro sit obcaecati
            illum fuga temporibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
            iusto quos et minus sint ad minima quidem est quas odio saepe cumque excepturi
            voluptatum doloribus, beatae dolor expedita mollitia impedit.
          </div>

          <div className="flex items-center justify-between rounded-xl border border-textcolor/25 bg-light p-5">
            <button className="btn-primary w-fit text-base">Back to Video</button>
            <button className="rounded-lg border border-slate-300 px-6 py-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
              Next Lesson →
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
