"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, BookOpen, Heart, Star } from "lucide-react";

export function Activities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const activities = [
    {
      title: "Camp d'été biblique",
      date: "Juillet",
      description:
        "Une semaine d'immersion spirituelle avec des activités ludiques, des études bibliques et des moments de louange.",
      icon: <Calendar className="h-6 w-6 text-amber-600" />,
    },
    {
      title: "Formations Spirituelles",
      date: "Octobre",
      description:
        "Rejoignez nos sessions de formation spirituelle tous les samedis en 15, pour approfondir votre compréhension des enseignements religieux et renforcer votre foi.",
      icon: <Users className="h-6 w-6 text-amber-600" />,
    },
    {
      title: "Retraites Spirituelles",
      date: "Toutes l'année",
      description:
        "Des retraites spirituelles enrichissantes organisées pendant les congés de Noël et de Pâques, offrant des moments de méditation et de connexion spirituelle profonde.",
      icon: <BookOpen className="h-6 w-6 text-amber-600" />,
    },
    {
      title: "Moments d'Adoration",
      date: "Toute l'année",
      description:
        "Participez à nos moments d'adoration chaque dernier samedi du mois, pour louer et adorer ensemble dans un environnement spirituel et inspirant.",
      icon: <Heart className="h-6 w-6 text-amber-600" />,
    },
  ];

  return (
    <section id="activities" className="py-24 bg-amber-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4 text-gradient">
            Activité Annuelle
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-16 rounded-full"></div>
        </motion.div>

        <Card className="shadow-elegant border-0">
          <CardContent className="p-8">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-[28px] w-0.5 bg-amber-200"></div>
              <div className="space-y-16">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={
                      inView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 z-10">
                      <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-amber-200">
                        {activity.icon}
                      </div>
                    </div>
                    <div className="ml-8">
                      <h3 className="text-xl font-serif font-semibold mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-amber-600 font-medium mb-3">
                        {activity.date}
                      </p>
                      <p className="text-gray-600">{activity.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
