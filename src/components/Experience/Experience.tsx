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
        period: "2023 - Presente",
        role: "Developer Full Stack",
        company: "Sua Empresa/Projeto Atual",
        location: "Maputo, Moçambique",
        summary:
          "Atualmente, dedico-me ao desenvolvimento de soluções completas, abrangendo tanto o front-end quanto o back-end. Foco em arquiteturas robustas e desempenho otimizado para entregar produtos digitais de alta qualidade.",
        responsibilities: [
          "Desenvolvimento e manutenção de aplicações web e mobile utilizando tecnologias modernas.",
          "Implementação de APIs RESTful e integração com serviços de terceiros.",
          "Otimização de desempenho e segurança das aplicações.",
        ],
      },
      {
        id: 2,
        period: "2020 - 2023",
        role: "Web Designer & Front-end Developer",
        company: "Projeto X / Cliente Y",
        location: "Remoto",
        summary:
          "Nesta fase, concentrei-me em criar interfaces de utilizador intuitivas e visualmente atraentes, traduzindo conceitos de design em código funcional e responsivo. Trabalhei na melhoria da experiência do utilizador e na otimização da performance.",
        responsibilities: [
          "Criação de protótipos e wireframes para novos projetos.",
          "Desenvolvimento de componentes reutilizáveis para diversas plataformas.",
          "Colaboração com equipas de back-end para integração de funcionalidades.",
          "Otimização de SEO e acessibilidade para padrões web.",
        ],
      },
      {
        id: 3,
        period: "2018 - 2020",
        role: "Designer Gráfico & Freelancer",
        company: "Trabalho Freelancer",
        location: "Maputo, Moçambique",
        summary:
          "Iniciei a minha jornada no mundo digital com design gráfico e projetos freelancer, o que me proporcionou uma base sólida em princípios de design e na comunicação visual, essenciais para o desenvolvimento de interfaces.",
        responsibilities: [
          "Criação de identidades visuais e materiais de marketing digital.",
          "Desenvolvimento de websites básicos e landing pages.",
          "Gestão de projetos e comunicação direta com clientes.",
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
    <section
      id="experience"
      className="py-20"
      
    >
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
