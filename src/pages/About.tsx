import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Sobre Mim</h2>
          <p className="text-center max-w-2xl mx-auto text-gray-700">
            Aqui vai o conteúdo da página Sobre. Em breve será atualizado.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;