<template>
  <section class="hero section">
    <div class="container">
      <p class="label anim">White Label VPN</p>
      <h1 class="hero__title anim d1">
        Запустите свой VPN-сервис<br>под собственным брендом
      </h1>
      <p class="hero__desc anim d2">
        Полный комплект приложений для всех платформ с монетизацией
        через App Store, Google Play, криптовалюту и рубли. Запуск за 30 дней.
      </p>
      <div class="hero__actions anim d3">
        <a href="https://t.me/maratiksci" target="_blank" class="btn btn-primary">Связаться</a>
        <a href="#platforms" class="btn btn-ghost">Подробнее</a>
      </div>
      <div class="hero__stats anim d4">
        <div class="hero__stat" v-for="s in stats" :key="s.l">
          <span class="hero__stat-val">{{ s.v }}</span>
          <span class="hero__stat-lbl">{{ s.l }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { v: '7+', l: 'Платформ' },
  { v: '4', l: 'Способа оплаты' },
  { v: '30', l: 'Дней на запуск' },
  { v: '100%', l: 'Ваш бренд' },
]
</script>

<style scoped>
.hero { padding-top: 160px; padding-bottom: 40px; min-height: 100vh; display: flex; align-items: center; }
.hero__title {
  font-size: clamp(2.2rem, 4.5vw, 3.6rem);
  font-weight: 600; line-height: 1.12; letter-spacing: -0.03em;
  margin-bottom: 24px; max-width: 700px;
}
.hero__desc {
  font-size: 1.05rem; color: var(--text-secondary); line-height: 1.75;
  max-width: 500px; margin-bottom: 36px;
}
.hero__actions { display: flex; gap: 12px; margin-bottom: 80px; }
.hero__stats {
  display: flex; gap: 48px;
  padding-top: 40px; border-top: 1px solid var(--border);
}
.hero__stat { display: flex; flex-direction: column; }
.hero__stat-val { font-size: 1.8rem; font-weight: 600; }
.hero__stat-lbl { font-size: 0.75rem; color: var(--text-muted); margin-top: 2px; }

@media (max-width: 768px) {
  .hero { padding-top: 120px; min-height: auto; }
  .hero__stats { gap: 24px; flex-wrap: wrap; }
}
</style>
