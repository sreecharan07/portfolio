import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030014] py-10 mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-white mb-1">Sree Charan</h3>
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/sreecharan07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sree-charan-addala-a5b51889/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://instagram.com/sree_charan_1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}