"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function Mission() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="mission" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4 text-gradient">
            Notre Mission
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-16 rounded-full"></div>
        </motion.div>

        <Card className="shadow-elegant border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <motion.div
                className="md:w-1/2 bg-amber-600 text-white p-12"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-serif mb-6">
                  Notre engagement
                </h3>
                <p className="text-lg mb-6 leading-relaxed">
                  Notre mission est de nourrir spirituellement les enfants et
                  les jeunes à travers la Parole de Dieu, en créant un
                  environnement où ils peuvent :
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3"></span>
                    <span>
                      Découvrir l'amour de Dieu et développer une relation
                      personnelle avec Jésus-Christ
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3"></span>
                    <span>
                      Comprendre les principes bibliques et les appliquer dans
                      leur vie quotidienne
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3"></span>
                    <span>
                      Cultiver des valeurs chrétiennes solides qui guideront
                      leurs choix
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3"></span>
                    <span>
                      Développer leurs dons spirituels au service du Royaume de
                      Dieu
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3"></span>
                    <span>
                      Grandir dans une communauté de foi aimante et solidaire
                    </span>
                  </li>
                </ul>
                <p className="text-lg italic border-l-4 border-white/30 pl-4">
                  "Instruis l'enfant selon la voie qu'il doit suivre; Et quand
                  il sera vieux, il ne s'en détournera pas." - Proverbes 22:6
                </p>
              </motion.div>

              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="h-full">
                  <img
                    src="/images/mission.jpg"
                    alt="Enfants étudiant la Bible"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
