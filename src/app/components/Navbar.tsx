"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaLaptopCode,
  FaBriefcase,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/about", label: "About", icon: <FaInfoCircle /> },
    { href: "/services", label: "Services", icon: <FaLaptopCode /> },
    { href: "/projects", label: "Projects", icon: <FaBriefcase /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* 🔹 Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 text-blue-600 font-bold text-2xl"
        >
          <FaLaptopCode className="text-blue-600" />
          LaunchGrid
        </Link>

        {/* 🔹 Desktop Menu */}
        <div className="hidden sm:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-1 px-2 py-1 rounded transition ${
                pathname === link.href
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>

        {/* 🔹 Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-gray-700 dark:text-gray-200 text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex flex-col items-start px-6 py-4 text-gray-700 dark:text-gray-200 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className={`flex items-center gap-2 transition ${
                pathname === link.href
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
