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
import Image from "next/image";

const services = [
  {
    icon: Shield,
    title: "Accounting Governance & Tax Compliance",
    description: "We restructure and organize your entire accounting and tax framework. Maturity diagnostics, risk matrix, process standardization, internal controls, and full IRS/GAAP/IFRS compliance.",
    href: "/services#governance"
  },
  {
    icon: TrendingUp,
    title: "Automation, Systems & KPIs",
    description: "ERP integration, automated routines, reconciliations, performance dashboards, and compliance indicators. Technology that reduces errors and increases precision.",
    href: "/services#automation"
  },
  {
    icon: Users,
    title: "Training & Ongoing Support",
    description: "Team training, technical manuals, quarterly reviews, and continuous preventive audits. We ensure your company maintains standards long-term.",
    href: "/services#training"
  }
];

const differentials = [
  {
    icon: Shield,
    title: "Not Basic Accounting",
    description: "We don't do daily entries, payroll, or simple annual filings. We fix the system so your accountant can work without generating errors."
  },
  {
    icon: Award,
    title: "Valtax Methodology",
    description: "Our proprietary methodology implements complete Accounting Governance + Tax Compliance + Automation within each SMB."
  },
  {
    icon: CheckCircle2,
    title: "Preventive Audits",
    description: "We identify problems before the IRS does, avoiding risks, penalties, and inconsistencies that hinder loans and growth."
  },
  {
    icon: Globe,
    title: "High-Value Consulting",
    description: "Strategic, consultative service focused on reorganization and continuous improvement — not simple operational execution."
  }
];

const stats = [
  { value: "$696B", label: "US Tax Gap" },
  { value: "100%", label: "IRS Compliance" },
  { value: "SMBs", label: "Our Focus" },
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
                  Advanced Technical Consulting for US SMBs
                </span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-[var(--primary-blue)]">
                Strategic
                <span className="block mt-2">
                  <span className="relative inline-block">
                    Accounting
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                      <path d="M2 10C50 4 150 4 198 10" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                  </span>
                  {" "}Not Operational
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-[var(--text-gray)] mb-10 leading-relaxed max-w-xl">
                We help US small and medium businesses operate with organization, security, and compliance.
                <span className="text-[var(--primary-blue)] font-semibold"> Governance, automation, and real tax compliance</span> — fewer errors, fewer penalties, reliable data.
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
            
            {/* Right Side - Valdenice Photo */}
            <div className="lg:col-span-5 animate-fade-in animation-delay-200">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-8 -right-8 w-72 h-72 bg-[var(--gold)]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[var(--primary-blue)]/10 rounded-full blur-2xl" />
                
                {/* Photo */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image 
                    src="/root/hero.webp"
                    alt="Valdenice Martelozo"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Subtle gradient overlay at bottom for text readability */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6 pt-20">
                    <h3 className="font-bold text-white text-2xl drop-shadow-lg">Valdenice Martelozo</h3>
                    <p className="text-[var(--gold)] font-medium drop-shadow-md">Founder & Lead Consultant</p>
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
              The 3 Pillars of Our Methodology
            </h2>
            <p className="text-[var(--text-gray)] max-w-2xl mx-auto text-lg">
              While regular firms do basic accounting, we operate at a higher level: 
              structuring processes, creating controls, fixing failures, and implementing real fiscal governance.
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

      {/* Meet Valdenice Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo Side */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--gold)]/10 rounded-3xl" />
              {/* Photo Placeholder - Replace with actual photo */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-[var(--beige)] to-[var(--beige-dark)] rounded-2xl overflow-hidden flex items-center justify-center">
                {/* Replace this div with an actual Image component when you have the photo */}
                <Image 
                    src="/root/val-1.webp"
                    alt="Valdenice Martelozo"
                    fill
                    className="object-cover object-top"
                    priority
                  />
              </div>
            </div>
            
            {/* Content Side */}
            <div>
              <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">Meet Valdenice</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-blue)] mt-2 mb-6">
                Not a Traditional Accountant
              </h2>
              <p className="text-[var(--text-gray)] text-lg mb-6 leading-relaxed">
                Valdenice doesn&apos;t offer basic services like daily entries, payroll, or simple annual filings. 
                Her work is <strong>advanced technical consulting</strong> to organize, correct, and structure 
                US small and medium businesses living in accounting chaos.
              </p>
              <p className="text-[var(--text-gray)] text-lg mb-8 leading-relaxed">
                The same chaos that the IRS and GAO point to as the direct cause of the 
                <strong> $696 billion Tax Gap</strong>. Her central proposal is to implement, within each SMB, 
                a complete system of Accounting Governance + Tax Compliance + Automation, based on her 
                proprietary <strong>Valtax Accounting</strong> methodology.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Structures accounting processes",
                  "Creates internal controls",
                  "Corrects ERP failures",
                  "Automates critical routines",
                  "Implements audit trails",
                  "Trains internal teams"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--gold)] flex-shrink-0" />
                    <span className="text-[var(--text-gray)]">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[var(--gold)] font-semibold hover:text-[var(--gold-dark)] transition-colors"
              >
                Learn more about Valdenice <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
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
                We Don&apos;t Do Your Accountant&apos;s Job — We Fix the Company
              </h2>
              <p className="text-[var(--text-gray)] text-lg mb-8 leading-relaxed">
                Valdenice is not a traditional accountant. She provides advanced technical consulting 
                to organize, correct, and structure US SMBs living in accounting chaos — the same chaos 
                the IRS and GAO point to as the direct cause of the $696 billion Tax Gap.
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
                  The Results You Get
                </h3>
                <blockquote className="text-xl text-[var(--text-gray)] italic border-l-4 border-[var(--gold)] pl-6 mb-6">
                  &ldquo;Fewer errors, fewer penalties, reliable data, higher productivity, better cash flow, real preparation for growth.&rdquo;
                </blockquote>
                <p className="text-[var(--text-gray)] mb-6">
                  We restructure your business, correct errors, create processes, implement internal controls, 
                  make technology work, and train your team to maintain everything in order.
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
              Our Consulting Process
            </h2>
            <p className="text-[var(--text-gray)] max-w-2xl mx-auto text-lg">
              A structured approach to transform your accounting chaos into organized, compliant operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnostic", description: "We assess your current accounting maturity and identify critical gaps" },
              { step: "02", title: "Risk Analysis", description: "We map compliance risks, process failures, and system issues" },
              { step: "03", title: "Implementation", description: "We restructure processes, fix ERPs, and create internal controls" },
              { step: "04", title: "Training & Support", description: "We train your team and provide ongoing preventive audits" }
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
            Ready to Fix Your Accounting Chaos?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation to discover how we can help you 
            achieve real compliance, reduce errors, and prepare your business for growth.
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
