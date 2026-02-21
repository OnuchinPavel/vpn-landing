<template>
  <section id="pricing" class="section" style="background: var(--bg-secondary);">
    <div class="container">
      <div class="center">
        <p class="label">Ценообразование</p>
        <h2 class="title">Прозрачные условия</h2>
        <p class="subtitle" style="margin: 0 auto 48px; text-align: center;">
          Два пакета — выберите подходящий. Возможна поэтапная оплата.
        </p>
      </div>
      <div class="grid">
        <div v-for="(t, i) in tiers" :key="t.name" :class="['card', 'tier', { hl: t.hl }]">
          <span v-if="t.badge" class="badge">{{ t.badge }}</span>
          <h3 class="tier__name">{{ t.name }}</h3>
          <p class="tier__desc">{{ t.desc }}</p>
          <div class="tier__price">
            <span class="tier__amount">{{ t.price }}</span>
            <span class="tier__period">единоразово</span>
          </div>
          <div class="tier__divider"></div>
          <ul class="tier__list">
            <li v-for="f in t.features" :key="f">{{ f }}</li>
          </ul>
          <a href="https://t.me/maratiksci" target="_blank" :class="['btn', t.hl ? 'btn-primary' : 'btn-ghost']" style="width:100%;justify-content:center;margin-top:auto;">
            Связаться
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const tiers = [
  {
    name: 'Две платформы',
    desc: 'Любые две платформы на выбор',
    price: '$20,000',
    features: ['Любые 2 платформы', 'Все способы оплаты', 'Полная кастомизация бренда', 'Панель управления', 'Исходный код и документация', '6 месяцев поддержки'],
    hl: false,
  },
  {
    name: 'Все платформы',
    desc: 'Полный комплект из 7 платформ',
    price: '$45,000',
    features: ['Все 7 платформ', 'Все способы оплаты', 'Полная кастомизация дизайна', 'Админ-панель + аналитика', 'Исходный код и документация', '12 месяцев поддержки', 'Приоритетное обслуживание'],
    hl: true,
    badge: 'Рекомендуем',
  },
]
</script>

<style scoped>
.center { text-align: center; }
.center .label { text-align: center; }
.grid {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;
  max-width: 720px; margin: 0 auto;
}
.tier { display: flex; flex-direction: column; gap: 16px; position: relative; padding: 36px; }
.tier.hl { border-color: var(--border-hover); }
.badge {
  position: absolute; top: -11px; left: 50%; transform: translateX(-50%);
  padding: 4px 16px; background: var(--text-primary); color: var(--bg-primary);
  font-size: 0.68rem; font-weight: 600; border-radius: 100px;
  letter-spacing: 0.04em; text-transform: uppercase;
}
.tier__name { font-size: 1.2rem; font-weight: 600; }
.tier__desc { font-size: 0.84rem; color: var(--text-secondary); }
.tier__price { display: flex; align-items: baseline; gap: 8px; }
.tier__amount { font-size: 2rem; font-weight: 700; }
.tier__period { font-size: 0.8rem; color: var(--text-muted); }
.tier__divider { height: 1px; background: var(--border); }
.tier__list { list-style: none; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.tier__list li { font-size: 0.86rem; color: var(--text-secondary); padding-left: 20px; position: relative; }
.tier__list li::before { content: '✓'; position: absolute; left: 0; color: var(--text-muted); font-size: 0.78rem; }

@media (max-width: 600px) { .grid { grid-template-columns: 1fr; max-width: 380px; } }
</style>
