import Link from 'next/link'
import { ArrowRight, Brain, Code, Users, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-dark-950">
      {/* Hero Section */}
      <section className="section-padding bg-mesh relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-6">
              <span className="whitespace-nowrap">AI Software Solutions for</span> <span className="gradient-text whitespace-nowrap">Modern Businesses</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI technology, custom software development, 
              and expert IT consulting. We help small to medium-sized businesses leverage the power 
              of artificial intelligence to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center group">
                Get Started
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
              Why Choose <span className="text-gradient">Mindaro Solutions</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-neon-500 to-neon-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg glow-effect">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">AI Integration</h3>
              <p className="text-gray-300">
                Seamlessly integrate AI tools and automation into your existing workflows.
              </p>
            </div>

            <div className="card animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-neon-500 to-neon-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg glow-effect">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Custom Development</h3>
              <p className="text-gray-300">
                Tailored software solutions built specifically for your business needs.
              </p>
            </div>

            <div className="card animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-neon-500 to-neon-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg glow-effect">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Expert Consulting</h3>
              <p className="text-gray-300">
                Strategic guidance to help you make informed technology decisions.
              </p>
            </div>

            <div className="card animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-neon-500 to-neon-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg glow-effect">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Rapid Implementation</h3>
              <p className="text-gray-300">
                Quick deployment and onboarding to get you up and running fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-dark-900 to-dark-800 relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-500/10 to-neon-600/10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how AI and custom software can help you achieve your goals.
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-neon-500 to-neon-600 text-white hover:from-neon-600 hover:to-neon-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-neon-500/25 hover:scale-105 transform group">
            Start Your Project
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  )
}
