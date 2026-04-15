import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function NotFound() {
  return (
    <div
      className={
        'flex min-h-screen flex-col items-center justify-center bg-ghost-white p-4 text-center'
      }
    >
      <Icon icon="mdi:alert-circle-outline" className="mb-6 text-8xl text-error md:text-9xl" />
      <h1 className="mb-4 text-6xl font-bold text-textcolor md:text-8xl">404</h1>
      <h2 className="mb-8 text-xl font-medium text-textcolor md:text-2xl">Page Not Found</h2>
      <p className="mb-10 max-w-md text-lg text-textcolor/80 md:text-xl">
        Oops! The page you are looking for does not exist or has been moved. Please check the URL or
        navigate back to the homepage.
      </p>

      <Link className="btn-primary max-w-fit px-8 py-3 hover:bg-accent" href="/">
        Go to Homepage
      </Link>

      {/* You can add an image here for further visual branding, e.g., <img src="/path/to/your-404-image.png" alt="Page Not Found" className="mt-12 max-w-xs md:max-w-sm" /> */}
    </div>
  )
}
