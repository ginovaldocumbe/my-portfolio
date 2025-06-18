const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="/" className="text-2xl font-(family-name:--font-pacifico)">GC</a>
            <p className="mt-2 text-gray-400 max-w-md">
              Building exceptional digital experiences with clean, efficient, and scalable code.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-github-fill"></i>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-linkedin-fill"></i>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-twitter-fill"></i>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-dribbble-line"></i>
                </div>
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Ginovaldo Cumbe. All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <div className="flex space-x-4">
            <div className="w-8 h-8 flex items-center justify-center text-gray-400">
              <i className="ri-visa-line"></i>
            </div>
            <div className="w-8 h-8 flex items-center justify-center text-gray-400">
              <i className="ri-mastercard-line"></i>
            </div>
            <div className="w-8 h-8 flex items-center justify-center text-gray-400">
              <i className="ri-paypal-line"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;