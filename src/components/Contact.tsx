import { MapPinned } from 'lucide-react';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Você precisa concordar com a política de privacidade.');
      return;
    }
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada!');
  };

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

    const element = document.getElementById("contact-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Get In Touch</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
        </p>

        <div className={`flex flex-col md:flex-row gap-12 ${isVisible ? "fade-in visible" : "fade-in"}`} id="contact-section">
          {/* Contact Info */}
          <div className="w-full md:w-1/3">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center text-primary mr-4">
                    <MapPinned />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600">San Francisco, California</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center text-primary mr-4">
                    <i className="ri-mail-line ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">alex@mitchelldev.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center text-primary mr-4">
                    <i className="ri-phone-line ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+1 (415) 555-8765</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <i className="ri-github-fill"></i>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <i className="ri-dribbble-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className="contact-input w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <label htmlFor="name" className="floating-label text-gray-500">
                      Your Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className="contact-input w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <label htmlFor="email" className="floating-label text-gray-500">
                      Your Email
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="contact-input w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <label htmlFor="subject" className="floating-label text-gray-500">
                    Subject
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder=" "
                    required
                    className="contact-input w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                  <label htmlFor="message" className="floating-label text-gray-500">
                    Your Message
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="custom-checkbox mr-3"
                  />
                  <label htmlFor="consent" className="text-gray-600 text-sm">
                    I agree to the processing of personal data in accordance with the privacy policy
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-button font-medium hover:bg-blue-600 transition-colors whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;