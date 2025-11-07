// ✅ Do this instead
import TopNavbar from '@/layouts/topnavbar'
import Footer from '@/layouts/footer'

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="antialiased">
      <TopNavbar />
      {children}
      <Footer />
    </div>
  )
}
