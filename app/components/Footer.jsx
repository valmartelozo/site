import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Instagram } from 'lucide-react';

const services = [
  { name: 'Accounting Governance', href: '/services#governance' },
  { name: 'Tax Compliance', href: '/services#governance' },
  { name: 'Automation & Systems', href: '/services#automation' },
  { name: 'KPIs & Dashboards', href: '/services#automation' },
  { name: 'Training & Support', href: '/services#training' },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-blue)] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/root/logo-branca.png"
                alt="VMARTELOZO Global Accounting LLC"
                width={220}
                height={60}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced technical consulting for US SMBs. Accounting Governance, Tax Compliance, 
              and Automation using the Valtax Methodology.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/5519991079787" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[var(--gold)] rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[var(--gold)] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[var(--gold)] rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[var(--gold)]">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[var(--gold)]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[var(--gold)]">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:val.martelozo@gmail.com"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>val.martelozo@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+5519991079787"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+55 19 99107-9787</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5519991079787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Florida, USA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} VMARTELOZO Global Accounting LLC. All rights reserved.</p>
            <p className="text-center">
              Strategic accounting, not operational. Fixing the chaos that causes the Tax Gap.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
