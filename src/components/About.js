import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, 
        // Um threshold um pouco mais baixo pode ser útil para deteções mais rápidas
        { threshold: 0.1 } // Alterado de 0.2 para 0.1 para uma deteção mais sensível
        );
        if (element)
            observer.observe(element);
        return () => {
            if (element)
                observer.unobserve(element);
        };
    }, []); // O array de dependências está vazio, então roda apenas uma vez no mount
    return (_jsx("section", { id: "about", className: "py-20 bg-gray-100", children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-16", children: "Sobre Mim" }), _jsxs("div", { className: `flex flex-col md:flex-row items-center gap-12 ${
                    // Ajuste aqui para que a classe "fade-in" esteja sempre presente para transições
                    isVisible ? "visible" : ""}`, id: "about-section", children: [_jsx("div", { className: "w-full md:w-1/3 fade-in", children: _jsx("img", { src: "https://api.dicebear.com/8.x/avataaars/svg?seed=Ginovaldo&radius=50", alt: "Avatar do Ginovaldo", className: "rounded-lg shadow-lg w-full" }) }), _jsxs("div", { className: "w-full md:w-2/3 fade-in", children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: "Quem Sou Eu" }), _jsx("p", { className: "text-gray-700 mb-6", children: "Ol\u00E1! Sou o Ginovaldo, um Developer Full Stack apaixonado por transformar ideias complexas em solu\u00E7\u00F5es digitais elegantes e funcionais. Com mais de dois anos de experi\u00EAncia no desenvolvimento de aplica\u00E7\u00F5es web e mobile (especialmente com Quasar), dedico-me a criar produtos que n\u00E3o s\u00F3 s\u00E3o visualmente apelativos, mas tamb\u00E9m eficientes e intuitivos para o utilizador. A minha abordagem foca-se em c\u00F3digo limpo e tecnologias modernas para resolver problemas reais de forma escal\u00E1vel." }), _jsx("h3", { className: "text-2xl font-bold mb-4", children: "A Minha Jornada Criativa" }), _jsx("p", { className: "text-gray-700 mb-6", children: "A minha paix\u00E3o pela programa\u00E7\u00E3o nasceu da curiosidade e do desejo de criar. Iniciei a minha jornada de forma autodidata, mergulhando no universo do desenvolvimento para dar vida a projetos que me desafiavam. Desde ent\u00E3o, tenho vindo a aprimorar as minhas compet\u00EAncias e a contribuir para a evolu\u00E7\u00E3o digital de diversas iniciativas, sempre com um olhar atento \u00E0 inova\u00E7\u00E3o e \u00E0 otimiza\u00E7\u00E3o da experi\u00EAncia do utilizador." }), _jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-4xl font-bold text-primary", children: "2+" }), _jsx("p", { className: "text-gray-600", children: "Anos de Experi\u00EAncia" })] }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-4xl font-bold text-primary", children: "10+" }), _jsx("p", { className: "text-gray-600", children: "Projetos Conclu\u00EDdos" })] }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-4xl font-bold text-primary", children: "3+" }), _jsx("p", { className: "text-gray-600", children: "Clientes Satisfeitos" })] })] }), _jsxs("a", { href: "#", className: "inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-button font-medium hover:bg-gray-700 transition-colors whitespace-nowrap", children: [_jsx("div", { className: "w-5 h-5 mr-2 flex items-center justify-center", children: _jsx(Download, { className: "w-5 h-5" }) }), "Descarregar CV"] })] })] })] }) }));
};
export default About;
