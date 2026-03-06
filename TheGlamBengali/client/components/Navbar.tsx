import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "হোম", href: "/" },
    { label: "আমাদের সম্পর্কে", href: "/about" },
    { label: "যোগাযোগ", href: "/contact" },
    { label: "আমার একাউন্ট", href: "/account" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-sm border-b border-yoga-beige/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
            <img src="/logo.png" alt="TheGlam বাংলা" className="w-24 h-16 object-contain" />
          </Link>

          {/* Burger Menu Button (All Screens) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-white/80 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Dropdown */}
        {isOpen && (
          <div className="pb-4 border-t border-yoga-beige/20 bg-black/40 backdrop-blur-sm animate-slide-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-2 text-white hover:text-white/80 hover:bg-white/10 rounded-lg transition-all duration-300 text-lg font-medium group animate-slide-up"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${0.05 * (index + 1)}s` }}
                >
                  {link.label}
                  <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
