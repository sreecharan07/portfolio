"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Distributed API Platform",
    description: "Designed and implemented high-volume REST APIs serving enterprise clients, focusing on scalability, monitoring, and production reliability.",
    tags: ["REST APIs", "Scalability", "Monitoring", "Distributed Systems"],
    image: "/project-placeholder.jpg",
    links: { demo: "#", github: "#" },
  },
  {
    title: "Real-Time Data Pipeline",
    description: "Built event-driven integration system using Azure services, processing millions of records daily with sub-second latency.",
    tags: ["Azure", "Event-Driven", "Big Data", "Real-Time Processing"],
    image: "/project-placeholder.jpg",
    links: { demo: "#", github: "#" },
  },
  {
    title: "Backend Optimization Initiative",
    description: "Led performance tuning showing 30% query improvement and 25% faster deployment cycles through CI/CD automation.",
    tags: ["Performance Tuning", "CI/CD", "SQL Optimization", "DevOps"],
    image: "/project-placeholder.jpg",
    links: { demo: "#", github: "#" },
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-[#030014]/50 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
          >
            {/* Image Placeholder */}
            <div className="aspect-video bg-gray-800 relative overflow-hidden">
              {/* Replace with actual Image component when you have screenshots */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Link
                  href={project.links.demo}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 py-2 rounded-lg text-white font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={16} /> Live Demo
                </Link>
                <Link
                  href={project.links.github}
                  className="flex-1 flex items-center justify-center gap-2 border border-white/10 bg-white/5 py-2 rounded-lg text-white font-medium text-sm hover:bg-white/10 transition-colors"
                >
                  <Github size={16} /> Code
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}