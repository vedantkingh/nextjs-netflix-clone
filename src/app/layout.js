import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/app/components/Header"
import { Mulish } from 'next/font/google'
 
const mulish = Mulish({
  weight: ['300','400','500','600','700','800','900'],
  subsets: ['latin'],
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix Clone',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Header/>
      <body className={mulish.className}>{children}</body>
    </>
  )
}
