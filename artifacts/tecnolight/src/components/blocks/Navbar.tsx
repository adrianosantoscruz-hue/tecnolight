import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Zap, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#services" },
    { label: "Diferenciais", href: "#differentials" },
    { label: "Quem Somos", href: "#about" },
    { label: "Contato", href: "#contact" },
  ];

  const Logo = () => (
    <div className="flex items-center gap-1 text-2xl font-heading tracking-widest text-white">
      TECN<Zap className="w-5 h-5 text-primary fill-primary -mx-0.5" />LIGHT
    </div>
  );

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#hero" className="hover:opacity-80 transition-opacity">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact">
            <Button className="font-heading text-lg tracking-wider gap-2">
              <Phone className="w-4 h-4" /> (21) 97244-3666
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-card border-b border-white/10 shadow-2xl py-4 flex flex-col items-center gap-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-heading tracking-wider text-white/90 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="font-heading text-xl mt-4">
                <Phone className="w-5 h-5 mr-2" /> (21) 97244-3666
              </Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
