<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section id="faq" class="section" style="background: var(--bg-alt);">
    <div class="container">
      <p class="label">{{ t.faq.label }}</p>
      <h2 class="title">{{ t.faq.title }}</h2>
      <p class="sub" style="margin-bottom: 40px;">{{ t.faq.sub }}</p>
      <div class="faq">
        <details v-for="q in t.faq.items" :key="q.q" class="faq__item">
          <summary class="faq__q">{{ q.q }}</summary>
          <p class="faq__a">{{ q.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq { display: flex; flex-direction: column; gap: 8px; }
.faq__item {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: border-color 0.2s;
}
.faq__item[open] { border-color: var(--border-hover); }
.faq__q {
  list-style: none; cursor: pointer;
  padding: 20px 24px; font-size: 0.95rem; font-weight: 500;
  display: flex; justify-content: space-between; align-items: center; gap: 16px;
}
.faq__q::-webkit-details-marker { display: none; }
.faq__q::after { content: '+'; color: var(--text-dim); font-size: 1.3rem; font-weight: 400; transition: transform 0.2s; line-height: 1; }
.faq__item[open] .faq__q::after { transform: rotate(45deg); }
.faq__a { padding: 0 24px 22px; font-size: 0.88rem; color: var(--text-sec); line-height: 1.7; margin: 0; }
</style>
