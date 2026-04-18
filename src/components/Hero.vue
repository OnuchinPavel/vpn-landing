<template>
  <section class="hero section">
    <div class="container">
      <p class="label anim d1">· Готовый VPN-бизнес под ключ</p>
      <h1 class="hero__title anim d1">
        Ваш VPN в сторах<br>
        за 4–8 недель.<br>
        <span class="hero__dim">От 300 000 ₽.</span>
      </h1>
      <p class="hero__desc anim d2">
        Соберём под ваш бренд два мобильных приложения (iOS + Android),
        бэкенд с биллингом, Telegram-бот — и перевезём вашу базу с текущего
        бота без потерь.
      </p>
      <div class="hero__meta anim d3">
        <div class="hero__meta-item"><strong>2</strong> приложения</div>
        <div class="hero__meta-item"><strong>5</strong> витрин</div>
        <div class="hero__meta-item"><strong>1</strong> бэкенд</div>
        <div class="hero__meta-item"><strong>0</strong> потерь при миграции</div>
      </div>
      <div class="hero__actions anim d4">
        <a href="#pricing" class="btn btn-w">Посмотреть тарифы</a>
        <a href="#solution" class="btn btn-o">Что входит</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { padding-top: 160px; padding-bottom: 40px; min-height: 100vh; display: flex; align-items: center; }
.hero__title {
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800; line-height: 1.1; letter-spacing: -0.03em;
  margin-bottom: 24px; max-width: 750px;
}
.hero__dim { color: var(--text-dim); }
.hero__desc {
  font-size: 1.05rem; color: var(--text-sec); line-height: 1.75;
  max-width: 560px; margin-bottom: 32px;
}
.hero__meta { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 36px; }
.hero__meta-item {
  font-size: 0.78rem; color: var(--text-sec);
  padding: 8px 14px; border: 1px solid var(--border); border-radius: 100px;
}
.hero__meta-item strong { color: var(--text); font-weight: 600; margin-right: 4px; }
.hero__actions { display: flex; gap: 10px; flex-wrap: wrap; }
@media (max-width: 600px) { .hero { padding-top: 120px; } }
</style>
