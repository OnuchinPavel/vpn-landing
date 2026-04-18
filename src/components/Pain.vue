<template>
  <section id="problem" class="section" style="background: var(--bg-alt);">
    <div class="container">
      <p class="label" style="color: var(--red);">Проблема</p>
      <h2 class="title">Почему вы упираетесь <span style="color: var(--red);">в потолок</span></h2>
      <p class="sub" style="margin-bottom: 48px;">Продажи через Telegram-бота — быстрый старт и жёсткий плато. Вот что ломается первым.</p>
      <div class="grid">
        <div v-for="(p, i) in pains" :key="p.title" class="pain anim" :class="'d'+(i+1)">
          <div class="pain__icon">✕</div>
          <h3 class="pain__title">{{ p.title }}</h3>
          <p class="pain__desc">{{ p.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const pains = [
  { title: 'Бот могут заблокировать — и базы больше нет', desc: 'Telegram может забанить бота без предупреждения. Никакой выгрузки, никакого восстановления. База, которую вы собирали годами, обнуляется за минуту.' },
  { title: 'Без бренда вы не выходите за плато', desc: 'Юзер не рекомендует «того бота у знакомого». Нет органики, нет сарафана, нет SEO. Вы упёрлись в верхнюю планку платного трафика.' },
  { title: 'Ручные платежи не масштабируются', desc: 'Карты, крипта, переводы — каждая оплата требует внимания. Нет автопродлений — нет рекуррентной выручки. Один заболевший админ = просадка за неделю.' },
  { title: 'Вы не видите, кто, сколько и почему', desc: 'Без ЛК и аналитики нет churn, нет LTV, нет сегментов. Вы растите рекламный бюджет вслепую и узнаёте о проблемах, когда уже поздно.' },
]
</script>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.pain {
  background: var(--red-dim); border: 1px solid var(--red-border);
  border-radius: var(--radius-lg); padding: 28px;
  display: flex; flex-direction: column; gap: 10px;
  transition: all 0.25s;
}
.pain:hover { border-color: rgba(239,68,68,0.3); }
.pain__icon {
  width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;
  background: rgba(239,68,68,0.12); border-radius: 8px;
  color: var(--red); font-size: 0.85rem; font-weight: 700;
}
.pain__title { font-size: 1rem; font-weight: 600; }
.pain__desc { font-size: 0.84rem; color: var(--text-sec); line-height: 1.6; }

@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
</style>
