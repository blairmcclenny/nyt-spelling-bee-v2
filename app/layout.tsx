import type { Metadata } from "next"
import { Libre_Franklin, Roboto_Slab } from "next/font/google"
import "./globals.css"

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin-sans",
  subsets: ["latin"],
})

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab-serif",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Spelling Bee",
  description: "A fun word puzzle game",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreFranklin.variable} ${robotoSlab.variable} antialiased`}
      >
        <div className="font-sans">{children}</div>
      </body>
    </html>
  )
}
