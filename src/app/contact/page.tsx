"use client";

import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 py-20">
      {/* 🔹 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8"
      >
        Get in Touch
      </motion.h1>

      {/* 🔹 Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 dark:text-gray-400 text-center max-w-xl mb-10"
      >
        Have a project in mind or want to collaborate? Fill out the form below — we’ll reply soon.
      </motion.p>

      {/* 🔹 Email Info */}
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        href="mailto:launchgrid.in@gmail.com"
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-10"
      >
        <FaEnvelope /> launchgrid.in@gmail.com
      </motion.a>

      {/* 🔹 Contact Form (FormSubmit integration) */}
      <motion.form
        action="https://formsubmit.co/launchgrid.in@gmail.com"
        method="POST"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-lg"
      >
        {/* Hidden fields for settings */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://launchgrid.vercel.app/thank-you" />

        {/* Name */}
        <div className="mb-4">
          <label className="block text-left text-gray-700 dark:text-gray-300 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-left text-gray-700 dark:text-gray-300 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-left text-gray-700 dark:text-gray-300 font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition font-medium"
        >
          Send Message
        </button>
      </motion.form>
    </main>
  );
}
