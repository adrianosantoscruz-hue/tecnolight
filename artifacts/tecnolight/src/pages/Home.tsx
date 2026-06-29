import React from "react";
import { Navbar } from "@/components/blocks/Navbar";
import { Hero } from "@/components/blocks/Hero";
import { Services } from "@/components/blocks/Services";
import { Differentials } from "@/components/blocks/Differentials";
import { About } from "@/components/blocks/About";
import { Partners } from "@/components/blocks/Partners";
import { Portfolio } from "@/components/blocks/Portfolio";
import { FAQ } from "@/components/blocks/FAQ";
import { Contact } from "@/components/blocks/Contact";
import { Footer } from "@/components/blocks/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Differentials />
      <Portfolio />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
