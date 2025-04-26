"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Section "Qui sommes-nous ?" avec image et texte
 * La section utilise des animations pour améliorer l'expérience utilisateur
 * Les éléments sont disposés de manière à créer un équilibre visuel harmonieux
 * La section utilise des couleurs qui rappellent la spiritualité et la foi
 * @returns JSX.Element
 */
export function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );
  const textY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [100, 0, 0, 100]
  );

  // Correction: utiliser correctement useInView de react-intersection-observer
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Combiner les refs
  const combinedRef = (node: HTMLElement | null) => {
    sectionRef.current = node;
    if (inViewRef) {
      // @ts-ignore - nous savons que c'est une fonction
      inViewRef(node);
    }
  };

  // Variants pour les animations
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const textContainerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.6 + i * 0.2 },
    }),
  };

  return (
    <section
      id="about"
      ref={combinedRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Fond avec dégradé et motif */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-amber-50 noise"></div>

      {/* Éléments décoratifs */}
      <div
        className="absolute top-0 left-0 w-full h-20 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-gradient-gold">
            Qui sommes-nous ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            className="md:w-1/2"
            style={{ scale: imageScale, rotate: imageRotate }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageContainerVariants}
          >
            <div className="relative">
              {/* Cadre décoratif */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-600"
                animate={{ rotate: [0, 5, 0], x: [0, 5, 0], y: [0, 5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>

              {/* Image principale */}
              <div className="relative overflow-hidden rounded-lg shadow-elegant">
                <motion.img
                  src="/images/about-us.jpg"
                  alt="Enfants participant à des activités spirituelles"
                  className="w-full h-auto relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Overlay sur hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-amber-600/50 to-transparent opacity-0 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                ></motion.div>
              </div>

              {/* Cadre décoratif */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-amber-600"
                animate={{ rotate: [0, -5, 0], x: [0, -5, 0], y: [0, -5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            style={{ opacity: textOpacity, y: textY }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textContainerVariants}
          >
            <motion.p
              className="text-xl mb-6 text-gray-700 leading-relaxed"
              custom={0}
              variants={paragraphVariants}
            >
              <span className="font-serif text-3xl text-amber-700 font-bold">
                Le Petit Palmier
              </span>{" "}
              est une fondation chrétienne dédiée au développement spirituel des
              enfants et des jeunes. Fondée sur des valeurs chrétiennes solides,
              notre organisation s'engage à créer un environnement où les jeunes
              peuvent grandir dans leur foi et développer une relation
              personnelle avec Dieu.
            </motion.p>

            <motion.p
              className="text-xl mb-6 text-gray-700 leading-relaxed"
              custom={1}
              variants={paragraphVariants}
            >
              Nous croyons que chaque enfant est un don précieux de Dieu, avec
              un potentiel unique pour servir le Royaume. Notre approche est
              basée sur l'amour, la bienveillance et l'enseignement fidèle de la
              Parole de Dieu.
            </motion.p>

            <motion.p
              className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-amber-200 pl-6 py-2 bg-amber-50/50 rounded-r-lg"
              custom={2}
              variants={paragraphVariants}
            >
              À travers nos programmes et activités, nous cherchons à planter
              des graines de foi qui grandiront tout au long de la vie des
              enfants, comme un petit palmier qui s'élève vers le ciel.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Éléments décoratifs flottants */}
      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 opacity-10"
        animate={{ y: [0, 30, 0], rotate: [0, 10, 0] }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-amber-500 blur-xl"></div>
      </motion.div>

      <motion.div
        className="absolute top-40 right-10 w-24 h-24 opacity-10"
        animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-amber-600 blur-xl"></div>
      </motion.div>
    </section>
  );
}
