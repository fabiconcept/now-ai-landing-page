import type React from "react"
import { Poppins } from "next/font/google"
import "./globals.css"
import { PageTransition } from "@/components/ui/page-transition"

import { demoMetadata } from '@/constants/metadata'

export const metadata = demoMetadata

const poppins = Poppins({ subsets: ["latin"], weight: "400" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.cdnfonts.com/css/ds-digital" rel="stylesheet"/>
      </head>
      <body className={poppins.className}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
