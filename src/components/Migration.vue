<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section id="migration" class="section">
    <div class="container">
      <p class="label">{{ t.migration.label }}</p>
      <h2 class="title">{{ t.migration.title }}</h2>
      <p class="sub" style="margin-bottom: 48px;">{{ t.migration.sub }}</p>
      <div class="grid">
        <div v-for="(s, i) in t.migration.steps" :key="s.title" class="step anim" :class="'d'+(i+1)">
          <span class="step__num">{{ String(i+1).padStart(2,'0') }}</span>
          <h3 class="step__title">{{ s.title }}</h3>
          <p class="step__desc">{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.step {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 28px;
  display: flex; flex-direction: column; gap: 10px;
  transition: all 0.25s;
}
.step:hover { border-color: var(--border-hover); }
.step__num { font-family: var(--mono); font-size: 0.72rem; color: var(--text-dim); letter-spacing: 0.08em; }
.step__title { font-size: 1rem; font-weight: 600; }
.step__desc { font-size: 0.84rem; color: var(--text-sec); line-height: 1.6; }

@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
</style>
