<template>
  <section id="pricing" class="section" style="background: var(--bg-alt);">
    <div class="container">
      <div class="center">
        <p class="label">Тарифы</p>
        <h2 class="title">Три способа взять пакет</h2>
        <p class="sub" style="margin: 0 auto 48px; text-align: center;">Разово с исходниками, с поддержкой или на нашей инфре. Поэтапная оплата — да.</p>
      </div>
      <div class="grid">
        <div v-for="t in tiers" :key="t.name" :class="['card', 'tier', { hl: t.hl }]">
          <span v-if="t.badge" class="badge">{{ t.badge }}</span>
          <h3 class="tier__name">{{ t.name }}</h3>
          <p class="tier__desc">{{ t.desc }}</p>
          <div class="tier__price">
            <span class="tier__amount">{{ t.price }}</span>
            <span class="tier__per">{{ t.per }}</span>
          </div>
          <div class="tier__line"></div>
          <ul class="tier__list"><li v-for="f in t.features" :key="f">{{ f }}</li></ul>
          <a href="#contact" :class="['btn', t.hl ? 'btn-w' : 'btn-o']" style="width:100%;justify-content:center;margin-top:auto;">{{ t.cta }}</a>
        </div>
      </div>
      <div class="note">
        <strong>Важно про developer-аккаунты.</strong>
        Публикация в App Store и Google Play — только на <em>ваш</em> Apple Developer и Google Play аккаунт: иначе платежи и пользователи не будут принадлежать вам. Регистрация и верификация — на вашей стороне. Если не хотите возиться — оформим за вас под ключ, <strong>70 000 ₽</strong> (не входит в тарифы).
      </div>
    </div>
  </section>
</template>

<script setup>
const tiers = [
  {
    name: 'Старт',
    desc: 'Разово, исходники ваши',
    price: '300 000 ₽',
    per: 'единоразово',
    features: [
      'Лендинг + iOS + Android',
      'Backend, биллинг, админка',
      'Telegram-бот (3 роли)',
      'Миграция базы под ключ',
      'Деплой на ваши серверы',
      'Исходный код и документация',
      '1 месяц поддержки',
    ],
    hl: false,
    cta: 'Обсудить «Старт»',
  },
  {
    name: 'Бизнес',
    desc: 'Всё + сопровождение',
    price: '300 000 ₽',
    per: 'разово + поддержка по договору',
    features: [
      'Всё из тарифа «Старт»',
      'Ежемесячные обновления',
      'SLA на критичные инциденты',
      'Хотфиксы ревью в сторах',
      'Адаптация под новые витрины',
      'Приоритетная очередь',
    ],
    hl: true,
    badge: 'Популярный',
    cta: 'Обсудить «Бизнес»',
  },
  {
    name: 'Облако',
    desc: 'White-label на нашей инфре',
    price: 'По запросу',
    per: 'помесячная подписка',
    features: [
      'Без капитальных вложений',
      'Хостинг и поддержка — наши',
      'Ваш бренд, наш стек',
      'Апдейты автоматические',
      'Масштабирование без сюрпризов',
      'Выход к своему — по запросу',
    ],
    hl: false,
    cta: 'Обсудить «Облако»',
  },
]
</script>

<style scoped>
.center { text-align: center; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.tier { display: flex; flex-direction: column; gap: 16px; position: relative; padding: 32px; }
.tier.hl { border-color: var(--border-hover); }
.badge {
  position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
  padding: 4px 14px; background: var(--text); color: var(--bg);
  font-size: 0.65rem; font-weight: 600; border-radius: 100px;
  letter-spacing: 0.04em; text-transform: uppercase;
}
.tier__name { font-size: 1.15rem; font-weight: 600; }
.tier__desc { font-size: 0.82rem; color: var(--text-sec); }
.tier__price { display: flex; flex-direction: column; gap: 4px; }
.tier__amount { font-size: 1.9rem; font-weight: 700; line-height: 1.1; }
.tier__per { font-size: 0.76rem; color: var(--text-dim); }
.tier__line { height: 1px; background: var(--border); }
.tier__list { list-style: none; display: flex; flex-direction: column; gap: 10px; flex: 1; padding: 0; margin: 0; }
.tier__list li { font-size: 0.84rem; color: var(--text-sec); padding-left: 18px; position: relative; }
.tier__list li::before { content: '✓'; position: absolute; left: 0; color: var(--text-dim); font-size: 0.75rem; }

.note {
  margin-top: 32px; padding: 20px 24px;
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  font-size: 0.85rem; color: var(--text-sec); line-height: 1.7;
}
.note strong { color: var(--text); font-weight: 600; }
.note em { font-style: normal; color: var(--text); font-weight: 500; }

@media (max-width: 900px) { .grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; } }
</style>
