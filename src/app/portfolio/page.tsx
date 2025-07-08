import Link from 'next/link'
import { ExternalLink, Brain, Code, BarChart3, Users, Database, Shield } from 'lucide-react'

export const metadata = {
  title: 'Portfolio - Mindaro Solutions',
  description: 'Explore our portfolio of successful AI software projects, custom web applications, and digital transformation solutions.',
}

export default function PortfolioPage() {
  const projects = [
    {
      title: 'AI-Powered Customer Analytics Platform',
      description: 'Developed a comprehensive analytics platform that uses machine learning to predict customer behavior and optimize marketing campaigns for a mid-sized e-commerce company.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'AWS'],
      category: 'AI Integration',
      icon: Brain,
      results: [
        '40% increase in customer retention',
        '25% improvement in marketing ROI',
        'Automated 80% of manual reporting tasks'
      ],
      image: '/api/placeholder/600/400',
      link: '#'
    },
    {
      title: 'Healthcare Management System',
      description: 'Built a full-stack web application for a healthcare provider to manage patient records, appointments, and billing with advanced security features.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Docker'],
      category: 'Web Development',
      icon: Code,
      results: [
        'Streamlined patient onboarding process',
        'Reduced administrative overhead by 60%',
        'HIPAA-compliant data management'
      ],
      image: '/api/placeholder/600/400',
      link: '#'
    },
    {
      title: 'Real-time Inventory Optimization',
      description: 'Created an intelligent inventory management system that uses predictive analytics to optimize stock levels and reduce waste for a manufacturing company.',
      technologies: ['Python', 'FastAPI', 'Redis', 'React', 'MongoDB'],
      category: 'AI Integration',
      icon: BarChart3,
      results: [
        '30% reduction in inventory costs',
        '95% improvement in stock accuracy',
        'Real-time demand forecasting'
      ],
      image: '/api/placeholder/600/400',
      link: '#'
    },
    {
      title: 'Financial Data Processing Pipeline',
      description: 'Developed an automated data processing system that handles millions of financial transactions daily with real-time fraud detection capabilities.',
      technologies: ['Python', 'Apache Kafka', 'Elasticsearch', 'React', 'PostgreSQL'],
      category: 'Data Processing',
      icon: Database,
      results: [
        'Processed 10M+ transactions daily',
        '99.9% fraud detection accuracy',
        'Reduced processing time by 70%'
      ],
      image: '/api/placeholder/600/400',
      link: '#'
    },
    {
      title: 'Employee Training Platform',
      description: 'Built a comprehensive learning management system with AI-powered content recommendations and progress tracking for a corporate training company.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI API', 'Tailwind CSS'],
      category: 'Web Development',
      icon: Users,
      results: [
        '50% increase in course completion rates',
        'Personalized learning paths',
        'Automated assessment and feedback'
      ],
      image: '/api/placeholder/600/400',
      link: '#'
    },
    {
      title: 'Cybersecurity Monitoring Dashboard',
      description: 'Developed a real-time security monitoring system that provides comprehensive threat detection and incident response capabilities for enterprise clients.',
      technologies: ['Python', 'React', 'WebSocket', 'Redis', 'AWS'],
      category: 'Security',
      icon: Shield,
      results: [
        'Real-time threat detection',
        'Automated incident response',
        'Comprehensive audit trails'
      ],
      image: '/api/placeholder/600/400',
      link: '#'
    }
  ]

  const categories = ['All', 'AI Integration', 'Web Development', 'Data Processing', 'Security']

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-secondary-600">
            Explore our successful projects and see how we've helped businesses transform 
            their operations with cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card group hover:shadow-lg transition-all duration-300">
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg mb-6 flex items-center justify-center">
                  <project.icon className="w-12 h-12 text-primary-600" />
                </div>
                
                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <Link href={project.link} className="text-secondary-400 hover:text-primary-600 transition-colors">
                        <ExternalLink size={16} />
                      </Link>
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-secondary-900 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-sm font-semibold text-secondary-900 mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-xs text-secondary-600 flex items-start">
                          <div className="w-1 h-1 bg-accent-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Button */}
                  <div className="pt-2">
                    <Link 
                      href={project.link}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center group/link"
                    >
                      Learn More
                      <ExternalLink size={14} className="ml-1 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-secondary-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Impact</h2>
            <p className="text-xl text-secondary-600">
              Numbers that demonstrate our commitment to delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-secondary-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">30+</div>
              <p className="text-secondary-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">95%</div>
              <p className="text-secondary-600">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">3+</div>
              <p className="text-secondary-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <Link href="/contact" className="bg-white text-primary-600 hover:bg-secondary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
            Get Started
            <ExternalLink size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
} 