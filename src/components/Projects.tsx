import { useEffect, useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => {
      document.querySelectorAll('.fade-in').forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const projects = [
    {
      title: "ShopSmart E-commerce",
      description: "A full-featured e-commerce platform with real-time inventory management and analytics dashboard.",
      image: "https://readdy.ai/api/search-image?query=modern%20e-commerce%20dashboard%20interface%20with%20clean%20design%2C%20data%20visualization%20charts%2C%20product%20management%20panel%2C%20user-friendly%20layout%2C%20professional%20UI%20design%20with%20blue%20accent%20colors%2C%20high%20quality%20screenshot&width=600&height=400&seq=1003&orientation=landscape",
      tech: ["React", "Node.js", "MongoDB"],
      category: "web"
    },
    {
      title: "FitTrack Mobile App",
      description: "A fitness tracking mobile app with personalized workout plans and progress analytics.",
      image: "https://readdy.ai/api/search-image?query=fitness%20tracking%20mobile%20app%20interface%20showing%20workout%20progress%2C%20clean%20modern%20UI%20with%20activity%20stats%2C%20heart%20rate%20monitoring%2C%20step%20counter%2C%20calorie%20tracker%2C%20professional%20mobile%20app%20design%20with%20blue%20and%20green%20accent%20colors&width=600&height=400&seq=1004&orientation=portrait",
      tech: ["React Native", "Firebase", "Redux"],
      category: "mobile"
    },
    {
      title: "WealthWise Dashboard",
      description: "A comprehensive financial dashboard with investment tracking and portfolio management.",
      image: "https://readdy.ai/api/search-image?query=financial%20dashboard%20UI%20design%20with%20modern%20interface%20with%20investment%20portfolio%20tracking%2C%20stock%20market%20data%20visualization%2C%20wealth%20management%20tools%2C%20professional%20fintech%20application%20with%20clean%20layout%2C%20dark%20mode%20design%20with%20blue%20accent%20colors&width=600&height=400&seq=1005&orientation=landscape",
      tech: ["Vue.js", "D3.js", "Express"],
      category: "ui"
    },
    {
      title: "TaskFlow Pro",
      description: "A collaborative project management tool with real-time updates and team communication features.",
      image: "https://readdy.ai/api/search-image?query=task%20management%20application%20interface%20with%20kanban%20board%2C%20project%20tracking%2C%20team%20collaboration%20features%2C%20modern%20UI%20with%20task%20cards%2C%20deadline%20indicators%2C%20clean%20layout%20with%20blue%20and%20purple%20accent%20colors&width=600&height=400&seq=1006&orientation=landscape",
      tech: ["Angular", "TypeScript", "Socket.io"],
      category: "web"
    },
    {
      title: "QuickBite Delivery",
      description: "A food delivery mobile app with real-time order tracking and personalized recommendations.",
      image: "https://readdy.ai/api/search-image?query=food%20delivery%20mobile%20app%20interface%20with%20restaurant%20listings%2C%20order%20tracking%2C%20meal%20categories%2C%20payment%20options%2C%20modern%20UI%20with%20food%20photography%2C%20clean%20design%20with%20orange%20and%20green%20accent%20colors&width=600&height=400&seq=1007&orientation=portrait",
      tech: ["Flutter", "Dart", "Firebase"],
      category: "mobile"
    },
    {
      title: "EduSmart Platform",
      description: "An interactive learning platform with course management and progress tracking features.",
      image: "https://readdy.ai/api/search-image?query=learning%20management%20system%20interface%20with%20course%20catalog%2C%20student%20progress%20tracking%2C%20video%20lessons%2C%20quiz%20modules%2C%20modern%20educational%20platform%20UI%20with%20clean%20layout%2C%20professional%20design%20with%20blue%20and%20green%20accent%20colors&width=600&height=400&seq=1008&orientation=landscape",
      tech: ["Next.js", "GraphQL", "PostgreSQL"],
      category: "ui"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">My Projects</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Showcasing my best work across various technologies and industries.
          Each project represents a unique challenge and solution.
        </p>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => handleFilterChange('all')}
            className={`px-6 py-2 rounded-full font-medium whitespace-nowrap ${
              filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => handleFilterChange('web')}
            className={`px-6 py-2 rounded-full font-medium whitespace-nowrap ${
              filter === 'web' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Web Apps
          </button>
          <button
            onClick={() => handleFilterChange('mobile')}
            className={`px-6 py-2 rounded-full font-medium whitespace-nowrap ${
              filter === 'mobile' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Mobile Apps
          </button>
          <button
            onClick={() => handleFilterChange('ui')}
            className={`px-6 py-2 rounded-full font-medium whitespace-nowrap ${
              filter === 'ui' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            UI/UX Design
          </button>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(project => filter === 'all' || project.category === filter)
            .map((project, index) => (
              <div key={index} className="project-card rounded-lg overflow-hidden shadow-md fade-in" data-category={project.category}>
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-56 object-cover object-top" />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <div className="flex justify-center space-x-4 mb-4">
                        <a href="#" className="text-white hover:text-primary transition-colors"> 
                          <div className="w-10 h-10 flex items-center justify-center">
                            <i className="ri-github-fill ri-lg"></i>
                          </div>
                        </a>
                        <a href="#" className="text-white hover:text-primary transition-colors">
                          <div className="w-10 h-10 flex items-center justify-center">
                            <i className="ri-external-link-line ri-lg"></i>
                          </div>
                        </a>
                      </div>
                      <p className="text-white">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.tech.join(', ')}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Botão Carregar Mais */}
        <div className="text-center mt-12">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-button font-medium hover:bg-gray-700 transition-colors whitespace-nowrap">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;