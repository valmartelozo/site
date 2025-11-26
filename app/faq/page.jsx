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
    id: 'company',
    icon: Building2,
    title: 'Company Formation',
    questions: [
      {
        question: "Can I open a company in the USA even if I live in Brazil?",
        answer: "Yes, absolutely! You can open an LLC or Corporation in the United States even while residing in Brazil. You don't need to be a US citizen or resident to form a company. We handle the entire process remotely, including EIN registration, state filing, and all necessary documentation."
      },
      {
        question: "What is the best state to open a company in the USA?",
        answer: "The best state depends on your specific business needs. Delaware is popular for its business-friendly laws and privacy protections. Wyoming offers low fees and no state income tax. Florida is excellent for those planning to establish a physical presence. We analyze your situation and recommend the optimal state for your business goals."
      },
      {
        question: "What is an LLC and why is it popular?",
        answer: "An LLC (Limited Liability Company) is a business structure that provides personal liability protection while offering flexibility in management and taxation. It's popular because it combines the liability protection of a corporation with the tax benefits and simplicity of a partnership. Most foreign entrepreneurs choose LLCs for their US ventures."
      },
      {
        question: "How long does it take to form a company in the USA?",
        answer: "The timeline varies by state, but typically ranges from 1-4 weeks. Some states offer expedited processing for an additional fee. Once your company is formed, we help you obtain your EIN (usually within 1-2 weeks for foreign owners) and set up your business banking."
      },
      {
        question: "Do I need a US address to open a company?",
        answer: "Yes, you need a registered agent with a physical address in the state where you form your company. We provide registered agent services, giving you a legitimate US business address for official correspondence and legal documents."
      }
    ]
  },
  {
    id: 'tax',
    icon: FileText,
    title: 'Tax Questions',
    questions: [
      {
        question: "Do I need to pay taxes in the USA if I open an LLC?",
        answer: "It depends on your situation. Single-member LLCs owned by non-residents are typically treated as 'disregarded entities' for US tax purposes if they don't have US-source income. However, you may still have filing requirements. Multi-member LLCs are treated as partnerships and have different obligations. We analyze your specific situation to ensure proper compliance."
      },
      {
        question: "What is an EIN and why do I need one?",
        answer: "An EIN (Employer Identification Number) is like a Social Security Number for your business. It's required for opening business bank accounts, filing taxes, and hiring employees. All US companies need an EIN, and we handle the application process for you."
      },
      {
        question: "What tax forms does my LLC need to file?",
        answer: "The required forms depend on your LLC structure and activities. Common forms include Form 5472 (for foreign-owned LLCs), Form 1120 (corporate tax return), Form 1065 (partnership return), and various state filings. We prepare and file all necessary returns to keep you compliant."
      },
      {
        question: "Can I avoid double taxation between Brazil and the USA?",
        answer: "While Brazil and the USA don't have a comprehensive tax treaty, there are strategies to minimize double taxation. Proper entity structuring, understanding tax credits, and strategic planning can help optimize your tax situation across both countries. We work with you to develop a tax-efficient structure."
      },
      {
        question: "What happens if I don't file my US taxes?",
        answer: "Failure to file required tax returns can result in significant penalties, interest charges, and potential legal issues. For foreign-owned LLCs, the penalty for not filing Form 5472 can be $25,000 per form. We ensure you meet all filing deadlines and requirements to avoid these costly penalties."
      }
    ]
  },
  {
    id: 'financial',
    icon: DollarSign,
    title: 'Financial & Banking',
    questions: [
      {
        question: "Can I open a US bank account for my company?",
        answer: "Yes, but it can be challenging for non-residents. Many banks require an in-person visit, though some offer remote account opening. We guide you through the process, recommend banks that work with foreign entrepreneurs, and help prepare all necessary documentation."
      },
      {
        question: "Do I need to keep separate books for my US company?",
        answer: "Yes, maintaining separate financial records for your US company is essential for legal protection, tax compliance, and good business practice. We provide professional bookkeeping services to keep your records accurate and organized."
      },
      {
        question: "What accounting software do you recommend?",
        answer: "We typically recommend QuickBooks Online for its ease of use, robust features, and integration capabilities. However, we can work with various accounting platforms based on your preferences and business needs."
      },
      {
        question: "How often should I reconcile my accounts?",
        answer: "We recommend monthly reconciliation to maintain accurate records and catch any discrepancies early. Our bookkeeping services include regular reconciliation to ensure your financial data is always current and accurate."
      }
    ]
  },
  {
    id: 'general',
    icon: Globe,
    title: 'General Questions',
    questions: [
      {
        question: "Do you offer services in Portuguese?",
        answer: "Yes! We are fully bilingual and provide all our services in both English and Portuguese. We understand the importance of clear communication, especially when dealing with complex financial and legal matters."
      },
      {
        question: "How do I get started with your services?",
        answer: "Simply contact us through our website, WhatsApp, or email. We'll schedule a free consultation to understand your needs and goals. From there, we'll provide a customized proposal and guide you through every step of the process."
      },
      {
        question: "What makes you different from other accounting firms?",
        answer: "We specialize in serving Brazilian entrepreneurs in the USA, combining expertise from both countries. Our consultative and educational approach means we don't just do the work - we help you understand US business practices. We focus on real IRS compliance to protect your business and personal interests."
      },
      {
        question: "Can you help if I already have a company with compliance issues?",
        answer: "Absolutely. We can help you get back on track with delinquent filings, resolve compliance issues, and establish proper systems going forward. The sooner you address these issues, the better - contact us for a confidential consultation."
      },
      {
        question: "Do you offer ongoing support or just one-time services?",
        answer: "We offer both! While some clients need help with specific projects like company formation, most benefit from ongoing support including monthly bookkeeping, annual tax preparation, and year-round compliance management. We tailor our services to your needs."
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
  const [activeCategory, setActiveCategory] = useState('company');
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
              Find answers to common questions about starting and running a business 
              in the United States. Can&apos;t find what you&apos;re looking for? Contact us directly.
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[var(--text-gray)] mb-10 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your specific situation and 
            get personalized guidance for your US business journey.
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
