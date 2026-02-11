'use client'
import Footer from '@/layouts/footer'
import Image from 'next/image'
import logo from '@/public/assets/icons/educators-certification-program-logo.png'
import Link from 'next/link'
import useSWRImmutable from 'swr/immutable'
import { formatDate } from '@/utils/format-date'
import { getCertificatesService } from '@/services/course-training/certificate.service'
import StatusIndicator from '@/components/status-indicator'

const headers = ['CERTIFICATE NAME', 'AVERAGE SCORE', 'SCORE RATING', 'ISSUED', 'COLLECTED ON']

export default function AdminPage() {
  const { data, isLoading } = useSWRImmutable('/certificates', getCertificatesService)

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

            <ul className="flex items-center gap-3 text-primary">
              <li>
                <Link href={'/course-training/admin/users'}>User</Link>
              </li>
              <li>
                <Link href={'/course-training/admin/progress'}>Progress</Link>
              </li>
              <li>
                <Link href={'/course-training/admin/certificates'}>Certificate</Link>
              </li>
            </ul>
          </div>
        </nav>

        <section className="container px-3 py-4">
          <figure className="flex w-full max-w-xs flex-col gap-4 rounded-xl border border-primary/25 bg-white p-4 shadow">
            <figcaption>Total Certs:</figcaption>
            <figcaption className="text-2xl font-extrabold">
              {data?.length}.00<small className="text-sm font-medium"> Certificate issued</small>
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
                      <p className="flex items-center gap-1">{user.certificateName}</p>
                    </td>
                    <td className="px-4 py-2.5 text-left">
                      <p className="flex items-center gap-1">{Math.ceil(user.averageScore)}%</p>
                    </td>
                    <td className="px-4 py-2.5 text-left">
                      <p className="flex items-center gap-1">
                        <StatusIndicator
                          statusIndicator={
                            Math.ceil(user.averageScore) > 70
                              ? 'Excellent'
                              : Math.ceil(user.averageScore) > 50
                                ? 'Average'
                                : 'Failed'
                          }
                        />
                      </p>
                    </td>
                    <td className="px-4 py-2.5 text-left">
                      <p className="flex items-center gap-1 capitalize">{user.issued}</p>
                    </td>

                    <td className="px-4 py-2.5 text-left">
                      <p className="flex items-center gap-1">
                        {formatDate(user.createdAt || '').commaDateFormat}
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
