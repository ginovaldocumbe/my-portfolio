// ExperienceItem.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ExperienceItem = ({ experience, isVisible, index }) => {
    // Atraso para animação sequencial
    const animationDelay = `${index * 0.15}s`; // Aumentado ligeiramente para um efeito mais notável

    return (
        <div
            className={`flex flex-col md:flex-row gap-8 
                  relative group border-l-4 border-transparent pl-4 md:pl-0 
                  md:border-l-0 md:border-t-4 md:pt-4
                  ${isVisible ? 'animated-experience' : ''}`} // Nova classe para animação
            style={{ animationDelay }} // Aplica o atraso à animação CSS
        >
            {/* Linha vertical decorativa entre os blocos (apenas desktop) */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-light hidden md:block group-hover:bg-primary transition-colors duration-300"></div>

            <div className="w-full md:w-1/3 md:pr-8">
                <div className="md:sticky md:top-8 md:text-right"> {/* Alinhamento à direita no desktop */}
                    <span className="text-primary font-semibold text-lg">{experience.period}</span> {/* Aumentei o tamanho */}
                    <h3 className="text-2xl font-bold mt-2 text-gray-800">{experience.role}</h3> {/* Aumentei o tamanho */}
                    <p className="text-gray-700 mt-1">{experience.company}</p> {/* Escureci ligeiramente */}
                    <p className="text-gray-600 mt-1">{experience.location}</p> {/* Escureci ligeiramente */}
                </div>
            </div>
            <div className="w-full md:w-2/3">
                <div className="bg-white p-8 rounded-lg shadow-md  transform  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                    <p className="text-gray-800 mb-6 leading-relaxed"> {/* Escureci e aumentei espaçamento */}
                        {experience.summary}
                    </p>
                    <ul className="space-y-3 text-gray-700"> {/* Escureci a cor do texto */}
                        {experience.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start">
                                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-1 text-primary">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                <span className="ml-3">{responsibility}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;