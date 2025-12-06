import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adryan Michel | Desenvolvedor Full Stack",
  description:
    "Portfolio profissional de Adryan Michel Silveira Evangelista - Desenvolvedor Full Stack especializado em JavaScript, React, Node.js e Luau. 7+ anos de experiência em desenvolvimento.",
  keywords: [
    "Desenvolvedor Full Stack",
    "React",
    "Node.js",
    "JavaScript",
    "Python",
    "Luau",
    "Roblox Developer",
    "Web Developer",
    "Rio Claro",
    "Brasil",
  ],
  authors: [{ name: "Adryan Michel Silveira Evangelista" }],
  creator: "Adryan Michel",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://adryanmichel.dev",
    title: "Adryan Michel | Desenvolvedor Full Stack",
    description:
      "Portfolio profissional - Especialista em JavaScript, React, Node.js e desenvolvimento de jogos com 7+ anos de experiência.",
    siteName: "Adryan Michel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adryan Michel | Desenvolvedor Full Stack",
    description: "Portfolio profissional - Especialista em JavaScript, React, Node.js e desenvolvimento de jogos.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.jpg",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f23" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.jpg" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
