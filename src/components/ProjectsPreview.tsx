"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredProjects = [
    {
        title: "Distributed API Platform",
        description: "High-volume REST APIs serving enterprise clients with focus on scalability and reliability.",
        tags: ["REST APIs", "Scalability", "Monitoring"],
    },
    {
        title: "Real-Time Data Pipeline",
        description: "Event-driven Azure integration processing millions of records daily with sub-second latency.",
        tags: ["Azure", "Event-Driven", "Big Data"],
    },
    {
        title: "Backend Optimization",
        description: "Performance tuning initiative achieving 30% query improvement and 25% faster deployments.",
        tags: ["Performance", "CI/CD", "SQL"],
    },
];

export default function ProjectsPreview() {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Key technical initiatives demonstrating expertise in distributed systems and backend optimization
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20 transition-all group"
                        >
                            <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-violet-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all group"
                    >
                        View All Projects
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
