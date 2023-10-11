import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Pagination from '@/components/Pagination'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Car Rent App',
  description: 'Rent Your Car here',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <Pagination/>
        {/* {children} */}
        </body>
    </html>
  )
}
