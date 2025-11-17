"use client";

import { motion } from "framer-motion";
import { FaRocket, FaArrowRight, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-[var(--background)] text-[var(--foreground)] px-6">
      {/* Brand Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-4"
      >
        <FaRocket className="text-blue-600 text-5xl" />
        <h1 className="text-5xl font-extrabold tracking-tight">LaunchGrid</h1>
      </motion.div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed"
      >
        We build beautiful, high-performance websites for startups, creators, and small businesses.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex gap-4 flex-wrap justify-center"
      >
        <Link
          href="/projects"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
        >
          View Projects <FaArrowRight />
        </Link>

        <Link
          href="/contact"
          className="flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 px-5 py-2.5 rounded-lg font-medium transition-all duration-200"
        >
          Contact Us <FaEnvelope />
        </Link>
      </motion.div>
    </main>
  );
}
