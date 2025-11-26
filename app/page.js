import Link from "next/link";
import { 
  Building2, 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  Award,
  Globe,
  Briefcase
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Company Formation",
    description: "Complete LLC and Corporation formation services in the USA. We handle all paperwork, EIN registration, and state compliance.",
    href: "/services#company-formation"
  },
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description: "Professional bookkeeping services to keep your financial records accurate, organized, and IRS-compliant.",
    href: "/services#accounting"
  },
  {
    icon: FileText,
    title: "Tax Services",
    description: "Expert tax preparation and filing for individuals and businesses. Stay compliant with federal and state tax requirements.",
    href: "/services#tax"
  },
  {
    icon: TrendingUp,
    title: "Tax Consulting",
    description: "Strategic tax planning to minimize your tax burden and maximize your business potential in the US market.",
    href: "/services#consulting"
  },
  {
    icon: Briefcase,
    title: "Administrative Services",
    description: "Complete administrative support including registered agent services, annual reports, and compliance management.",
    href: "/services#administrative"
  },
  {
    icon: Globe,
    title: "Financial Management",
    description: "Comprehensive financial management solutions to help your business grow and thrive in the American market.",
    href: "/services#financial"
  }
];

const differentials = [
  {
    icon: Users,
    title: "Brazilian Entrepreneur Specialists",
    description: "We understand the unique challenges Brazilians face when starting a business in the USA."
  },
  {
    icon: Award,
    title: "Consultative & Educational Approach",
    description: "We don't just do the work - we educate you about US business practices and regulations."
  },
  {
    icon: Shield,
    title: "Real IRS Compliance",
    description: "Full compliance with IRS regulations to protect your business and personal interests."
  },
  {
    icon: Globe,
    title: "Brazil + USA Experience",
    description: "Combined expertise from both countries to bridge the gap in international business."
  }
];

const stats = [
  { value: "100%", label: "IRS Compliance" },
  { value: "24/7", label: "Support Available" },
  { value: "FL", label: "Based in Florida" },
  { value: "EN/PT", label: "Bilingual Service" }
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[90vh] flex items-center bg-[var(--beige)] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--beige)] via-white to-[var(--beige)]" />
          
          {/* Decorative circles */}
          <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-[var(--primary-blue)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-[var(--gold)]/10 rounded-full blur-3xl" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(var(--primary-blue) 1px, transparent 1px), linear-gradient(90deg, var(--primary-blue) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--gold)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--gold)]"></span>
                </span>
                <span className="text-[var(--primary-blue)] font-medium text-sm tracking-wide uppercase">
                  Florida, USA — Serving Entrepreneurs Worldwide
                </span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-[var(--primary-blue)]">
                Build Your
                <span className="block mt-2">
                  <span className="relative inline-block">
                    American
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                      <path d="M2 10C50 4 150 4 198 10" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                  </span>
                  {" "}Dream
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-[var(--text-gray)] mb-10 leading-relaxed max-w-xl">
                Expert accounting, tax, and business formation services. 
                <span className="text-[var(--primary-blue)] font-semibold"> Start your US company with confidence</span> — fully compliant, zero tax risks.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-[var(--primary-blue)] hover:bg-[var(--primary-blue-dark)] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-[var(--primary-blue)]/25 hover:shadow-xl hover:shadow-[var(--primary-blue)]/30"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/5519991079787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[var(--primary-blue)] px-8 py-4 rounded-full font-semibold transition-all shadow-md border border-gray-100"
                >
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  WhatsApp Us
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--primary-blue)]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[var(--primary-blue)]" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--primary-blue)]">100% IRS</p>
                    <p className="text-sm text-[var(--text-gray)]">Compliant</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-[var(--gold)]" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--primary-blue)]">EN / PT</p>
                    <p className="text-sm text-[var(--text-gray)]">Bilingual</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--primary-blue)]">Expert</p>
                    <p className="text-sm text-[var(--text-gray)]">Guidance</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Feature Cards */}
            <div className="lg:col-span-5 animate-fade-in animation-delay-200">
              <div className="relative">
                {/* Decorative element */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--gold)] rounded-2xl opacity-20 rotate-12" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--primary-blue)] rounded-full opacity-10" />
                
                {/* Main Card */}
                <div className="relative bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-blue-light)] rounded-2xl flex items-center justify-center shadow-lg shadow-[var(--primary-blue)]/20">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--primary-blue)] text-lg">VMARTELOZO</h3>
                      <p className="text-[var(--gold)] text-sm font-medium">Global Accounting LLC</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {[
                      { icon: Building2, text: "LLC & Corp Formation" },
                      { icon: Calculator, text: "Accounting & Bookkeeping" },
                      { icon: FileText, text: "Tax Preparation & Filing" },
                      { icon: TrendingUp, text: "Strategic Tax Planning" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-[var(--beige)] rounded-xl hover:bg-[var(--beige-dark)] transition-colors cursor-pointer group">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow transition-shadow">
                          <item.icon className="w-5 h-5 text-[var(--gold)]" />
                        </div>
                        <span className="font-medium text-[var(--primary-blue)]">{item.text}</span>
                        <ArrowRight className="w-4 h-4 text-[var(--gold)] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-blue-light)] rounded-2xl p-5 text-white">
                    <p className="text-sm opacity-90 mb-1">Our Promise</p>
                    <p className="font-semibold text-lg leading-snug">
                      Entrepreneurship in the USA — safely and without tax risks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-blue)] mt-2 mb-4">
              Complete Business Solutions
            </h2>
            <p className="text-[var(--text-gray)] max-w-2xl mx-auto text-lg">
              From company formation to ongoing financial management, we provide 
              everything you need to succeed in the American market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-[var(--beige)] hover:bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-[var(--gold)]/20"
              >
                <div className="w-14 h-14 bg-[var(--primary-blue)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] transition-colors">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-blue)] mb-3 group-hover:text-[var(--gold)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--text-gray)] leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-[var(--gold)] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-blue)] mt-2 mb-6">
                Your Trusted Partner for US Business Success
              </h2>
              <p className="text-[var(--text-gray)] text-lg mb-8 leading-relaxed">
                VMARTELOZO Global Accounting LLC specializes in accounting, tax, and 
                administrative services in the United States. We understand the unique 
                challenges faced by entrepreneurs looking to expand into the American market.
              </p>
              
              <div className="space-y-4">
                {differentials.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-[var(--primary-blue)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--primary-blue)] mb-1">{item.title}</h4>
                      <p className="text-[var(--text-gray)] text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--gold)]/10 rounded-3xl" />
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[var(--primary-blue)] mb-6">
                  Our Core Message
                </h3>
                <blockquote className="text-xl text-[var(--text-gray)] italic border-l-4 border-[var(--gold)] pl-6 mb-6">
                  &ldquo;Entrepreneurship in the USA safely and without tax risks.&rdquo;
                </blockquote>
                <p className="text-[var(--text-gray)] mb-6">
                  We help you navigate the complexities of US business regulations, 
                  ensuring your venture is built on a solid foundation of compliance 
                  and best practices.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[var(--gold)] font-semibold hover:text-[var(--gold-dark)] transition-colors"
                >
                  Learn more about us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-blue)] mt-2 mb-4">
              Simple Steps to Get Started
            </h2>
            <p className="text-[var(--text-gray)] max-w-2xl mx-auto text-lg">
              Our streamlined process makes it easy to start your US business journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Initial Contact", description: "Reach out via website, WhatsApp, email, or Instagram" },
              { step: "02", title: "Consultation", description: "We discuss your needs: taxes, bookkeeping, company registration" },
              { step: "03", title: "Custom Plan", description: "Receive a tailored solution for your business goals" },
              { step: "04", title: "Implementation", description: "We handle everything while keeping you informed" }
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 bg-[var(--gold)] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {item.step}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-[var(--beige)]" />
                )}
                <h3 className="text-lg font-semibold text-[var(--primary-blue)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-gray)] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[var(--primary-blue)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[var(--gold)]/10 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your US Business?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation today and discover how we can help you 
            achieve your entrepreneurial goals in the United States.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/5519991079787"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all border border-white/20"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
