'use client';

import { Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      className="py-16 px-4 sm:px-6 text-stone-100 border-t border-stone-700"
      style={{ backgroundColor: '#5a5345' }}
    >
      <div className="max-w-6xl mx-auto px-0 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 tracking-tight">
              ВІКТОРІЯ<br />БЕРЕЩАК
            </h3>
            <p className="text-xs sm:text-sm text-background/60 mt-4">
              © 2024 Всі права захищені
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Навігація</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="/#approach" className="text-background/80 hover:text-background transition-colors">Мій підхід</a></li>
              <li><a href="/#trust" className="text-background/80 hover:text-background transition-colors">Чому довіряють</a></li>
              <li><a href="/#formats" className="text-background/80 hover:text-background transition-colors">Пакети</a></li>
              <li><a href="/#process" className="text-background/80 hover:text-background transition-colors">Процес</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Ресурси</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="/#testimonials" className="text-background/80 hover:text-background transition-colors">Відгуки</a></li>
              <li><a href="/#books" className="text-background/80 hover:text-background transition-colors">Книги</a></li>
              <li><a href="/#faq" className="text-background/80 hover:text-background transition-colors">FAQ</a></li>
              <li><a href="/#blog" className="text-background/80 hover:text-background transition-colors">Блог</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Контакти</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="mailto:hello@victoria.com" className="text-background/80 hover:text-background transition-colors break-all">hello@victoria.com</a></li>
              <li><a href="tel:+380123456789" className="text-background/80 hover:text-background transition-colors">+38 (012) 345-67-89</a></li>
              <li className="text-background/60 text-xs sm:text-sm pt-2">Київ, Україна</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-6 sm:pt-8">
          <p className="text-xs sm:text-sm text-background/60 text-center">
            Розроблено з ☕ та увагою до деталей
          </p>
        </div>
      </div>
    </footer>
  );
}







