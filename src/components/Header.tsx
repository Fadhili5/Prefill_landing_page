"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "FAQ", href: "#faq" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (!element) return;
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-slate-200 shadow-lg"
          : "bg-white"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 font-black text-xl tracking-tight text-slate-900"
            >
              <span className="text-primary">Prefill</span>
              <span className="bg-secondary text-white px-2 py-1 rounded-md text-base">
                AI
              </span>
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(e as any, "#cta");
              }}
            >
              Add to Chrome
            </Button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-slate-200 pt-4 pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button
                  className="w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(e as any, "#cta");
                  }}
                >
                  Add to Chrome
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

