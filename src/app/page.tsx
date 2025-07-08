import Link from 'next/link'
import { ArrowRight, Brain, Code, Users, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
            AI Software Solutions for{' '}
            <span className="text-primary-600">Modern Businesses</span>
          </h1>
          <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI technology, custom software development, 
            and expert IT consulting. We help small to medium-sized businesses leverage the power 
            of artificial intelligence to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Get Started
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link href="/services" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose Mindaro Solutions?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">AI Integration</h3>
              <p className="text-secondary-600">
                Seamlessly integrate AI tools and automation into your existing workflows.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Custom Development</h3>
              <p className="text-secondary-600">
                Tailored software solutions built specifically for your business needs.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Expert Consulting</h3>
              <p className="text-secondary-600">
                Strategic guidance to help you make informed technology decisions.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Rapid Implementation</h3>
              <p className="text-secondary-600">
                Quick deployment and onboarding to get you up and running fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss how AI and custom software can help you achieve your goals.
          </p>
          <Link href="/contact" className="bg-white text-primary-600 hover:bg-secondary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
            Start Your Project
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
