"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-yellow-400 mb-4"
      >
        About LaunchGrid
      </motion.h2>

      <p className="max-w-2xl text-gray-300 text-lg leading-relaxed">
        LaunchGrid is a free website launching service built for startups,
        students, and creators. We help you go live fast with modern, responsive
        designs — no cost, no hassle. Our goal is to empower everyone to have a
        digital presence that looks professional and works perfectly.
      </p>
    </section>
  );
}
