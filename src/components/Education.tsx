"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
    {
        degree: "Master of Business Administration (MBA)",
        institution: "University Canada West",
        location: "Vancouver, BC",
        period: "Jan 2024 – Jun 2025",
        type: "Graduate",
    },
    {
        degree: "Advanced Certification in Data Science & AI",
        institution: "Indian Institute of Technology, Madras",
        location: "Chennai, India",
        period: "Oct 2021 – Sep 2022",
        type: "Certification",
    },
    {
        degree: "Bachelor of Technology in Computer Science",
        institution: "Gitam University",
        location: "Hyderabad, India",
        period: "Jun 2016 – Jun 2020",
        type: "Undergraduate",
    },
];

export default function Education() {
    return (
        <section id="education" className="py-20 px-6 bg-slate-900">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
                >
                    Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Certifications</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20 transition-all group"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-violet-500/20 rounded-lg group-hover:bg-violet-500/30 transition-colors">
                                    <FaGraduationCap className="text-2xl text-violet-400" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                                        {edu.type}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-violet-400 transition-colors">
                                {edu.degree}
                            </h3>
                            <p className="text-violet-400 font-medium mb-1">{edu.institution}</p>
                            <p className="text-slate-500 text-sm mb-2">{edu.location}</p>
                            <p className="text-slate-400 text-sm">{edu.period}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
