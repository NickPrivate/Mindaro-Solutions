'use client'

import { supabase } from '@/lib/supabase'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);

      try {
        const { error } = await supabase
          .from('contactForm')
          .insert([formData]);

        if (error) {
          console.error('Supabase insert error:', error);
          setErrors({ submit: 'Failed to send message. Please try again.' });
          return;
        }

        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } catch (error) {
        console.error('Unexpected error submitting form:', error);
        setErrors({ submit: 'Failed to send message. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-dark-950 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 animate-fade-in">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg glow-effect">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-100 mb-4">Message Sent!</h1>
          <p className="text-gray-300 mb-8">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-primary"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

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
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300">
            Ready to transform your business with AI and custom software solutions? 
            Let's discuss your project and how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="text-2xl font-bold text-gray-100 mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-dark-800 border rounded-lg focus:ring-2 focus:ring-neon-500 focus:border-neon-500 transition-all duration-300 text-gray-100 placeholder-gray-400 ${
                      errors.name ? 'border-red-500' : 'border-dark-600'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-dark-800 border rounded-lg focus:ring-2 focus:ring-neon-500 focus:border-neon-500 transition-all duration-300 text-gray-100 placeholder-gray-400 ${
                      errors.email ? 'border-red-500' : 'border-dark-600'
                    }`}
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-dark-800 border rounded-lg focus:ring-2 focus:ring-neon-500 focus:border-neon-500 transition-all duration-300 resize-none text-gray-100 placeholder-gray-400 ${
                      errors.message ? 'border-red-500' : 'border-dark-600'
                    }`}
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                {errors.submit && (
                  <div className="p-4 bg-red-900/50 border border-red-500/50 rounded-lg">
                    <p className="text-sm text-red-400">{errors.submit}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl font-bold text-gray-100 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-500 to-neon-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg glow-effect">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-100 mb-1">Email</h3>
                    <p className="text-gray-300">nick@mindarosolutions.com</p>
                    <p className="text-sm text-gray-400">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-500 to-neon-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg glow-effect">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-100 mb-1">Phone</h3>
                    <p className="text-gray-300">Coming Soon</p>
                    <p className="text-sm text-gray-400">Available Mon-Fri, 9AM-6PM </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-500 to-neon-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg glow-effect">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-100 mb-1">Location</h3>
                    <p className="text-gray-300">Remote-first company</p>
                    <p className="text-sm text-gray-400">Serving clients worldwide</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-dark-800/50 rounded-xl border border-dark-700">
                <h3 className="font-semibold text-gray-100 mb-3">What to expect</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-neon-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Initial consultation within 24 hours
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-neon-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Detailed project proposal within 3-5 days
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-neon-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Transparent pricing and timeline
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-neon-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Ongoing support and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
