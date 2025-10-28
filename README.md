# Вікторія Берещак - Персональний сайт

Персональний сайт Вікторії Берещак - стратегічної комунікаторки та авторки книг.

## Технології

- [Next.js](https://nextjs.org/) - React фреймворк
- [Tailwind CSS](https://tailwindcss.com/) - CSS фреймворк
- [Lucide React](https://lucide.dev/) - Іконки
- [Framer Motion](https://www.framer.com/motion/) - Анімації

## Локальний запуск

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Відкрийте [http://localhost:3000](http://localhost:3000) у браузері.

## Деплой на GitHub

1. Створіть новий репозиторій на GitHub
2. Відкрийте термінал у папці проєкту
3. Виконайте команди:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Деплой на Netlify

1. Перейдіть на [Netlify](https://www.netlify.com/) та зареєструйтеся
2. Натисніть "Add new site" → "Import an existing project"
3. Підключіть свій GitHub репозиторій
4. Налаштування:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"
5. Netlify автоматично розгорне ваш сайт!

## Структура проєкту

```
victoria/
├── app/
│   ├── page.tsx          # Головна сторінка
│   ├── layout.tsx        # Основний layout
│   ├── globals.css       # Глобальні стилі
│   └── blog/[slug]/      # Блог
├── public/
│   └── photos/           # Зображення
├── components/            # React компоненти
└── tailwind.config.ts    # Tailwind налаштування
```

## Автор

Вікторія Берещак - Архітекторка довіри
