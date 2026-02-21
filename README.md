# RevStream — VPN Solutions Landing

Vue 3 + Vite. Лаконичный лендинг с коммерческим предложением по разработке VPN-сервисов.

---

## Локальная разработка

```bash
npm install
npm run dev
# Открыть http://localhost:5173
```

---

## Сборка

```bash
npm run build
```

Готовые файлы — в папке `dist/`.

---

## Деплой

### 1. VPS / Выделенный сервер

**Загрузить файлы:**

```bash
npm run build
scp -r dist/* user@your-server.com:/var/www/vpn-landing/
```

**Настроить Nginx** — создать `/etc/nginx/sites-available/vpn-landing`:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/vpn-landing;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript image/svg+xml;
}
```

**Активировать и получить SSL:**

```bash
sudo ln -s /etc/nginx/sites-available/vpn-landing /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# SSL
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com
```

---

### 2. Docker

**Один контейнер:**

```bash
docker build -t vpn-landing .
docker run -d -p 80:80 --name vpn-landing vpn-landing
```

**Docker Compose** — создать `docker-compose.yml`:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

```bash
docker compose up -d
```

**С SSL через Traefik или Caddy** — добавить reverse proxy перед контейнером.

---

### 3. Vercel (бесплатно)

```bash
npm i -g vercel
vercel --prod
```

Vercel автоматически определит Vite-проект. Домен можно привязать в панели Vercel.

---

### 4. Netlify (бесплатно)

**Через сайт:**
1. Загрузить код на GitHub
2. netlify.com → New Site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

**Через CLI:**

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

---

### 5. GitHub Pages

Добавить `base` в `vite.config.js`:

```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [vue()],
})
```

Создать `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Включить GitHub Pages → Source: `gh-pages` branch.

---

## Кастомизация

| Что изменить | Где |
|---|---|
| Контакты (email, telegram) | `src/components/Contact.vue`, `src/components/Footer.vue` |
| Цены | `src/components/Pricing.vue` — массив `tiers` |
| Платформы | `src/components/Platforms.vue` — массив `items` |
| Цвета/шрифты | `src/style.css` — переменные в `:root` |
| Название | Найти/заменить `RevStream` во всех файлах |

---

## Структура

```
vpn-landing/
├── index.html
├── vite.config.js
├── package.json
├── Dockerfile
├── nginx.conf
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── style.css
│   └── components/
│       ├── Nav.vue
│       ├── Hero.vue
│       ├── Platforms.vue
│       ├── Payments.vue
│       ├── Pricing.vue
│       ├── Process.vue
│       ├── Contact.vue
│       └── Footer.vue
└── dist/            ← после npm run build
```
