"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";

/**
 * Page affichant la galerie de photos.
 *
 * @returns Un composant JSX affichant la page de la galerie de photos.
 */
export default function GalleryPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-center mb-4 text-gradient">
              Galerie de Photos
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
              Découvrez les moments précieux de nos activités et événements à
              travers cette collection de photos qui témoignent de notre
              engagement envers le développement spirituel des enfants.
            </p>
          </motion.div>
          <Gallery />
        </div>
      </div>
      <Footer />
    </main>
  );
}
