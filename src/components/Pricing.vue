<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section id="pricing" class="section" style="background: var(--bg-alt);">
    <div class="container">
      <div class="center">
        <p class="label">{{ t.pricing.label }}</p>
        <h2 class="title">{{ t.pricing.title }}</h2>
        <p class="sub" style="margin: 0 auto 48px; text-align: center;">{{ t.pricing.sub }}</p>
      </div>
      <div class="grid">
        <div v-for="tier in t.pricing.tiers" :key="tier.name" :class="['card', 'tier', { hl: tier.hl }]">
          <span v-if="tier.hl" class="badge">{{ t.pricing.badge }}</span>
          <h3 class="tier__name">{{ tier.name }}</h3>
          <p class="tier__desc">{{ tier.desc }}</p>
          <div class="tier__price">
            <span class="tier__amount">{{ tier.price }}</span>
            <span class="tier__per">{{ tier.per }}</span>
          </div>
          <div class="tier__line"></div>
          <ul class="tier__list"><li v-for="f in tier.features" :key="f">{{ f }}</li></ul>
          <a href="#contact" :class="['btn', tier.hl ? 'btn-w' : 'btn-o']" style="width:100%;justify-content:center;margin-top:auto;">{{ tier.cta }}</a>
        </div>
      </div>
      <div class="note" v-html="t.pricing.noteHtml"></div>
    </div>
  </section>
</template>

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
.note :deep(strong) { color: var(--text); font-weight: 600; }
.note :deep(em) { font-style: normal; color: var(--text); font-weight: 500; }

@media (max-width: 900px) { .grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; } }
</style>
