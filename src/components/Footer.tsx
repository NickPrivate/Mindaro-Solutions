import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold">Mindaro Solutions</span>
            </div>
            <p className="text-secondary-300 mb-4">
              AI software solutions, IT consulting, and custom software development for modern businesses.
            </p>
            <p className="text-secondary-300">
              Email: <a href="mailto:contact@mindarosolutions.com" className="text-primary-400 hover:text-primary-300">contact@mindarosolutions.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-secondary-300">AI Integration</li>
              <li className="text-secondary-300">Custom Software Development</li>
              <li className="text-secondary-300">IT Consulting</li>
              <li className="text-secondary-300">Technical Training</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            © {new Date().getFullYear()} Mindaro Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/company/mindarosolutions" className="text-secondary-400 hover:text-white transition-colors duration-200">
              LinkedIn
            </a>
            <a href="https://github.com/NickPrivate" className="text-secondary-400 hover:text-white transition-colors duration-200">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
