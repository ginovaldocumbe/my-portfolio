// Projects.jsx
import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard'; // Certifique-se que este caminho está correto

const PROJECTS_PER_LOAD = 6; // Quantos projetos mostrar por vez
const Projects = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(PROJECTS_PER_LOAD);
  const [isVisible, setIsVisible] = useState(false); // Para a animação da secção


  // Dados dos projetos com os links readdy.ai fornecidos e links de projeto
  const allProjects = useMemo(() => [
    {
      title: "e-Commerce ShopSmart",
      description: "Uma plataforma de e-commerce completa com gestão de inventário em tempo real e painel de análises.",
      image: "https://readdy.ai/api/search-image?query=modern%20e-commerce%20dashboard%20interface%20with%20clean%20design%2C%20data%20visualization%20charts%2C%20product%20management%20panel%2C%20user-friendly%20layout%2C%20professional%20UI%20design%20with%20blue%20accent%20colors%2C%20high%20quality%20screenshot&width=600&height=400&seq=1003&orientation=landscape",
      tech: ["React", "Node.js", "MongoDB"],
      category: "web",
      githubLink: "https://github.com/o-ginovaldo/shopsmart-ecommerce-demo", // Exemplo de link GitHub
      liveLink: "https://shopsmart.ginovaldo.dev", // Exemplo de link Live Demo
    },
    {
      title: "Aplicação Móvel FitTrack",
      description: "Uma aplicação móvel de monitorização de fitness com planos de treino personalizados e análises de progresso.",
      image: "https://readdy.ai/api/search-image?query=fitness%20tracking%20mobile%20app%20interface%20showing%20workout%20progress%2C%20clean%20modern%20UI%20with%20activity%20stats%2C%20heart%20rate%20monitoring%2C%20step%20counter%2C%20calorie%20tracker%2C%20professional%20mobile%20app%20design%20with%20blue%20and%20green%20accent%20colors&width=600&height=400&seq=1004&orientation=portrait",
      tech: ["React Native", "Firebase", "Redux"],
      category: "mobile",
      githubLink: "https://github.com/o-ginovaldo/fittrack-mobile-demo",
      liveLink: "", // Pode estar vazio se não houver live demo
    },
    {
      title: "Painel de Gestão Financeira WealthWise",
      description: "Um painel financeiro abrangente com monitorização de investimentos e gestão de portfólio.",
      image: "https://readdy.ai/api/search-image?query=financial%20dashboard%20UI%20design%20with%20modern%20interface%20with%20investment%20portfolio%20tracking%2C%20stock%20market%20data%20visualization%2C%20wealth%20management%20tools%2C%20professional%20fintech%20application%20with%20clean%20layout%2C%20dark%20mode%20design%20with%20blue%20accent%20colors&width=600&height=400&seq=1005&orientation=landscape",
      tech: ["Vue.js", "D3.js", "Express"],
      category: "ui",
      githubLink: "https://github.com/o-ginovaldo/wealthwise-dashboard-demo",
      liveLink: "https://wealthwise.ginovaldo.dev",
    },
    {
      title: "Ferramenta de Gestão de Projetos TaskFlow Pro",
      description: "Uma ferramenta colaborativa de gestão de projetos com atualizações em tempo real e funcionalidades de comunicação de equipa.",
      image: "https://readdy.ai/api/search-image?query=task%20management%20application%20interface%20with%20kanban%20board%2C%20project%20tracking%2C%20team%20collaboration%20features%2C%20modern%20UI%20with%20task%20cards%2C%20deadline%20indicators%2C%20clean%20layout%20with%20blue%20and%20purple%20accent%20colors&width=600&height=400&seq=1006&orientation=landscape",
      tech: ["Angular", "TypeScript", "Socket.io"],
      category: "web",
      githubLink: "https://github.com/o-ginovaldo/taskflow-pro-demo",
      liveLink: "https://taskflow.ginovaldo.dev",
    },
    {
      title: "Aplicação de Entrega QuickBite",
      description: "Uma aplicação móvel de entrega de comida com monitorização de pedidos em tempo real e recomendações personalizadas.",
      image: "https://readdy.ai/api/search-image?query=food%20delivery%20mobile%20app%20interface%20with%20restaurant%20listings%2C%20order%20tracking%2C%20meal%20categories%2C%20payment%20options%2C%20modern%20UI%20with%20food%20photography%2C%20clean%20design%20with%20orange%20and%20green%20accent%20colors&width=600&height=400&seq=1007&orientation=portrait",
      tech: ["Flutter", "Dart", "Firebase"],
      category: "mobile",
      githubLink: "https://github.com/o-ginovaldo/quickbite-delivery-demo",
      liveLink: "",
    },
    {
      title: "Plataforma de E-Learning EduSmart",
      description: "Uma plataforma de e-learning interativa com gestão de cursos e funcionalidades de monitorização de progresso.",
      image: "https://readdy.ai/api/search-image?query=learning%20management%20system%20interface%20with%20course%20catalog%2C%20student%20progress%20tracking%2C%20video%20lessons%2C%20quiz%20modules%2C%20modern%20educational%20platform%20UI%20with%20clean%20layout%2C%20professional%20design%20with%20blue%20and%20green%20accent%20colors&width=600&height=400&seq=1008&orientation=landscape",
      tech: ["Next.js", "GraphQL", "PostgreSQL"],
      category: "ui",
      githubLink: "https://github.com/o-ginovaldo/edusmart-platform-demo",
      liveLink: "https://edusmart.ginovaldo.dev",
    },
    // Mantive os projetos adicionais para o "Carregar Mais" com placeholders temporários
    // Lembre-se de preencher estes com os seus links e imagens reais!
    {
      title: "Sistema de Gestão de Eventos",
      description: "Um sistema robusto para gestão de eventos.",
      image: "https://via.placeholder.com/600x400?text=Eventos",
      tech: ["Laravel", "Vue.js", "MySQL"],
      category: "web",
      githubLink: "https://github.com/o-ginovaldo/event-manager-demo",
      liveLink: "",
    },
    {
      title: "Portefólio Pessoal v2",
      description: "A segunda versão do meu portefólio pessoal.",
      image: "https://via.placeholder.com/600x400?text=Portfolio+v2",
      tech: ["React", "Tailwind CSS", "Vite"],
      category: "web",
      githubLink: "https://github.com/o-ginovaldo/portfolio-v2-demo",
      liveLink: "https://ginovaldo.dev",
    },
  ], []);

  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => filter === 'all' || project.category === filter);
  }, [allProjects, filter]);

  const projectsToDisplay = useMemo(() => {
    return filteredProjects.slice(0, visibleProjectsCount);
  }, [filteredProjects, visibleProjectsCount]);

  useEffect(() => {
    const element = document.getElementById("projects-section");
    if (window.location.hash === "#projects" && element) {
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

  const handleAllProjectsPage = () => {
    navigate("/projects");
  };

  return (
    <section
      id="projects"
      className="py-10"
    >
      <div className=" mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          Meus Projetos
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          Apresento os meus melhores trabalhos em diversas tecnologias e indústrias.
          Cada projeto representa um desafio e uma solução única que desenvolvi.
        </p>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {['all', 'web', 'mobile', 'ui'].map(category => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
                setVisibleProjectsCount(PROJECTS_PER_LOAD);
              }}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ease-in-out
                ${filter === category ? 'bg-primary text-grey-100 shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-300'}
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50`}
            >
              {category === 'all' && 'Todos os Projetos'}
              {category === 'web' && 'Aplicações Web'}
              {category === 'mobile' && 'Aplicações Móveis'}
              {category === 'ui' && 'UI/UX Design'}
            </button>
          ))}
        </div>

        {/* Grid de projetos */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="projects-section"
        >
          {projectsToDisplay.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Botão Carregar Mais */}
        {filteredProjects.length > projectsToDisplay.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleAllProjectsPage}
              className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors duration-300 whitespace-nowrap shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
            >
             Ver mais
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;