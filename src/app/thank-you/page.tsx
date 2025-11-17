"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 max-w-md w-full"
      >
        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Thank You!
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Your message has been successfully sent.  
          We’ll get back to you shortly!
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
