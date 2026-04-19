# RevStream — Turnkey VPN Landing

Vue 3 + Vite. Двуязычный лендинг (RU/EN) с оффером turnkey-пакета для операторов VPN-сервисов.

---

## Локальная разработка

```bash
npm install
npm run dev
# http://localhost:5173/vpn-landing/
```

Vite сконфигурирован с `base: '/vpn-landing/'` — URL всегда под этим префиксом.

---

## Сборка

```bash
npm run build
```

Готовые файлы — в `dist/`.

---

## Деплой на GitHub Pages (используется сейчас)

Ветка `gh-pages`, ручной пуш содержимого `dist/`. GitHub Actions **не используется** — у текущего токена нет `workflow` scope.

```bash
npm run build
cd dist
git init -b gh-pages -q
git add -A
git commit -q -m "Deploy"
git push -f https://github.com/OnuchinPavel/vpn-landing.git gh-pages
```

Сборка на стороне GitHub Pages ~30 секунд. После обновления юзерам может понадобиться `⌘+Shift+R`, чтобы обойти кеш.

Живой сайт: **https://onuchinpavel.github.io/vpn-landing/**

---

## Структура

```
vpn-landing/
├── index.html              ← meta, OG, Twitter Card (en)
├── vite.config.js
├── package.json
├── Dockerfile
├── nginx.conf
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── style.css           ← дизайн-токены + global-классы
│   ├── composables/
│   │   └── useI18n.js      ← детект локали, хранение в localStorage
│   ├── locales/
│   │   ├── ru.js           ← все русские строки
│   │   └── en.js           ← все английские строки
│   └── components/
│       ├── Nav.vue         ← меню + переключатель RU/EN
│       ├── Hero.vue
│       ├── Growth.vue      ← рост в цифрах (ARPU, LTV, Global, Insurance)
│       ├── Pain.vue
│       ├── Solution.vue    ← «Что входит» + метрика на каждом пункте
│       ├── Migration.vue
│       ├── Timeline.vue
│       ├── Platforms.vue   ← 2 приложения × 5 витрин
│       ├── Examples.vue    ← кейс BessyVPN (1M MAU / $300k MRR / 5 мес)
│       ├── Pricing.vue     ← 3 тарифа + блок про dev-аккаунты
│       ├── Compare.vue     ← сам vs с нами
│       ├── Objections.vue  ← 5 пар «Страх → На самом деле»
│       ├── FAQ.vue
│       ├── Contact.vue     ← форма + Telegram/email
│       └── Footer.vue
└── dist/                   ← после npm run build
```

---

## Локализация

- Автодетект: `navigator.language` начинается с `ru` → русский, иначе → английский.
- Пользовательский выбор через переключатель **RU / EN** в Nav сохраняется в `localStorage.locale`.
- Все строки живут в `src/locales/{ru,en}.js`. Никаких захардкоженных строк в компонентах.
- `document.title`, `<html lang>` и `<meta name="description">` обновляются при смене локали.

**Чтобы поменять текст:** редактируй только `src/locales/ru.js` и `src/locales/en.js`. Компоненты не трогать.

**Чтобы добавить язык:** создай `src/locales/de.js` (или другой), импортируй в `useI18n.js`, добавь в объект `locales`. Расширь детект в `detectInitial()`.

---

## Кастомизация

| Что изменить | Где |
|---|---|
| Контакты (email, telegram) | `Contact.vue`, `Footer.vue` |
| Все тексты RU | `src/locales/ru.js` |
| Все тексты EN | `src/locales/en.js` |
| Цены | `src/locales/{ru,en}.js` → `pricing.tiers` |
| Цвета/шрифты | `src/style.css` — CSS-переменные в `:root` |
| OG-теги / meta | `index.html` (статические) + `useI18n.js` (динамические) |

---

## Другие варианты деплоя

### VPS + Nginx

```bash
npm run build
scp -r dist/* user@server:/var/www/vpn-landing/
```

Nginx конфиг — в файле `nginx.conf` в корне.

### Docker

```bash
docker build -t vpn-landing .
docker run -d -p 80:80 --name vpn-landing vpn-landing
```

### Vercel / Netlify

Vite определяется автоматически. Build: `npm run build`, Output: `dist`.
