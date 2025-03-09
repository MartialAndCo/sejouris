"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Vous nous contactez",
    description:
      "Remplissez notre formulaire de contact ou appelez-nous pour nous parler de votre bien. Nous vous répondrons sous 24h pour organiser une évaluation.",
  },
  {
    number: "02",
    title: "Nous analysons le potentiel",
    description:
      "Notre équipe évalue le potentiel de votre bien et vous propose une offre de loyer garanti, basée sur notre expertise du marché local.",
  },
  {
    number: "03",
    title: "Signature du contrat",
    description:
      "Nous signons ensemble un bail commercial sécurisé qui protège vos intérêts et définit clairement les responsabilités de chacun.",
  },
  {
    number: "04",
    title: "Vous percevez votre loyer",
    description:
      "Chaque mois, vous recevez votre loyer garanti à date fixe, sans interruption ni retard. Vous n'avez plus rien à gérer !",
  },
]

const HowItWorks: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && progressBarRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect()
        const progressBarRect = progressBarRef.current.getBoundingClientRect()

        const viewportHeight = window.innerHeight
        const sectionTop = sectionRect.top
        const sectionHeight = sectionRect.height

        const start = viewportHeight * 0.8
        const end = -sectionHeight + viewportHeight * 0.8

        const progress = Math.max(0, Math.min(1, (start - sectionTop) / (start - end)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call to set the initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isStepReached = (index: number) => {
    return scrollProgress >= index / (steps.length - 1)
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-16"
      id="comment-ca-marche"
      style={{
        background:
          "linear-gradient(180deg, rgba(239, 246, 255, 0.7) 0%, rgba(255, 255, 255, 0.9) 30%, rgba(239, 246, 255, 0.6) 60%, rgba(255, 255, 255, 0.8) 100%)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Comment ça marche ?</h2>
        <div className="flex w-full max-w-screen-xl mx-auto">
          {/* Left block (1/3 width) with the line and dots */}
          <div className="w-1/3 relative">
            <div ref={progressBarRef} className="absolute right-12 top-0 h-[85%] w-1 bg-gray-200">
              <div
                className="absolute top-0 left-0 w-full bg-primary transition-all duration-200 ease-out"
                style={{ height: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>

          {/* Right block (2/3 width) with the content */}
          <div className="w-2/3">
            <div className="w-1/2">
              {steps.map((step, index) => (
                <div key={index} className="mb-16 relative pt-4">
                  <div>
                    <span className="text-5xl font-bold text-primary/10 mb-2 block -ml-6">{step.number}</span>
                    <h3 className="text-2xl font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

