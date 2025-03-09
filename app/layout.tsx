import type React from "react"
import ClientComponent from "./client"

export const metadata = {
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientComponent>{children}</ClientComponent>
}



import './globals.css'