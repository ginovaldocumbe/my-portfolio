// ProjectCard.jsx
import React from 'react';
import { Github, ExternalLink } from 'lucide-react'; // Ícones Lucide

const ProjectCard = ({ project, index, isVisible }) => {
  // Atraso para animação sequencial
  const animationDelay = `${index * 0.1}s`;

  return (
    <div
      // A classe 'fade-in' e 'visible' controlam a animação de entrada
      className={`project-card rounded-lg overflow-hidden shadow-md bg-white 
                  transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg
                  ${isVisible ? 'animated-project-card' : ''}`} // Classe para a animação
      style={{ animationDelay }}
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover object-top"
        />
        {/* Overlay com detalhes e links */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="text-center">
            <p className="text-white mb-4 leading-relaxed text-sm md:text-base">
              {project.description}
            </p>
            <div className="flex justify-center space-x-4">
              {project.githubLink && ( // Só mostra se houver link
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
                  aria-label={`Ver o código de ${project.title} no GitHub`}
                >
                  <Github className="w-7 h-7" /> {/* Ícone Lucide */}
                </a>
              )}
              {project.liveLink && ( // Só mostra se houver link
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
                  aria-label={`Ver ${project.title} em ação`}
                >
                  <ExternalLink className="w-7 h-7" /> {/* Ícone Lucide */}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;