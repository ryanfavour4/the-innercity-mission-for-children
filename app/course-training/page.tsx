export const dynamic = 'force-dynamic'
import { Suspense } from 'react'
import CourseTraining from './course-training'

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Loading course…</div>}>
      <CourseTraining />
    </Suspense>
  )
}
