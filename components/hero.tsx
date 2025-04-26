"use client";
import { useEffect, useState, useRef, JSX } from "react";
import { Button } from "antd";
import { DownOutlined, HeartOutlined, SunOutlined } from "@ant-design/icons";
import Link from "next/link";

/**
 * La page d'accueil du site web.
 *
 * Cette page contient un hero avec un effet parallaxe sur les particules,
 * un fond avec un gradient de couleurs et des éléments décoratifs.
 * Le contenu principal est centré et contient un titre, un sous-titre,
 * un bouton pour rejoindre la communauté et un bouton pour en savoir plus.
 * Enfin, il y a un indicateur de défilement en bas de la page pour inviter
 * l'utilisateur à découvrir les autres pages du site.
 */
export function Hero() {
  const [mounted, setMounted] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    /**
     * Gère l'événement de mouvement de la souris pour créer l'effet de parallaxe.
     *
     * Pour chaque particule, calcule la profondeur en fonction de sa position
     * dans la liste des particules, puis calcule la translation à appliquer en
     * fonction de la position de la souris et de la profondeur.
     * Enfin, applique la transformation à la particule.
     * @param {MouseEvent} e L'événement de mouvement de la souris.
     */
    const handleMouseMove = (e: MouseEvent) => {
      if (!particlesRef.current) return;

      const particles = particlesRef.current.querySelectorAll(".particle");
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;

      particles.forEach((particle, i) => {
        const depth = ((i % 5) + 1) / 5; // Profondeur variable pour chaque particule
        const translateX = mouseX * 30 * depth;
        const translateY = mouseY * 30 * depth;

        // @ts-ignore
        particle.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!mounted) return null;

  /**
   * Fonction qui génère un tableau de 30 éléments `div` qui repésentent des
   * particules. Chaque particule a une taille, une position initiale et une
   * animation aléatoires.
   * @returns {JSX.Element[]} Un tableau de 30 éléments JSX représentant les
   * particules.
   */
  const renderParticles = (): JSX.Element[] => {
    return Array.from({ length: 30 }).map((_, i) => {
      const size = Math.random() * 6 + 2;
      const initialX = Math.random() * 100;
      const initialY = Math.random() * 100;
      const animationDuration = Math.random() * 10 + 10;
      const animationDelay = Math.random() * 5;

      return (
        <div
          key={i}
          className={`particle absolute rounded-full bg-amber-500/40 animate-float`}
          style={{
            width: size,
            height: size,
            left: `${initialX}%`,
            top: `${initialY}%`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDelay}s`,
          }}
        />
      );
    });
  };

  /**
   * Génère un tableau de 10 éléments `div` qui représentent des éléments
   * décoratifs flottants. Chaque élément a une taille, une position initiale,
   * une animation aléatoires et un icône (ou ) qui est affiché à
   * l'intérieur.
   * @returns {JSX.Element[]} Un tableau de 10 éléments JSX représentant les
   * éléments décoratifs.
   */
  const renderDecorations = (): JSX.Element[] => {
    return Array.from({ length: 10 }).map((_, i) => {
      const size = Math.random() * 30 + 20;
      const initialX = Math.random() * 100;
      const initialY = Math.random() * 100;
      const animationDuration = Math.random() * 5 + 5;
      const animationDelay = Math.random() * 2;
      const Icon = i % 2 === 0 ? SunOutlined : HeartOutlined;

      return (
        <div
          key={i}
          className="absolute animate-float-slow"
          style={{
            left: `${initialX}%`,
            top: `${initialY}%`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDelay}s`,
          }}
        >
          <Icon className="text-amber-400/30" style={{ fontSize: size }} />
        </div>
      );
    });
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      {/* Fond avec effet parallaxe */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20 scale-100 transition-transform duration-1000"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      >
        {/* Overlay avec dégradé */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100/50 via-amber-50/50 to-white/80 z-0"></div>
      </div>

      {/* Particules animées */}
      <div
        ref={particlesRef}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        {renderParticles()}
        {renderDecorations()}
      </div>

      {/* Cercles lumineux décoratifs */}
      <div className="absolute left-1/4 top-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-amber-200/30 to-amber-400/30 blur-3xl animate-pulse"></div>
      <div
        className="absolute right-1/4 bottom-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-amber-300/30 to-yellow-200/30 blur-3xl animate-pulse"
        style={{ animationDuration: "10s" }}
      ></div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div
          className="mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-amber-800 leading-tight mb-2">
            Guidons les enfants
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-amber-600 leading-tight">
            vers le chemin de la foi
          </h1>
        </div>

        <div
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
        >
          <p className="text-xl md:text-2xl text-amber-900/80 mb-10 max-w-3xl mx-auto font-light">
            Ensemble, cultivons la spiritualité des jeunes pour un avenir rempli
            de lumière divine
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "2s", animationFillMode: "forwards" }}
        >
          <Button
            type="primary"
            size="large"
            className="h-14 px-10 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-none"
            style={{
              background: "linear-gradient(to right, #f59e0b, #d97706)",
              height: "56px",
              paddingLeft: "40px",
              paddingRight: "40px",
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
            }}
          >
            Rejoignez-nous
          </Button>

          <Button
            size="large"
            className="h-14 px-10 text-lg rounded-full shadow-lg transition-all duration-300 border-amber-500 text-amber-700 hover:bg-amber-100"
            style={{
              height: "56px",
              paddingLeft: "40px",
              paddingRight: "40px",
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
              borderColor: "#f59e0b",
              color: "#b45309",
            }}
          >
            En savoir plus
          </Button>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center opacity-0 animate-fade-in"
        style={{ animationDelay: "2.5s", animationFillMode: "forwards" }}
      >
        <Link
          href="#about"
          className="flex flex-col items-center text-amber-700 hover:text-amber-900 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {/* <span className="text-sm uppercase tracking-widest mb-2">
            Découvrir
          </span> */}
          <div className="w-10 h-10 rounded-full border border-amber-400 flex items-center justify-center animate-bounce">
            <DownOutlined className="text-amber-500" />
          </div>
        </Link>
      </div>

      {/* Vagues stylisées en bas */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[70px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C720,100 1440,0 1440,0 L1440,100 L0,100 Z"
            fill="#FEF3C7"
            fillOpacity="0.5"
          />
          <path
            d="M0,20 C720,120 1440,20 1440,20 L1440,100 L0,100 Z"
            fill="#FDE68A"
            fillOpacity="0.4"
          />
          <path
            d="M0,40 C720,140 1440,40 1440,40 L1440,100 L0,100 Z"
            fill="#FCD34D"
            fillOpacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
}
