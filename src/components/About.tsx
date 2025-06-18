import { useEffect, useState } from "react";
// Importar o ícone para download do Lucide React
import { Download } from "lucide-react";

const About = () => {
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

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    // Alterado o fundo para um cinza muito claro
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Sobre Mim
        </h2>
        <div
          className={`flex flex-col md:flex-row items-center gap-12 ${
            isVisible ? "fade-in visible" : "fade-in"
          }`}
          id="about-section"
        >
          <div className="w-full md:w-1/3">
            <img
              // Avatar sugerido - pode substituir por um seu
              src="https://api.dicebear.com/8.x/avataaars/svg?seed=Ginovaldo&radius=50&"
              alt="Avatar do Ginovaldo"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">Quem Sou Eu</h3>
            <p className="text-gray-700 mb-6">
              Olá! Sou o Ginovaldo Stélio Cumbe, um Developer Full Stack
              apaixonado e Web Designer com mais de 2 anos de experiência em
              criar soluções digitais robustas e visualmente apelativas. A minha
              paixão reside em transformar ideias complexas em experiências de
              utilizador intuitivas e eficientes, focando sempre em código
              limpo, escalável e de fácil manutenção.
            </p>
            <h3 className="text-2xl font-bold mb-4">A Minha Jornada</h3>
            <p className="text-gray-700 mb-6">
              A minha jornada no desenvolvimento começou por iniciativa própria,
              impulsionada pela curiosidade e pelo desejo de construir. Desde
              então, tenho aprofundado os meus conhecimentos em tecnologias
              front-end e back-end, com particular foco em desenvolvimento web e
              mobile com Quasar. Tenho dedicado o meu tempo a ajudar projetos a
              solidificar a sua presença digital, entregando não só
              funcionalidade, mas também um design que realmente se destaca e
              impacta.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">2+</p>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">10+</p>
                <p className="text-gray-600">Projetos Concluídos</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">3+</p>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-button font-medium hover:bg-gray-700 transition-colors whitespace-nowrap"
            >
              <div className="w-5 h-5 mr-2 flex items-center justify-center">
                {/* Ícone Lucide React para Download */}
                <Download className="w-5 h-5" />
              </div>
              Descarregar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
