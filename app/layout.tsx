import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import "./globals.css"
import { Suspense } from "react"
import { CartProvider } from "@/lib/cart-context"
import { FavoritesProvider } from "@/lib/favorites-context"

export const metadata: Metadata = {
  title: "PhoneHub - Premium Smartphones & Accessories",
  description:
    "Discover the latest smartphones, accessories, and tech innovations at PhoneHub. Premium devices with exceptional service.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <CartProvider>
          <FavoritesProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <Navigation />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </Suspense>
          </FavoritesProvider>
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
