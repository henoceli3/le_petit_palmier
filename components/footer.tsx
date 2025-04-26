"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer
      className="bg-gradient-to-b from-amber-800 to-amber-900 text-white py-16"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-amber-200">
              Le Petit Palmier
            </h3>
            <p className="mb-6 text-amber-50/90 leading-relaxed">
              Fondation chrétienne dédiée au développement spirituel des enfants
              et des jeunes.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-amber-200">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-amber-50/90">
                <MapPin className="h-5 w-5 mr-3 text-amber-300" /> Abidjan
                Cocody, Faya Cité AT
              </li>
              <li className="flex items-center text-amber-50/90">
                <Phone className="h-5 w-5 mr-3 text-amber-300" />
                +225 0707447196
              </li>
              <li className="flex items-center text-amber-50/90">
                <Mail className="h-5 w-5 mr-3 text-amber-300" />{" "}
                secretariat@petitpalmier.org
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-amber-200">
              Verset du jour
            </h3>
            <blockquote className="italic border-l-4 border-amber-400 pl-6 py-2 text-amber-50/90">
              "Laissez venir à moi les petits enfants, et ne les en empêchez
              pas; car le royaume de Dieu est pour ceux qui leur ressemblent."
              <footer className="mt-3 font-semibold text-amber-200">
                - Marc 10:14
              </footer>
            </blockquote>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-amber-700/50 text-center text-amber-50/70"
        >
          <p>
            &copy; {new Date().getFullYear()} Le Petit Palmier. Tous droits
            réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
