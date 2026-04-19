<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section class="hero section">
    <div class="container">
      <p class="label anim d1">{{ t.hero.label }}</p>
      <h1 class="hero__title anim d1" v-html="t.hero.titleHtml"></h1>
      <p class="hero__proof anim d2" v-html="t.hero.proofHtml"></p>
      <p class="hero__desc anim d2">{{ t.hero.desc }}</p>
      <ul class="hero__tldr anim d3">
        <li v-for="(item, i) in t.hero.tldr" :key="i" v-html="item"></li>
      </ul>
      <div class="hero__meta anim d4">
        <div v-for="m in t.hero.metaItems" :key="m.label" class="hero__meta-item">
          <strong>{{ m.label }}</strong> {{ m.suffix }}
        </div>
      </div>
      <div class="hero__actions anim d5">
        <a href="#pricing" class="btn btn-w">{{ t.hero.ctaPricing }}</a>
        <a href="#growth" class="btn btn-o">{{ t.hero.ctaHow }}</a>
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
.hero__proof {
  display: inline-block;
  font-size: 0.95rem; color: var(--text); line-height: 1.6;
  padding: 12px 18px;
  background: var(--green-dim); border: 1px solid var(--green-border);
  border-radius: var(--radius); margin-bottom: 20px;
  max-width: 620px;
}
.hero__proof :deep(strong) { color: var(--text); font-weight: 600; }
.hero__desc {
  font-size: 1.02rem; color: var(--text-sec); line-height: 1.75;
  max-width: 560px; margin-bottom: 28px;
}
.hero__tldr { list-style: none; padding: 0; margin: 0 0 32px; display: flex; flex-direction: column; gap: 8px; max-width: 620px; }
.hero__tldr li { position: relative; padding-left: 18px; font-size: 0.9rem; color: var(--text-sec); line-height: 1.6; }
.hero__tldr li::before { content: '·'; position: absolute; left: 4px; color: var(--text-dim); font-weight: 700; }
.hero__tldr li :deep(strong) { color: var(--text); font-weight: 600; }
.hero__meta { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px; }
.hero__meta-item {
  font-size: 0.78rem; color: var(--text-sec);
  padding: 8px 14px; border: 1px solid var(--border); border-radius: 100px;
}
.hero__meta-item strong { color: var(--text); font-weight: 600; margin-right: 4px; }
.hero__actions { display: flex; gap: 10px; flex-wrap: wrap; }
@media (max-width: 600px) { .hero { padding-top: 120px; } }
</style>
