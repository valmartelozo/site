import Link from "next/link";
import { 
  Shield, 
  Users, 
  Award, 
  Globe,
  Target,
  Heart,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Building2,
  BookOpen,
  Scale
} from "lucide-react";

export const metadata = {
  title: "About Us | VMARTELOZO Global Accounting LLC",
  description: "Learn about Valdenice and the Valtax Methodology - advanced technical consulting for US SMBs focused on Accounting Governance, Tax Compliance, and Automation.",
};

const values = [
  {
    icon: Shield,
    title: "Real Compliance",
    description: "We don&apos;t just file paperwork. We implement systems that ensure ongoing IRS/GAAP/IFRS compliance and prevent future issues."
  },
  {
    icon: Award,
    title: "Technical Excellence",
    description: "Our Valtax Methodology is built on deep technical expertise in accounting governance, process automation, and fiscal compliance."
  },
  {
    icon: Heart,
    title: "Continuous Improvement",
    description: "We don&apos;t just fix problems once. We establish systems for ongoing monitoring, preventive audits, and continuous optimization."
  },
  {
    icon: BookOpen,
    title: "Knowledge Transfer",
    description: "We train your team to maintain standards independently, ensuring lasting results long after our engagement ends."
  }
];

const differentials = [
  {
    icon: Users,
    title: "Not a Traditional Accountant",
    description: "Valdenice doesn&apos;t do daily entries, payroll, or simple annual filings. She provides advanced technical consulting to fix the accounting chaos that causes the $696B Tax Gap."
  },
  {
    icon: BookOpen,
    title: "Valtax Methodology",
    description: "Our proprietary methodology implements complete Accounting Governance + Tax Compliance + Automation within each SMB. It&apos;s a system for reorganization and continuous improvement."
  },
  {
    icon: Scale,
    title: "Preventive Approach",
    description: "We identify problems before the IRS does. Our preventive audits avoid risks, penalties, and inconsistencies that hinder loans, compliance, and business growth."
  },
  {
    icon: Globe,
    title: "High-Value Consulting",
    description: "This is strategic, consultative work focused on restructuring and improvement — not simple operational execution. We fix the company so your accountant can work without errors."
  }
];

const timeline = [
  {
    year: "The Problem",
    title: "$696 Billion Tax Gap",
    description: "The IRS and GAO identify accounting chaos in SMBs as a direct cause of massive tax compliance failures across the US."
  },
  {
    year: "Our Solution",
    title: "Valtax Methodology",
    description: "A complete system of Accounting Governance + Tax Compliance + Automation designed specifically for small and medium businesses."
  },
  {
    year: "The Result",
    title: "Organized, Compliant Operations",
    description: "Fewer errors, fewer penalties, reliable data, higher productivity, better cash flow, and real preparation for growth."
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary-blue)] via-[var(--primary-blue-light)] to-[var(--primary-blue)] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-6">
                Strategic Accounting, Not Operational
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                VMARTELOZO Global Accounting LLC helps US small and medium businesses operate with 
                organization, security, and compliance. While regular firms do basic accounting, 
                we operate at a higher level: structuring processes, creating controls, fixing failures, 
                and implementing real fiscal governance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-[var(--gold)] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">VMARTELOZO</h3>
                  <p className="text-[var(--gold)] font-medium">Global Accounting LLC</p>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-gray-300">Florida, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-blue)] mt-2 mb-6">
                Fixing the Chaos That Causes the Tax Gap
              </h2>
              <p className="text-[var(--text-gray)] text-lg mb-6 leading-relaxed">
                The IRS and GAO point to accounting chaos in SMBs as a direct cause of the 
                $696 billion Tax Gap. Our mission is to implement complete Accounting Governance + 
                Tax Compliance + Automation within each business we serve.
              </p>
              <p className="text-[var(--text-gray)] text-lg leading-relaxed">
                We don&apos;t do the accountant&apos;s job — we fix the company so the accountant can 
                work without generating errors. This is high-value consulting focused on 
                reorganization and continuous improvement, not simple operational execution.
              </p>
            </div>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center text-white font-bold">
                      <Target className="w-6 h-6" />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-[var(--beige)] mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-[var(--gold)] font-semibold text-sm">{item.year}</span>
                    <h3 className="text-xl font-semibold text-[var(--primary-blue)] mt-1 mb-2">{item.title}</h3>
                    <p className="text-[var(--text-gray)]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 lg:py-28 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">What Sets Us Apart</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-blue)] mt-2 mb-4">
              Why We&apos;re Different
            </h2>
            <p className="text-[var(--text-gray)] max-w-2xl mx-auto text-lg">
              We&apos;re not a routine accounting firm. We provide advanced technical consulting 
              that transforms how your business handles accounting and compliance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {differentials.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[var(--primary-blue)] rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-blue)] mb-3">{item.title}</h3>
                <p className="text-[var(--text-gray)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-blue)] mt-2 mb-4">
              What We Stand For
            </h2>
            <p className="text-[var(--text-gray)] max-w-2xl mx-auto text-lg">
              Our core values guide everything we do and how we serve our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[var(--beige)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[var(--gold)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-blue)] mb-3">{value.title}</h3>
                <p className="text-[var(--text-gray)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem We Solve */}
      <section className="py-20 lg:py-28 bg-[var(--primary-blue)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider">The Problem We Solve</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
                The Accounting Chaos in US SMBs
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Most small and medium businesses operate with serious accounting deficiencies:
              </p>
              <ul className="space-y-4">
                {[
                  "Inconsistent or missing internal controls",
                  "ERP systems incorrectly configured",
                  "No standardized processes or documentation",
                  "Unreliable financial statements",
                  "High risk of IRS penalties and audits"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--gold)] flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">The Valtax Solution</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                We implement complete Accounting Governance + Tax Compliance + Automation. 
                We restructure processes, create internal controls, fix ERP configurations, 
                and establish audit trails.
              </p>
              <p className="text-gray-200 mb-8 leading-relaxed">
                The result: fewer errors, fewer penalties, reliable data, higher productivity, 
                better cash flow, and real preparation for growth. We train your team to 
                maintain these standards long-term.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-blue)] mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-[var(--text-gray)] mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve your business goals in the 
            United States. Schedule a free consultation today.
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
              className="inline-flex items-center justify-center gap-2 bg-[var(--primary-blue)] hover:bg-[var(--primary-blue-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all"
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
