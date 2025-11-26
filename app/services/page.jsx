import Link from "next/link";
import { 
  Building2, 
  Calculator, 
  FileText, 
  TrendingUp, 
  Briefcase, 
  Globe,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  FileCheck,
  Users,
  Shield,
  DollarSign,
  ClipboardList,
  BarChart3
} from "lucide-react";

export const metadata = {
  title: "Our Services | VMARTELOZO Global Accounting LLC",
  description: "Complete accounting, tax, and business formation services in the USA. LLC formation, bookkeeping, tax preparation, and financial management for entrepreneurs.",
};

const services = [
  {
    id: "company-formation",
    icon: Building2,
    title: "Company Formation",
    subtitle: "Start Your US Business the Right Way",
    description: "We handle the complete process of forming your LLC or Corporation in the United States, ensuring compliance with all federal and state requirements.",
    features: [
      "LLC and Corporation formation in any US state",
      "EIN (Employer Identification Number) registration",
      "State registration and compliance",
      "Operating Agreement preparation",
      "Registered Agent services",
      "Bank account opening assistance",
      "Business license guidance"
    ],
    highlight: "Most popular for Brazilian entrepreneurs"
  },
  {
    id: "accounting",
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    subtitle: "Keep Your Finances Organized",
    description: "Professional bookkeeping services to maintain accurate financial records, ensuring your business stays compliant and you have clear visibility into your finances.",
    features: [
      "Monthly bookkeeping and reconciliation",
      "Financial statement preparation",
      "Accounts payable and receivable management",
      "Bank reconciliation",
      "QuickBooks setup and management",
      "Cash flow monitoring",
      "Financial reporting"
    ],
    highlight: "Essential for IRS compliance"
  },
  {
    id: "tax",
    icon: FileText,
    title: "Tax Services",
    subtitle: "Stay Compliant with the IRS",
    description: "Expert tax preparation and filing services for individuals and businesses. We ensure you meet all federal and state tax obligations while maximizing legitimate deductions.",
    features: [
      "Corporate tax preparation (Form 1120, 1120-S)",
      "Partnership tax returns (Form 1065)",
      "Individual tax preparation (Form 1040)",
      "State tax filings",
      "Quarterly estimated tax payments",
      "Sales tax compliance",
      "International tax considerations"
    ],
    highlight: "Avoid penalties and fines"
  },
  {
    id: "consulting",
    icon: TrendingUp,
    title: "Tax Consulting",
    subtitle: "Strategic Tax Planning",
    description: "Proactive tax planning strategies to minimize your tax burden and maximize your business potential. We help you make informed decisions that benefit your bottom line.",
    features: [
      "Tax planning and optimization",
      "Entity structure analysis",
      "Tax-efficient business strategies",
      "Retirement planning considerations",
      "Investment tax planning",
      "Cross-border tax planning",
      "IRS audit representation"
    ],
    highlight: "Maximize your savings"
  },
  {
    id: "administrative",
    icon: Briefcase,
    title: "Administrative Services",
    subtitle: "Complete Business Support",
    description: "Comprehensive administrative support to keep your business running smoothly. We handle the paperwork so you can focus on growing your business.",
    features: [
      "Registered Agent services",
      "Annual report filings",
      "Business license renewals",
      "Corporate compliance management",
      "Document preparation and filing",
      "Business correspondence handling",
      "Regulatory compliance monitoring"
    ],
    highlight: "Stay compliant year-round"
  },
  {
    id: "financial",
    icon: Globe,
    title: "Financial Management",
    subtitle: "Grow Your Business",
    description: "Strategic financial management services to help your business thrive in the American market. We provide insights and guidance for sustainable growth.",
    features: [
      "Financial analysis and reporting",
      "Budget planning and forecasting",
      "Cash flow management",
      "Profitability analysis",
      "Business performance metrics",
      "Growth strategy consulting",
      "Financial decision support"
    ],
    highlight: "Data-driven decisions"
  }
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "Initial Contact",
    description: "Reach out via website, WhatsApp, email, or Instagram to start the conversation."
  },
  {
    icon: Users,
    title: "Discovery Call",
    description: "We discuss your specific needs, goals, and the best approach for your situation."
  },
  {
    icon: ClipboardList,
    title: "Custom Proposal",
    description: "Receive a detailed proposal tailored to your business requirements."
  },
  {
    icon: FileCheck,
    title: "Implementation",
    description: "We execute the plan efficiently while keeping you informed every step of the way."
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary-blue)] via-[var(--primary-blue-light)] to-[var(--primary-blue)] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-6">
              Complete Business Solutions for the US Market
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From company formation to ongoing financial management, we provide 
              everything you need to start and grow your business in the United States 
              with confidence and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 bg-[var(--beige)] px-4 py-2 rounded-full text-sm mb-4">
                    <service.icon className="w-4 h-4 text-[var(--gold)]" />
                    <span className="text-[var(--gold)] font-medium">{service.highlight}</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-blue)] mb-2">
                    {service.title}
                  </h2>
                  <p className="text-xl text-[var(--gold)] font-medium mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-[var(--text-gray)] text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white px-6 py-3 rounded-lg font-semibold transition-all"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className={`bg-[var(--beige)] rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-lg font-semibold text-[var(--primary-blue)] mb-6">
                    What&apos;s Included:
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--text-gray)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-blue)] mt-2 mb-4">
              How We Work Together
            </h2>
            <p className="text-[var(--text-gray)] max-w-2xl mx-auto text-lg">
              A simple, transparent process designed to get you started quickly and efficiently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[var(--primary-blue)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm text-[var(--gold)] font-semibold mb-2">Step {index + 1}</div>
                <h3 className="text-xl font-semibold text-[var(--primary-blue)] mb-3">{step.title}</h3>
                <p className="text-[var(--text-gray)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-blue)] mt-2 mb-6">
                Your Success is Our Priority
              </h2>
              <p className="text-[var(--text-gray)] text-lg mb-8 leading-relaxed">
                We combine expertise in both Brazilian and American business practices 
                to provide you with unparalleled service and support.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "IRS Compliance", desc: "Full regulatory compliance" },
                  { icon: Users, title: "Bilingual Support", desc: "English & Portuguese" },
                  { icon: BarChart3, title: "Expert Guidance", desc: "Strategic business advice" },
                  { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden fees" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--beige)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[var(--gold)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--primary-blue)]">{item.title}</h4>
                      <p className="text-sm text-[var(--text-gray)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[var(--primary-blue)] rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-200 mb-8">
                Schedule a free consultation to discuss your business needs and 
                discover how we can help you succeed in the US market.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white px-6 py-4 rounded-lg font-semibold transition-all"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/5519991079787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-lg font-semibold transition-all border border-white/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
