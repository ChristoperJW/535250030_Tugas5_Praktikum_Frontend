"use client";
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import AboutSection from "../components/aboutsection";
import MenuSection from "../components/menusection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}