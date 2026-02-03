"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12 md:gap-20 z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left space-y-6"
                >
                    {/* <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-4 backdrop-blur-sm">
                        <span className="flex w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                        Available for hire
                    </div> */}

                    {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                        Hi, I&apos;m <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            Sree Charan
                        </span>
                    </h1> */}

                    <div className="text-xl md:text-2xl text-gray-300 font-medium h-10">
                        <Typewriter
                            options={{
                                strings: [
                                    "Backend-First Engineer",
                                    "Distributed Systems Architect",
                                    ".NET Expert",
                                    "Cloud & DevOps Practitioner",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </div>

                    <p className="text-lg text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Backend-first software engineer with 3+ years of experience building scalable distributed systems and APIs.
                        Passionate about leveraging data and optimization to deliver exceptional performance.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-6">
                        <Link
                            href="/projects"
                            className="group w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 flex items-center justify-center gap-2"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                            <Mail size={12} /> Contact Me
                        </Link>

                        <a
                            href="/ATS_Resume.pdf"
                            download
                            className="w-full sm:w-auto px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 font-medium transition-all flex items-center justify-center gap-2"
                        >
                            <Download size={12} /> Resume
                        </a>
                    </div>
                </motion.div>

                {/* Right Content - Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex justify-center"
                >
                    {/* Wrapper */}
                    <div className="flex flex-col items-center relative">

                        {/* Image Container */}
                        <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                            {/* Glowing Ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-600 opacity-70 blur-2xl group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                            {/* Image */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 z-10 p-1 bg-black/50 backdrop-blur-sm">
                                <div className="w-full h-full rounded-full overflow-hidden relative">
                                    <Image
                                        src="/picture_1.jpeg"
                                        alt="Sree Charan"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Orbiting Elements */}
                            <div className="absolute top-0 right-0 p-3 bg-[#030014] border border-white/10 rounded-xl shadow-lg animate-bounce delay-700">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <div className="absolute bottom-10 left-[-20px] p-3 bg-[#030014] border border-white/10 rounded-xl shadow-lg animate-bounce delay-1000">
                                <span className="text-2xl">💻</span>
                            </div>
                        </div>

                        {/* Social Icons — NOW UNDER IMAGE */}
                        <div className="flex gap-3 mt-5">
                            <a
                                href="https://linkedin.com/in/sree-charanaddala"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="p-2.5 bg-slate-800/80 border border-slate-700 rounded-lg
                           hover:bg-blue-600 hover:border-blue-500
                           transition-all duration-200 group hover:-translate-y-0.5"
                            >
                                <FaLinkedin className="text-lg text-slate-200 group-hover:text-white" />
                            </a>

                            <a
                                href="mailto:charanaddalaa7@gmail.com"
                                aria-label="Gmail"
                                className="p-2.5 bg-slate-800/80 border border-slate-700 rounded-lg
                           hover:bg-red-600 hover:border-red-500
                           transition-all duration-200 group hover:-translate-y-0.5"
                            >
                                <SiGmail className="text-lg text-slate-200 group-hover:text-white" />
                            </a>

                            <a
                                href="https://github.com/sreecharan07"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="p-2.5 bg-slate-800/80 border border-slate-700 rounded-lg
                           hover:bg-purple-600 hover:border-purple-500
                           transition-all duration-200 group hover:-translate-y-0.5"
                            >
                                <FaGithub className="text-lg text-slate-200 group-hover:text-white" />
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
