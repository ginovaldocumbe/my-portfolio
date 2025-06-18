// src/components/Footer.jsx

// Importe os ícones do Lucide React que vai usar
import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react'; 

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Para o ano dinâmico

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Nome e Descrição */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            {/* Certifique-se que '--font-pacifico' está definido no seu Tailwind/CSS,
                ou use uma classe Tailwind para fontes padrão como 'font-serif' ou 'font-sans' */}
            <a href="/" className="text-3xl font-bold text-white hover:text-gray-200 transition-colors">
              Ginovaldo Cumbe {/* Ou apenas "Ginovaldo" ou "GC" se tiver logo */}
            </a>
            <p className="mt-2 text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed">
              Construir experiências digitais excecionais com código limpo, eficiente e escalável.
            </p>
          </div>

          {/* Redes Sociais e Direitos de Autor */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/o-ginovaldo" // Substitua pelo seu link GitHub real
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/o-ginovaldo" // Substitua pelo seu link LinkedIn real
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/o-ginovaldo" // Substitua pelo seu link Twitter/X real
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://dribbble.com/o-ginovaldo" // Substitua pelo seu link Dribbble real (se tiver)
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Dribbble"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Dribbble size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              &copy; {currentYear} Ginovaldo Cumbe. Todos os direitos reservados.
            </p>
          </div>
        </div>

        {/* Links de Políticas e Direitos (se aplicável) */}
        {/* Mantido o div de baixo como uma secção separada por questões de estrutura */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-4 md:mb-0">
            <a href="/politica-de-privacidade" className="text-gray-400 hover:text-white transition-colors text-sm">Política de Privacidade</a>
            <a href="/termos-de-servico" className="text-gray-400 hover:text-white transition-colors text-sm">Termos de Serviço</a>
            <a href="/politica-de-cookies" className="text-gray-400 hover:text-white transition-colors text-sm">Política de Cookies</a>
          </div>
          {/* Se a secção de métodos de pagamento não for relevante, remova este div */}
          {/* Pode ser usada para um "Made with" ou outras informações */}
          <div className="flex space-x-4">
             {/* Removido os ícones de pagamento - pode adicionar outros ícones aqui se quiser, como um de "Feito com React" */}
             {/* Exemplo: <span className="text-gray-400 text-sm">Feito com ❤️ e React</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;