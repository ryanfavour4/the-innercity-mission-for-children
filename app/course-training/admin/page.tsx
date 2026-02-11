'use client'
import { getCoursesService } from '@/services/course-training/courses.service'
import useSWRImmutable from 'swr/immutable'

const headers = [
  // "DONATION TYPE",
  'FOOD NAME',
  'MEASUREMENT UNIT',
  'DONOR CONTACT',
  'QUANTITY',
  // "MEALS EQUIVALENT",
  'TOTAL MEALS',
  'TOTAL ITEMS',
  'STATUS',
  'DATE ADDED',
  'ACTION',
]

export default function AdminPage() {
  const { data, isLoading } = useSWRImmutable('courses', getCoursesService)

  return (
    <div className="">
      <br />
      <div className="container px-2 pb-8">
        <div className="bg-light px-2">
          {/* create food item */}
          <div className="mb-6 flex items-center justify-between px-4 py-3 md:px-0">
            <div className="flex flex-col leading-none">
              <h2 className="text-xl font-semibold text-textcolor/75">Donation Records</h2>
              <p className="max-w-md font-medium text-textcolor/50">
                See all the donation records.
              </p>
            </div>
          </div>

          <div className="mb-6 mt-3 flex flex-wrap gap-1.5">
            <div className="flex w-full max-w-[10rem] flex-col gap-2 rounded-md border border-primary/25 px-5 py-3 shadow-sm">
              <h4 className="text-xs font-semibold text-textcolor/70">Total Donations</h4>
              {/* <p className="text-2xl font-semibold">{data?.length || 0}</p> */}
            </div>
          </div>

          {/* food items records */}
          <div className="mt-4 overflow-hidden lg:col-span-8">
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

                  <tr className="cursor-pointer text-sm even:bg-textcolor/5 hover:bg-primary/10">
                    <>
                      <td className="px-4 py-2.5 text-left">
                        <p className="flex items-center gap-1">ipon-</p>
                      </td>
                      <td className="px-4 py-2.5 text-left">
                        <p className="flex items-center gap-1">lowieno</p>
                      </td>
                      <td className="px-4 py-2.5 text-left">weoj</td>
                      <td className="px-4 py-2.5 text-left">iweh</td>
                      <td className="px-4 py-2.5 text-left">oufejd</td>
                    </>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
