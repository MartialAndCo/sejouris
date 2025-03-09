"use client"

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

// Pour changer les images, modifiez les valeurs par défaut dans la déclaration de la fonction ci-dessus,
// ou passez de nouvelles valeurs lors de l'utilisation du composant, par exemple :
// <Home leftImage="/path/to/new/left-image.jpg" rightImage="/path/to/new/right-image.jpg" />
// export default function Home({
//   leftImage = "/placeholder.svg",
//   rightImage = "/placeholder.svg",
// }: {
//   leftImage?: string
//   rightImage?: string
// }) {
//   const controls = useAnimation()
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible")
//     }
//   }, [controls, inView])

//   return (
//     <AnimatePresence>
//       {/* Hero Section */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={fadeIn}
//         transition={{ duration: 0.5 }}
//         className="w-full py-20 md:py-32 bg-white overflow-hidden"
//         id="accueil"
//       >
//         {/* Navigation */}
//         <div className="container mb-16">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-12">
//               <Link href="/" className="flex items-center gap-2">
//                 <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SEJOURIS__3_-removebg-preview-zKWlAImi9a4hK0Rr76Bp9V0MT3c8FY.png"
//                   alt="Sejouris Logo"
//                   width={48}
//                   height={48}
//                   className="rounded-full"
//                 />
//                 <span className="font-sans text-2xl font-semibold text-primary">Sejouris</span>
//               </Link>
//               <nav className="hidden md:flex items-center gap-8">
//                 <Link href="/#pourquoi-nous-choisir" className="text-gray-600 hover:text-primary">
//                   Pourquoi nous choisir
//                 </Link>
//                 <Link href="/#comment-ca-marche" className="text-gray-600 hover:text-primary">
//                   Comment ça marche
//                 </Link>
//                 <Link href="/#faq" className="text-gray-600 hover:text-primary">
//                   FAQ
//                 </Link>
//               </nav>
//             </div>
//             <div className="hidden md:flex items-center gap-4">
//               <Button variant="ghost" asChild>
//                 <Link href="/login">Se connecter</Link>
//               </Button>
//               <Button className="bg-primary hover:bg-primary/90" asChild>
//                 <Link href="/register">S'inscrire</Link>
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="container max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative">
//           {/* Stats Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0"
//           >
//             <div className="flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full">
//               <ArrowTrendingUpIcon className="w-4 h-4" />
//               <span className="text-sm font-medium">+35% de revenus locatifs</span>
//             </div>
//           </motion.div>

//           <div className="grid gap-8 lg:grid-cols-[1.2fr_minmax(600px,_1.5fr)_1.2fr] items-center">
//             {/* Left Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="hidden lg:block -mx-4"
//             >
//               <Image
//                 src={leftImage || "/placeholder.svg"}
//                 alt="Interface de gestion Sejouris"
//                 width={500}
//                 height={375}
//                 className="rounded-lg shadow-lg w-full h-auto object-cover"
//               />
//               <div className="mt-4 flex items-center gap-2">
//                 <div className="flex -space-x-2">
//                   {[...Array(6)].map((_, i) => (
//                     <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
//                   ))}
//                 </div>
//                 <span className="text-sm font-medium text-gray-600">+150 propriétaires satisfaits</span>
//               </div>
//             </motion.div>

//             {/* Center Content */}
//             <motion.div variants={staggerChildren} initial="hidden" animate="visible" className="text-center lg:px-8">
//               <motion.h1
//                 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight mb-6 w-full max-w-full mx-auto"
//                 variants={slideUp}
//               >
//                 Votre loyer garanti à 100%
//                 <br />
//                 sans gestion ni tracas
//               </motion.h1>
//               <motion.p variants={slideUp} className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-normal">
//                 Notre solution clé en main sécurise vos revenus locatifs et vous libère de toutes les contraintes.
//               </motion.p>

//               <motion.div variants={slideUp} className="flex flex-wrap justify-center gap-4 mb-8">
//                 {[
//                   { icon: Shield, text: "100% sécurisé" },
//                   { icon: Check, text: "Zéro gestion" },
//                   { icon: Clock, text: "Rapide & Simple" },
//                 ].map((feature, index) => (
//                   <div key={index} className="flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full">
//                     <feature.icon className="w-4 h-4" />
//                     <span className="text-sm font-medium">{feature.text}</span>
//                   </div>
//                 ))}
//               </motion.div>

//               <motion.div variants={slideUp}>
//                 <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
//                   Je veux louer mon bien rapidement
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//               </motion.div>
//             </motion.div>

//             {/* Right Image */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="hidden lg:block -mx-4"
//             >
//               <Image
//                 src={rightImage || "/placeholder.svg"}
//                 alt="Dashboard Sejouris"
//                 width={500}
//                 height={375}
//                 className="rounded-lg shadow-lg w-full h-auto object-cover ml-auto"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Benefits Section */}
//       <motion.section
//         ref={ref}
//         initial="hidden"
//         animate={controls}
//         variants={fadeIn}
//         transition={{ duration: 0.5 }}
//         className="w-full py-12 md:py-24 lg:py-32 bg-muted/30"
//       >
//         <div className="container px-4 md:px-6">
//           <motion.div variants={slideUp} className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                 Les 3 bénéfices clés de notre solution
//               </h2>
//               <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Découvrez pourquoi des centaines de propriétaires nous font confiance
//               </p>
//             </div>
//           </motion.div>
//           <motion.div
//             variants={staggerChildren}
//             className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 md:gap-12"
//           >
//             {[
//               { title: "Loyer garanti à 100%", description: "Fini les impayés et les vacances locatives" },
//               { title: "Aucune gestion", description: "Nous nous occupons de tout" },
//               { title: "Contrat sécurisé", description: "Une solution professionnelle et pérenne" },
//             ].map((benefit, index) => (
//               <motion.div key={index} variants={slideUp}>
//                 <Card className="relative overflow-hidden">
//                   <div className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 bg-primary/10 rounded-full blur-2xl" />
//                   <CardHeader>
//                     <CardTitle>{benefit.title}</CardTitle>
//                     <CardDescription>{benefit.description}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <p>
//                       {index === 0 &&
//                         "Recevez votre loyer tous les mois, à date fixe, sans exception ni retard. Nous prenons en charge tous les risques."}
//                       {index === 1 &&
//                         "Ménage, entretien, gestion des locataires... Vous n'avez plus rien à faire. Profitez simplement de votre revenu."}
//                       {index === 2 &&
//                         "Notre bail commercial vous offre une sécurité juridique optimale et une relation durable, sans mauvaise surprise."}
//                     </p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Pourquoi nous choisir Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32" id="pourquoi-nous-choisir">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pourquoi nous choisir ?</h2>
//               <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Découvrez notre modèle de sous-location professionnelle qui révolutionne la gestion locative
//               </p>
//             </div>
//           </div>

//           <div className="grid gap-6 py-10 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
//             <div className="flex flex-col justify-center space-y-4">
//               <div className="space-y-2">
//                 <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
//                   Notre modèle de sous-location professionnelle
//                 </h3>
//                 <p className="max-w-[600px] text-muted-foreground md:text-xl">
//                   Une solution clé en main pour les propriétaires qui souhaitent maximiser leurs revenus sans
//                   contraintes
//                 </p>
//               </div>
//               <ul className="grid gap-3 py-4">
//                 <li className="flex items-start gap-2">
//                   <Check className="h-5 w-5 text-primary" />
//                   <div>
//                     <p className="font-medium">Nous louons votre bien avec un bail commercial</p>
//                     <p className="text-sm text-muted-foreground">Un contrat sécurisé qui protège vos intérêts</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <Check className="h-5 w-5 text-primary" />
//                   <div>
//                     <p className="font-medium">Nous payons votre loyer chaque mois, quoi qu'il arrive</p>
//                     <p className="text-sm text-muted-foreground">Fini les impayés et les vacances locatives</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <Check className="h-5 w-5 text-primary" />
//                   <div>
//                     <p className="font-medium">Nous nous occupons de tout</p>
//                     <p className="text-sm text-muted-foreground">
//                       Gestion des séjours, ménage, maintenance... vous n'avez plus rien à faire
//                     </p>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <Check className="h-5 w-5 text-primary" />
//                   <div>
//                     <p className="font-medium">Aucune mauvaise surprise</p>
//                     <p className="text-sm text-muted-foreground">
//                       Pas d'impayés, pas de locataires à gérer, pas de dégradations
//                     </p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//             <Image
//               src="/placeholder.svg"
//               alt="Notre modèle de sous-location professionnelle"
//               width={600}
//               height={400}
//               className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
//             />
//           </div>

//           <div className="pt-10">
//             <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">
//               Comparatif des solutions
//             </h3>
//             <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 md:gap-12">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Location classique</CardTitle>
//                   <CardDescription>La solution traditionnelle</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex items-start gap-2">
//                     <div className="h-5 w-5 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground">
//                       ✕
//                     </div>
//                     <p>Risque d'impayés</p>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <div className="h-5 w-5 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground">
//                       ✕
//                     </div>
//                     <p>Vacance locative possible</p>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <div className="h-5 w-5 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground">
//                       ✕
//                     </div>
//                     <p>Gestion des locataires</p>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <div className="h-5 w-5 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground">
//                       ✕
//                     </div>
//                     <p>Risque de dégradations</p>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Airbnb en solo</CardTitle>
//                   <CardDescription>La gestion par vous-même</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex items-start gap-2">
//                     <div className="h-5 w-5 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground">
//                       ✕
//                     </div>
//                     <p>Temps consacré important</p>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <div className="h-5 w-5 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground">
//                       ✕
//                     </div>
//                     <p>Stress et contraintes</p>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <div className="h-5 w-5 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground">
//                       ✕
//                     </div>
//                     <p>Logistique complexe</p>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
//                       ✓
//                     </div>
//                     <p>Revenus potentiellement élevés</p>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card className="border-primary bg-primary/5">
//                 <CardHeader>
//                   <CardTitle className="text-primary">Sejouris</CardTitle>
//                   <CardDescription>La solution optimale</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex items-start gap-2">
//                     <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
//                       ✓
//                     </div>
//                     <p>Loyer garanti à 100%</p>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
//                       ✓
//                     </div>
//                     <p>Aucune gestion à prévoir</p>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
//                       ✓
//                     </div>
//                     <p>Contrat sécurisé</p>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
//                       ✓
//                     </div>
//                     <p>Entretien professionnel</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Comment ça marche Section */}
//       <HowItWorks />

//       {/* FAQ Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32" id="faq">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Questions fréquentes</h2>
//               <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Tout ce que vous devez savoir sur notre solution de sous-location professionnelle
//               </p>
//             </div>
//           </div>

//           <div className="mx-auto max-w-3xl space-y-8 py-12">
//             <Accordion type="single" collapsible className="w-full">
//               <AccordionItem value="item-1">
//                 <AccordionTrigger>Qui peut souscrire à l'offre ?</AccordionTrigger>
//                 <AccordionContent>
//                   <p className="text-muted-foreground">
//                     Notre offre s'adresse aux propriétaires de biens immobiliers (appartements, maisons, studios) situés
//                     dans des zones à fort potentiel locatif. Nous acceptons les biens meublés ou non meublés, et nous
//                     pouvons même prendre en charge l'ameublement si nécessaire. Les biens doivent être en bon état
//                     général et respecter les normes de sécurité en vigueur.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="item-2">
//                 <AccordionTrigger>Quel est le type de contrat ?</AccordionTrigger>
//                 <AccordionContent>
//                   <p className="text-muted-foreground">
//                     Nous signons avec vous un bail commercial (ou bail professionnel), généralement d'une durée de 3 ans
//                     minimum. Ce type de contrat offre une grande sécurité juridique pour les deux parties et permet
//                     d'établir une relation durable. Il définit clairement les responsabilités de chacun et les
//                     conditions de notre collaboration.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="item-3">
//                 <AccordionTrigger>Quels sont les risques ?</AccordionTrigger>
//                 <AccordionContent>
//                   <p className="text-muted-foreground">
//                     Notre modèle est conçu pour éliminer les risques pour le propriétaire. Votre loyer est garanti et
//                     payé chaque mois, quoi qu'il arrive, même en cas de vacance locative ou de problème avec les
//                     sous-locataires. Nous prenons en charge tous les risques liés à la gestion locative et à l'entretien
//                     du bien.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="item-4">
//                 <AccordionTrigger>Et si mon bien se détériore ?</AccordionTrigger>
//                 <AccordionContent>
//                   <p className="text-muted-foreground">
//                     Nous nous engageons contractuellement à entretenir votre bien et à le maintenir en bon état. Nous
//                     effectuons des visites régulières, des contrôles qualité et prenons en charge toutes les réparations
//                     nécessaires. À la fin du contrat, nous vous restituons votre bien dans son état initial, voire
//                     amélioré.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="item-5">
//                 <AccordionTrigger>Comment Sejouris gagne de l'argent ?</AccordionTrigger>
//                 <AccordionContent>
//                   <p className="text-muted-foreground">
//                     Notre modèle économique repose sur l'optimisation de la rentabilité de votre bien via des séjours
//                     courts (type Airbnb) ou moyens. Grâce à notre expertise et nos outils de gestion, nous sommes
//                     capables de générer des revenus supérieurs à ceux d'une location classique, tout en vous
//                     garantissant un loyer fixe. La différence constitue notre marge, qui finance notre service
//                     tout-inclus.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="item-6">
//                 <AccordionTrigger>Quelle est la durée minimale d'engagement ?</AccordionTrigger>
//                 <AccordionContent>
//                   <p className="text-muted-foreground">
//                     Nos contrats sont généralement établis pour une durée minimale de 6 ans, ce qui nous permet
//                     d'investir dans votre bien et d'optimiser sa rentabilité sur le long terme. Cette durée nous donne
//                     le temps nécessaire pour maximiser le potentiel de votre propriété. Cependant, nous pouvons discuter
//                     de conditions particulières en fonction de votre situation et de vos besoins.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="item-7">
//                 <AccordionTrigger>Puis-je récupérer mon bien avant la fin du contrat ?</AccordionTrigger>
//                 <AccordionContent>
//                   <p className="text-muted-foreground">
//                     Le contrat prévoit des clauses de sortie anticipée dans certaines situations spécifiques (vente du
//                     bien, besoin personnel urgent, etc.). Ces conditions sont clairement définies dans le contrat et
//                     peuvent être discutées lors de sa signature.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="item-8">
//                 <AccordionTrigger>Comment est fixé le montant du loyer ?</AccordionTrigger>
//                 <AccordionContent>
//                   <p className="text-muted-foreground">
//                     Le montant du loyer est déterminé après une analyse approfondie du potentiel de votre bien. Nous
//                     prenons en compte sa localisation, sa taille, ses équipements, l'état du marché local et notre
//                     capacité à générer des revenus via notre modèle de sous-location. Nous vous proposons un loyer
//                     garanti qui vous assure un revenu stable et prévisible.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                 Ce que nos clients disent de nous
//               </h2>
//               <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Découvrez les témoignages de propriétaires satisfaits
//               </p>
//             </div>
//           </div>
//           <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:gap-12">
//             <Card>
//               <CardHeader>
//                 <div className="flex items-center gap-2">
//                   <div className="flex">
//                     {Array(5)
//                       .fill(0)
//                       .map((_, i) => (
//                         <Star key={i} className="h-4 w-4 fill-primary text-primary" />
//                       ))}
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="mb-4 italic">
//                   "Depuis que j'ai confié mon appartement à Sejouris, je n'ai plus aucun souci. Le loyer est versé à
//                   date fixe, et je n'ai plus à gérer les locataires ou les problèmes d'entretien. Une vraie tranquillité
//                   d'esprit !"
//                 </p>
//                 <div>
//                   <p className="font-semibold">Marie L.</p>
//                   <p className="text-sm text-muted-foreground">Propriétaire à Paris</p>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <div className="flex items-center gap-2">
//                   <div className="flex">
//                     {Array(5)
//                       .fill(0)
//                       .map((_, i) => (
//                         <Star key={i} className="h-4 w-4 fill-primary text-primary" />
//                       ))}
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="mb-4 italic">
//                   "J'étais sceptique au début, mais après 18 mois de collaboration, je ne peux que recommander Sejouris.
//                   Leur professionnalisme est exemplaire, et mon bien est parfaitement entretenu. Un partenariat
//                   gagnant-gagnant !"
//                 </p>
//                 <div>
//                   <p className="font-semibold">Thomas D.</p>
//                   <p className="text-sm text-muted-foreground">Propriétaire à Lyon</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactez-nous</h2>
//               <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Obtenez une offre gratuite et sans engagement pour votre bien
//               </p>
//             </div>
//           </div>

//           <div className="grid gap-6 py-10 lg:grid-cols-2 lg:gap-12">
//             <div className="flex flex-col justify-center space-y-4">
//               <div className="space-y-2">
//                 <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
//                   Transformez votre bien en revenu passif
//                 </h3>
//                 <p className="max-w-[600px] text-muted-foreground md:text-xl">
//                   Remplissez le formulaire ci-contre pour recevoir une offre personnalisée sous 24h
//                 </p>
//               </div>
//               <div className="grid gap-6 py-4">
//                 <div className="flex items-start gap-4">
//                   <PhoneCall className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-medium">Téléphone</h3>
//                     <p className="text-sm text-muted-foreground">
//                       <Link href="tel:+33695472237" className="hover:text-primary">
//                         +33 6 95 47 22 37
//                       </Link>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <Mail className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-medium">Email</h3>
//                     <p className="text-sm text-muted-foreground">
//                       <Link href="mailto:contact@sejouris.com" className="hover:text-primary">
//                         contact@sejouris.com
//                       </Link>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <MapPin className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-medium">Adresse</h3>
//                     <p className="text-sm text-muted-foreground">
//                       60 rue François 1er
//                       <br />
//                       75008 Paris
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <Clock className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-medium">Horaires</h3>
//                     <p className="text-sm text-muted-foreground">
//                       Du lundi au vendredi : 9h - 19h
//                       <br />
//                       Samedi : 10h - 17h
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Obtenir une offre gratuite</CardTitle>
//                 <CardDescription>
//                   Remplissez le formulaire ci-dessous pour recevoir une proposition personnalisée
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label htmlFor="prenom" className="text-sm font-medium">
//                         Prénom
//                       </label>
//                       <Input id="prenom" name="prenom" required />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="nom" className="text-sm font-medium">
//                         Nom
//                       </label>
//                       <Input id="nom" name="nom" required />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label htmlFor="email" className="text-sm font-medium">
//                       Email
//                     </label>
//                     <Input id="email" name="email" type="email" required />
//                   </div>
//                   <div className="space-y-2">
//                     <label htmlFor="telephone" className="text-sm font-medium">
//                       Téléphone
//                     </label>
//                     <Input id="telephone" name="telephone" type="tel" required />
//                   </div>
//                   <div className="space-y-2">
//                     <label htmlFor="typeBien" className="text-sm font-medium">
//                       Type de bien
//                     </label>
//                     <Select>
//                       <SelectTrigger id="typeBien">
//                         <SelectValue placeholder="Sélectionnez un type de bien" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="appartement">Appartement</SelectItem>
//                         <SelectItem value="maison">Maison</SelectItem>
//                         <SelectItem value="studio">Studio</SelectItem>
//                         <SelectItem value="autre">Autre</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div className="space-y-2">
//                     <label htmlFor="localisation" className="text-sm font-medium">
//                       Localisation du bien
//                     </label>
//                     <Input id="localisation" name="localisation" required />
//                   </div>
//                   <div className="space-y-2">
//                     <label htmlFor="message" className="text-sm font-medium">
//                       Message (optionnel)
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       placeholder="Précisez les caractéristiques de votre bien (surface, nombre de pièces, etc.)"
//                     />
//                   </div>
//                   <Button type="submit" className="w-full">
//                     Recevoir une offre
//                   </Button>
//                   <p className="text-xs text-muted-foreground text-center">
//                     En soumettant ce formulaire, vous acceptez notre{" "}
//                     <Link href="/politique-de-confidentialite" className="underline underline-offset-2">
//                       politique de confidentialité
//                     </Link>
//                   </p>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10 text-primary">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                 Prêt à transformer votre bien en revenu passif ?
//               </h2>
//               <p className="max-w-[700px] mx-auto text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Contactez-nous dès aujourd'hui pour une évaluation gratuite et sans engagement
//               </p>
//             </div>
//             <div className="flex flex-col gap-2 min-[400px]:flex-row">
//               <Button asChild size="lg" variant="default">
//                 <Link href="#contact">Obtenir une offre gratuite</Link>
//               </Button>
//               <Button asChild variant="outline" size="lg" className="bg-white/50 border-primary hover:bg-primary/10">
//                 <Link href="tel:+33695472237">Nous appeler</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </AnimatePresence>
//   )
// }

import Home from "./Home" // Assurez-vous que ce chemin d'importation est correct

export default function Page() {
  return (
    <Home
      leftImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/House-PNG-Image-Background-juf3CecngZrAycjQAqn0IRCx5umtsa.png"
      rightImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file%20%282%29.png-A9CKEUlJQa2Kni9TnPxsu21J8uKMxj.jpeg"
    />
  )
}

