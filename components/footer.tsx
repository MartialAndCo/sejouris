import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container max-w-7xl mx-auto py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl text-primary">
              Sejouris
            </Link>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/politique-de-confidentialite" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions légales
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sejouris. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  )
}

