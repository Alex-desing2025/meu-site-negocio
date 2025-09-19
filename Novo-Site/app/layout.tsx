import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Negócio Visível - Seu negócio em destaque no Google",
  description:
    "Apareça no topo das buscas e transforme visibilidade online em clientes reais. SEO local para negócios físicos no Rio de Janeiro e em todo o Brasil.",
  generator: "v0.app",
  keywords: "SEO local, Google Meu Negócio, Rio de Janeiro e em todo o Brasil, marketing digital, visibilidade online",
  authors: [{ name: "Negócio Visível" }],
  openGraph: {
    title: "Negócio Visível - Seu negócio em destaque no Google",
    description: "Apareça no topo das buscas e transforme visibilidade online em clientes reais.",
    type: "website",
    locale: "pt_BR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
