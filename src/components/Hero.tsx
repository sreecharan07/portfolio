import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)] py-20 gap-10 md:gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-500 text-sm font-medium mb-2">
                    <span>Available for hire</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                    Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Sree Charan</span>
                </h1>

                <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto md:mx-0 leading-relaxed">
                    Associate Software Engineer building intelligent solutions through data, AI & innovation.
                    Focusing on creating seamless digital experiences.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                    <Link
                        href="/projects"
                        className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-blue-600 rounded-lg text-white font-medium transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                    >
                        View Projects <ArrowRight size={18} />
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-8 py-3 border border-border hover:border-primary/50 bg-background hover:bg-secondary/50 rounded-lg text-foreground font-medium transition-all flex items-center justify-center"
                    >
                        Contact Me
                    </Link>
                    <a
                        href="/Resume_SreeCharanAddala_v15.pdf"
                        download
                        className="w-full sm:w-auto px-8 py-3 border border-border hover:border-green-500/50 hover:text-green-600 hover:bg-green-500/5 rounded-lg text-muted font-medium transition-all flex items-center justify-center gap-2"
                    >
                        <Download size={18} /> Resume
                    </a>
                </div>
            </div>

            {/* Right Content - Visual */}
            <div className="flex-1 flex justify-center relative">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                    {/* Abstract blobs/gradients behind image */}
                    <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-tr from-cyan-500/20 to-green-500/20 rounded-full blur-3xl"></div>

                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl ring-1 ring-white/10">
                        <Image
                            src="/DSC_7917 copy.jpg"
                            alt="Sree Charan"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
