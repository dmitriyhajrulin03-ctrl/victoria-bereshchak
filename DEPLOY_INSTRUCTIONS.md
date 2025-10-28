# Інструкції з публікації на GitHub та Netlify

## ✅ Що вже зроблено

1. ✅ Створено `.gitignore` файл
2. ✅ Оновлено `README.md` з інструкціями
3. ✅ Налаштовано `package.json` для білду
4. ✅ Створено `netlify.toml` для Netlify
5. ✅ Ініціалізовано Git репозиторій
6. ✅ Зроблено перший commit

## 📦 Крок 1: Публікація на GitHub

### 1.1. Створіть репозиторій на GitHub

1. Перейдіть на https://github.com/new
2. Введіть назву репозиторію (наприклад: `victoria-bereshchak`)
3. Оберіть **Public** (або Private, якщо хочете)
4. **НЕ** ставлять галочки "Initialize this repository with README"
5. Натисніть "Create repository"

### 1.2. Завантажте код на GitHub

Скопіюйте URL вашого репозиторію (наприклад: `https://github.com/YOUR_USERNAME/victoria-bereshchak.git`)

Потім виконайте в терміналі:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

**Замініть `YOUR_USERNAME` та `REPO_NAME` на ваші реальні дані!**

## 🌐 Крок 2: Деплой на Netlify

### 2.1. Зареєструйтесь на Netlify

1. Перейдіть на https://www.netlify.com/
2. Натисніть "Sign up"
3. Виберить "GitHub" та авторизуйтесь

### 2.2. Підключіть GitHub репозиторій

1. Натисніть **"Add new site"** → **"Import an existing project"**
2. Виберить **"Deploy with GitHub"**
3. Дозвольте Netlify доступ до репозиторіїв
4. Знайдіть ваш репозиторій `victoria-bereshchak` та натисніть **"Import"**

### 2.3. Налаштування (важливо!)

Netlify автоматично побачить `netlify.toml` і налаштує:
- **Build command:** `npm run build`
- **Publish directory:** (залиште порожнім - Next.js плагін обробляє автоматично)
- **Node version:** 20

**Налаштування не потребуються** - все налаштовано автоматично через `netlify.toml`!

### 2.4. Деплой!

1. Натисніть **"Deploy site"**
2. Netlify автоматично розгорне ваш сайт!

### 2.5. Отримайте URL

Після успішного деплою ви отримаєте URL типу:
```
https://victoria-bereshchak.netlify.app
```

## 🔗 Налаштування домену (опціонально)

Якщо хочете свій домен:

1. На Netlify → **Site settings** → **Domain management**
2. Натисніть **"Add custom domain"**
3. Введіть ваш домен
4. Налаштуйте DNS записи за інструкціями Netlify

## 📝 Корисні команди

### Локальна перевірка білду

```bash
npm run build
```

Якщо білд успішний - все готово до деплою!

### Подивитися білд локально

```bash
npm run build
npm run start
```

Відкрийте http://localhost:3000

## 🎯 Наступні кроки

1. ✅ Завантажте код на GitHub
2. ✅ Підключіть Netlify
3. ✅ Перевірте, що сайт працює
4. ✅ Додайте кастомний домен (за бажанням)

## ⚠️ Що робити, якщо щось не працює

### Білд не працює на Netlify

1. Перевірте логи Netlify: Site settings → Build logs
2. Перевірте, що всі залежності в `package.json`
3. Перевірте `netlify.toml` файл

### Як додати зміни після публікації

```bash
git add .
git commit -m "Ваш коміт"
git push
```

Netlify автоматично перебілдить сайт!

## 🎉 Вітаю! Ваш сайт онлайн!


