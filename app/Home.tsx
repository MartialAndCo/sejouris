"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Clock, Shield, Star, PhoneCall, Mail, MapPin } from "lucide-react"
import TrustSection from "@/components/trust-section"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

import HowItWorks from "@/components/HowItWorks"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Home({
  leftImage = "/placeholder.svg",
  rightImage = "/placeholder.svg",
}: {
  leftImage?: string
  rightImage?: string
}) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <AnimatePresence>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="w-full py-20 md:py-32 bg-white overflow-hidden relative"
        id="accueil"
      >
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 md:left-20 w-24 h-24 bg-blue-50 rounded-full opacity-70 blur-xl" />
        <div className="absolute bottom-20 right-10 md:right-20 w-32 h-32 bg-blue-50 rounded-full opacity-70 blur-xl" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/5 rounded-full opacity-70 blur-md" />
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-primary/5 rounded-full opacity-70 blur-md" />

        {/* Floating icons */}
        <motion.div
          className="absolute top-1/4 left-[10%] hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Shield className="h-8 w-8 text-primary/80" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-[10%] hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Check className="h-8 w-8 text-primary/80" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-2/5 right-[20%] hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Clock className="h-8 w-8 text-primary/80" />
          </div>
        </motion.div>

        <div className="container max-w-[1920px] mx-auto">
          {/* Stats Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-10 right-10 md:right-20 z-10 hidden md:block"
          >
            <div className="flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full shadow-sm">
              <Star className="w-4 h-4 fill-primary" />
              <span className="text-sm font-medium">+35% de revenus locatifs</span>
            </div>
          </motion.div>

          <div className="grid gap-8 items-center">
            {/* Center Content */}
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
              className="text-center mx-auto max-w-4xl px-4 relative"
            >
              {/* Trust indicators */}
              <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-blue-50/70 px-5 py-2 rounded-full inline-flex items-center">
                  <div className="flex -space-x-1 mr-3">
                    {[
                      "https://randomuser.me/api/portraits/women/12.jpg",
                      "https://randomuser.me/api/portraits/men/32.jpg",
                      "https://randomuser.me/api/portraits/women/44.jpg",
                    ].map((src, i) => (
                      <Image
                        key={i}
                        src={src || "/placeholder.svg"}
                        alt={`Client satisfait ${i + 1}`}
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-primary">+150 propriétaires satisfaits</span>
                </div>
              </motion.div>

              <span className="block text-gray-600 mb-4 text-lg">
                Votre partenaire de confiance en gestion locative
              </span>
              <motion.h1
                className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[1.1] mb-8 tracking-tight relative"
                variants={slideUp}
              >
                <span className="text-black">Louez votre bien</span> <span className="text-primary">sans risque</span>
                {/* Decorative elements around title */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/5 rounded-full hidden md:block" />
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/5 rounded-full hidden md:block" />
              </motion.h1>
              <motion.p
                variants={slideUp}
                className="text-gray-600 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-normal leading-relaxed"
              >
                Notre solution clé en main sécurise vos revenus locatifs et vous libère de toutes les contraintes de
                gestion.
              </motion.p>

              <motion.div variants={slideUp} className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  { icon: Shield, text: "100% sécurisé" },
                  { icon: Check, text: "Zéro gestion" },
                  { icon: Clock, text: "Rapide & Simple" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-blue-50 text-primary px-5 py-2 rounded-full">
                    <feature.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={slideUp} className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 shadow-md"
                  onClick={() => {
                    const contactSection = document.getElementById("contact")
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Je veux louer mon bien rapidement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              {/* Social proof */}
              <motion.div
                className="mt-12 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 ml-0.5" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 ml-0.5" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 ml-0.5" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 ml-0.5" />
                    <span className="ml-3">4.9/5</span>
                  </div>
                  <span className="h-4 w-px bg-gray-300"></span>
                  <span>Recommandé par 98% de nos clients</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trust Building Section */}
      <TrustSection />

      {/* Benefits Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="w-full py-6 md:py-12 lg:py-16 gradient-primary"
      >
        <div className="container px-4 md:px-6">
          <motion.div variants={slideUp} className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Les 3 bénéfices clés de notre solution
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Découvrez pourquoi des centaines de propriétaires nous font confiance
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 md:gap-12"
          >
            {[
              { title: "Loyer garanti à 100%", description: "Fini les impayés et les vacances locatives" },
              { title: "Aucune gestion", description: "Nous nous occupons de tout" },
              { title: "Contrat sécurisé", description: "Une solution professionnelle et pérenne" },
            ].map((benefit, index) => (
              <motion.div key={index} variants={slideUp}>
                <Card className="relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 bg-primary/10 rounded-full blur-2xl" />
                  <CardHeader>
                    <CardTitle className="text-primary">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      {index === 0 &&
                        "Recevez votre loyer tous les mois, à date fixe, sans exception ni retard. Nous prenons en charge tous les risques."}
                      {index === 1 &&
                        "Ménage, entretien, gestion des locataires... Vous n'avez plus rien à faire. Profitez simplement de votre revenu."}
                      {index === 2 &&
                        "Notre bail commercial vous offre une sécurité juridique optimale et une relation durable, sans mauvaise surprise."}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pourquoi nous choisir Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 gradient-secondary" id="pourquoi-nous-choisir">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Pourquoi nous choisir ?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Découvrez notre modèle de sous-location professionnelle qui révolutionne la gestion locative
              </p>
            </div>
          </div>

          <div className="grid gap-6 py-10 px-4 md:px-8 mx-auto max-w-7xl lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary">
                  Notre modèle de sous-location professionnelle
                </h3>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Une solution clé en main pour les propriétaires qui souhaitent maximiser leurs revenus sans
                  contraintes
                </p>
              </div>
              <ul className="grid gap-3 py-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Nous louons votre bien avec un bail commercial</p>
                    <p className="text-sm text-muted-foreground">Un contrat sécurisé qui protège vos intérêts</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Nous payons votre loyer chaque mois, quoi qu'il arrive</p>
                    <p className="text-sm text-muted-foreground">Fini les impayés et les vacances locatives</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Nous nous occupons de tout</p>
                    <p className="text-sm text-muted-foreground">
                      Gestion des séjours, ménage, maintenance... vous n'avez plus rien à faire
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Aucune mauvaise surprise</p>
                    <p className="text-sm text-muted-foreground">
                      Pas d'impayés, pas de locataires à gérer, pas de dégradations
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f368f3e2-9313-47ab-bc6f-f9594c33c8c1-riPsHFqe6wsnceZYj7nUmswHgdJOrr.jpeg"
              alt="Appartement moderne avec cuisine équipée et salle à manger design"
              width={600}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
          </div>

          <div className="pt-10">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8 text-primary">
              Comparatif des solutions
            </h3>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 md:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Location classique</CardTitle>
                  <CardDescription>La solution traditionnelle</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground">
                      ✕
                    </div>
                    <p>Risque d'impayés</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground">
                      ✕
                    </div>
                    <p>Vacance locative possible</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground">
                      ✕
                    </div>
                    <p>Gestion des locataires</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground">
                      ✕
                    </div>
                    <p>Risque de dégradations</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Airbnb en solo</CardTitle>
                  <CardDescription>La gestion par vous-même</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground">
                      ✕
                    </div>
                    <p>Temps consacré important</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground">
                      ✕
                    </div>
                    <p>Stress et contraintes</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground">
                      ✕
                    </div>
                    <p>Logistique complexe</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <p>Revenus potentiellement élevés</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-primary">Sejouris</CardTitle>
                  <CardDescription>La solution optimale</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <p>Loyer garanti à 100%</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <p>Aucune gestion à prévoir</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <p>Contrat sécurisé</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <p>Entretien professionnel</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche Section */}
      <HowItWorks />

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 gradient-primary" id="faq">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Questions fréquentes</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tout ce que vous devez savoir sur notre solution de sous-location professionnelle
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-8 py-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-primary">Qui peut souscrire à l'offre ?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Notre offre s'adresse aux propriétaires de biens immobiliers (appartements, maisons, studios) situés
                    dans des zones à fort potentiel locatif. Nous acceptons les biens meublés ou non meublés, et nous
                    pouvons même prendre en charge l'ameublement si nécessaire. Les biens doivent être en bon état
                    général et respecter les normes de sécurité en vigueur.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-primary">Quel est le type de contrat ?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Nous signons avec vous un bail commercial (ou bail professionnel), généralement d'une durée de 3 ans
                    minimum. Ce type de contrat offre une grande sécurité juridique pour les deux parties et permet
                    d'établir une relation durable. Il définit clairement les responsabilités de chacun et les
                    conditions de notre collaboration.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-primary">Quels sont les risques ?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Notre modèle est conçu pour éliminer les risques pour le propriétaire. Votre loyer est garanti et
                    payé chaque mois, quoi qu'il arrive, même en cas de vacance locative ou de problème avec les
                    sous-locataires. Nous prenons en charge tous les risques liés à la gestion locative et à l'entretien
                    du bien.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-primary">Et si mon bien se détériore ?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Nous nous engageons contractuellement à entretenir votre bien et à le maintenir en bon état. Nous
                    effectuons des visites régulières, des contrôles qualité et prenons en charge toutes les réparations
                    nécessaires. À la fin du contrat, nous vous restituons votre bien dans son état initial, voire
                    amélioré.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-primary">Comment Sejouris gagne de l'argent ?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Notre modèle économique repose sur l'optimisation de la rentabilité de votre bien via des séjours
                    courts (type Airbnb) ou moyens. Grâce à notre expertise et nos outils de gestion, nous sommes
                    capables de générer des revenus supérieurs à ceux d'une location classique, tout en vous
                    garantissant un loyer fixe. La différence constitue notre marge, qui finance notre service
                    tout-inclus.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-primary">
                  Quelle est la durée minimale d'engagement ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Nos contrats sont généralement établis pour une durée minimale de 6 ans, ce qui nous permet
                    d'investir dans votre bien et d'optimiser sa rentabilité sur le long terme. Cette durée nous donne
                    le temps nécessaire pour maximiser le potentiel de votre propriété. Cependant, nous pouvons discuter
                    de conditions particulières en fonction de votre situation et de vos besoins.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-primary">
                  Puis-je récupérer mon bien avant la fin du contrat ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Le contrat prévoit des clauses de sortie anticipée dans certaines situations spécifiques (vente du
                    bien, besoin personnel urgent, etc.). Ces conditions sont clairement définies dans le contrat et
                    peuvent être discutées lors de sa signature.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-primary">Comment est fixé le montant du loyer ?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Le montant du loyer est déterminé après une analyse approfondie du potentiel de votre bien. Nous
                    prenons en compte sa localisation, sa taille, ses équipements, l'état du marché local et notre
                    capacité à générer des revenus via notre modèle de sous-location. Nous vous proposons un loyer
                    garanti qui vous assure un revenu stable et prévisible.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 gradient-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Ce que nos clients disent de nous
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Découvrez les témoignages de propriétaires satisfaits
              </p>
            </div>
          </div>
          <div className="relative mx-auto max-w-7xl py-12">
            <div className="flex items-center justify-end space-x-2 pb-4">
              <Button
                variant="outline"
                size="icon"
                className="testimonial-prev rounded-full"
                onClick={() => {
                  const container = document.querySelector(".testimonial-container")
                  if (container) {
                    container.scrollBy({ left: -320, behavior: "smooth" })
                  }
                }}
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="testimonial-next rounded-full"
                onClick={() => {
                  const container = document.querySelector(".testimonial-container")
                  if (container) {
                    container.scrollBy({ left: 320, behavior: "smooth" })
                  }
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="testimonial-container flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
              {[
                {
                  name: "Marie L.",
                  location: "Propriétaire à Paris",
                  text: "Depuis que j'ai confié mon appartement à Sejouris, je n'ai plus aucun souci. Le loyer est versé à date fixe, et je n'ai plus à gérer les locataires ou les problèmes d'entretien. Une vraie tranquillité d'esprit !",
                },
                {
                  name: "Thomas D.",
                  location: "Propriétaire à Lyon",
                  text: "J'étais sceptique au début, mais après 18 mois de collaboration, je ne peux que recommander Sejouris. Leur professionnalisme est exemplaire, et mon bien est parfaitement entretenu. Un partenariat gagnant-gagnant !",
                },
                {
                  name: "Sophie M.",
                  location: "Propriétaire à Bordeaux",
                  text: "Grâce à Sejouris, mes revenus locatifs ont augmenté de 30% sans aucun effort de ma part. Je recommande vivement leur service à tous les propriétaires qui veulent maximiser leur rendement sans contraintes.",
                },
                {
                  name: "Pierre G.",
                  location: "Propriétaire à Marseille",
                  text: "Après plusieurs mauvaises expériences avec des locataires, j'ai décidé de faire confiance à Sejouris. Résultat : plus de stress, un loyer garanti et un bien parfaitement entretenu. Je ne reviendrai pas en arrière !",
                },
                {
                  name: "Isabelle R.",
                  location: "Propriétaire à Nantes",
                  text: "La transparence et le professionnalisme de l'équipe Sejouris m'ont convaincue. Depuis 2 ans, je perçois mon loyer sans interruption et mon appartement est mieux entretenu qu'avant. Une solution idéale !",
                },
              ].map((testimonial, index) => (
                <div key={index} className="min-w-[300px] md:min-w-[400px] snap-start">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                            ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 italic">"{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 gradient-primary" id="contact">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Contactez-nous
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Obtenez une offre gratuite et sans engagement pour votre bien
              </p>
            </div>
          </div>

          <div className="grid gap-6 py-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-2">
                  Propriétaires, simplifiez-vous la vie
                </div>
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary">
                  Transformez votre bien en revenu passif
                </h3>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Remplissez le formulaire ci-contre pour recevoir une offre personnalisée sous 24h. Notre équipe
                  d'experts vous contactera rapidement pour discuter de votre projet.
                </p>
              </div>

              <div className="grid gap-6 py-4">
                <div className="flex items-start gap-4">
                  <PhoneCall className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium text-primary">Téléphone</h3>
                    <p className="text-sm text-muted-foreground">
                      <Link href="tel:+33695472237" className="hover:text-primary">
                        +33 6 95 47 22 37
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium text-primary">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      <Link href="mailto:contact@sejouris.com" className="hover:text-primary">
                        contact@sejouris.com
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium text-primary">Adresse</h3>
                    <p className="text-sm text-muted-foreground">
                      60 rue François 1er
                      <br />
                      75008 Paris
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium text-primary">Horaires</h3>
                    <p className="text-sm text-muted-foreground">
                      Du lundi au vendredi : 9h - 19h
                      <br />
                      Samedi : 10h - 17h
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-6 bg-white/50 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="italic text-gray-600 mb-2">
                      "Depuis que j'ai confié mon appartement à Sejouris, je n'ai plus aucun souci. Le loyer est versé à
                      date fixe, et je n'ai plus à gérer les locataires."
                    </p>
                    <p className="text-sm font-medium">Marie L. - Propriétaire à Paris</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Obtenir une offre gratuite</CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous pour recevoir une proposition personnalisée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault()

                    // Récupérer le bouton de soumission pour gérer l'état de chargement
                    const submitButton = e.currentTarget.querySelector('button[type="submit"]')
                    if (submitButton) {
                      submitButton.disabled = true
                      submitButton.innerHTML = "Envoi en cours..."
                    }

                    try {
                      // Récupérer les données du formulaire
                      const formData = new FormData(e.currentTarget)

                      // Envoyer les données à Formspree
                      const response = await fetch("https://formspree.io/f/your-formspree-id", {
                        method: "POST",
                        body: formData,
                        headers: {
                          Accept: "application/json",
                        },
                      })

                      const result = await response.json()

                      if (response.ok) {
                        // Afficher un message de succès
                        alert("Merci pour votre message ! Nous vous contacterons dans les plus brefs délais.")
                        // Réinitialiser le formulaire
                        e.currentTarget.reset()
                      } else {
                        // Afficher un message d'erreur
                        alert(
                          "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer ou nous contacter directement par téléphone.",
                        )
                      }
                    } catch (error) {
                      console.error("Erreur lors de l'envoi du formulaire:", error)
                      alert(
                        "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer ou nous contacter directement par téléphone.",
                      )
                    } finally {
                      // Réactiver le bouton de soumission
                      if (submitButton) {
                        submitButton.disabled = false
                        submitButton.innerHTML = "Recevoir une offre"
                      }
                    }
                  }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="prenom" className="text-sm font-medium">
                        Prénom
                      </label>
                      <Input id="prenom" name="prenom" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="nom" className="text-sm font-medium">
                        Nom
                      </label>
                      <Input id="nom" name="nom" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telephone" className="text-sm font-medium">
                      Téléphone
                    </label>
                    <Input id="telephone" name="telephone" type="tel" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="typeBien" className="text-sm font-medium">
                      Type de bien
                    </label>
                    <Select name="typeBien">
                      <SelectTrigger id="typeBien">
                        <SelectValue placeholder="Sélectionnez un type de bien" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="appartement">Appartement</SelectItem>
                        <SelectItem value="maison">Maison</SelectItem>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="localisation" className="text-sm font-medium">
                      Localisation du bien
                    </label>
                    <Input id="localisation" name="localisation" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message (optionnel)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Précisez les caractéristiques de votre bien (surface, nombre de pièces, etc.)"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Recevoir une offre
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    En soumettant ce formulaire, vous acceptez notre{" "}
                    <Link href="/politique-de-confidentialite" className="underline underline-offset-2">
                      politique de confidentialité
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AnimatePresence>
  )
}

