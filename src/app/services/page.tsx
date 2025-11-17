"use client";

import { motion } from "framer-motion";
import { FaCode, FaPaintBrush } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      icon: <FaCode className="text-blue-600 text-4xl mb-4" />,
      title: "Website Development",
      desc: "We craft modern, fast, and responsive websites using React, Next.js, and Tailwind CSS — built to perform beautifully across all devices.",
    },
    {
      icon: <FaPaintBrush className="text-blue-600 text-4xl mb-4" />,
      title: "UI / UX Design",
      desc: "We design intuitive, visually stunning interfaces that focus on usability, brand identity, and seamless user experience.",
    },
  ];

  return (
    <main className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12"
      >
        What We Do
      </motion.h1>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-10 hover:shadow-lg transition"
          >
            {service.icon}
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
              {service.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
