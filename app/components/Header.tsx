'use client';

import { useState } from 'react';
import { Instagram, Send } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:text-primary transition-colors">
            <div className="relative p-1 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 rounded-full animate-pulse-glow">
              <Image
                src="/photos/opinion.jpg"
                alt="Вікторія Берещак"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full shadow-lg shadow-primary/20 object-cover"
              />
            </div>
            <div className="text-sm sm:text-lg font-bold tracking-tight leading-none">
              ВІКТОРІЯ БЕРЕЩАК
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            <li><Link href="/#approach" className="hover:text-primary transition-colors text-sm font-medium">Мій підхід</Link></li>
            <li><Link href="/#trust" className="hover:text-primary transition-colors text-sm font-medium">Чому довіряють</Link></li>
            <li><Link href="/#formats" className="hover:text-primary transition-colors text-sm font-medium">Формати</Link></li>
            <li><Link href="/#books" className="hover:text-primary transition-colors text-sm font-medium">Книги</Link></li>
            <li><Link href="/#blog" className="hover:text-primary transition-colors text-sm font-medium">Блог</Link></li>
            <li className="w-px h-6 bg-border/30"></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a></li>
            <li><a href="https://telegram.me" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Send className="w-5 h-5" /></a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="flex flex-col gap-2 p-4">
            <li><Link href="/#approach" className="block py-2 hover:text-primary transition-colors font-medium">Мій підхід</Link></li>
            <li><Link href="/#trust" className="block py-2 hover:text-primary transition-colors font-medium">Чому довіряють</Link></li>
            <li><Link href="/#formats" className="block py-2 hover:text-primary transition-colors font-medium">Формати співпраці</Link></li>
            <li><Link href="/#books" className="block py-2 hover:text-primary transition-colors font-medium">Книги</Link></li>
            <li><Link href="/#blog" className="block py-2 hover:text-primary transition-colors font-medium">Мій блог</Link></li>
            <li className="border-t border-border/30 mt-2 pt-2">
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="https://telegram.me" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Send className="w-5 h-5" /></a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}







