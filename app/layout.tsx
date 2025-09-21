import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_JP } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script"
import { Suspense } from "react"
import "./globals.css"


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
})

export const metadata: Metadata = {
  title: "未来祀り / Festival of Tomorrow",
  description:
    "In a town run by tradition and AI, a journalist uncovers the truth of a festival that chooses the future.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <Script
          src="https://use.typekit.net/YOUR_PROJECT_ID.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
