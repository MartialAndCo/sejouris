"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function TrustSection() {
  const concerns = [
    {
      title: "Dégradation du bien",
      description: "Des locataires qui ne prennent pas soin de votre bien et causent des dommages coûteux.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chaos-after-burglary-in-an-one-family-house-2024-09-17-19-44-41-utc.jpg-0maBr7ipIO2t03xqZyW4AgYuS9UWWB.jpeg",
    },
    {
      title: "Gestion quotidienne",
      description: "Le stress des appels tardifs, des problèmes techniques et de la paperasse administrative.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headache-stress-and-sad-with-black-man-on-sofa-fo-2023-11-27-05-28-51-utc%20%281%29.jpg-Q4E8e9m5kCNduudHW0K2B2iBp9Y2VI.jpeg",
    },
    {
      title: "Loyers impayés",
      description: "Les locataires qui ne paient pas ou paient en retard, c'est la hantise de tout propriétaire.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headache-phone-call-and-business-woman-stress-in-2023-11-27-05-20-38-utc.jpg-CxrQEQo3U230CJbLd7qiEGTANRSttc.jpeg",
    },
  ]

  return (
    <section className="w-full py-16 gradient-secondary">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
          variants={fadeIn}
        >
          <h2 className="text-sm font-medium text-primary mb-4">Vous rencontrez ces problèmes ?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Vos locataires sont une source de stress</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Impayés, dégradations, gestion quotidienne... Nous comprenons vos inquiétudes.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8"
        >
          {concerns.map((concern, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative bg-blue-50/50 rounded-3xl p-6 overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <X className="w-4 h-4 text-red-500" />
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-bold text-primary mb-2">{concern.title}</h4>
                <p className="text-gray-600">{concern.description}</p>
              </div>
              <div className="mt-6">
                <Image
                  src={concern.image || "/placeholder.svg"}
                  alt={concern.title}
                  width={300}
                  height={200}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

