import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-dark-950 text-gray-100 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                  src="/favicon.png" 
                  alt="Mindaro Solutions Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-gradient">Mindaro Solutions</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              AI software solutions, IT consulting, and custom software development for modern businesses.
            </p>
            <p className="text-gray-300">
              Email: <a href="mailto:nick@mindarosolutions.com" className="text-neon-400 hover:text-neon-300 transition-colors duration-300">nick@mindarosolutions.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-neon-400 transition-all duration-300 hover:translate-x-1 transform inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-neon-400 transition-all duration-300 hover:translate-x-1 transform inline-block">
                  Services
                </Link>
              </li>
              
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-neon-400 transition-all duration-300 hover:translate-x-1 transform inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-neon-400 transition-colors duration-300 cursor-default">AI Integration</li>
              <li className="text-gray-300 hover:text-neon-400 transition-colors duration-300 cursor-default">Custom Software Development</li>
              <li className="text-gray-300 hover:text-neon-400 transition-colors duration-300 cursor-default">IT Consulting</li>
              <li className="text-gray-300 hover:text-neon-400 transition-colors duration-300 cursor-default">Technical Training</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mindaro Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://www.linkedin.com/company/mindarosolutions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-400 transition-all duration-300 hover:scale-110 transform"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/NickPrivate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-400 transition-all duration-300 hover:scale-110 transform"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
