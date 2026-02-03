"use client";

import { motion } from "framer-motion";
import {
    SiPython, SiGo, SiPostgresql,
    SiDocker, SiLinux, SiGit,
    SiSpring, SiDotnet, SiTypescript
} from "react-icons/si";
import { FaDatabase, FaCloud, FaCode, FaServer, FaJava, FaChartBar } from "react-icons/fa";

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "Java", icon: FaJava, color: "#007396" },
            { name: "C#", icon: FaCode, color: "#239120" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "SQL", icon: FaDatabase, color: "#4479A1" },
            { name: "Go", icon: SiGo, color: "#00ADD8" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "REST APIs", icon: FaServer, color: "#61DAFB" },
            { name: "Microservices", icon: FaCode, color: "#FF6B6B" },
            { name: "Distributed Systems", icon: FaServer, color: "#4A90E2" },
            { name: ".NET Core", icon: SiDotnet, color: "#512BD4" },
            { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
        ],
    },
    {
        title: "Data & ML",
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
            { name: "SQL Server", icon: FaDatabase, color: "#CC2927" },
            { name: "Big Data", icon: FaDatabase, color: "#FF6B00" },
            { name: "Machine Learning", icon: FaCode, color: "#FF6F00" },
            { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
        ],
    },
    {
        title: "Cloud & DevOps",
        skills: [
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Azure", icon: FaCloud, color: "#0078D4" },
            { name: "CI/CD", icon: FaCloud, color: "#00C853" },
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
            { name: "Git", icon: SiGit, color: "#F05032" },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6 bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
                >
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Skills</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20 transition-all"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-purple-200">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-slate-700/50 text-slate-100 border border-slate-600 hover:bg-slate-700 hover:border-violet-500/50 transition-all group cursor-pointer"
                                        >
                                            <Icon className="text-lg group-hover:scale-110 transition-transform" style={{ color: skill.color }} />
                                            <span>{skill.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
