'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Top bar */}
      <div className="bg-[var(--primary-blue)] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden sm:flex items-center gap-6">
              <a href="mailto:manager@vmartelozo.com" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
                <Mail className="w-4 h-4" />
                manager@vmartelozo.com
              </a>
              <a href="tel:+5519991079787" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
                <Phone className="w-4 h-4" />
                +55 19 99107-9787
              </a>
            </div>
            <a 
              href="https://wa.me/5519991079787" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors ml-auto sm:ml-0"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/root/logo-val.png"
              alt="VMARTELOZO Global Accounting LLC"
              width={180}
              height={48}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--text-gray)] hover:text-[var(--primary-blue)] font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--gold)] transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white px-6 py-2.5 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-[var(--primary-blue)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[var(--text-gray)] hover:text-[var(--primary-blue)] font-medium transition-colors px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
