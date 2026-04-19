<template>
  <section class="hero section">
    <div class="container">
      <p class="label anim d1">· Готовый VPN-бизнес под ключ</p>
      <h1 class="hero__title anim d1">
        Превратим VPN-бот<br>
        в бизнес <span class="hero__accent">×10</span>.
      </h1>
      <p class="hero__proof anim d2">
        Как <strong>BessyVPN</strong>: <strong>1 млн MAU</strong> и <strong>$300k MRR</strong>
        за <strong>5 месяцев</strong> после публикации в сторах.
      </p>
      <p class="hero__desc anim d2">
        Страховка от бана, выход из плато, рекуррентная выручка — одним пакетом под ваш бренд.
        От 300 000 ₽.
      </p>
      <ul class="hero__tldr anim d3">
        <li><strong>Вы</strong> продаёте VPN через бота — вручную, на честном слове Telegram.</li>
        <li><strong>Мы</strong> собираем бренд, приложения, сторы и биллинг — под ключ.</li>
        <li><strong>Ваши юзеры</strong> переезжают без потерь. Выручка растёт в 3–10 раз.</li>
      </ul>
      <div class="hero__meta anim d4">
        <div class="hero__meta-item"><strong>ARPU</strong> ↑</div>
        <div class="hero__meta-item"><strong>LTV</strong> ↑</div>
        <div class="hero__meta-item"><strong>MRR</strong> в $</div>
        <div class="hero__meta-item"><strong>−churn</strong></div>
      </div>
      <div class="hero__actions anim d5">
        <a href="#pricing" class="btn btn-w">Посмотреть тарифы · от 300 000 ₽</a>
        <a href="#growth" class="btn btn-o">Как это работает</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { padding-top: 160px; padding-bottom: 60px; min-height: 100vh; display: flex; align-items: center; }
.hero__title {
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800; line-height: 1.1; letter-spacing: -0.03em;
  margin-bottom: 20px; max-width: 780px;
}
.hero__accent { color: var(--green); }
.hero__proof {
  display: inline-block;
  font-size: 0.95rem; color: var(--text); line-height: 1.6;
  padding: 12px 18px;
  background: var(--green-dim); border: 1px solid var(--green-border);
  border-radius: var(--radius); margin-bottom: 20px;
  max-width: 620px;
}
.hero__proof strong { color: var(--text); font-weight: 600; }
.hero__desc {
  font-size: 1.02rem; color: var(--text-sec); line-height: 1.75;
  max-width: 560px; margin-bottom: 28px;
}
.hero__tldr { list-style: none; padding: 0; margin: 0 0 32px; display: flex; flex-direction: column; gap: 8px; max-width: 620px; }
.hero__tldr li { position: relative; padding-left: 18px; font-size: 0.9rem; color: var(--text-sec); line-height: 1.6; }
.hero__tldr li::before { content: '·'; position: absolute; left: 4px; color: var(--text-dim); font-weight: 700; }
.hero__tldr li strong { color: var(--text); font-weight: 600; }
.hero__meta { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px; }
.hero__meta-item {
  font-size: 0.78rem; color: var(--text-sec);
  padding: 8px 14px; border: 1px solid var(--border); border-radius: 100px;
}
.hero__meta-item strong { color: var(--text); font-weight: 600; margin-right: 4px; }
.hero__actions { display: flex; gap: 10px; flex-wrap: wrap; }
@media (max-width: 600px) { .hero { padding-top: 120px; } }
</style>
