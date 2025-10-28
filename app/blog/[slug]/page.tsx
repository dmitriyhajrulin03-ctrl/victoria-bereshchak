'use client';

import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

const blogPosts = {
  'yak-reaguvaty-na-kheit': {
    title: '5 причин, чому комунікація держави сиплеться — і як це змінити',
    altTitle: 'Чому комунікація влади не працює — і як це загрожує державі',
    altTitle2: '5 стратегічних помилок в комунікації держави із суспільством',
    author: 'Вікторія Берещак',
    date: '2025-08-15',
    image: '/photos/blog-1.jpg',
    content: `
У демократичних системах складні законопроєкти — це привід для публічного пояснення. В Україні ж — тригер недовіри. Наприкінці липня 2025 року парламент ухвалив зміни в антикорупційній архітектурі без передбачуваної рамки обговорення.

Зовні це виглядало як чергова «недокомунікація». Насправді ж це глибший провал у стратегічних комунікаціях: не сформульована логіка, не прораховане сприйняття, не визначене поле впливу. Це симптом стратегічної афазії, коли інституції втрачають здатність говорити у складні моменти. Є голос, але немає сенсу та рамки, тож наслідок очевидний — простір для дезінформації, поляризації та дефолту довіри.

## Комунікація без «рамки реальності» завжди програє рамці підозри

У складних змінах потрібна не лише аргументація, а й рамка інтерпретації — пояснювальна логіка, що робить їх послідовними, виправданими та зберігає довіру. Якщо її не сформуєш ти, її сформують інші.

Це не реакція «після факту», а завчасно вибудувана стратегія і послідовна тактика дій для її втілення. Її не можна зібрати за ніч, коли закон уже на порядку денному. Вона має вибудовуватись завчасно: через позицію, яку послідовно озвучують уповноважені особи, через публічну логіку дій, через пояснення причин, ризиків, наслідків. І, безперечно, через публічну взаємодію з адвокатами спротиву змін. Бо по-іншому усі зміни видаються автократичними, а аж ніяк не боротьбою за збереження суб'єктності. Це щоденна комунікаційна робота, а не постфактум-кампанія.

У випадку з НАБУ–САП було навпаки: зміни після гучних обшуків — без озвученої проблеми, без спікера, без публічної мети. Вакуум заповнив фрейм: «Розправа. Покарання. Демонтаж незалежності» — і саме він, а не офіційний меседж, визначив реальність.

## Відсутність точки входу в зміну провокує відторгнення

«Точка входу» — це момент, коли аудиторія розуміє, чому зміна стосується саме її. Без цього людина не бачить себе у зміні, не приймає навіть спроб її пояснити.

Кожне складне рішення вимагає не лише аргументів, а й контексту з точки зору аудиторії: її стану, досвіду, історії.

Закон щодо НАБУ–САП виглядав, ніби існує у вакуумі. Як «порятунок» поза історією. Але для значної частини суспільства це була не перша, а остання крапля — у боротьбі, що свідомо триває вже понад десять років. У боротьбі, де символи стали важливішими за функції, бо єдине, що залишилось — довіра до символів незалежності. Цей пласт — історичний, емоційний, репутаційний — неможливо оминути, якщо ти хочеш, щоб тебе почули. Весь час з початку повномасштабного вторгнення в суспільстві діяло неписане правило: не посягати на здобутки Революції Гідності.

Усе, що ігнорує цей пласт не може бути сприйнятим як справедливе. А держава, яка не враховує цієї логіки, втрачає довіру не лише до дій, а й до самого себе як інституції.

## Немає суб'єкта — немає довіри

У кризі працює не безособова держава, а людина, яка виходить у публічне поле, пояснює логіку, бере відповідальність і витримує критику. Суб'єктність — це валюта довіри. Без неї рамку перехоплюють інші.

У випадку з НАБУ–САП цього не сталося: президент підписав закон майже без пояснень, генпрокурор говорив метафорами про «втому» і "сім'ю", депутати — мовчали або відповідали агресивно, підтверджуючи фрейм «нас не цікавить ваша думка».

Це класичний симптом розмитої суб'єктності. І, як наслідок, — комунікаційної деградації. Бо коли ніхто не "володіє" змінами — зникає і довіра до самих змін.

У стратегічних комунікаціях немає довіри до безіменного меседжу. Меседж працює лише тоді, коли за ним стоїть людина. З голосом, з емоцією, з аргументами. Суб'єкт — завжди фільтр значень. Це той, хто підтверджує: це не маніпуляція, а моя публічна відповідальність.

Поки система обирає безпеку мовчання замість сили проговорення — ми не рухаємось уперед. Бо мовчання не будує легітимність. Воно її підриває.

## Меседж не витримує перевірки реальністю

У кризі важливо не лише, що ти кажеш, а й як сказане резонує з реальністю. Кожен меседж проходить три фільтри: раціональний, моральний і символічний. Провал на будь-якому з них відкриває двері підриву довіри.

**Раціональний:** чи це логічно? У випадку з НАБУ–САП громадськість не побачила причинності: навіщо саме зараз і яку проблему це вирішує. Все виглядало як реакція на гучну справу, а не як продумана реформа.

**Моральний:** чи це справедливо? Антикорупційна інфраструктура — хоч і не бездоганна — залишається символом здобутків Революції Гідності та виконання євроінтеграційних зобов'язань. Спроба змін без чіткої публічної логіки сприймається як посягання на ключову опору довіри.

**Символічний:** чи це відповідає культурному коду? У країні, яка тримається на довірі партнерів, атакувати інституції, що цю довіру формують, — символічно самовразливо. Порушено негласне правило «не чіпати здобутки Майдану» — причому без пояснень і без спроби змінити контекст.

Коли меседж не проходить ці три фільтри, відбувається репутаційний зсув. У кризові моменти люди не читають повідомлення буквально, зате зчитують наміри. Якщо в меседжі є фальш, її не сховає жодна форма чи дизайн.

## Непрорахована зворотна хвиля

Кожне публічне рішення запускає ланцюгову реакцію. У стратегічних комунікаціях не існує «безпечних зон»: навіть технічна дія може стати репутаційним вибухом, якщо не врахувати вторинні й третинні ефекти, особдливо коли йдеться про символічний капітал держави.

У випадку з НАБУ–САП помилка була класична — мислення «всередину»: фокус на процедурі, а не на полі. Закон вийшов без прорахунку реакцій, симуляції інформаційного середовища та роботи з ризиковими групами. Результат передбачуваний:

– громадянське суспільство мобілізувалося через несправедливий процес і відчуття зради після Майдану;
– міжнародні партнери побачили сигнал про порушення запобіжників;
– внутрішня аудиторія отримала когнітивний розрив між словами і реальністю.

Це не «недокомунікація», а відсутність сценарного мислення — чутливості до контексту, емоцій і репутаційних активів. У полі постправди перемагає не той, хто має логіку, а той, хто прораховує наслідки кожного сигналу.

## Що далі?

Цей кейс — не просто провал однієї комунікації, а симптом глибшої проблеми: держава досі не сприймає комунікацію як інструмент дії та частину ухвалення рішень, а не їх «сервіс».

Коли зміни зачіпають незалежність, довіру та суб'єктність, реакція — це не «ризик», а частина політичної реальності. Якщо її не прорахувати, конструкція руйнується.

Стратегічна комунікація має будувати рамку легітимності: пояснювати дію у координатах часу, культури й довіри. Якщо цього немає в архітектурі державного управління, наступна криза стане вже кризою впливу.
    `
  }
};

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    params.then(resolvedParams => {
      setSlug(resolvedParams.slug);
      setIsLoading(false);
    });
  }, [params]);

  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground pt-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-foreground/70">Завантаження...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground pt-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Статтю не знайдено</h1>
          <p className="text-foreground/70">На жаль, ця статтю не існує або видалена.</p>
        </div>
      </div>
    );
  }

  // Extract lead paragraph
  const contentParagraphs = post.content.split('\n\n').filter(p => p.trim());
  const lead = contentParagraphs[0];
  const restContent = contentParagraphs.slice(1);

  return (
    <>
      <Header />
    <article className="min-h-screen bg-background text-foreground pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-foreground/70">
            <span>{post.author}</span>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-green-500" />
              <span>{new Date(post.date).toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>

        {/* Lead Paragraph - Highlighted */}
        <div className="text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground font-medium mb-8 sm:mb-12">
          {lead}
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {restContent.map((paragraph, index) => {
            if (paragraph.startsWith('##')) {
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={index} className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-foreground">
                    {paragraph.replace(/^### /, '')}
                  </h3>
                );
              }
              return (
                <h2 key={index} className="text-3xl sm:text-4xl font-bold mt-12 mb-6 text-foreground">
                  {paragraph.replace(/^## /, '')}
                </h2>
              );
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n');
              return (
                <ul key={index} className="space-y-4 text-foreground/85 mb-6">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <span className="flex-1">{item.replace(/^- /, '')}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.startsWith('**') || paragraph.startsWith('1. ')) {
              const items = paragraph.split('\n').filter(item => item.trim());
              let globalCounter = 1;
              return (
                <div key={index} className="space-y-4 text-foreground/85 mb-6">
                  {items.map((item, i) => {
                    const num = globalCounter++;
                    // Remove bold markers, numbers, and extra spaces
                    const cleanItem = item
                      .replace(/^\*\*/, '')
                      .replace(/\*\*/g, '')
                      .replace(/^\d+\.?\s*/, '')
                      .trim();
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground flex-shrink-0 mt-0.5">
                          {num}
                        </div>
                        <span className="flex-1">{cleanItem}</span>
                      </div>
                    );
                  })}
                </div>
              );
            }
            // Special quote block with image
            if (paragraph.includes('Закон щодо НАБУ–САП виглядав') || paragraph.includes('Закон щодо НАБУ-САП виглядав')) {
              return (
                <div key={index} className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl p-6 sm:p-8 md:p-10 my-12">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    {/* Image */}
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-4 border-primary/40 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src="/photos/opinion.jpg"
                        alt="Вікторія Берещак"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    {/* Quote */}
                    <div className="flex-1">
                      <blockquote className="text-lg sm:text-xl leading-relaxed text-foreground italic">
                        {paragraph}
                      </blockquote>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <p key={index} className="text-base sm:text-lg text-foreground/85 leading-relaxed mb-6">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </article>

      <Footer />
    </>
  );
}

