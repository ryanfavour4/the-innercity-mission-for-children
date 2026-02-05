'use client'

import Image from 'next/image'
import logo from '@/public/assets/icons/educators-cdrtification-program-logo.png'
import { decryptClient } from '@/utils/crypt.client'
import { IProfileRes, SwrMutateType } from '@/services/course-training/types'
import { useStorageListener } from '@/hooks/use-storage'
import Link from 'next/link'
import { postLogoutService } from '@/services/course-training/auth.service'
import useSWRMutation from 'swr/mutation'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import CertificateImage from './certificate-image'
import { toast } from 'react-toastify'
import { useRouter, useSearchParams } from 'next/navigation'
import { postCreateCertificateService } from '@/services/course-training/certificate.service'
import { getCourseByIdService } from '@/services/course-training/courses.service'
import useSWRImmutable from 'swr/immutable'
import LoadingScreen from '@/layouts/loading'

export default function CertificatePage() {
  const navigate = useRouter()
  const searchParams = useSearchParams()
  const courseId = searchParams.get('course')
  const [name, setName] = useState('')
  const [isEligible, setIsEligible] = useState(false)
  const { trigger } = useSWRMutation('/auth/signout', postLogoutService)
  const { data, isLoading } = useSWRImmutable(`courses/id/${courseId}`, () =>
    getCourseByIdService({ id: courseId || '' }),
  )

  const postCreateCertificateSwrMutate: SwrMutateType<{
    courseId: string
    certificateName: string
  }> = (_, { arg }) => postCreateCertificateService(arg)
  const { trigger: triggerCreateCertificate, isMutating } = useSWRMutation(
    '/certificates',
    postCreateCertificateSwrMutate,
  )
  const profileSS: IProfileRes | null = decryptClient(
    useStorageListener('course-training-profile') || '',
  )

  const submitCreateCertificate = () => {
    if (!courseId) return

    triggerCreateCertificate({ certificateName: name, courseId })
      .then((res) => {
        console.log(res)
        toast.success(`Congratulations Champion`)
        setIsEligible(true)
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          toast.error('Please login to continue your course')
          navigate.replace('/course-training/auth')
        }
        toast.error(err.response.data.message)
        console.log(err)
      })
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen">
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

      {/* Back to Home Link */}
      <div className="container px-2">
        <Link
          href="/course-training"
          className="mr-auto flex items-center gap-2 py-4 text-base text-textcolor/75 transition hover:text-primary"
        >
          <Icon icon="lucide:arrow-left" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="container flex flex-col gap-4 px-2 md:grid md:grid-cols-5">
        {/* Form */}
        <section className="col-span-2 space-y-4 rounded-3xl border border-gray-100 bg-light px-4 py-8 shadow-lg md:p-10">
          <h1 className="text-xl font-bold text-dark md:text-3xl">Certificate Of Completion</h1>
          <p className="mt-2 text-base text-textcolor/75">
            Write your name exactly how you would want to see it in your certificate
          </p>
          <div>
            <label className="mb-1 ml-1 block text-sm font-semibold text-gray-700">Full Name</label>
            <div className="relative">
              <Icon
                icon="lucide:user"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="John Doe"
                className="bg-gray-50 w-full rounded-2xl border border-gray-200 py-3.5 pl-11 pr-4 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-blue-500"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <button
            disabled={!name || isMutating}
            className="btn-primary mt-10 flex w-full items-center justify-center shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
            onClick={submitCreateCertificate}
          >
            {isMutating && <Icon icon={'codex:loader'} className="text-2xl" />}
            Get Certificate
          </button>
        </section>

        {/* Certificate */}
        <div className="col-span-3 space-y-4 rounded-3xl border border-gray-100 bg-light px-4 py-8 shadow-lg md:p-10">
          <h1 className="text-xl font-bold text-dark md:text-3xl">
            {/* ICM Education Certification program 101 */}
            {data?.title}
          </h1>
          <p className="mt-2 text-base text-textcolor/75">
            Please note these certificates will always be scanned for authenticity
          </p>
          <CertificateImage name={name} downloadable={isEligible} />
        </div>
      </div>
    </div>
  )
}
