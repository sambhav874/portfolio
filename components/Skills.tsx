const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'Bash'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Backend',
      skills: ['Next.js', 'Node.js', 'Express', 'FastAPI', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'DevOps & Cloud',
      skills: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'CI/CD', 'Jenkins'],
    },
    {
      title: 'AI & ML',
      skills: ['OpenAI', 'Claude', 'RAG Pipelines', 'LangChain', 'HuggingFace/Ollama', 'VectorDBs' , 'n8n'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Vercel', 'Postman', 'VS Code', 'Windsurf/Cursor'],
    },
  ];

  return (
    <section id="skills" className="py-16 max-w-6xl mx-auto bg-black">
      {/* Section Header */}
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
          Expertise
        </h2>
        <div className="h-px w-24 bg-foreground" />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="group"
            style={{
              opacity: 0,
              animation: `fade-in-up 0.6s ease-out ${index * 0.1}s forwards`,
            }}
          >
            <div className="border-l border-border pl-6 hover:border-foreground transition-colors duration-300">
              <h3 className="text-lg font-normal mb-4 tracking-tight">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
