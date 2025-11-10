// ✅ Do this instead
import TopNavbar from '@/layouts/topnavbar'
import Footer from '@/layouts/footer'
import { Suspense } from 'react'

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="antialiased">
      <TopNavbar />
      <Suspense>{children}</Suspense>
      <Footer />
    </div>
  )
}
