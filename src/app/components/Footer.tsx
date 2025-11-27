"use client";

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 mt-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">

        {/* 🔹 Brand */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-blue-600">SmartSite Maker</h2>
          <p className="text-sm mt-1">
            Crafting powerful websites with clean design and smooth performance.
          </p>

          {/* 🔹 Contact Info */}
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a
              href="mailto:SmartSite Maker.in@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <FaEnvelope className="text-blue-500" /> SmartSite Maker.in@gmail.com
            </a>

            {/* <a
              href="tel:+919092632491"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <FaPhoneAlt className="text-blue-500" /> +91 90926 32491
            </a>

            <a
              href="https://wa.me/919092632491"
              target="_blank"
              className="flex items-center gap-2 hover:text-green-600 transition"
            >
              <FaWhatsapp className="text-green-500" /> Chat on WhatsApp
            </a> */}
          </div>
        </div>

        {/* 🔹 Social Links */}
        <div className="flex gap-5 text-2xl">
          <Link
            href="https://www.facebook.com/SmartSite Maker"
            target="_blank"
            className="hover:text-blue-600 transition"
          >
            <FaFacebook />
          </Link>

          <Link
            href="https://www.instagram.com/SmartSite Maker.in"
            target="_blank"
            className="hover:text-pink-600 transition"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://www.linkedin.com/company/SmartSite Maker"
            target="_blank"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </Link>

          <Link
            href="https://github.com/SmartSite Maker"
            target="_blank"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            <FaGithub />
          </Link>
        </div>
      </div>

      {/* 🔹 Bottom Text */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6 border-t border-gray-200 dark:border-gray-800 pt-4">
        © {new Date().getFullYear()} SmartSite Maker. All rights reserved.
      </div>
    </footer>
  );
}
