import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white shadow-md py-3"
            : "bg-black/40 backdrop-blur-sm py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary text-white">
                <Utensils size={24} />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "font-display text-2xl font-bold leading-none tracking-wider transition-colors",
                  isScrolled ? "text-gray-900" : "text-white"
                )}>
                  Fox's Diner
                </span>
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.2em] transition-colors",
                  isScrolled ? "text-primary" : "text-yellow-300"
                )}>
                  Munhall, PA
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary",
                        isScrolled ? "text-gray-900" : "text-white/90 hover:text-white"
                      )}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                <a
                  href="tel:+14124617345"
                  className={cn(
                    "flex items-center gap-2 text-sm font-bold transition-colors hover:text-primary",
                    isScrolled ? "text-gray-900" : "text-white"
                  )}
                >
                  <Phone size={16} />
                  (412) 461-7345
                </a>
                <a
                  href="https://www.foxsdinerpa.com/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-primary text-white font-display font-bold uppercase tracking-wider rounded shadow-lg hover:bg-red-800 transition-colors"
                >
                  Order Online
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-7 w-7 text-gray-900" />
              ) : (
                <Menu className={cn("h-7 w-7", isScrolled ? "text-gray-900" : "text-white")} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — rendered outside header to avoid stacking context issues */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col md:hidden"
          style={{ backgroundColor: "#fff" }}
        >
          {/* Top bar with logo + close */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary text-white">
                <Utensils size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-gray-900">Fox's Diner</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Munhall, PA</span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2"
            >
              <X className="h-7 w-7 text-gray-900" />
            </button>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col px-6 mt-4">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-gray-100">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-5 text-2xl font-display font-bold text-gray-900 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="px-6 mt-8 flex flex-col gap-4">
            <a
              href="tel:+14124617345"
              className="flex items-center justify-center gap-2 p-4 border-2 border-primary text-primary font-bold text-lg rounded-lg"
            >
              <Phone size={20} />
              (412) 461-7345
            </a>
            <a
              href="https://www.foxsdinerpa.com/order"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-primary text-white text-center font-display font-bold text-xl uppercase tracking-wider rounded-lg shadow-lg"
            >
              Order Online
            </a>
          </div>
        </div>
      )}
    </>
  );
}
