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
  description: "Advanced technical consulting for US SMBs: Accounting Governance, Tax Compliance, Automation, and Team Training. We fix accounting chaos with the Valtax Methodology.",
};

const services = [
  {
    id: "governance",
    icon: Shield,
    title: "Accounting Governance & Tax Compliance",
    subtitle: "Reorganize and Structure Your Business",
    description: "We identify errors, correct failures, standardize processes, and create internal controls that prevent penalties, inconsistencies, and IRS audits. This is the foundation of real fiscal governance.",
    features: [
      "Accounting maturity diagnostic",
      "Risk matrix and gap analysis",
      "Process standardization and documentation",
      "Internal controls implementation",
      "ERP correction and parameterization",
      "Audit trails creation",
      "Full IRS/GAAP/IFRS compliance"
    ],
    highlight: "Foundation of fiscal governance"
  },
  {
    id: "automation",
    icon: BarChart3,
    title: "Automation, Systems & KPIs",
    subtitle: "Technology + Precision",
    description: "We integrate systems (QuickBooks, SAP B1, NetSuite), correct parameterizations, and create automations that reduce rework and strengthen data accuracy. Real-time visibility into your business performance.",
    features: [
      "ERP integration and optimization",
      "Automated routine processes",
      "Automated reconciliations",
      "Performance dashboards",
      "Compliance indicators and KPIs",
      "Data accuracy validation",
      "Real-time financial reporting"
    ],
    highlight: "Reduce errors with technology"
  },
  {
    id: "training",
    icon: Users,
    title: "Training & Ongoing Support",
    subtitle: "Maintain Standards Long-Term",
    description: "We don&apos;t replace your accountant — we teach your team to operate correctly, maintaining standards and reducing future errors. Continuous support ensures lasting results.",
    features: [
      "Team training programs",
      "Technical procedure manuals",
      "Quarterly compliance reviews",
      "Continuous preventive audits",
      "Process improvement recommendations",
      "Ongoing technical support",
      "Knowledge transfer sessions"
    ],
    highlight: "Empower your team"
  }
];

const processSteps = [
  {
    icon: ClipboardList,
    title: "Diagnostic",
    description: "We assess your current accounting maturity, identify critical gaps, and map all compliance risks."
  },
  {
    icon: Shield,
    title: "Risk Analysis",
    description: "We create a detailed risk matrix covering process failures, system issues, and IRS exposure."
  },
  {
    icon: FileCheck,
    title: "Implementation",
    description: "We restructure processes, fix ERP configurations, create internal controls, and establish audit trails."
  },
  {
    icon: Users,
    title: "Training & Support",
    description: "We train your team on new procedures and provide ongoing preventive audits to maintain standards."
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
              Advanced Technical Consulting for US SMBs
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              We don&apos;t do basic accounting. We implement complete Accounting Governance + 
              Tax Compliance + Automation within each SMB using our proprietary Valtax Methodology. 
              High-value consulting focused on reorganization and continuous improvement.
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
              <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">What We Don&apos;t Do</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-blue)] mt-2 mb-6">
                We&apos;re Not a Routine Accounting Firm
              </h2>
              <p className="text-[var(--text-gray)] text-lg mb-8 leading-relaxed">
                We don&apos;t do daily entries, payroll, operational bookkeeping, or simple annual filings. 
                We organize the entire system so all of that happens correctly.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "Preventive Audits", desc: "Find problems before the IRS" },
                  { icon: Users, title: "Team Training", desc: "Empower your internal staff" },
                  { icon: BarChart3, title: "Real KPIs", desc: "Measurable compliance indicators" },
                  { icon: DollarSign, title: "Better Cash Flow", desc: "Through process efficiency" }
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
              <h3 className="text-2xl font-bold mb-4">Ready to Fix Your Accounting Chaos?</h3>
              <p className="text-gray-200 mb-8">
                Schedule a free consultation to discuss how we can restructure your 
                processes, implement real governance, and prepare your business for growth.
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
