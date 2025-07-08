import { Brain, Code, Users, BookOpen, Database, Shield, Zap, BarChart3 } from 'lucide-react'

export const metadata = {
  title: 'Services - Mindaro Solutions',
  description: 'Explore our comprehensive range of AI software solutions, custom development, IT consulting, and technical training services.',
}

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: 'AI Integration & Custom Tools',
      description: 'Seamlessly integrate AI capabilities into your existing business processes and workflows.',
      features: [
        'Custom AI model development and training',
        'API integration with popular AI services',
        'Automated workflow optimization',
        'Intelligent data processing and analysis',
        'Chatbot and virtual assistant development',
        'Predictive analytics implementation'
      ],
      benefits: [
        'Increased operational efficiency',
        'Reduced manual workload',
        'Improved decision-making capabilities',
        'Competitive advantage through AI adoption'
      ]
    },
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      description: 'End-to-end web application development using modern technologies and best practices.',
      features: [
        'Responsive web application development',
        'Progressive Web Apps (PWA)',
        'E-commerce and business platforms',
        'Custom dashboard and admin panels',
        'API development and integration',
        'Database design and optimization'
      ],
      benefits: [
        'Scalable and maintainable codebase',
        'Modern user experience',
        'Cross-platform compatibility',
        'Performance optimization'
      ]
    },
    {
      icon: Users,
      title: 'Software Consulting',
      description: 'Strategic technology guidance to help you make informed decisions about your software investments.',
      features: [
        'Technology stack evaluation and recommendations',
        'Architecture design and planning',
        'Project scoping and estimation',
        'Code review and quality assurance',
        'Performance optimization consulting',
        'Security audit and recommendations'
      ],
      benefits: [
        'Reduced development risks',
        'Optimized technology investments',
        'Improved project outcomes',
        'Long-term technical strategy'
      ]
    },
    {
      icon: BookOpen,
      title: 'Technical Workshops & Training',
      description: 'Empower your team with the knowledge and skills needed to leverage modern technologies effectively.',
      features: [
        'AI and machine learning fundamentals',
        'Modern web development practices',
        'DevOps and deployment strategies',
        'Data analysis and visualization',
        'API design and integration',
        'Security best practices'
      ],
      benefits: [
        'Enhanced team capabilities',
        'Reduced dependency on external consultants',
        'Improved project delivery',
        'Knowledge retention within organization'
      ]
    }
  ]

  const technologies = [
    { name: 'React & Next.js', icon: Code },
    { name: 'Python & AI/ML', icon: Brain },
    { name: 'Node.js & TypeScript', icon: Code },
    { name: 'PostgreSQL & MongoDB', icon: Database },
    { name: 'AWS & Cloud Services', icon: Shield },
    { name: 'Docker & Kubernetes', icon: Zap },
    { name: 'Data Analytics', icon: BarChart3 },
    { name: 'API Development', icon: Code },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-secondary-600">
            Comprehensive AI software solutions, custom development, and expert consulting 
            to help your business thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary-900 mb-4">{service.title}</h2>
                  <p className="text-xl text-secondary-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-3">What We Offer</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-secondary-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-3">Key Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-secondary-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={`bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center">
                    <service.icon className="w-16 h-16 text-primary-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-secondary-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Technologies We Work With</h2>
            <p className="text-xl text-secondary-600">
              We leverage cutting-edge technologies to deliver robust, scalable, and future-proof solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="card text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-secondary-900">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Process</h2>
            <p className="text-xl text-secondary-600">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">Discovery</h3>
              <p className="text-secondary-600 text-sm">
                We start by understanding your business needs, challenges, and objectives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">Planning</h3>
              <p className="text-secondary-600 text-sm">
                We design a comprehensive solution and create a detailed project roadmap.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">Development</h3>
              <p className="text-secondary-600 text-sm">
                We build your solution using agile methodologies with regular updates and feedback.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">Launch</h3>
              <p className="text-secondary-600 text-sm">
                We deploy your solution and provide ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 