import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-transparent">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-(family-name:--font-pacifico) text-white">GC</a>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-primary transition-colors">Sobre</a>
          <a href="#skills" className="text-white hover:text-primary transition-colors">Habilidades</a>
          <a href="#projects" className="text-white hover:text-primary transition-colors">Projetos</a>
          <a href="#contact" className="text-white hover:text-primary transition-colors">Contato</a>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4 text-gray-800">
            <a href="#about">Sobre</a>
            <a href="#skills">Habilidades</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;