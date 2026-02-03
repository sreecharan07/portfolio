"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "Stealth Mode Startup",
        role: "Software Engineer",
        period: "Jan 2025 – Present",
        description: "Architecting backend data workflows using PostgreSQL and distributed services. Designed scalable systems to improve data consistency and reduce development cycles by 25%.",
        skills: ["PostgreSQL", "System Design", "Distributed Systems", "Data Workflows"],
    },
    {
        company: "CGS (Computer Generated Solutions)",
        role: "Associate Software Engineer",
        period: "Jun 2022 – Nov 2023",
        description: "Developed distributed ERP backend services using C# and .NET with 99.9% uptime. Optimized SQL queries for 30% better performance and implemented CI/CD pipelines in Azure DevOps.",
        skills: ["C#", ".NET", "SQL Server", "Azure DevOps", "REST APIs"],
    },
    {
        company: "CGS (Computer Generated Solutions)",
        role: "Software Trainee",
        period: "Dec 2021 – May 2022",
        description: "Built centralized error handling infrastructure and Power BI dashboards. Optimized database schemas improving data retrieval by 35%.",
        skills: ["Power BI", "SQL Optimization", "Error Handling", "Observability"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
                Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Experience</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-12 relative">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent hidden md:block"></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-background transform -translate-x-1.5 md:-translate-x-2 mt-1.5 z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

                        {/* Content Card */}
                        <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                            <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20 transition-all group">
                                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-violet-400 transition-colors">
                                    {exp.role}
                                </h3>
                                <p className="text-lg text-violet-400 font-medium mb-2">{exp.company}</p>
                                <p className="text-sm text-slate-400 mb-4 inline-block px-3 py-1 rounded-full bg-slate-700">
                                    {exp.period}
                                </p>
                                <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

                                <div className={`flex gap-2 flex-wrap ${index % 2 === 0 ? "justify-start" : "md:justify-end"}`}>
                                    {exp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-xs font-medium px-2 py-1 rounded-md bg-violet-500/20 text-violet-300 border border-violet-500/30"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Spacer for alternate side */}
                        <div className="flex-1 hidden md:block"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
