import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Sree Charan. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/sreecharan07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sree-charan-addala-a5b51889/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://instagram.com/sree_charan_1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}