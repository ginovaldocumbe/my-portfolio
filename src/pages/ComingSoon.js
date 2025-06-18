import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/ComingSoon.jsx
import { useEffect, useState } from 'react';
import { Sparkles, Github, Linkedin, X, Instagram } from 'lucide-react'; // Ícones para o brilho e redes sociais
const ComingSoon = () => {
    const [showContent, setShowContent] = useState(false);
    useEffect(() => {
        // Pequeno atraso para a animação de entrada do conteúdo
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);
    return (_jsxs("div", { className: "flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white p-6 relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-cyan-800 to-transparent opacity-15 z-0" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-bl from-teal-800 to-transparent opacity-15 z-0" }), _jsxs("div", { className: `relative z-10 text-center transition-all duration-1000 ease-out 
                    ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`, children: [_jsxs("div", { className: "mb-8", children: [_jsx(Sparkles, { size: 64, className: "mx-auto text-blue-300 animate-pulse-slow-custom" }), _jsx("style", { children: `
            @keyframes pulse-slow-custom {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.6; }
            }
            .animate-pulse-slow-custom {
              animation: pulse-slow-custom 3s infinite ease-in-out;
            }
          ` })] }), _jsx("h1", { className: "text-4xl md:text-6xl font-bold mb-4 text-blue-200 leading-tight tracking-tight", children: "Em Breve" }), _jsx("p", { className: "text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed", children: "Prepare-se! Estamos a trabalhar em algo **fant\u00E1stico** que vai surpreender. Volte em breve para a revela\u00E7\u00E3o." }), _jsx("p", { className: "text-md text-gray-400 mb-16 italic", children: "(Aperfei\u00E7oar uma obra-prima leva tempo. Perguntem ao Da Vinci... e ele nem tinha *bugs*!)" }), _jsxs("div", { className: "flex justify-center space-x-6 mb-12", children: [_jsx("a", { href: "https://linkedin.com/in/o-ginovaldo" // Substitua pelos seus links reais
                                , target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn", className: "text-gray-400 hover:text-white transition-colors text-3xl transform hover:scale-110", children: _jsx(Linkedin, { size: 32 }) }), _jsx("a", { href: "https://x.com/o-ginovaldo" // X (antigo Twitter)
                                , target: "_blank", rel: "noopener noreferrer", "aria-label": "X (Twitter)", className: "text-gray-400 hover:text-white transition-colors text-3xl transform hover:scale-110", children: _jsx(X, { size: 32 }) }), _jsx("a", { href: "https://instagram.com/o-ginovaldo" // Instagram
                                , target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "text-gray-400 hover:text-white transition-colors text-3xl transform hover:scale-110", children: _jsx(Instagram, { size: 32 }) }), _jsx("a", { href: "https://github.com/o-ginovaldo" // GitHub
                                , target: "_blank", rel: "noopener noreferrer", "aria-label": "GitHub", className: "text-gray-400 hover:text-white transition-colors text-3xl transform hover:scale-110", children: _jsx(Github, { size: 32 }) })] }), _jsx("button", { onClick: () => window.history.back(), className: "text-gray-400 border border-gray-600 px-8 py-3 rounded-md font-semibold text-base \r\n                     hover:text-white hover:border-white transition-all duration-300 \r\n                     focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-70", children: "Voltar para a P\u00E1gina Anterior" })] })] }));
};
export default ComingSoon;
