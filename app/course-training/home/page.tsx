'use client'
import { useStorageListener } from '@/hooks/use-storage'
import Footer from '@/layouts/footer'
import logo from '@/public/assets/icons/educators-cdrtification-program-logo.png'
import { postLogoutService } from '@/services/course-training/auth.service'
import { getCoursesSubModulesService } from '@/services/course-training/courses.service'
import { IProfileRes } from '@/services/course-training/types'
import { decryptClient } from '@/utils/crypt.client'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import useSWRImmutable from 'swr/immutable'
import useSWRMutation from 'swr/mutation'

export default function LandingPage() {
  const { data, isLoading } = useSWRImmutable('courses/sub-modules', getCoursesSubModulesService)
  const { trigger } = useSWRMutation('/auth/signout', postLogoutService)
  const profileSS: IProfileRes | null = decryptClient(
    useStorageListener('course-training-profile') || '',
  )

  return (
    <div className="min-h-screen bg-light">
      {/* Navigation - Keep it simple */}
      <nav className="bg-light shadow">
        <div className="container mx-auto flex items-center justify-between px-2.5 py-2">
          <span className="flex flex-col items-center font-bold tracking-tighter">
            <Image
              src={logo}
              unoptimized
              alt="logo"
              className="w-12 md:w-16"
              width={100}
              height={50}
            />
          </span>
          {profileSS ? (
            <div className="flex items-center justify-center gap-2">
              <small className="flex aspect-2 size-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-light">
                {profileSS.user.name[0]}
              </small>
              <button
                onClick={() => trigger().finally(() => window.location.reload())}
                className="btn w-fit bg-error/25 text-sm font-medium text-error transition"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link href={'/course-training/auth'} className="btn-primary w-fit transition">
              Get Started
            </Link>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="border-b bg-primary/15 px-8 pb-24 pt-16 text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
          Take The <br />
          <span className="text-primary">ICM Educators Certification</span> <br /> Program
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-base text-textcolor/75">
          Stop watching endless tutorials. Start building real projects with our industry-led
          courses and earn certified credentials.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={'/course-training/auth'} className="btn-primary px-12 md:w-fit">
            Sign Up
          </Link>
        </div>
      </header>

      {/* Course Section */}
      <section id="courses" className="bg-gray-50 px-3 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5 md:mb-12">
            <div>
              <h2 className="mb-2 text-xl font-bold md:text-3xl">Certification Courses</h2>
              <p className="text-textcolor/75">Pick a path and start your journey today.</p>
            </div>
            <button className="hidden items-center gap-1 font-semibold text-primary">
              View all <Icon icon="lucide:arrow-right" />
            </button>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {isLoading && [1, 2, 3].map((i) => <CourseCardSkeleton key={i} />)}

            {data?.map((course) => (
              <CourseCard
                key={course._id}
                id={course._id}
                title={course.title}
                description={course.description}
                quizzes={`${course.questionsCount} Quizzes`}
                level={`${course.classesCount} Classes`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Certificate Section */}
      <section className="container mx-auto bg-primary px-8 py-16 text-light md:rounded-xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="relative">
            <div className="aspect-square bg-blue-100 flex items-center justify-center overflow-hidden rounded-3xl p-12">
              {/* Just a visual placeholder for a certificate */}
              <div className="rounded-lg border-t-8 border-accent bg-light p-8 text-center shadow-2xl">
                <Icon icon="lucide:award" className="text-600 mx-auto mb-4 text-6xl text-accent" />
                <div className="mx-auto mb-2 h-4 w-32 rounded-full bg-textcolor/50" />
                <div className="mx-auto h-2 w-20 rounded-full bg-textcolor/50" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 flex items-center gap-4 rounded-2xl bg-white p-6 shadow-xl">
              <Icon icon="lucide:check-circle" className="text-3xl text-green-500" />
              <div>
                <p className="font-bold text-dark"> I.C.M Recognized</p>
                <p className="text-sm text-gray-500">Verified Certificates</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-4xl font-bold">Equip your heart and hands for impact.</h2>
            <ul className="space-y-6">
              {[
                {
                  icon: 'lucide:zap',
                  text: 'Mission-Ready Training: Access specialized tools designed for underserved learning centers.',
                },
                {
                  icon: 'lucide:users',
                  text: 'Join a Community of Grace: Connect with 1k+ educators dedicated to transforming lives.',
                },
                {
                  icon: 'lucide:file-badge',
                  text: 'Certified for Service: Receive a recognized certificate as a testament to your commitment.',
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="rounded-lg bg-light p-2">
                    <Icon icon={item.icon} className="text-xl text-primary" />
                  </div>
                  <p className="text-lg">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-gray-100 bg-white px-8 py-24">
        <div className="mx-auto mb-16 max-w-7xl text-center">
          <h2 className="text-3xl font-bold">What our students say</h2>
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Testimonial
            quote="The UI/UX course was worth every penny. I landed my first junior role within a month."
            author="Sarah J."
          />
          <Testimonial
            quote="Practical, hands-on, and no fluff. Exactly what I was looking for."
            author="David K."
          />
          <Testimonial
            quote="The community support is insane. You're never stuck for long."
            author="Michael R."
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
// Skeleton Loading Component
const CourseCardSkeleton = () => (
  <>
    <div className="animate-pulse rounded-xl border border-textcolor/25 bg-light p-6 shadow-sm">
      <div className="mb-4 h-12 w-12 rounded-lg bg-textcolor" />
      <div className="mb-2 h-6 w-3/4 rounded bg-textcolor" />
      <div className="flex gap-4">
        <div className="h-4 w-1/2 rounded bg-textcolor" />
        <div className="h-4 w-1/2 rounded bg-textcolor" />
      </div>
    </div>
  </>
)

// Reusable Course Card Component
const CourseCard = ({
  title,
  description,
  quizzes,
  level,
  id,
}: {
  title: string
  description: string
  quizzes: string
  level: string
  id: string
}) => (
  <Link
    href={`/course-training?course=${id}`}
    className="rounded-xl border border-textcolor/25 bg-light p-6 shadow-sm transition-shadow hover:shadow-md"
  >
    <div className="flex items-center gap-2">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/25">
        <Icon icon="lucide:book-open" className="text-xl text-primary" />
      </div>
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
    </div>
    <p className="ellipsis-3 mb-3 text-base text-textcolor/75">{description}</p>
    <div className="flex items-center gap-4 text-sm font-semibold text-textcolor/75">
      <span className="flex items-center gap-1">
        <Icon icon="fluent:quiz-28-regular" /> {quizzes}
      </span>
      <span className="flex items-center gap-1">
        <Icon icon="lucide:bar-chart" /> {level}
      </span>
    </div>
  </Link>
)

// Reusable Testimonial Card
const Testimonial = ({ quote, author }: { quote: string; author: string }) => (
  <div className="bg-gray-50 relative rounded-3xl p-8 italic text-gray-700">
    <Icon icon="ri:double-quotes-l" className="absolute left-4 top-4 text-4xl text-gray-200" />
    <p className="relative z-10 mb-4">&quot;{quote}&quot;</p>
    <p className="font-bold not-italic text-gray-900">— {author}</p>
  </div>
)
