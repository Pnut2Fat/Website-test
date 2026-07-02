"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { farmInfo } from "@/data/farm-info";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Our Eggs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-amber-light shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Farm name */}
          <Link
            href="/"
            className="text-xl font-heading font-bold text-green tracking-tight hover:text-green-light transition-colors"
          >
            {farmInfo.name}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname === href
                    ? "text-barn border-b-2 border-barn"
                    : "text-brown-light hover:text-brown"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/products"
              className="bg-green text-cream text-sm font-medium px-4 py-2 rounded-full hover:bg-green-light transition-colors"
            >
              Buy Eggs
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-brown"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-cream-dark px-4 pb-4 pt-2 flex flex-col gap-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-medium py-1 transition-colors ${
                pathname === href ? "text-barn" : "text-brown-light hover:text-brown"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-green text-cream text-sm font-medium px-4 py-2 rounded-full text-center hover:bg-green-light transition-colors"
          >
            Buy Eggs
          </Link>
        </div>
      )}
    </nav>
  );
}
