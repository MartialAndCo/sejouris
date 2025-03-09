"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-2 mx-auto max-w-[600px] rounded-full border border-gray-100 mt-2"
          : "bg-white py-4",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center transition-all duration-300 w-full",
          isScrolled ? "h-14 px-4" : "h-20 px-4",
        )}
      >
        {/* Navigation avec logo intégré */}
        <nav className={cn("flex items-center transition-all duration-300", isScrolled ? "gap-8" : "gap-12")}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SEJOURIS__3_-removebg-preview-zKWlAImi9a4hK0Rr76Bp9V0MT3c8FY.png"
              alt="Sejouris Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-sans text-xl font-bold text-black">Sejouris</span>
          </Link>

          {/* Liens de navigation */}
          <div
            className={cn(
              "hidden md:flex items-center transition-all duration-300",
              isScrolled ? "gap-6 ml-6" : "gap-8 ml-8",
            )}
          >
            {[
              { href: "/faq", label: "FAQ" },
              { href: "/avis-clients", label: "Avis Clients" },
              { href: "/contact", label: "Contactez-nous" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button - Positionné en absolu pour ne pas affecter le centrage */}
        <button className="md:hidden absolute right-8">
          <span className="sr-only">Ouvrir le menu</span>
          {/* Ajouter icône de menu ici */}
        </button>
      </div>
    </header>
  )
}

