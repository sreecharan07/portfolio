import { Github, Linkedin, Instagram } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6"></div>
      <p>© {new Date().getFullYear()} Sree Charan. All Rights Reserved.</p>
      {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/sreecharan07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sree-charan-addala-a5b51889/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://instagram.com/sree_charan_1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <Instagram size={20} />
          </a>
        </div>
    </footer>
  );
}