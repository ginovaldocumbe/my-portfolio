import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useMemo } from "react";
// Importar os ícones Lucide React que serão usados
import { ChevronDown } from "lucide-react";
const Hero = () => {
    const texts = useMemo(() => [
        "Developer Full Stack", // Alterado e traduzido
        "Web Designer", // Traduzido
        "Developer Mobile (Quasar)", // Adicionado com a sua sugestão e esclarecimento
        "Engenheiro UI/UX", // Sugestão para uma habilidade relacionada
        "Especialista em Experiência Digital", // Sugestão para um toque mais abrangente
    ], []);
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const [count, setCount] = useState(0);
    useEffect(() => {
        const typingEffect = setInterval(() => {
            if (index === texts[count].length && count < texts.length) {
                setTimeout(() => {
                    setIndex(0);
                    setCount((prev) => (prev + 1) % texts.length);
                }, 2000);
                return;
            }
            setCurrentText(texts[count].substring(0, index + 1));
            setIndex((prev) => prev + 1);
        }, 100);
        return () => clearInterval(typingEffect);
    }, [index, count, texts]);
    return (_jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden", style: {
            backgroundImage: "url('https://readdy.ai/api/search-image?query=modern%20minimalist%20dark%20coding%20workspace%20with%20subtle%20blue%20glow%2C%20clean%20desk%20with%20a%20laptop%20showing%20code%2C%20dark%20background%20with%20soft%20particle%20effects%2C%20professional%20developer%20environment%2C%20high-quality%20digital%20art&width=1920&height=1080&seq=1001&orientation=landscape')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }, children: [_jsx("div", { className: "absolute inset-0 bg-black/40" }), _jsx("div", { className: "container mx-auto px-6 z-10", children: _jsxs("div", { className: "w-full md:w-2/3 text-white", children: [_jsx("h1", { className: "text-4xl md:text-6xl font-bold mb-4", children: "Ginovaldo St\u00E9lio Cumbe" }), _jsxs("div", { className: "text-2xl md:text-4xl font-light mb-6", children: [_jsx("span", { className: "typing-effect", children: currentText }), _jsx("span", { className: "animate-pulse", children: "|" })] }), _jsx("p", { className: "text-lg md:text-xl mb-8 opacity-90 max-w-2xl", children: "Crio experi\u00EAncias digitais elegantes, eficientes e centradas no utilizador, com c\u00F3digo limpo e tecnologias modernas." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [_jsx("a", { href: "#projects", className: "bg-primary text-white px-8 py-3 rounded-button font-medium hover:bg-blue-600 transition-colors whitespace-nowrap", children: "Ver Portef\u00F3lio" }), _jsx("a", { href: "#contact", className: "bg-transparent border-2 border-white text-white px-8 py-3 rounded-button font-medium hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap", children: "Vamos Conectar" })] })] }) }), _jsx("div", { className: "absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-down animate-bounce", children: _jsx("a", { href: "#about", className: "text-white opacity-80 hover:opacity-100 transition-opacity", children: _jsx("div", { className: "w-10 h-10 flex items-center justify-center", children: _jsx(ChevronDown, { className: "w-8 h-8" }) }) }) })] }));
};
export default Hero;
