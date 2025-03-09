"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, PhoneCall } from "lucide-react"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/#accueil" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Accueil
          </Link>
          <Link
            href="/#pourquoi-nous-choisir"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Pourquoi nous choisir
          </Link>
          <Link
            href="/#comment-ca-marche"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Comment ça marche
          </Link>
          <Link href="/#faq" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            FAQ
          </Link>
          <Link href="/#contact" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <div className="flex flex-col gap-2 mt-4">
            <Button asChild variant="outline" className="justify-start">
              <Link href="tel:+33123456789" className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4" />
                <span>01 23 45 67 89</span>
              </Link>
            </Button>
            <Button asChild>
              <Link href="/#contact" onClick={() => setOpen(false)}>
                Obtenir une offre
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

