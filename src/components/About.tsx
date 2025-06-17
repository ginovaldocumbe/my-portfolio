import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        <div className={`flex flex-col md:flex-row items-center gap-12 ${isVisible ? "fade-in visible" : "fade-in"}`} id="about-section">
          <div className="w-full md:w-1/3">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20male%20developer%20in%20his%2030s%20with%20a%20friendly%20smile%2C%20wearing%20casual%20smart%20attire%2C%20clean%20background%2C%20high%20quality%20professional%20headshot%2C%20natural%20lighting&width=600&height=800&seq=1002&orientation=portrait"
              alt="Alex Mitchell"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-6">
              I'm a passionate Full Stack Developer with over 8 years of experience building web applications that deliver exceptional user experiences.
              Based in San Francisco, I specialize in creating scalable, maintainable solutions that solve real-world problems.
            </p>
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-700 mb-6">
              My coding journey began at Stanford University where I earned my Computer Science degree. Since then, I've worked with startups and enterprise companies alike,
              helping them transform their digital presence through clean, efficient code and intuitive interfaces.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">8+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">120+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">35+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">12</p>
                <p className="text-gray-600">Awards Won</p>
              </div>
            </div>
            <a
              href="#" 
              className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-button font-medium hover:bg-gray-700 transition-colors whitespace-nowrap"
            >
              <div className="w-5 h-5 mr-2 flex items-center justify-center">
                <i className="ri-download-line"></i>
              </div>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;