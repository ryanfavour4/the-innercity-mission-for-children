'use client'
import Footer from '@/layouts/footer'
import Image from 'next/image'
import logo from '@/public/assets/icons/educators-certification-program-logo.png'

import Link from 'next/link'
import useSWRImmutable from 'swr/immutable'
import { decryptClient } from '@/utils/crypt.client'
import { useStorageListener } from '@/hooks/use-storage'
import { IProfileRes } from '@/services/course-training/types'
import { postLogoutService } from '@/services/course-training/auth.service'
import useSWRMutation from 'swr/mutation'
import { formatDate } from '@/utils/format-date'
import { getProgressService } from '@/services/course-training/progress.service'
import StatusIndicator from '@/components/status-indicator'

const headers = [
  'USER NAME',
  'PROGRESS SCORE',
  'TOTAL CLASSES',
  'CLASSES COMPLETED',
  'PROGRESS RATING',
  'COMPLETED STATUS',
  'STARTED ON',
  'LAST SEEN ON',
]

export default function AdminPage() {
  const { data, isLoading } = useSWRImmutable('/progress', getProgressService)
  const { trigger } = useSWRMutation('/auth/signout', postLogoutService)
  const profileSS: IProfileRes | null = decryptClient(
    useStorageListener('course-training-profile') || '',
  )

  return (
    <div className="">
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
        <section className="container px-3 py-4">
          <figure className="flex w-full max-w-xs flex-col gap-4 rounded-xl border border-primary/25 bg-white p-4 shadow">
            <figcaption>Total Progress:</figcaption>
            <figcaption className="text-2xl font-extrabold">
              {data?.length}.00<small className="text-sm font-medium"> Progress Tracked</small>
            </figcaption>
          </figure>
        </section>

        {/* food items records */}
        <main className="container mt-4 overflow-hidden px-3 pb-4 lg:col-span-8">
          {/* TABLE SECTION */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg bg-white p-4">
              <thead className="bg-primary text-light">
                <tr className="space-x-40">
                  {headers.map((header) => (
                    <th
                      key={header}
                      className="text-nowrap px-4 py-4 text-left text-xs font-bold first:rounded-l-lg last:rounded-r-lg"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {!data?.length && (
                  <tr className="text-center">
                    <td colSpan={headers.length} className="py-10">
                      <p className="text-sm font-semibold text-textcolor/50">
                        {isLoading ? 'Loading donations...' : 'No donation records found'}
                      </p>
                    </td>
                  </tr>
                )}

                {data?.map((user) => (
                  <tr
                    key={user._id}
                    className="cursor-pointer text-sm even:bg-textcolor/5 hover:bg-primary/10"
                  >
                    <td className="px-4 py-2.5 text-left">
                      <p className="flex items-center gap-1">{user.userId.name}</p>
                    </td>
                    <td className="px-4 py-2.5 text-left">
                      <p className="flex items-center gap-1">{Math.ceil(user.progressPercent)}%</p>
                    </td>
                    <td className="px-4 py-2.5 text-left">
                      <p className="flex items-center gap-1 capitalize">
                        {user.totalClasses} Classes
                      </p>
                    </td>
                    <td className="px-4 py-2.5 text-left">
                      <p className="flex items-center gap-1 capitalize">
                        {user.completedClasses} Classes
                      </p>
                    </td>
                    <td className="px-4 py-2.5 text-left">
                      <p className="flex items-center gap-1 capitalize">
                        <StatusIndicator
                          statusIndicator={
                            Math.ceil(user.progressPercent) > 90
                              ? 'Done'
                              : Math.ceil(user.progressPercent) > 50
                                ? 'Almost There'
                                : 'Nowhere Near'
                          }
                        />
                      </p>
                    </td>
                    <td className="px-4 py-2.5 text-left">
                      <p className="flex items-center gap-1 capitalize">
                        <StatusIndicator statusIndicator={user.isCompleted} />
                      </p>
                    </td>
                    <td className="px-4 py-2.5 text-left">
                      <p className="flex items-center gap-1">
                        {formatDate(user.createdAt || '').commaDateFormat}
                      </p>
                    </td>
                    <td className="px-4 py-2.5 text-left">
                      <p className="flex items-center gap-1">
                        {formatDate(user.updatedAt || '').commaDateFormat}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
