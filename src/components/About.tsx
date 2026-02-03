"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 px-6 bg-slate-900/50">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
                >
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Me</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4 text-lg text-gray-300 leading-relaxed"
                >
                    <p>
                        I'm a <span className="text-purple-400 font-semibold">backend-first software engineer</span> with over 3 years of experience
                        building scalable distributed systems and high-performance APIs. My expertise spans across Java, C#, Python, and modern cloud technologies.
                    </p>
                    <p>
                        Currently working at a stealth mode startup, I focus on architecting robust backend solutions that handle millions of transactions
                        while maintaining exceptional reliability. I'm passionate about system design, performance optimization, and leveraging data to solve complex problems.
                    </p>
                    <p>
                        With an <span className="text-cyan-400 font-semibold">MBA</span> and advanced certifications in Data Science & AI from IIT Madras,
                        I bring both technical depth and business acumen to every project.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
