import { useEffect, useState } from 'react';

const Experience = () => {
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

    const element = document.getElementById("experience-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Professional Experience</h2>
        <div className={`space-y-12 ${isVisible ? "fade-in visible" : "fade-in"}`} id="experience-section">
          
          {/* Experiência 1 */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="sticky top-8">
                <span className="text-primary font-semibold">2023 - Present</span>
                <h3 className="text-xl font-bold mt-2">Senior Software Engineer</h3>
                <p className="text-gray-600">Quantum Technologies Inc.</p>
                <p className="text-gray-500 mt-2">San Francisco, CA</p>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-6">
                  Led the development of a cloud-native microservices architecture that improved system scalability by 300%.
                  Mentored junior developers and implemented best practices that reduced bug reports by 45%.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-1">
                      <i className="ri-checkbox-circle-line text-primary"></i>
                    </div>
                    <span className="ml-3">
                      Architected and deployed a real-time analytics platform processing 1M+ events daily
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-1">
                      <i className="ri-checkbox-circle-line text-primary"></i>
                    </div>
                    <span className="ml-3">
                      Implemented CI/CD pipelines reducing deployment time by 60%
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-1">
                      <i className="ri-checkbox-circle-line text-primary"></i>
                    </div>
                    <span className="ml-3">
                      Led a team of 8 developers across 3 time zones
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experiência 2 */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="sticky top-8">
                <span className="text-primary font-semibold">2020 - 2023</span>
                <h3 className="text-xl font-bold mt-2">Full Stack Developer</h3>
                <p className="text-gray-600">InnovateTech Solutions</p>
                <p className="text-gray-500 mt-2">Seattle, WA</p>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-6">
                  Spearheaded the development of a next-generation e-commerce platform serving 2M+ monthly active users.
                  Optimized database queries resulting in a 65% reduction in load times.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-1">
                      <i className="ri-checkbox-circle-line text-primary"></i>
                    </div>
                    <span className="ml-3">
                      Developed RESTful APIs handling 500K+ daily requests
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-1">
                      <i className="ri-checkbox-circle-line text-primary"></i>
                    </div>
                    <span className="ml-3">
                      Implemented OAuth 2.0 authentication system
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-1">
                      <i className="ri-checkbox-circle-line text-primary"></i>
                    </div>
                    <span className="ml-3">
                      Reduced server costs by 40% through optimization
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experiência 3 */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="sticky top-8">
                <span className="text-primary font-semibold">2018 - 2020</span>
                <h3 className="text-xl font-bold mt-2">Frontend Developer</h3>
                <p className="text-gray-600">Digital Dynamics Corp</p>
                <p className="text-gray-500 mt-2">Austin, TX</p>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-6">
                  Developed responsive web applications using React and Redux.
                  Implemented A/B testing that increased user engagement by 25% and reduced bounce rates by 30%.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-1">
                      <i className="ri-checkbox-circle-line text-primary"></i>
                    </div>
                    <span className="ml-3">
                      Built reusable component library used across 12 projects
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-1">
                      <i className="ri-checkbox-circle-line text-primary"></i>
                    </div>
                    <span className="ml-3">
                      Improved web accessibility to WCAG 2.1 standards
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-1">
                      <i className="ri-checkbox-circle-line text-primary"></i>
                    </div>
                    <span className="ml-3">
                      Mentored 4 junior developers in modern frontend practices
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experiência 4 */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="sticky top-8">
                <span className="text-primary font-semibold">2017 - 2018</span>
                <h3 className="text-xl font-bold mt-2">Junior Web Developer</h3>
                <p className="text-gray-600">WebCraft Studios</p>
                <p className="text-gray-500 mt-2">Boston, MA</p>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-6">
                  Started as an intern and quickly progressed to a full-time role.
                  Worked on various client projects including e-commerce sites and business applications.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-1">
                      <i className="ri-checkbox-circle-line text-primary"></i>
                    </div>
                    <span className="ml-3">
                      Developed and maintained WordPress themes and plugins
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-1">
                      <i className="ri-checkbox-circle-line text-primary"></i>
                    </div>
                    <span className="ml-3">
                      Implemented responsive designs for 20+ client websites
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-1">
                      <i className="ri-checkbox-circle-line text-primary"></i>
                    </div>
                    <span className="ml-3">
                      Achieved 98% client satisfaction rate
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;