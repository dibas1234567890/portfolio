import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Dibas Pratap Basnet - AI/ML Engineer",
  description: "AI/ML Engineer specializing in LLM-driven applications and automation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-black text-white antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
          <Navigation />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
