import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutUs } from "@/components/about-us"
import { Mission } from "@/components/mission"
import { Vision } from "@/components/vision"
import { Objectives } from "@/components/objectives"
import { Team } from "@/components/team"
import { Activities } from "@/components/activities"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Mission />
      <Vision />
      <Objectives />
      <Team />
      <Activities />
      <Footer />
    </main>
  )
}
