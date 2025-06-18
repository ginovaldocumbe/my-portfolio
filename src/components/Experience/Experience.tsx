// Experience.jsx
import { useEffect, useState, useMemo } from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  const professionalExperiences = useMemo(
    () => [
      // Seus dados aqui (os mesmos de antes, já traduzidos e ajustados)
      {
        id: 1,
        period: "Feb 2025 - Presente",
        role: "Developer Full Stack",
        company: "Explicador, Inc,",
        location: "Maputo, Moçambique",
        summary:
          "Atualmente, dedico-me ao desenvolvimento de soluções completas, abrangendo tanto o front-end quanto o back-end. Foco em arquiteturas robustas e desempenho otimizado para entregar produtos digitais de alta qualidade.",
        responsibilities: [
          "Desenvolvimento e manutenção de aplicações web e mobile utilizando tecnologias modernas como Laravel e Quasar Framework.",
          "Suporte técnico aos clientes e potenciaisclientes.",
          "Execução de testes funcionais, identificação debugs e validação dos requisitos técnicos.",
        ],
      },
      {
        id: 2,
        period: "Fev 2024 - Nov 2024",
        role: "Analista Programador Estagiário",
        company: "Panthera Solutions",
        location: "Maputo",
        summary:
          "Nesta fase, concentrei-me em criar interfaces de utilizador intuitivas e visualmente atraentes, traduzindo conceitos de design em código funcional e responsivo. Trabalhei na melhoria da experiência do utilizador e na otimização da performance.",
        responsibilities: [
          "Realização de levantamento detalhado de requisitos junto aos stakeholders para compreender e definir as necessidades do projeto.",
          "Modelação e conceção de arquiteturas de sistemas utilizando a Unified Modeling Language (UML), incluindo diagramas de casos de uso, classes e sequências.",
          "Desenvolvimento e implementação de aplicações web full-stack utilizando PHP (para backend), HTML, CSS e JavaScript (para frontend).",
  
        ],
      },
      {
        id: 3,
        period: "Jun 2023 - Out 2023",
        role: "Estágio em Desenvolvimento de Software",
        company: "International Trading and Solutions",
        location: "Maputo, Moçambique",
        summary:
          "Iniciei a minha jornada no mundo digital com design gráfico e projetos freelancer, o que me proporcionou uma base sólida em princípios de design e na comunicação visual, essenciais para o desenvolvimento de interfaces.",
        responsibilities: [
          "Desenvolvimento e manutenção de sistemasweb usando Python, Html, Css e JavaScript.",
          "Colaboração para a modelação dos sistemasusando a linguagem UML.",
          "Contribuição para a documentação de código emanuais do usuário.",
        ],
      },
    ],
    []
  );

  useEffect(() => {
    const element = document.getElementById("experience-section");

    if (window.location.hash === "#experience" && element) {
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
    // Fundo mais escuro para contraste com os cartões brancos
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Experiência Profissional
        </h2>
        <div className="space-y-12" id="experience-section">
          {professionalExperiences.map((exp, index) => (
            <ExperienceItem
              key={exp.id}
              experience={exp}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
