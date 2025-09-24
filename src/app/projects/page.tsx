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
    }
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800 hover:border-blue-500 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-800 text-blue-400 rounded-full"
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