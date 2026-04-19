<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section id="delivery" class="section">
    <div class="container">
      <p class="label">{{ t.delivery.label }}</p>
      <h2 class="title">{{ t.delivery.title }}</h2>
      <p class="sub" style="margin-bottom: 48px;">{{ t.delivery.sub }}</p>

      <div class="block">
        <h3 class="block__title">{{ t.delivery.timelineTitle }}</h3>
        <div class="tl">
          <div v-for="(m, i) in t.timeline.milestones" :key="m.week" class="tl__row anim" :class="'d'+(i+1)">
            <div class="tl__week">{{ m.week }}</div>
            <div class="tl__body">
              <h4 class="tl__title">{{ m.title }}</h4>
              <p class="tl__desc">{{ m.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div id="migration" class="block">
        <h3 class="block__title">{{ t.delivery.migrationTitle }}</h3>
        <div class="grid">
          <div v-for="(s, i) in t.migration.steps" :key="s.title" class="step anim" :class="'d'+(i+1)">
            <span class="step__num">{{ String(i+1).padStart(2,'0') }}</span>
            <h4 class="step__title">{{ s.title }}</h4>
            <p class="step__desc">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.block { margin-bottom: 56px; }
.block:last-child { margin-bottom: 0; }
.block__title {
  font-family: var(--mono); font-size: 0.75rem;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--text-sec); margin-bottom: 28px;
  padding-bottom: 14px; border-bottom: 1px solid var(--border);
}

.tl { border-left: 1px solid var(--border); padding-left: 32px; margin-left: 8px; }
.tl__row { padding: 20px 0; position: relative; }
.tl__row::before {
  content: ''; position: absolute; left: -38px; top: 26px;
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--text-dim); border: 2px solid var(--bg);
}
.tl__week { font-family: var(--mono); font-size: 0.72rem; color: var(--text-dim); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px; }
.tl__title { font-size: 1.05rem; font-weight: 600; margin-bottom: 6px; }
.tl__desc { font-size: 0.88rem; color: var(--text-sec); line-height: 1.65; max-width: 680px; }

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

@media (max-width: 600px) {
  .tl { padding-left: 24px; }
  .tl__row::before { left: -30px; }
  .grid { grid-template-columns: 1fr; }
  .step { padding: 22px; }
  .block { margin-bottom: 40px; }
}
</style>
