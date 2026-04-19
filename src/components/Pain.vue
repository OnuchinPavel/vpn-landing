<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section id="problem" class="section" style="background: var(--bg-alt);">
    <div class="container">
      <p class="label" style="color: var(--red);">{{ t.pain.label }}</p>
      <h2 class="title" v-html="t.pain.titleHtml"></h2>
      <p class="sub" style="margin-bottom: 48px;">{{ t.pain.sub }}</p>
      <div class="grid">
        <div v-for="(p, i) in t.pain.items" :key="p.title" class="pain anim" :class="'d'+(i+1)">
          <div class="pain__icon">✕</div>
          <h3 class="pain__title">{{ p.title }}</h3>
          <p class="pain__desc">{{ p.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

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
