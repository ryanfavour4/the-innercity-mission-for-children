// src/app/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Executive Minister- InnerCity Missions for Children',
    template: '%s | My App',
  },
  description: 'Celebrating a life of impact, excellence, and inspiration',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
