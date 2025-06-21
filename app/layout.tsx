import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { PageTransition } from "@/components/ui/page-transition"

const poppins = Poppins({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "N_OW AI - Healthcare AI Solutions",
  description: "Transform your healthcare practice with AI-powered automation solutions",
    generator: 'v0.dev'
}

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
