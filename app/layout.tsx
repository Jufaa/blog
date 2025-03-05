import type { Metadata } from "next"
import {  Open_Sans } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600"],
})


export const metadata: Metadata = {
  title: "Jufa | Juan Cruz Francitorra",
  description: "Blog with my life, projects and programming",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} bg-neutral-100`} 
      >
        {children}
      </body>
    </html>
  )
}
