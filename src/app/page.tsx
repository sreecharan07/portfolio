import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />

      {/* Featured/Recent Projects Teaser - Can be expanded later */}
      <section className="py-10">
        <h2 className="text-2xl font-bold text-foreground mb-6">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-colors">
            <h3 className="font-semibold text-lg mb-2">Web Development</h3>
            <p className="text-muted text-sm">
              Building responsive, accessible, and performant web applications using modern frameworks like Next.js and React.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-colors">
            <h3 className="font-semibold text-lg mb-2">AI & Data</h3>
            <p className="text-muted text-sm">
              Leveraging data and artificial intelligence to create intelligent solutions and drive innovation.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-colors">
            <h3 className="font-semibold text-lg mb-2">UI/UX Design</h3>
            <p className="text-muted text-sm">
              Crafting intuitive and aesthetically pleasing user interfaces that provide seamless user experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}