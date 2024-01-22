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
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={`${outfit.variable} bg-deep-dark text-white lg:p-4`}>
        <div className='flex flex-col lg:flex-row'>
         
            <NavBar />
            <SearchBar />
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
