<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section id="growth" class="section" style="background: var(--bg-alt);">
    <div class="container">
      <p class="label">{{ t.growth.label }}</p>
      <h2 class="title" v-html="t.growth.titleHtml"></h2>
      <p class="sub" style="margin-bottom: 48px;">{{ t.growth.sub }}</p>
      <div class="grid">
        <div v-for="(m, i) in t.growth.metrics" :key="m.name" class="metric anim" :class="'d'+(i+1)">
          <h3 class="metric__name">{{ m.name }}</h3>
          <div class="metric__flow">
            <div class="metric__side metric__side--before">
              <span class="metric__lbl">{{ t.growth.beforeLabel }}</span>
              <span class="metric__val">{{ m.before }}</span>
            </div>
            <span class="metric__arrow">→</span>
            <div class="metric__side metric__side--after">
              <span class="metric__lbl">{{ t.growth.afterLabel }}</span>
              <span class="metric__val">{{ m.after }}</span>
            </div>
          </div>
          <p class="metric__note">{{ m.note }}</p>
        </div>
      </div>
      <div class="proof">
        <span class="proof__tag">{{ t.growth.proofTag }}</span>
        <p class="proof__text" v-html="t.growth.proofHtml"></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-bottom: 32px; }
.metric {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 28px;
  display: flex; flex-direction: column; gap: 14px;
  transition: all 0.25s;
}
.metric:hover { border-color: var(--border-hover); }
.metric__name { font-family: var(--mono); font-size: 0.78rem; color: var(--text); letter-spacing: 0.06em; text-transform: uppercase; }
.metric__flow { display: flex; align-items: center; gap: 14px; }
.metric__side { display: flex; flex-direction: column; gap: 4px; flex: 1; }
.metric__lbl { font-family: var(--mono); font-size: 0.62rem; color: var(--text-dim); letter-spacing: 0.08em; text-transform: uppercase; }
.metric__val { font-size: 0.92rem; font-weight: 500; }
.metric__side--before .metric__val { color: var(--text-dim); }
.metric__side--after .metric__val { color: var(--text); }
.metric__arrow { color: var(--text-dim); font-size: 1.2rem; }
.metric__note { font-size: 0.82rem; color: var(--text-sec); line-height: 1.6; }

.proof {
  padding: 22px 26px; background: var(--bg-card);
  border: 1px solid var(--border-hover); border-radius: var(--radius-lg);
  display: flex; gap: 16px; align-items: flex-start;
}
.proof__tag {
  font-family: var(--mono); font-size: 0.65rem; color: var(--bg);
  background: var(--text); padding: 4px 10px; border-radius: 100px;
  letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; flex-shrink: 0;
}
.proof__text { font-size: 0.92rem; color: var(--text-sec); line-height: 1.7; margin: 0; }
.proof__text :deep(strong) { color: var(--text); font-weight: 600; }

@media (max-width: 600px) {
  .grid { grid-template-columns: 1fr; }
  .proof { flex-direction: column; gap: 10px; padding: 18px 20px; }
  .metric { padding: 22px; }
  .metric__flow { gap: 10px; }
  .metric__val { font-size: 0.88rem; }
  .metric__note { font-size: 0.8rem; }
}
</style>
