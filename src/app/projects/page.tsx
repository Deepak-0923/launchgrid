"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    // {
    //   title: "Sadhvi Academy",
    //   desc: "Educational website for a training institute built with Next.js, Supabase, and Tailwind.",
    //   image: "/images/projects/sadhvi.webp",
    //   link: "https://sadhvi-academy-web.vercel.app/",
    // },
    {
      title: "Portfolio Website",
      desc: "A personal portfolio showcasing skills, projects, and contact info — fully responsive and animated.",
      image: "/images/portfolio.webp",
      link: "https://deepakr-portfolio.vercel.app/",
    },
    {
      title: "Freelancer LaunchGrid",
      desc: "Website launching platform offering free and premium web development & UI/UX design services.",
      image: "/images/launchgrid.webp",
      link: "https://launchgrid.vercel.app/",
    },
  ];

  return (
    <main className=" min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
      >
        Our Projects
      </motion.h1>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group block bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-full group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6 text-left">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{project.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </main>
  );
}
