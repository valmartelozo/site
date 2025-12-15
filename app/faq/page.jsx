'use client';

import { useState } from 'react';
import Link from "next/link";
import { 
  ChevronDown,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  Building2,
  FileText,
  DollarSign,
  Globe
} from "lucide-react";

const faqCategories = [
  {
    id: 'governance',
    icon: Building2,
    title: 'Accounting Governance',
    questions: [
      {
        question: "What is Accounting Governance and why do I need it?",
        answer: "Accounting Governance is a comprehensive framework of processes, controls, and standards that ensure your financial operations are accurate, compliant, and efficient. Without it, SMBs often operate in chaos — the same chaos the IRS and GAO identify as a direct cause of the $696 billion Tax Gap. We implement governance to prevent errors, penalties, and audit risks."
      },
      {
        question: "What does a maturity diagnostic involve?",
        answer: "Our maturity diagnostic assesses your current accounting processes, internal controls, ERP configuration, documentation standards, and compliance status. We identify gaps, risks, and areas for improvement. This diagnostic forms the foundation for our restructuring recommendations."
      },
      {
        question: "How do you create internal controls?",
        answer: "We design and implement controls tailored to your business: segregation of duties, approval workflows, reconciliation procedures, audit trails, and documentation standards. These controls prevent errors, detect issues early, and ensure your financial data is reliable."
      },
      {
        question: "What standards do you follow (GAAP, IFRS, IRS)?",
        answer: "We ensure compliance with US GAAP (Generally Accepted Accounting Principles), IRS requirements, and where applicable, IFRS (International Financial Reporting Standards). Our goal is to make your financial statements reliable and your tax filings bulletproof."
      },
      {
        question: "How long does a governance implementation take?",
        answer: "Timeline depends on your company's size and current state. A typical engagement ranges from 2-6 months for initial implementation, followed by ongoing support. We work in phases: diagnostic, risk analysis, implementation, and training."
      }
    ]
  },
  {
    id: 'automation',
    icon: FileText,
    title: 'Automation & Systems',
    questions: [
      {
        question: "Which ERP systems do you work with?",
        answer: "We work with QuickBooks, SAP Business One, NetSuite, and other major accounting platforms. We don't just set them up — we correct parameterizations, integrate systems, and create automations that reduce manual work and errors."
      },
      {
        question: "What kind of automations do you implement?",
        answer: "We automate reconciliations, routine journal entries, report generation, compliance checks, and data validation. The goal is to reduce rework, eliminate manual errors, and give you real-time visibility into your financial performance."
      },
      {
        question: "What are compliance KPIs and why do they matter?",
        answer: "Compliance KPIs are measurable indicators that track your adherence to accounting standards and tax requirements. Examples include reconciliation completion rates, error rates, filing deadlines met, and audit trail completeness. These KPIs help you monitor and maintain compliance proactively."
      },
      {
        question: "Can you fix our existing ERP that's not working correctly?",
        answer: "Yes, this is a core part of what we do. Many SMBs have ERPs that were set up incorrectly or have drifted from proper configuration over time. We audit your current setup, identify issues, and correct parameterizations to ensure accurate data."
      },
      {
        question: "What dashboards do you provide?",
        answer: "We create performance dashboards that show key financial metrics, compliance indicators, reconciliation status, and trend analysis. These dashboards give you real-time visibility into your business health and compliance status."
      }
    ]
  },
  {
    id: 'training',
    icon: DollarSign,
    title: 'Training & Support',
    questions: [
      {
        question: "Do you replace our existing accountant?",
        answer: "No. We don't do the accountant's job — we fix the company so your accountant can work without generating errors. We restructure processes, create controls, and train your team. Your accountant then operates within a properly governed system."
      },
      {
        question: "What does team training include?",
        answer: "We provide comprehensive training on new processes, internal controls, ERP usage, documentation standards, and compliance requirements. We create technical manuals and conduct knowledge transfer sessions to ensure your team can maintain standards independently."
      },
      {
        question: "What are preventive audits?",
        answer: "Preventive audits are regular reviews we conduct to identify problems before the IRS does. We check compliance status, control effectiveness, reconciliation accuracy, and documentation completeness. This proactive approach avoids penalties and surprises."
      },
      {
        question: "How often do you conduct quarterly reviews?",
        answer: "As the name suggests, quarterly reviews happen every three months. We assess compliance status, review KPIs, identify emerging issues, and recommend improvements. This ongoing support ensures your governance framework stays effective."
      },
      {
        question: "What ongoing support do you provide after implementation?",
        answer: "After initial implementation, we provide quarterly reviews, preventive audits, technical support, process improvement recommendations, and team coaching. We're your ongoing partner in maintaining accounting excellence."
      }
    ]
  },
  {
    id: 'general',
    icon: Globe,
    title: 'General Questions',
    questions: [
      {
        question: "What is the Valtax Methodology?",
        answer: "The Valtax Methodology is our proprietary approach to implementing complete Accounting Governance + Tax Compliance + Automation within SMBs. It's a systematic framework for reorganization and continuous improvement — not simple operational execution."
      },
      {
        question: "Do you do basic bookkeeping, payroll, or tax filing?",
        answer: "No. We don't do daily entries, payroll, operational bookkeeping, or simple annual filings. We organize the entire system so all of that happens correctly. We're advanced technical consultants, not routine accountants."
      },
      {
        question: "What results can I expect?",
        answer: "Our clients achieve: fewer errors, fewer penalties, reliable financial data, higher productivity, better cash flow, and real preparation for growth. We transform accounting chaos into organized, compliant operations."
      },
      {
        question: "How do I know if I need your services?",
        answer: "If you're experiencing: unreliable financial statements, IRS concerns, ERP issues, lack of internal controls, process inconsistencies, or difficulty getting loans due to data quality — you likely need our help. Schedule a free consultation to discuss."
      },
      {
        question: "Do you offer services in Portuguese?",
        answer: "Yes! We are fully bilingual and provide all our services in both English and Portuguese. We understand the importance of clear communication, especially when dealing with complex technical and compliance matters."
      }
    ]
  }
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[var(--gold)] transition-colors"
      >
        <span className="text-lg font-medium text-[var(--primary-blue)] pr-8">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-[var(--gold)] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-[var(--text-gray)] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('governance');
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (categoryId, questionIndex) => {
    const key = `${categoryId}-${questionIndex}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const currentCategory = faqCategories.find(cat => cat.id === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary-blue)] via-[var(--primary-blue-light)] to-[var(--primary-blue)] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <HelpCircle className="w-4 h-4 text-[var(--gold)]" />
              <span>Frequently Asked Questions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-6">
              Got Questions? We Have Answers
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Find answers to common questions about Accounting Governance, Tax Compliance, 
              Automation, and our Valtax Methodology. Can&apos;t find what you&apos;re looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Category Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h3 className="text-sm font-semibold text-[var(--text-gray)] uppercase tracking-wider mb-4">
                  Categories
                </h3>
                <nav className="space-y-2">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                        activeCategory === category.id
                          ? 'bg-[var(--primary-blue)] text-white'
                          : 'bg-[var(--beige)] text-[var(--text-gray)] hover:bg-[var(--beige-dark)]'
                      }`}
                    >
                      <category.icon className={`w-5 h-5 ${activeCategory === category.id ? 'text-[var(--gold)]' : ''}`} />
                      <span className="font-medium">{category.title}</span>
                    </button>
                  ))}
                </nav>
                
                <div className="mt-8 p-6 bg-[var(--beige)] rounded-xl">
                  <h4 className="font-semibold text-[var(--primary-blue)] mb-2">Still have questions?</h4>
                  <p className="text-sm text-[var(--text-gray)] mb-4">
                    We&apos;re here to help. Contact us for personalized assistance.
                  </p>
                  <a
                    href="https://wa.me/5519991079787"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--gold)] font-medium text-sm hover:text-[var(--gold-dark)] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-8">
                <currentCategory.icon className="w-8 h-8 text-[var(--gold)]" />
                <h2 className="text-2xl font-bold text-[var(--primary-blue)]">
                  {currentCategory.title}
                </h2>
              </div>
              
              <div className="bg-[var(--beige)] rounded-2xl p-8">
                {currentCategory.questions.map((item, index) => (
                  <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openQuestions[`${activeCategory}-${index}`]}
                    onClick={() => toggleQuestion(activeCategory, index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-blue)] mb-6">
            Ready to Fix Your Accounting Chaos?
          </h2>
          <p className="text-xl text-[var(--text-gray)] mb-10 max-w-2xl mx-auto">
            Schedule a free consultation to discuss how we can implement real 
            Accounting Governance, Tax Compliance, and Automation in your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Schedule Free Consultation
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
