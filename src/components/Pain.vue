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
  { title: 'Бот — единственная точка отказа', desc: 'Страх. Telegram может забанить бота без предупреждения. Ни выгрузки, ни восстановления — база обнуляется за минуту. Весь ваш бизнес зависит от одного API.' },
  { title: 'Ручные переводы = ручной бизнес', desc: 'Деньги. Карты, крипта, переводы — каждый платёж вручную. Нет автопродлений — нет MRR. Денег ровно столько, сколько успели собрать за месяц.' },
  { title: 'За пределами СНГ вас нет', desc: 'Масштаб. Без сторов — ноль валютной выручки. Весь рынок Европы, Азии, США проходит мимо. Вы упёрлись в потолок рублёвого трафика.' },
  { title: 'Без бренда это не бизнес, а хобби', desc: 'Масштаб. «Бот у знакомого» не рекомендуют, не продают, не нанимают под него команду. Нет бренда — нет органики, нет exit-стратегии.' },
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
