import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Geist_Mono, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Lucas Emiliano | Full-Stack Developer",
  description: "Developer portfolio - React, Next.js & Node.js specialist",
}

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" })

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className={`font-sans ${geistMono.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
