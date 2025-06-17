import { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("skills-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 ${isVisible ? "fade-in visible" : "fade-in"}`} id="skills-section">
          {/* Frontend */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-code-s-slash-line ri-2x text-primary"></i>
            </div>
            <h3 className="text-xl font-bold mb-6">Frontend Development</h3>
            <div className="space-y-6">
              <SkillBar label="JavaScript/TypeScript" percent={95} color="primary" />
              <SkillBar label="React & Next.js" percent={90} color="primary" />
              <SkillBar label="HTML5/CSS3" percent={98} color="primary" />
              <SkillBar label="Tailwind/SASS" percent={92} color="primary" />
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-server-line ri-2x text-secondary"></i>
            </div>
            <h3 className="text-xl font-bold mb-6">Backend Development</h3>
            <div className="space-y-6">
              <SkillBar label="Node.js" percent={88} color="secondary" />
              <SkillBar label="Python/Django" percent={85} color="secondary" />
              <SkillBar label="SQL/NoSQL" percent={90} color="secondary" />
              <SkillBar label="GraphQL" percent={82} color="secondary" />
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-yellow-50 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-tools-line ri-2x text-yellow-500"></i>
            </div>
            <h3 className="text-xl font-bold mb-6">Tools & Other Skills</h3>
            <div className="space-y-6">
              <SkillBar label="Git/GitHub" percent={95} color="yellow-500" />
              <SkillBar label="Docker/Kubernetes" percent={80} color="yellow-500" />
              <SkillBar label="CI/CD" percent={85} color="yellow-500" />
              <SkillBar label="UI/UX Design" percent={78} color="yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skill Bar Component
const SkillBar = ({ label, percent, color }) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="skill-bar h-2 bg-gray-200 rounded overflow-hidden">
        <div
          className={`skill-progress h-full rounded transition-transform duration-1000 ease-out origin-left ${color === "primary" ? "bg-primary" : color === "secondary" ? "bg-secondary" : `bg-${color}`}`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;