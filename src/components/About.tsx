import { useEffect, useState } from "react";
import { Download } from "lucide-react"; // Não se esqueça de importar o ícone!

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById("about-section");

    // Verificar se já estamos na secção "Sobre Mim" ao carregar a página
    // Isso resolve o problema de navegar diretamente ou dar refresh na hash
    if (window.location.hash === "#about" && element) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      // Um threshold um pouco mais baixo pode ser útil para deteções mais rápidas
      { threshold: 0.1 } // Alterado de 0.2 para 0.1 para uma deteção mais sensível
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []); // O array de dependências está vazio, então roda apenas uma vez no mount

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Sobre Mim
        </h2>
        <div
          className={`flex flex-col md:flex-row items-center gap-12 ${
            // Ajuste aqui para que a classe "fade-in" esteja sempre presente para transições
            isVisible ? "visible" : ""
          }`}
          id="about-section"
        >
          {/* Adicionei a classe "fade-in" diretamente aos elementos filhos
              para permitir animação individual e atrasos como discutimos antes */}
          <div className="w-full md:w-1/3 fade-in">
            <img
              src="https://api.dicebear.com/8.x/avataaars/svg?seed=Ginovaldo&radius=50"
              alt="Avatar do Ginovaldo"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="w-full md:w-2/3 fade-in">
            <h3 className="text-2xl font-bold mb-4">Quem Sou Eu</h3>
            <p className="text-gray-700 mb-6">
              Olá! Sou o Ginovaldo, um Developer Full Stack apaixonado por
              transformar ideias complexas em soluções digitais elegantes e
              funcionais. Com mais de dois anos de experiência no
              desenvolvimento de aplicações web e mobile (especialmente com
              Quasar), dedico-me a criar produtos que não só são visualmente
              apelativos, mas também eficientes e intuitivos para o utilizador.
              A minha abordagem foca-se em código limpo e tecnologias modernas
              para resolver problemas reais de forma escalável.
            </p>
            <h3 className="text-2xl font-bold mb-4">
              A Minha Jornada Criativa
            </h3>
            <p className="text-gray-700 mb-6">
              A minha paixão pela programação nasceu da curiosidade e do
              desejo de criar. Iniciei a minha jornada de forma autodidata,
              mergulhando no universo do desenvolvimento para dar vida a
              projetos que me desafiavam. Desde então, tenho vindo a aprimorar
              as minhas competências e a contribuir para a evolução digital
              de diversas iniciativas, sempre com um olhar atento à inovação e à
              otimização da experiência do utilizador.
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
