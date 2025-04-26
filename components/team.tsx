"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "Mme YED DJOMAN MARCELLE",
      role: "Présidente",
      bio: "Dévoué à l'éducation spirituelle des enfants depuis plusieurs années.",
      image: "/equipe/yed.jpg",
      initials: "YM",
    },
    {
      name: "DJOMAN JOSEPHINE",
      role: "Vice-Présidente",
      bio: "Passionnée par le développement de matériel pédagogique chrétien adapté aux enfants.",
      image: "/placeholder.svg?height=200&width=200",
      initials: "ML",
    },
    {
      name: "PST N’GUESSAN KONAN DOMINIQUE",
      role: "Responsable Formation",
      bio: "Ancien animateur de colonie de vacances chrétiennes, spécialiste des activités pour adolescents.",
      image: "/placeholder.svg?height=200&width=200",
      initials: "TM",
    },
    {
      name: "Sophie Blanc",
      role: "Enseignante Biblique",
      bio: "Diplômée en théologie avec une spécialisation en enseignement pour enfants.",
      image: "/placeholder.svg?height=200&width=200",
      initials: "SB",
    },
    {
      name: "SEKA SEKA NICODEME",
      role: "Sécrétaire",
      bio: "Musicien talentueux qui aide les enfants à exprimer leur foi à travers la musique.",
      image: "/placeholder.svg?height=200&width=200",
      initials: "PM",
    },
    {
      name: "YED MELIANE JOELLE QUEREN",
      role: "Coordinatrice des Bénévoles",
      bio: "Organise et forme l'équipe de bénévoles qui soutient toutes nos activités.",
      image: "/placeholder.svg?height=200&width=200",
      initials: "CD",
    },
    {
      name: "EFFO FERNAND",
      role: "Tresorier",
      bio: "Organise et forme l'équipe de bénévoles qui soutient toutes nos activités.",
      image: "/placeholder.svg?height=200&width=200",
      initials: "CD",
    },
    {
      name: "EHUI KETOURA",
      role: "Trésorière Adjoint",
      bio: "Organise et forme l'équipe de bénévoles qui soutient toutes nos activités.",
      image: "/placeholder.svg?height=200&width=200",
      initials: "CD",
    },
    {
      name: "AKMEL ESSIS ONESIME",
      role: "Responsable Organisation",
      bio: "Organise et forme l'équipe de bénévoles qui soutient toutes nos activités.",
      image: "/placeholder.svg?height=200&width=200",
      initials: "CD",
    },
    {
      name: "PLO GERME",
      role: "Responsable Oranisation adjointe",
      bio: "Organise et forme l'équipe de bénévoles qui soutient toutes nos activités.",
      image: "/placeholder.svg?height=200&width=200",
      initials: "CD",
    },
  ];

  return (
    <section id="team" className="py-24 " ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4 text-gradient">
            Notre Équipe
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-16 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="card-elegant h-full">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-28 w-28 mb-6 ring-4 ring-amber-100">
                      <AvatarImage
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                      />
                      <AvatarFallback className="bg-amber-100 text-amber-800 text-xl font-serif">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-serif font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-amber-600 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
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
