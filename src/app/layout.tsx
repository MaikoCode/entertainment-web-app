import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

const outfit = Outfit({
  subsets: ['latin'],
  weight: ["300", "500"],
  variable: '--font-outfit'
})


export const metadata: Metadata = {
  title: 'Entertainment Web App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={`${outfit.variable} bg-deep-dark text-white`}>
        {children}
      </body>
    </html>
  )
}
