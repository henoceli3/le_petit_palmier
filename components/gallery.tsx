"use client"
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState<{
    src: string
    alt: string
    title: string
  } | null>(null)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const images = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Camp d'été biblique",
      title: "Camp d'été biblique",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Étude biblique pour enfants",
      title: "Étude biblique pour enfants",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Activité de groupe",
      title: "Activité de groupe",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Spectacle de Noël",
      title: "Spectacle de Noël",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Atelier créatif",
      title: "Atelier créatif",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Moment de prière",
      title: "Moment de prière",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Jeux en plein air",
      title: "Jeux en plein air",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Retraite des jeunes",
      title: "Retraite des jeunes",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Célébration de Pâques",
      title: "Célébration de Pâques",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Groupe de louange",
      title: "Groupe de louange",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Sortie en nature",
      title: "Sortie en nature",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Bénévolat communautaire",
      title: "Bénévolat communautaire",
    },
  ]

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.05 * index }}
            className="overflow-hidden rounded-xl shadow-elegant hover:shadow-lg transition-all duration-300 cursor-pointer group"
            onClick={() => {
              setCurrentImage(image)
              setIsOpen(true)
            }}
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <h3 className="text-white font-medium p-4 w-full text-center">{image.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white/95 backdrop-blur-sm">
          {currentImage && (
            <div className="flex flex-col items-center">
              <div className="relative w-full max-h-[80vh] overflow-hidden">
                <img
                  src={currentImage.src || "/placeholder.svg"}
                  alt={currentImage.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-full p-6 bg-white">
                <h3 className="text-2xl font-serif text-amber-700">{currentImage.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
