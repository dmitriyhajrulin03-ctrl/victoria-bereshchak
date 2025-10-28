'use client';

import { Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-foreground/60">© 2025 Вікторія Берещак. Всі права захищені.</p>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://telegram.me" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

