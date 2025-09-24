import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] py-20 gap-10">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I’m <span className="text-blue-500">Sree Charan</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Associate Software Engineer | Building intelligent solutions through
          data, AI & innovation.
        </p>
        <div className="space-x-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium transition"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-gray-500 hover:border-blue-500 rounded-lg text-gray-300 hover:text-blue-400 transition"
          >
            Contact Me
          </a>
           <a
            href="/Resume_SreeCharanAddala_v15.pdf"
            download
            className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg text-white font-medium transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/DSC_7917 copy.jpg"
          alt="Sree Charan"
          width={300}
          height={300}
          className="rounded-full shadow-lg border-4 border-blue-600"
        />
      </div>
    </section>
  );
}