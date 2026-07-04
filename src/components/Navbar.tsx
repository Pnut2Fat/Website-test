"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "next-themes";
import { farmInfo } from "@/data/farm-info";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Our Eggs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="w-9 h-9 flex items-center justify-center rounded-full border border-cream-dark dark:border-brown text-brown dark:text-cream hover:-translate-y-0.5 hover:scale-110 active:translate-y-0 transition-all duration-150"
    >
      {/* Sun icon (shown in dark mode to switch to light) */}
      <svg className="hidden dark:block w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
      </svg>
      {/* Moon icon (shown in light mode to switch to dark) */}
      <svg className="block dark:hidden w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream dark:bg-[#1C1208] border-b border-amber-light dark:border-[#3D2510] shadow-sm transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-heading font-bold text-green tracking-tight hover:text-green-light hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 transition-all duration-150 inline-block"
          >
            {farmInfo.name}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium inline-block hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 transition-all duration-150 ${
                  pathname === href
                    ? "text-barn border-b-2 border-barn"
                    : "text-brown-light dark:text-[#C4A882] hover:text-brown dark:hover:text-cream"
                }`}
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/products"
              className="bg-green text-cream text-sm font-medium px-4 py-2 rounded-full hover:bg-green-light hover:-translate-y-1 hover:shadow-lg active:translate-y-0 transition-all duration-150 inline-block"
            >
              Buy Eggs
            </Link>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-brown dark:text-cream"
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
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream dark:bg-[#1C1208] border-t border-cream-dark dark:border-[#3D2510] px-4 pb-4 pt-2 flex flex-col gap-3 transition-colors duration-200">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-medium py-1 transition-all duration-150 hover:translate-x-1 ${
                pathname === href ? "text-barn" : "text-brown-light dark:text-[#C4A882] hover:text-brown dark:hover:text-cream"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-green text-cream text-sm font-medium px-4 py-2 rounded-full text-center hover:bg-green-light hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-150"
          >
            Buy Eggs
          </Link>
        </div>
      )}
    </nav>
  );
}
