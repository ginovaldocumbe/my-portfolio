// Skills.jsx
import { useEffect, useState, useMemo } from 'react';
import { Code, Server, Wrench, Smartphone } from 'lucide-react';
import SkillBar from '@/components/Skills/SkillBar'; // Certifique-se que o caminho está correto

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = useMemo(() => [
    {
      id: 'frontend',
      title: 'Desenvolvimento Frontend',
      icon: Code,
      iconBgColor: 'bg-blue-50',
      iconColorHex: '#3b82f6', // Cor primária AntD
      skills: [
        { label: 'JavaScript/TypeScript', percent: 95 },
        { label: 'React.js', percent: 90 },
        { label: 'Vue.js / Quasar Framework', percent: 88 },
        { label: 'HTML5/CSS3', percent: 98 },
        { label: 'Tailwind CSS / SASS', percent: 92 },
      ],
    },
    {
      id: 'backend',
      title: 'Desenvolvimento Backend',
      icon: Server,
      iconBgColor: 'bg-green-50',
      iconColorHex: '#10b981', // Cor secundária AntD
      skills: [
        { label: 'Node.js (Express/NestJS)', percent: 88 },
        { label: 'Python (Django/Flask)', percent: 85 },
        { label: 'SQL / NoSQL (MongoDB, PostgreSQL)', percent: 90 },
        { label: 'APIs RESTful / GraphQL', percent: 82 },
      ],
    },
    {
      id: 'mobile',
      title: 'Desenvolvimento Mobile',
      icon: Smartphone,
      iconBgColor: 'bg-purple-50',
      iconColorHex: '#8b5cf6', // Cor roxa AntD
      skills: [
        { label: 'Quasar Framework', percent: 90 },
        { label: 'React Native', percent: 75 },
        { label: 'Ionic', percent: 70 },
      ],
    },
    {
      id: 'tools-other',
      title: 'Ferramentas e Outras Habilidades',
      icon: Wrench,
      iconBgColor: 'bg-yellow-50',
      iconColorHex: '#f59e0b', // Cor amarela AntD
      skills: [
        { label: 'Git / GitHub / GitLab', percent: 95 },
        { label: 'Docker / CI/CD', percent: 80 },
        { label: 'Metodologias Ágeis (Scrum/Kanban)', percent: 85 },
        { label: 'UI/UX Design', percent: 78 },
      ],
    },
  ], []);

  useEffect(() => {
    const element = document.getElementById("skills-section");

    if (window.location.hash === "#skills" && element) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-10 bg-gray-100"
     
    >
      <div className=" mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Habilidades & Tecnologias
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5`}
          id="skills-section"
        >
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={`bg-white p-8 rounded-lg shadow-md transition delay-50 duration-100 ease-in-out hover:-translate-y-1 hover:scale-105
              ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className={`w-16 h-16 ${category.iconBgColor} rounded-lg flex items-center justify-center mb-6`}>
                {category.icon && <category.icon className={`w-8 h-8`} style={{ color: category.iconColorHex }} />} {/* Usar style para a cor do ícone Lucide */}
              </div>
              <h3 className="text-xl font-bold mb-6 text-gray-800">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skillIdx}
                    label={skill.label}
                    percent={isVisible ? skill.percent : 0}
                    color={category.iconColorHex} // Passa a cor hexadecimal para o AntD Progress
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;