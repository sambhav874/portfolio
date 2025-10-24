import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const experiences = [
    {
      period: 'Oct 2024 - Present',
      role: 'Associate Software Engineer Intern',
      company: 'Ninth Quadrant (UK)',
      description: 'Developed ContractSense.ai, reducing contract review time by ~60%. Working with AI-driven systems within Linux environments.',
    },
    {
      period: 'Dec 2023 - Present',
      role: 'Collaborator',
      company: 'Electronic Trading System (FIX Protocol Project)',
      description: 'Explored and tested a FIX-based prototype trading engine for high-frequency simulated trading.',
    },
    {
      period: 'Mar 2023',
      role: 'Freelance Software Developer',
      company: 'Remote',
      description: 'Built and deployed full-stack web apps using React, Next.js, and FastAPI on AWS and Vercel.',
    },
  ];

  const education = {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Aryabhatta College, Delhi University',
    period: '2022 - 2026',
  };

  return (
    <section id="resume" className="py-16  mx-auto max-w-6xl">
      {/* Section Header */}
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
          Experience
        </h2>
        <div className="h-px w-24 bg-foreground" />
      </div>

      {/* Timeline */}
      <div className="space-y-16 mb-20">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="grid md:grid-cols-12 gap-8 group"
            style={{
              opacity: 0,
              animation: `fade-in-up 0.6s ease-out ${index * 0.1}s forwards`,
            }}
          >
            {/* Period */}
            <div className="md:col-span-3">
              <p className="text-sm font-light text-muted-foreground">
                {exp.period}
              </p>
            </div>

            {/* Content */}
            <div className="md:col-span-9 border-l border-border pl-8 group-hover:border-foreground transition-colors duration-300">
              <h3 className="text-xl font-normal mb-1">
                {exp.role}
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                {exp.company}
              </p>
              <p className="text-sm font-light text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div
        className="border-t border-border pt-16"
        style={{
          opacity: 0,
          animation: 'fade-in-up 0.6s ease-out 0.4s forwards',
        }}
      >
        <h3 className="text-2xl font-light tracking-tight mb-8">Education</h3>
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <p className="text-sm font-light text-muted-foreground">
              {education.period}
            </p>
          </div>
          <div className="md:col-span-9 border-l border-border pl-8">
            <h4 className="text-lg font-normal mb-1">{education.degree}</h4>
            <p className="text-base text-muted-foreground">
              {education.institution}
            </p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div
        className="mt-20 text-center"
        style={{
          opacity: 0,
          animation: 'fade-in-up 0.6s ease-out 0.6s forwards',
        }}
      >
        <Button
          variant="outline"
          asChild
          className="group hover:bg-foreground hover:text-background transition-all duration-300 text-black"
        >
          <a href="/Sambhav_Jain-Resume.pdf"  download>
            <Download size={16} className="mr-2 group-hover:animate-bounce" />
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Resume;
