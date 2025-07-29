import { Award, Target, Users, Zap } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'About Us - Mindaro Solutions',
  description: 'Learn about Mindaro Solutions, our mission, values, and the story behind our AI software solutions company.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay at the forefront of technology to deliver cutting-edge solutions that give our clients a competitive edge.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique challenges and co-create solutions that drive real results.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from code to customer service.',
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'We adapt quickly to changing requirements and deliver solutions that evolve with your business needs.',
    },
  ]

  return (
    <div className="bg-dark-950">
      {/* Hero Section */}
      <section className="section-padding bg-mesh relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            About <span className="gradient-text">Mindaro Solutions</span>
          </h1>
          <p className="text-xl text-gray-300">
            We're passionate about helping businesses harness the power of AI and modern technology 
            to achieve their goals and drive growth.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-100 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Mindaro Solutions was founded with a simple mission: to make advanced AI technology 
                  accessible and practical for businesses of all sizes. Our founder, a seasoned software 
                  engineer with over a decade of experience in AI and machine learning, recognized that 
                  many companies were struggling to implement AI solutions effectively.
                </p>
                <p>
                  What started as a consulting practice has grown into a full-service technology partner 
                  that helps businesses transform their operations through intelligent software solutions. 
                  We've worked with companies across various industries, from healthcare to manufacturing, 
                  helping them leverage AI to improve efficiency, reduce costs, and create new opportunities.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible with AI and custom software, 
                  always with our clients' success as our primary focus.
                </p>
              </div>
            </div>
            <div className="card-glow animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-24 h-24 rounded-full mx-auto mb-6 shadow-lg glow-effect overflow-hidden">
                <div className="w-full h-full transform scale-150 translate-x-1 translslate-y-4">
                  <Image 
                    src="/headshot-2.jpg" 
                    alt="Nick - Founder & CEO of Mindaro Solutions" 
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 text-center mb-2">
                CEO - Nick Goulart
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                "Our goal is to bridge the gap between cutting-edge AI research and practical business applications. 
                We believe every business deserves access to the tools that will define the future of their industry."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-dark-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-300 mb-8">
            To democratize AI technology by providing accessible, practical, and effective software solutions 
            that empower businesses to achieve their full potential in the digital age.
          </p>
          <div className="card animate-scale-in">
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">What We Believe</h3>
            <p className="text-gray-300 leading-relaxed">
              Technology should work for you, not against you. We believe in creating solutions that are 
              not only powerful but also intuitive, reliable, and aligned with your business objectives. 
              Every project we undertake is an opportunity to make a meaningful impact on our clients' success.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card animate-slide-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <div className="w-12 h-12 bg-gradient-to-br from-neon-500 to-neon-600 rounded-xl flex items-center justify-center mb-4 shadow-lg glow-effect">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-dark-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">Our Team</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're a small but mighty team of experienced professionals passionate about technology and 
            committed to delivering exceptional results for our clients.
          </p>
          <div className="card animate-scale-in">
            <p className="text-gray-300 leading-relaxed">
              Our team brings together expertise in AI/ML, full-stack development, cloud architecture, 
              and business strategy. We're constantly learning and staying up-to-date with the latest 
              technologies to ensure we can provide the best possible solutions for our clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 
