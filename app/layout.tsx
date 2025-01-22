import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import TopNavbar from '@/layouts/topnavbar'
import Footer from '@/layouts/footer'
import '@/styles/globals.css'
import '@/styles/bg.css'
import '@/styles/tailwind.css'
import '@/styles/animation.css'
import { ThemeProvider } from '@/context/theme'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Home Page - InnerCity Mission 4 Children HQ',
  description:
    'The InnerCity Mission for Children is a full-fledged faith-based Non-Governmental Organisation [NGO] in Consultative Status with the United Nations [UN]; It is under the auspices of Pastor Chris Oyakhilome Foundation.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  keywords: [
    'the innercity mission for children',
    'the innercity mission children',
    'the innercity children',
    'the innercity mission',
    'the innercity',
    'inner city',
    'innercity',
    'Christ Embassy',
    'Believers Loveworld',
    'BLW',
    'Inner',
    'City',
    'NGO',
    'UN',
    'United Nations',
    'Pastor Chris Oyakhilome',
    'Pastor Chris',
    'Oyakhilome',
    'Pastor',
    'Chris',
    'Foundation',
    'Non-Governmental Organisation',
    'Non-Government Organisation',
    'Non-Govt Organisation',
    'Non-Govt Org',
    'Non-Govt Org',
    'Non-Govt Org',
    'Christ',
    'Mission',
    'Children',
    'InnerCity Mission',
    'InnerCity Mission For Children',
    'InnerCity Mission Children',
    'InnerCity Mission 4 Children',
    'InnerCity Mission 4 Children HQ',
    'InnerCity Mission 4 Children Home Page',
    'InnerCity Mission 4 Children Website',
    'InnerCity Mission 4 Children Website Home Page',
    'InnerCity Mission 4 Children Website Home',
    'Donate',
    'Donation',
    'Charity',
    'Free school for children',
    'Child poverty',
    'Child education',
    'Child welfare',
    'Child sponsorship',
    'Child support',
    'Child care',
    'Child development',
    'Child rights',
    'Child protection',
    'Child advocacy',
    'Humanitarian aid',
    'Humanitarian organization',
    'Non profit organization',
    'Charity organization',
    'Christian charity',
    'Faith based charity',
    'International charity',
    'Global charity',
    'African charity',
    'Nigerian charity',
    "Children's charity",
    'Education charity',
    'Poverty alleviation',
    'Community development',
    'Social development',
    'Youth empowerment',
    'Child empowerment',
    'Volunteer',
    'Volunteering',
    'Make a difference',
    'Give back',
    'Support children',
    'Help children',
    'Transform lives',
    'Change lives',
    'Better future',
    'Child hunger',
    'Food security',
    'Education access',
    'Quality education',
    'School supplies',
    'School feeding',
    'Child healthcare',
    'Medical aid',
    'Emergency relief',
    'Disaster relief',
    'Community service',
    'Social impact',
    'Social change',
    'Sustainable development',
    'SDGs',
    'Global goals',
  ],
  authors: [
    {
      name: 'The InnerCity Mission For Children',
      url: 'https://theinnercitymission.ngo',
    },
  ],
  publisher: 'The InnerCity Mission For Children',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-video-preview': -1,
    'max-snippet': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
    },
  },
  appleWebApp: {
    title: 'Home Page - InnerCity Mission HQ',
    statusBarStyle: 'black-translucent',
  },
  // verification: {
  //   google: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  // },
  // openGraph: {
  //   title: 'Home Page - InnerCity Mission HQ',
  //   description:
  //     'The InnerCity Mission for Children is a full-fledged faith-based Non-Governmental Organisation [NGO] in Consultative Status with the United Nations [UN]; It is under the auspices of Pastor Chris Oyakhilome Foundation.',
  //   type: 'website',
  //   locale: 'en_US',
  //   url: 'https://theinnercitymission.ngo',
  //   siteName: 'The InnerCity Mission For Children',
  //   images: [
  //     {
  //       url: '/image.png',
  //       width: 1200,
  //       height: 630,
  //       alt: 'The InnerCity Mission For Children',
  //     },
  //   ],
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Home Page - InnerCity Mission HQ',
  //   description: 'Generated by create next app',
  //   creator: '@innercityhq',
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} hidden antialiased`}
          suppressHydrationWarning
        >
          <TopNavbar />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}
