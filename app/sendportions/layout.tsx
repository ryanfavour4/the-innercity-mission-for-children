import TopNavbar from '@/layouts/topnavbar'
import Footer from '@/layouts/footer'
import { ThemeProvider } from '@/context/theme'
import logoSendPortions from '@/public/assets/icons/send-portions-logo.png'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`hidden antialiased`} suppressHydrationWarning>
          <TopNavbar logo={logoSendPortions} primary={'#007853'} />
          {children}
          <Footer />
          <div id="portal"></div>
        </body>
      </ThemeProvider>
    </html>
  )
}
