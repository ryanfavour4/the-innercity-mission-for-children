import TopNavbar from '@/layouts/topnavbar'
import Footer from '@/layouts/footer'
import { ThemeProvider } from '@/context/theme'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`hidden antialiased`} suppressHydrationWarning>
          <TopNavbar />
          {children}
          <Footer />
          <div id="portal"></div>
        </body>
      </ThemeProvider>
    </html>
  )
}
