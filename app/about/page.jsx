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
  description: "Learn about VMARTELOZO Global Accounting LLC - specialized accounting, tax, and administrative services in the United States for Brazilian entrepreneurs.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with complete transparency and honesty in all our dealings, ensuring your business is built on a foundation of trust."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every service we provide, maintaining the highest standards of professional quality."
  },
  {
    icon: Heart,
    title: "Client Focus",
    description: "Your success is our success. We are dedicated to understanding and meeting your unique business needs."
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "We believe in empowering our clients with knowledge about US business practices and regulations."
  }
];

const differentials = [
  {
    icon: Users,
    title: "Brazilian Entrepreneur Specialists",
    description: "We understand the unique challenges and opportunities that Brazilians face when starting a business in the USA. Our team bridges the cultural and regulatory gap."
  },
  {
    icon: BookOpen,
    title: "Consultative & Educational Approach",
    description: "We don&apos;t just handle your accounting - we educate you about US business practices, tax regulations, and compliance requirements so you can make informed decisions."
  },
  {
    icon: Scale,
    title: "Real IRS Compliance",
    description: "We ensure full compliance with IRS regulations, protecting your business from penalties, fines, and potential legal issues that could affect your immigration status."
  },
  {
    icon: Globe,
    title: "Brazil + USA Experience",
    description: "Our combined expertise from both countries allows us to provide comprehensive guidance that considers your complete financial picture across borders."
  }
];

const timeline = [
  {
    year: "Foundation",
    title: "VMARTELOZO Global Accounting LLC",
    description: "Established to serve Brazilian entrepreneurs seeking to do business in the United States."
  },
  {
    year: "Mission",
    title: "Empowering Entrepreneurs",
    description: "Dedicated to helping clients navigate US business regulations with confidence and compliance."
  },
  {
    year: "Vision",
    title: "Trusted Partner",
    description: "To be the go-to resource for Brazilians starting and growing businesses in America."
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
                Your Partner for US Business Success
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                VMARTELOZO Global Accounting LLC is a company specialized in accounting, 
                tax, and administrative services in the United States. We are dedicated 
                to helping entrepreneurs achieve their American dream safely and compliantly.
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
                Entrepreneurship in the USA Safely and Without Tax Risks
              </h2>
              <p className="text-[var(--text-gray)] text-lg mb-6 leading-relaxed">
                Our mission is to empower entrepreneurs to start and grow their businesses 
                in the United States with confidence. We eliminate the fear of making fiscal 
                errors that could result in fines, company blocks, banking problems, or 
                affect immigration status.
              </p>
              <p className="text-[var(--text-gray)] text-lg leading-relaxed">
                We provide comprehensive support that goes beyond traditional accounting 
                services, offering education, guidance, and strategic advice to help you 
                navigate the complexities of the American business landscape.
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
              Our Competitive Advantages
            </h2>
            <p className="text-[var(--text-gray)] max-w-2xl mx-auto text-lg">
              We combine expertise, education, and dedication to provide unmatched 
              service to Brazilian entrepreneurs in the USA.
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
                Eliminating Fear and Uncertainty
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Many entrepreneurs fear making fiscal errors that could lead to serious consequences:
              </p>
              <ul className="space-y-4">
                {[
                  "Fines and penalties from the IRS",
                  "Company blocks and operational issues",
                  "Banking problems and account closures",
                  "Immigration status complications",
                  "Legal issues and compliance failures"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--gold)] flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Our Solution</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                We provide comprehensive accounting, tax, and administrative services 
                that ensure full compliance with US regulations. Our consultative 
                approach means you&apos;re never in the dark about your business obligations.
              </p>
              <p className="text-gray-200 mb-8 leading-relaxed">
                With our expertise in both Brazilian and American business practices, 
                we bridge the gap and give you the confidence to grow your business 
                without fear.
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
