<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section id="timeline" class="section" style="background: var(--bg-alt);">
    <div class="container">
      <p class="label">{{ t.timeline.label }}</p>
      <h2 class="title">{{ t.timeline.title }}</h2>
      <p class="sub" style="margin-bottom: 48px;">{{ t.timeline.sub }}</p>
      <div class="tl">
        <div v-for="(m, i) in t.timeline.milestones" :key="m.week" class="tl__row anim" :class="'d'+(i+1)">
          <div class="tl__week">{{ m.week }}</div>
          <div class="tl__body">
            <h3 class="tl__title">{{ m.title }}</h3>
            <p class="tl__desc">{{ m.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tl { border-left: 1px solid var(--border); padding-left: 32px; margin-left: 8px; }
.tl__row { padding: 20px 0; position: relative; }
.tl__row::before {
  content: ''; position: absolute; left: -38px; top: 26px;
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--text-dim); border: 2px solid var(--bg-alt);
}
.tl__week { font-family: var(--mono); font-size: 0.72rem; color: var(--text-dim); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px; }
.tl__title { font-size: 1.05rem; font-weight: 600; margin-bottom: 6px; }
.tl__desc { font-size: 0.88rem; color: var(--text-sec); line-height: 1.65; max-width: 680px; }

@media (max-width: 600px) {
  .tl { padding-left: 24px; }
  .tl__row::before { left: -30px; }
}
</style>
