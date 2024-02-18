import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'


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
    <html lang="en" className='scroll-smooth'>
      {/* <body className={inter.className}>{children}</body> */}
      <body className={`${outfit.variable} bg-deep-dark text-white lg:p-4 w-full min-h-screen container mx-auto`}>
        <div className='flex flex-col lg:flex-row overflow-x-hidden'>
            <div className='lg:w-[9%]'>
              <NavBar />
            </div>
          <div>
            {/* <SearchBar /> */}
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
