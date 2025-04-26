"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, BookOpen, Users, Star, Home } from "lucide-react";

export function Objectives() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const objectives = [
    {
      icon: <Heart className="h-10 w-10 text-amber-600" />,
      title: "Cultiver l'amour de Dieu",
      description:
        "Aider les enfants à développer une relation personnelle et aimante avec Dieu à travers la prière et l'adoration.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-amber-600" />,
      title: "Enseigner la Parole",
      description:
        "Fournir un enseignement biblique solide et adapté à l'âge des enfants pour qu'ils comprennent et appliquent les vérités divines.",
    },
    {
      icon: <Users className="h-10 w-10 text-amber-600" />,
      title: "Bâtir une communauté",
      description:
        "Créer un environnement sûr et aimant où les enfants peuvent former des amitiés chrétiennes durables.",
    },
    {
      icon: <Star className="h-10 w-10 text-amber-600" />,
      title: "Développer les dons",
      description:
        "Aider chaque enfant à découvrir et développer ses dons spirituels uniques pour servir Dieu et les autres.",
    },
    {
      icon: <Home className="h-10 w-10 text-amber-600" />,
      title: "Soutenir les familles",
      description:
        "Travailler en partenariat avec les parents pour renforcer la foi chrétienne au sein du foyer familial.",
    },
  ];

  return (
    <section id="objectives" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4 text-gradient">
            Notre Objectif
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-16 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="card-elegant h-full">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 bg-amber-50 rounded-full">
                      {objective.icon}
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-4">
                      {objective.title}
                    </h3>
                    <p className="text-gray-600">{objective.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
