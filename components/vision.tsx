"use client"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function Vision() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="vision" className="py-24 " ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4 text-gradient">Notre Vision</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-16 rounded-full"></div>
        </motion.div>

        <Card className="shadow-elegant border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row-reverse">
              <motion.div
                className="md:w-1/2 bg-gradient-to-br from-sky-100 to-white p-12"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-serif mb-6">Notre vision divine</h3>
                <p className="text-lg mb-6 leading-relaxed text-gray-700">
                  Notre vision divine est d'élever une génération d'enfants et de jeunes qui :
                </p>
                <ul className="space-y-4 mb-8 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3"></span>
                    <span>Écoutent attentivement la voix du Seigneur et suivent Sa direction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3"></span>
                    <span>Sont enracinés dans la Parole de Dieu et inébranlables dans leur foi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3"></span>
                    <span>Sont prêts à servir le Royaume de Dieu dès leur plus jeune âge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3"></span>
                    <span>Deviennent des témoins de l'amour du Christ dans leurs familles, écoles et communautés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3"></span>
                    <span>Grandissent pour devenir des leaders chrétiens qui transforment le monde</span>
                  </li>
                </ul>
                <p className="text-lg italic border-l-4 border-amber-200 pl-4 text-gray-700">
                  "Que personne ne méprise ta jeunesse; mais sois un modèle pour les fidèles, en parole, en conduite, en
                  amour, en foi, en pureté." - 1 Timothée 4:12
                </p>
              </motion.div>

              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="h-full">
                  <img
                    src="/images/vision.jpg"
                    alt="Enfants en prière"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
