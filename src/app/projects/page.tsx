export default function Projects() {
  const projects = [
    {
      title: "Walmart Sales Dashboard",
      description:
        "Built an interactive Tableau dashboard to track key KPIs such as CPI and unemployment impact on sales.",
      tech: ["Tableau", "Python", "Pandas"],
    },
    {
      title: "Crime Data Analysis",
      description:
        "Analyzed real-world crime data, cleaned missing values, and identified key trends with data visualization.",
      tech: ["Python", "Pandas", "Matplotlib"],
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group block p-6 rounded-xl border border-border bg-card/50 hover:bg-card/80 hover:border-primary/50 transition-all shadow-sm hover:shadow-md"
          >
            <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}