'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  Globe,
  Building2,
  ArrowRight,
  Loader2
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const services = [
  { value: 'governance', label: 'Accounting Governance & Tax Compliance' },
  { value: 'automation', label: 'Automation, Systems & KPIs' },
  { value: 'training', label: 'Training & Ongoing Support' },
  { value: 'diagnostic', label: 'Maturity Diagnostic' },
  { value: 'erp-fix', label: 'ERP Correction & Integration' },
  { value: 'audit', label: 'Preventive Audit' },
  { value: 'other', label: 'Other / General Inquiry' },
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'manager@vmartelozo.com',
    href: 'mailto:manager@vmartelozo.com',
    description: 'Send us an email anytime'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+55 19 99107-9787',
    href: 'tel:+5519991079787',
    description: 'Call us during business hours'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Chat with us',
    href: 'https://wa.me/5519991079787',
    description: 'Quick responses via WhatsApp'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Florida, USA',
    href: null,
    description: 'Serving clients nationwide'
  }
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    // In production, you would send this to your backend or email service
    console.log('Form data:', data);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary-blue)] via-[var(--primary-blue-light)] to-[var(--primary-blue)] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-6">
              Let&apos;s Fix Your Accounting Chaos
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ready to implement real Accounting Governance, Tax Compliance, and Automation? 
              Contact us for a free consultation and discover how the Valtax Methodology 
              can transform your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[var(--primary-blue)] mb-6">
                Get in Touch
              </h2>
              <p className="text-[var(--text-gray)] mb-8">
                Choose your preferred method of contact. We typically respond 
                within 24 hours on business days.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--beige)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[var(--gold)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--primary-blue)]">{item.title}</h3>
                      {item.href ? (
                        <a 
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-[var(--gold)] hover:text-[var(--gold-dark)] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-[var(--text-gray)]">{item.value}</span>
                      )}
                      <p className="text-sm text-[var(--text-light)]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Info */}
              <div className="mt-10 p-6 bg-[var(--beige)] rounded-xl">
                <h3 className="font-semibold text-[var(--primary-blue)] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[var(--gold)]" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm text-[var(--text-gray)]">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
                  <p>Saturday: By appointment</p>
                  <p>Sunday: Closed</p>
                </div>
                <div className="mt-4 pt-4 border-t border-[var(--beige-dark)]">
                  <p className="text-sm text-[var(--text-gray)] flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[var(--gold)]" />
                    Bilingual service: English & Portuguese
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[var(--beige)] rounded-2xl p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-[var(--primary-blue)] mb-2">
                  Request a Free Consultation
                </h2>
                <p className="text-[var(--text-gray)] mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {isSubmitted && (
                  <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800">Message sent successfully!</p>
                      <p className="text-sm text-green-600">We&apos;ll be in touch soon.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--primary-blue)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name')}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--primary-blue)] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[var(--primary-blue)] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone')}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all`}
                        placeholder="+1 (555) 123-4567"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[var(--primary-blue)] mb-2">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        {...register('company')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                        placeholder="Your Company LLC"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[var(--primary-blue)] mb-2">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      {...register('service')}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all bg-white`}
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--primary-blue)] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message')}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all resize-none`}
                      placeholder="Tell us about your business goals and how we can help..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-dark)] disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-sm text-[var(--text-light)] text-center">
                    By submitting this form, you agree to be contacted regarding your inquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20 lg:py-28 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-blue)] mb-6">
            Prefer to Chat Directly?
          </h2>
          <p className="text-xl text-[var(--text-gray)] mb-10 max-w-2xl mx-auto">
            For quick questions or immediate assistance, reach out to us on WhatsApp. 
            We&apos;re here to help!
          </p>
          <a
            href="https://wa.me/5519991079787"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            Start WhatsApp Chat
          </a>
        </div>
      </section>
    </>
  );
}
