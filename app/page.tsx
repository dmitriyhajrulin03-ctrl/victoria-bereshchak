"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Target, Layers, TrendingUp, Instagram, Send, MessageCircle, FileText, HelpCircle, Calendar, BookOpen, Palette, BarChart3, Users, Lightbulb, CheckCircle2, Zap, Award, Search, Wrench, Rocket, CircleCheck, Sparkles, FileCheck, GraduationCap, ArrowRight, TrendingDown, Shuffle, Shield } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import React from "react"; // Added for useState

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll reveal animation
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
          <div className="max-w-6xl mx-auto w-full">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <div className="text-sm sm:text-lg font-bold tracking-tight leading-tight">
                ВІКТОРІЯ<br />БЕРЕЩАК
              </div>
            </div>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              <li><a href="#approach" className="hover:text-primary transition-colors text-sm font-medium">Мій підхід</a></li>
              <li><a href="#trust" className="hover:text-primary transition-colors text-sm font-medium">Чому довіряють</a></li>
              <li><a href="#formats" className="hover:text-primary transition-colors text-sm font-medium">Формати</a></li>
              <li><a href="#books" className="hover:text-primary transition-colors text-sm font-medium">Книги</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors text-sm font-medium">Блог</a></li>
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
                <li><a href="#approach" className="block py-2 hover:text-primary transition-colors font-medium">Мій підхід</a></li>
                <li><a href="#trust" className="block py-2 hover:text-primary transition-colors font-medium">Чому довіряють</a></li>
                <li><a href="#formats" className="block py-2 hover:text-primary transition-colors font-medium">Формати співпраці</a></li>
                <li><a href="#books" className="block py-2 hover:text-primary transition-colors font-medium">Книги</a></li>
                <li><a href="#blog" className="block py-2 hover:text-primary transition-colors font-medium">Мій блог</a></li>
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 bg-background mt-14 sm:mt-0">
        <div className="max-w-6xl mx-auto px-0 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Вікторія Берещак
              <br />
              <span className="text-primary">Архітекторка довіри</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/85 mb-8 leading-relaxed">
              Я створюю системи комунікацій, які тримають позицію бренду, будують репутаційний капітал і допомагають дітям впевнено — навіть у кризі.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                Обговорити ваш кейс →
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-muted text-muted-foreground rounded-full font-semibold hover:bg-muted/80 transition-all hover:shadow-lg text-sm sm:text-base active:scale-95">
                Мої формати →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <ApproachSection />

      {/* Why Trust Section */}
      <WhyTrustSection />

      {/* Packages Section */}
      <PackagesSection />

      {/* How I Work Section */}
      <HowIWorkSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Books Section */}
      <BooksSection />

      {/* Blog Section */}
      <BlogSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <FooterSection />
      </div>
    </>
  );
}

// Approach Section
function ApproachSection() {
  return (
    <section id="approach" className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto px-0 sm:px-6 md:px-8 lg:px-12">
        {/* Section Title */}
        <div className="mb-6 sm:mb-12 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Мій підхід</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Intro Text */}
        <p className="text-base sm:text-lg text-foreground/80 mb-12 sm:mb-16 leading-relaxed max-w-4xl font-medium scroll-reveal">
          Коли бренд мовчить — контекст говорить за нього. Коли говорить хаотично — його перестають чути. Коли говорить лише заради уваги — втрачає довіру. Я працюю з іншим: створюю системи комунікацій, які дають бізнесу й державі три практичні результати:
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group scroll-reveal">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/40 to-accent/20 rounded-lg mb-4 sm:mb-6 text-primary font-bold text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
              <Target className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
              Чітка позиція
            </h3>

            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
              Сенси, меседжі й комунікаційна рамка — щоб компанія завжди знала, що можна сказати власній аудиторії, а що ні.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1 group scroll-reveal">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/40 to-accent/20 rounded-lg mb-4 sm:mb-6 text-primary font-bold text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
              <Layers className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
              Архітектура рішень
            </h3>

            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
              Стратегія + тактична мапа дій, фреймворки й інструменти для будь-якої ситуації: від антикризи до росту.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group scroll-reveal sm:col-span-2 lg:col-span-1">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/40 to-accent/20 rounded-lg mb-4 sm:mb-6 text-primary font-bold text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
              Вимірюваний ефект
            </h3>

            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
              Метрики довіри, репутаційний капітал, індекси ефективності — результати, який можна показати ради директорів.
            </p>
          </div>
        </div>

        {/* Bottom Section with Quote and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center border border-border rounded-3xl p-6 sm:p-8 md:p-10">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <p className="text-base sm:text-lg text-foreground/85 leading-relaxed font-medium scroll-reveal relative">
              <span className="absolute -top-8 -left-2 text-5xl sm:text-6xl text-primary/20 font-bold">«</span>
              Я працюю особисто і беру відповідальність за стратегічну рамку. Для комплексних проєктів можу підключати команду моєї агенції неПіарник — ми беремо реалізацію під ключ, щоб система запрацювала одразу.
            </p>
          </div>

          {/* Image on the right */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="relative p-1 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 rounded-full animate-pulse-glow">
              <Image
                src="/photos/opinion.jpg"
                alt="Вікторія Берещак"
                width={160}
                height={160}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-lg shadow-primary/20 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Trust Section
function WhyTrustSection() {
  return (
    <section id="trust" className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto px-0 sm:px-6 md:px-8 lg:px-12">
        {/* Section Title */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Чому мені довіряють</h2>
          <div className="w-12 h-1 bg-primary mt-4 rounded-full"></div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group scroll-reveal">
            <div className="aspect-video bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Image
                src="/photos/dovira-1.png"
                alt="Презентація"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Від сенсів до реального ефекту</h3>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                Маю власну методологію, що поєднує ідеї з вимірюваним результатом — від концепції до реальної дії.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group scroll-reveal">
            <div className="aspect-video bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Image
                src="/photos/dovira-2.webp"
                alt="Команда"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Три світи — один підхід</h3>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                Я працюю на перетині бізнесу, держави й освіти. Це дає мені ширший горизонт і розуміння системи зсередини.
              </p>
            </div>
          </div>
        </div>

        {/* Three Experience Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Box 1 */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-3xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group scroll-reveal">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
              🚀
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Практика з бізнесом і державою</h3>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
              Радниця з комунікацій для компаній, девелоперів, міжнародних організацій та державних інституцій. Серед моїх проєктів — стратегічні комунікації для керівника Комітету Верховної Ради, групи компаній DIM, архітектурного бюро Архіматика, партнерство з НАЗК та We Build Ukraine.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-3xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group scroll-reveal">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
              ⚙️
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Власні інструменти</h3>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
              Авторка власних інструментів: «Сенс → Меседж → Дія», «3Р кризової заяви», «Messaging Consistency Index» тощо. Розробила кейси з різних комунікаційних сценаріїв та використовую їх як навчальні матеріали.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-3xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group sm:col-span-2 lg:col-span-1 scroll-reveal">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
              📚
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Академічна й публічна робота</h3>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
              PhD з соціальних комунікацій, викладачка в КНЕУ та бізнес-школі KSD, авторка двох книг, колумністка загальноукраїнських медіа (NV Бізнес, Економічна правда, Liga.net та ін.).
            </p>
          </div>
        </div>
    </div>
    </section>
  );
}

// Packages Section
function PackagesSection() {
  const [currentPackage, setCurrentPackage] = React.useState(0);

  const packages = [
    {
      id: 1,
      title: 'Пакет «Позиція»',
      description: 'Аудит комунікацій і ризиків дозволяє визначити ключові сенси та наративи, сформувати меседжинг для топів і команди, окреслити табу й «червоні лінії» у взаємодії та створити контент-навігатор — що, де і навіщо говоримо.',
      features: [
        {
          title: 'У керівництва і команди є готові меседжі для публічних виступів, інтерв\'ю, медіакомунікацій, соцмереж.',
          icon: 'MessageCircle'
        },
        {
          title: 'Є спільний документ-«рамка», де зафіксовано: що говоримо, що не говоримо, як пояснюємо свої дії.',
          icon: 'FileText'
        },
        {
          title: 'Топи отримують чіткі тези й відповіді на складні питання взаємодії в публічному полі.',
          icon: 'HelpCircle'
        },
        {
          title: 'З\'являється система контенту на 3–6 місяців (навігатор: формати, теми, канали).',
          icon: 'Calendar'
        }
      ]
    },
    {
      id: 2,
      title: 'Пакет «Видимість»',
      description: 'Архітектура експертності, мапа інфоприводів, маршрут довіри, система форматів/каналів, KPI та індекси (репутація, MCI, CV, довіра).',
      features: [
        {
          title: 'Команда отримує контент-план і формати, які можна використовувати щодня.',
          icon: 'BookOpen'
        },
        {
          title: 'Бренд стає впізнаваним і впливовим без інфошуму — звучить стратегічно й стабільно.',
          icon: 'Palette'
        },
        {
          title: 'Бізнес бачить KPI і вимірюваний ефект (частка голосу, цитованість, стабільність меседжів).',
          icon: 'BarChart3'
        }
      ]
    },
    {
      id: 3,
      title: 'Пакет «Команда»',
      description: 'Воркшопи з побудови меседжів, кризових заяв та роботи з медіа, практичні кейс-клуби для тренування дій, а також навчальні гайди та чеклісти. Я допомагаю розробити внутрішні правила комунікації та забезпечую коучинг для керівника і команди.',
      features: [
        {
          title: 'Команда опановує фреймворки та набуває впевненості, оскільки кожен співробітник чітко знає, що і як говорити у своїй ролі.',
          icon: 'Users'
        },
        {
          title: 'У компанії формується нова культура комунікації — замість хаосу є спільна логіка й навички.',
          icon: 'MessageCircle'
        },
        {
          title: 'Топи бачать, що команда сама може тримати комунікацію без постійного контролю.',
          icon: 'CheckCircle2'
        },
        {
          title: 'Знання не зникають: залишаються матеріали і система, з якою команда може працювати надалі.',
          icon: 'Award'
        }
      ]
    },
    {
      id: 4,
      title: 'Пакет «Система»',
      description: 'Комплексна розробка комунікаційної стратегії, побудова архітектури комунікаційної функції, формування ролей і процесів, підбір і навчання команди, а також супровід запуску стратегії на перших етапах.',
      features: [
        {
          title: 'Комунікація стає частиною стратегічного управління, а не «сервісною підтримкою».',
          icon: 'Target'
        },
        {
          title: 'СЕО та топи отримують рамку прийняття рішень, яка дозволяє пояснювати будь-які дії компанії.',
          icon: 'Zap'
        },
        {
          title: 'Команда працює за чіткою логікою і процесами, без хаосу та залежності від однієї людини. Комунікація стає активом і важелем впливу, а не витратною статтею.',
          icon: 'Users'
        },
        {
          title: 'Кожен меседж і кожна дія підсилюють капітал довіри — головну валюту бізнесу і держави. Довгостроково компанія формує позицію і вплив на ринку, а не просто «публічність».',
          icon: 'Award'
        }
      ]
    }
  ];

  const nextPackage = () => {
    setCurrentPackage((prev) => (prev + 1) % packages.length);
  };

  const prevPackage = () => {
    setCurrentPackage((prev) => (prev - 1 + packages.length) % packages.length);
  };

  const pkg = packages[currentPackage];

  return (
    <section id="formats" className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto px-0 sm:px-6 md:px-8 lg:px-12">
        {/* Section Title */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Пакети співпраці</h2>
          <div className="w-12 h-1 bg-primary mt-4 rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Package Slider */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-stretch">
              {/* Image on left */}
              <div className="lg:w-2/5 h-64 lg:h-auto bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden relative flex-shrink-0">
                <Image
                  src="/photos/position.png"
                  alt={pkg.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Content on right */}
              <div className="lg:w-3/5 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground">{pkg.title}</h3>
                
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-6 sm:mb-8 font-medium">
                  {pkg.description}
                </p>

                {/* Features List */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {pkg.features.map((feature, idx) => {
                    const iconMap: Record<string, React.FC<any>> = {
                      'MessageCircle': MessageCircle,
                      'FileText': FileText,
                      'HelpCircle': HelpCircle,
                      'Calendar': Calendar,
                      'BookOpen': BookOpen,
                      'Palette': Palette,
                      'BarChart3': BarChart3,
                      'Lightbulb': Lightbulb,
                      'Users': Users,
                      'CheckCircle2': CheckCircle2,
                      'Zap': Zap,
                      'Award': Award,
                      'Target': Target,
                    };
                    const IconComponent = iconMap[feature.icon] || null;
                    
                    return (
                      <li key={idx} className="flex gap-3 sm:gap-4 items-start">
                        <div className="flex-shrink-0">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center text-primary font-bold text-xs">
                            {IconComponent ? <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" /> : feature.icon}
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                          {feature.title}
                        </p>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA Button */}
                <button className="btn-primary text-sm sm:text-base w-full sm:w-auto">
                  Обговорити пакет →
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 sm:mt-12">
            <button
              onClick={prevPackage}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-primary/20 hover:bg-primary/10 transition-all duration-300"
              aria-label="Previous package"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {packages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPackage(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentPackage
                      ? 'bg-primary w-8'
                      : 'bg-primary/20 hover:bg-primary/40'
                  }`}
                  aria-label={`Go to package ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPackage}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-primary/20 hover:bg-primary/10 transition-all duration-300"
              aria-label="Next package"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// How I Work Section
function HowIWorkSection() {
  const steps = [
    {
      id: 1,
      number: 1,
      title: 'Діагностика',
      description: [
        { icon: Search, text: 'аудит поточних комунікацій' },
        { icon: Sparkles, text: 'виявлення слабких місць, ризиків і можливостей' },
        { icon: BarChart3, text: 'аналіз середовища і конкурентів' }
      ],
      icon: Search
    },
    {
      id: 2,
      number: 2,
      title: 'Рамка',
      description: [
        { icon: Lightbulb, text: 'формую ключові сенси й наративи' },
        { icon: Zap, text: 'створюю меседжинг і табу' },
        { icon: FileCheck, text: 'будую правила комунікаційної поведінки' }
      ],
      icon: Layers
    },
    {
      id: 3,
      number: 3,
      title: 'Інструменти',
      description: [
        { icon: Wrench, text: 'розробляю фреймворки й алгоритми' },
        { icon: Target, text: 'готую контент-навігатор' },
        { icon: CheckCircle2, text: 'даю чеклісти й готові матеріали для команди' }
      ],
      icon: Wrench
    },
    {
      id: 4,
      number: 4,
      title: 'Впровадження',
      description: [
        { icon: GraduationCap, text: 'проводжу навчання, воркшопи, кейс-клуби' },
        { icon: Users, text: 'треную спікерів і команду' },
        { icon: Rocket, text: 'запускаємо систему на практиці' }
      ],
      icon: Rocket
    },
    {
      id: 5,
      number: 5,
      title: 'Моніторинг і супровід',
      description: [
        { icon: TrendingUp, text: 'вимірюю ефективність (індекси довіри, KPI)' },
        { icon: ArrowRight, text: 'супроводжую команду у перші місяці' },
        { icon: Shuffle, text: 'адаптую й підсилюю систему під нові виклики' }
      ],
      icon: BarChart3
    }
  ];

  return (
    <section id="process" className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto px-0 sm:px-6 md:px-8 lg:px-12">
        {/* Section Title */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Як я працюю</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group">
                {/* Number with Icon */}
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  {/* Number */}
                  <div className="text-6xl sm:text-7xl font-bold text-primary/10 leading-none">
                    {step.number}
                  </div>
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">
                  {step.title}
                </h3>

                {/* Description List */}
                <ul className="space-y-2">
                  {step.description.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <li key={idx} className="flex items-start gap-2 text-sm sm:text-base text-foreground/70 leading-relaxed">
                        <IconComponent className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-border rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
          <div className="flex-1">
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-medium">
              Усі п'ять етапів можуть виглядати по-різному. Я не продаю «шаблони», а формую індивідуальне рішення під ваш бізнес: від точкового антикризу до повної комунікаційної системи.
            </p>
          </div>

          {/* Avatar */}
          <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-4 border-primary/40 flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-foreground/30 text-sm font-medium">Фото</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Марія Козак',
      affiliation: 'Директор маркетингу, Tech Startup',
      quote: 'Вікторія повністю змінила наш підхід до комунікацій. Від розмитої стратегії ми перейшли до чіткої системи, яка дійсно працює.'
    },
    {
      id: 2,
      name: 'Ігор Петренко',
      affiliation: 'CEO, Development Agency',
      quote: 'Найбільше вразило, що це не теорія, а практичні інструменти, які ми одразу почали використовувати в команді.'
    },
    {
      id: 3,
      name: 'Катерина Сидоренко',
      affiliation: 'Chief Communications Officer, International NGO',
      quote: 'Комунікація стала частиною нашої стратегії, а не просто витратою. Це змінило все.'
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto px-0 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Відгуки</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Testimonial Slider */}
        <TestimonialSlider reviews={testimonials} />
      </div>
    </section>
  );
}

// Testimonial Slider Component (without images)
const TestimonialSlider = ({ reviews }: { reviews: any[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const activeReview = reviews[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
        {/* Text Content */}
        <div className="flex-1">
          <p className="text-sm font-medium text-primary mb-2">
            {activeReview.affiliation}
          </p>
          <h4 className="text-lg sm:text-xl font-bold mb-4 text-foreground">
            {activeReview.name}
          </h4>
          <blockquote className="text-base sm:text-lg font-medium leading-relaxed text-foreground/85">
            "{activeReview.quote}"
          </blockquote>

          {/* Pagination */}
          <div className="mt-6 text-sm text-muted-foreground font-mono">
            {String(currentIndex + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-primary/20 hover:bg-primary/10 transition-all duration-300"
            aria-label="Previous review"
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            aria-label="Next review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Books Section
function BooksSection() {
  const books = [
    {
      id: 1,
      title: 'Комунікаційна стратегія в бізнесі. Як досягти максимуму в спілкуванні з аудиторією',
      description: 'Розповідаю, як самостійно вибудувати ефективну комунікаційну стратегію — без бюджету, але з сенсом. Даю чіткі інструменти, щоб звучати сильно, послідовно й чесно.',
      keyPoints: [
        { icon: Target, text: 'Смислова рамка' },
        { icon: MessageCircle, text: 'Меседжинг і тональність' },
        { icon: BarChart3, text: 'Репутаційний контекст' }
      ],
      image: '/photos/book-1.png'
    },
    {
      id: 2,
      title: 'Як здолати шторм. Золоті правила антикризових комунікацій',
      description: 'Пояснюю, як діяти до, під час і після кризи, аби зберегти довіру й репутацію. Даю прості рішення для складних ситуацій у публічному полі.',
      keyPoints: [
        { icon: Shield, text: 'Антикризові меседжі' },
        { icon: FileCheck, text: 'Чеклісти безпеки' },
        { icon: TrendingUp, text: 'Відновлення довіри' }
      ],
      image: '/photos/book-2.png'
    }
  ];

  return (
    <section id="books" className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto px-0 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Мої книги</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {books.map((book) => (
            <div key={book.id} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group">
              <div className="h-80 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={book.image}
                  alt={book.title}
                  width={250}
                  height={320}
                  className="w-auto h-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-foreground">{book.title}</h3>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-6">
                  {book.description}
                </p>
                
                {/* Key Points */}
                <ul className="space-y-2 mb-6">
                  {book.keyPoints.map((point, idx) => {
                    const IconComponent = point.icon;
                    return (
                      <li key={idx} className="flex items-start gap-2">
                        <IconComponent className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-foreground/70">{point.text}</span>
                      </li>
                    );
                  })}
                </ul>
                
                <button className="btn-primary text-sm sm:text-base w-full">
                  Детальніше
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Blog Section
function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: '5 причин, чому комунікація держави сиплеться — і як це змінити',
      date: '2025-08-15',
      slug: 'yak-reaguvaty-na-kheit',
      excerpt: 'У демократичних системах складні законопроєкти — це привід для публічного пояснення. В Україні ж — тригер недовіри. Наприкінці липня 2025 року парламент ухвалив зміни в антикорупційній архітектурі без передбачуваної рамки обговорення.'
    }
  ];

  return (
    <section id="blog" className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto px-0 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-8 sm:mb-12 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Мої статті</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        {blogPosts.map((post, index) => (
            <a
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-card border border-border/50 rounded-2xl p-6 sm:p-8 block hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 scroll-reveal"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-foreground/60">
                  {new Date(post.date).toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <span className="text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </a>
        ))}
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqItems = [
    {
      id: 1,
      icon: Target,
      question: 'Чим стратегічні комунікації відрізняються від PR чи SMM?',
      answer: 'PR і SMM працюють із формою — охоплення, контент, увага. Стратегічні комунікації працюють із системою: сенси, меседжі, позиція, довіра, а вже потім - інструменти, канали, контент. Це управлінська функція, а не сервіс.'
    },
    {
      id: 2,
      icon: 'Clock',
      question: 'Скільки часу займає побудова системи?',
      answer: 'Базова рамка формується за 4–6 тижнів. Повна система з навчанням команди та запуском функцією — 3–6 місяців.'
    },
    {
      id: 3,
      icon: 'Users',
      question: 'Якщо у нас немає Комунікаційного/PR-відділу, ми можемо почати?',
      answer: 'Так. У пакеті «Система» я допомагаю створити комунікаційну функцію з нуля: стратегія, процеси, ролі, команда.'
    },
    {
      id: 4,
      icon: 'Package',
      question: 'Які конкретні матеріали ми отримаємо?',
      answer: 'Готові меседжі, Q&A, шаблони кризових заяв, контент-навігатор, фреймворки, чеклісти й індекси вимірювання ефективності.'
    },
    {
      id: 5,
      icon: 'BarChart3',
      question: 'Як вимірюється ефективність?',
      answer: 'Використовую власні метрики: Індекс репутаційного активу, Communication Value, Messaging Consistency Index, Індекс довіри, Індекс цитованості тощо. Це показники, які можна презентувати на рівні ради директорів.'
    },
    {
      id: 6,
      icon: Layers,
      question: 'Чим відрізняється «Позиція» від «Системи»?',
      answer: '«Позиція» — це швидкий базис: рамка меседжів і сенсів. «Система» — повна стратегічна функція з запуском процесів, налагоджуванням роботи команди, спільними результатами і вимірюваністю.'
    },
    {
      id: 7,
      icon: 'Globe',
      question: 'Чи підходять ваші фреймворки для різних галузей?',
      answer: 'Так, методологія універсальна. Я працюю з бізнесом, державою та міжнародними організаціями.'
    },
    {
      id: 8,
      icon: 'Briefcase',
      question: 'Чи обов\'язково залучати CEO у процес?',
      answer: 'Так, на старті. Позиція компанії формується від керівництва. Далі команда працює самостійно за рамкою.'
    },
    {
      id: 9,
      icon: TrendingUp,
      question: 'Чи можна працювати точково (наприклад, тільки з кризою)?',
      answer: 'Так. Є окремий формат «Антикриз». Ми також можемо обговорити будь-який ваш комунікаційний запит. Але найстійкіший ефект дає системна співпраця.'
    },
    {
      id: 10,
      icon: 'Lock',
      question: 'Чи можна працювати конфіденційно?',
      answer: 'Так. Усі проєкти — під NDA. Конфіденційність і довіра — частина моєї роботи.'
    },
    {
      id: 11,
      icon: 'Star',
      question: 'Що відрізняє вашу роботу від консалтингу великих агенцій?',
      answer: 'Я не продаю шаблонні презентації. Я працюю особисто, даю готові інструменти і навчаю команду — це практичний результат, а не «слайди».'
    },
    {
      id: 12,
      icon: 'DollarSign',
      question: 'Скільки коштує і як формується ціна?',
      answer: 'Є чіткі пакети співпраці. Вартість залежить від масштабу і глибини. На першій зустрічі ми підбираємо формат під ваш запит.'
    }
  ];

  // Dynamic icon mapping
  const iconComponents: Record<string, React.FC<any>> = {
    'Clock': require('lucide-react').Clock,
    'Users': require('lucide-react').Users,
    'Package': require('lucide-react').Package,
    'BarChart3': require('lucide-react').BarChart3,
    'Globe': require('lucide-react').Globe,
    'Briefcase': require('lucide-react').Briefcase,
    'Lock': require('lucide-react').Lock,
    'Star': require('lucide-react').Star,
    'DollarSign': require('lucide-react').DollarSign,
  };

  // Icon mapping helper
  const getIcon = (iconKey: any) => {
    if (typeof iconKey === 'string' && iconComponents[iconKey]) {
      const Icon = iconComponents[iconKey];
      return <Icon className="w-5 h-5" />;
    } else if (iconKey) {
      const Icon = iconKey;
      return <Icon className="w-5 h-5" />;
    }
    return null;
  };

  return (
    <section id="faq" className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto px-0 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-8 sm:mb-12 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Питання</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {faqItems.map((item, index) => (
            <details
              key={item.id}
              className="group border border-border/50 rounded-xl overflow-hidden bg-card/50 hover:bg-card/80 transition-all duration-300 scroll-reveal cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
            >
              <summary className="flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 hover:bg-primary/5 transition-colors duration-300 select-none">
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-primary">
                    {getIcon(item.icon)}
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-foreground text-left">
                    {item.question}
                  </span>
                </div>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-primary font-bold text-lg group-open:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-border/30 bg-muted/20 text-foreground/80 text-sm sm:text-base leading-relaxed ml-10 sm:ml-12">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer Section
function FooterSection() {
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
              <li><a href="#approach" className="text-background/80 hover:text-background transition-colors">Мій підхід</a></li>
              <li><a href="#trust" className="text-background/80 hover:text-background transition-colors">Чому довіряють</a></li>
              <li><a href="#formats" className="text-background/80 hover:text-background transition-colors">Пакети</a></li>
              <li><a href="#process" className="text-background/80 hover:text-background transition-colors">Процес</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Ресурси</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#testimonials" className="text-background/80 hover:text-background transition-colors">Відгуки</a></li>
              <li><a href="#books" className="text-background/80 hover:text-background transition-colors">Книги</a></li>
              <li><a href="#faq" className="text-background/80 hover:text-background transition-colors">FAQ</a></li>
              <li><a href="#blog" className="text-background/80 hover:text-background transition-colors">Блог</a></li>
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
