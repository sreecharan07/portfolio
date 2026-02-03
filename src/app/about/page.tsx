export default function About() {
  return (
    <section className="py-20 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">About Me</h2>
      <div className="space-y-6 text-lg text-muted leading-relaxed">
        <p className="text-muted leading-relaxed mb-6">
          I am Sree Charan, a backend-first software engineer with 3+ years of experience in building scalable distributed systems.
          My expertise lies in transforming complex requirements into reliable, high-performance APIs and services.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Education</h2>
        <div className="space-y-4">
          <div className="border-l-2 border-purple-500 pl-4">
            <h3 className="text-lg font-semibold text-white">Master of Business Administration (MBA)</h3>
            <p className="text-purple-400">University Canada West, Vancouver, BC</p>
            <p className="text-sm text-gray-500">Jan 2024 – Jun 2025</p>
          </div>
          <div className="border-l-2 border-purple-500 pl-4">
            <h3 className="text-lg font-semibold text-white">Advanced Certification in Data Science & AI</h3>
            <p className="text-purple-400">IIT Madras, India</p>
            <p className="text-sm text-gray-500">Oct 2021 – Sep 2022</p>
          </div>
          <div className="border-l-2 border-purple-500 pl-4">
            <h3 className="text-lg font-semibold text-white">B.Tech in Computer Science</h3>
            <p className="text-purple-400">Gitam University, Hyderabad</p>
            <p className="text-sm text-gray-500">Jun 2016 – Jun 2020</p>
          </div>
        </div>
        <p>
          Outside of work, I enjoy cricket 🏏, exploring new places 🌍, and
          constantly learning new skills to grow both personally and
          professionally.
        </p>
      </div>
    </section>
  );
}