"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dropdown, Button } from "antd";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

/**
 * Composant Navbar qui affiche une barre de navigation réactive avec un menu principal
 * et un menu déroulant. Le menu principal contient des liens vers différentes sections
 * du site, tandis que le menu déroulant offre des options supplémentaires. La Navbar
 * ajuste son apparence lorsqu'on défile la page, devenant opaque avec une ombre.
 *
 * Utilise `useState` pour suivre l'état de défilement et `useEffect` pour écouter
 * les événements de défilement. Utilise `usePathname` pour obtenir le chemin d'accès
 * actuel, permettant de mettre en surbrillance le lien actif.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Regroupement des éléments de menu pour simplifier la navbar
  const mainMenuItems = [
    { key: "home", label: "Accueil", href: "/" },
    { key: "about", label: "Qui sommes-nous ?", href: "/#about" },
    { key: "gallery", label: "Galerie", href: "/galerie" },
  ];

  const dropdownMenuItems = [
    { key: "mission", label: "Notre mission", href: "/#mission" },
    { key: "vision", label: "Notre vision", href: "/#vision" },
    { key: "objectives", label: "Notre objectif", href: "/#objectives" },
    { key: "team", label: "Notre équipe", href: "/#team" },
    { key: "activities", label: "Activité annuelle", href: "/#activities" },
  ];

  /**
   * Scrolle jusqu'à la section identifiée par son ID.
   * Si on n'est pas sur la page d'accueil, ne fait rien.
   * @param {string} sectionId - ID de la section à scroller.
   */
  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") return;

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Items pour le menu dropdown
  const dropdownItems: MenuProps["items"] = dropdownMenuItems.map((item) => ({
    key: item.key,
    label: (
      <a
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          if (item.href.includes("#")) {
            scrollToSection(item.href.split("#")[1]);
          } else {
            window.location.href = item.href;
          }
        }}
      >
        {item.label}
      </a>
    ),
  }));

  // Items pour le menu mobile
  const mobileMenuItems: MenuProps["items"] = [
    ...mainMenuItems.map((item) => ({
      key: item.key,
      label: item.href.includes("#") ? (
        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(item.href.split("#")[1]);
          }}
          href={item.href}
        >
          {item.label}
        </a>
      ) : (
        <Link href={item.href}>{item.label}</Link>
      ),
    })),
    ...dropdownMenuItems.map((item) => ({
      key: item.key,
      label: (
        <a
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            if (item.href.includes("#")) {
              scrollToSection(item.href.split("#")[1]);
            } else {
              window.location.href = item.href;
            }
          }}
        >
          {item.label}
        </a>
      ),
    })),
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-gradient-gold">
              Le Petit Palmier
            </span>
          </Link>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            {mainMenuItems.map((item) => (
              <div key={item.key} className="relative group">
                {item.href.includes("#") ? (
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href.split("#")[1]);
                    }}
                    href={item.href}
                    className="text-gray-800 hover:text-amber-700 transition-colors py-2 text-sm uppercase tracking-wider font-medium"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-gray-800 hover:text-amber-700 transition-colors py-2 text-sm uppercase tracking-wider font-medium ${
                      pathname === item.href ? "text-amber-700" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </div>
            ))}

            {/* Menu déroulant */}
            <Dropdown menu={{ items: dropdownItems }} placement="bottomRight">
              <a className="flex items-center text-gray-800 hover:text-amber-700 transition-colors py-2 text-sm uppercase tracking-wider font-medium cursor-pointer">
                Découvrir <DownOutlined className="ml-1 text-xs" />
              </a>
            </Dropdown>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <Dropdown
              menu={{ items: mobileMenuItems }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Button
                type="text"
                icon={<MenuOutlined className="text-gray-800 text-xl" />}
                className="flex items-center justify-center"
              />
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
}
