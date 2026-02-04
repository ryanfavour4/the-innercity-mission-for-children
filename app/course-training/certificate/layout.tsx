import { Suspense } from 'react'
import 'react-toastify/dist/ReactToastify.css'

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div className="p-6">Loading course…</div>}>{children}</Suspense>
}
