import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-500 text-sm border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Dev Stack" className="w-24 sm:w-28 object-contain" />
            </div>
            <p className="text-xs sm:text-sm text-gray-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex space-x-6 pt-2 text-xs font-medium text-gray-700">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-gray-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;