<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section id="solution" class="section">
    <div class="container">
      <p class="label" style="color: var(--green);">{{ t.solution.label }}</p>
      <h2 class="title" v-html="t.solution.titleHtml"></h2>
      <p class="sub" style="margin-bottom: 48px;">{{ t.solution.sub }}</p>
      <div class="grid">
        <div v-for="(s, i) in t.solution.items" :key="s.title" class="sol anim" :class="'d'+((i%4)+1)">
          <div class="sol__icon">✓</div>
          <h3 class="sol__title">{{ s.title }}</h3>
          <p class="sol__desc">{{ s.desc }}</p>
          <div class="sol__metric">{{ s.metric }}</div>
        </div>
      </div>
      <a href="#pricing" class="btn btn-w" style="margin-top: 48px;">{{ t.solution.cta }}</a>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.sol {
  background: var(--green-dim); border: 1px solid var(--green-border);
  border-radius: var(--radius-lg); padding: 28px;
  display: flex; flex-direction: column; gap: 10px;
  transition: all 0.25s;
}
.sol:hover { border-color: rgba(34,197,94,0.3); }
.sol__icon {
  width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;
  background: rgba(34,197,94,0.12); border-radius: 8px;
  color: var(--green); font-size: 0.85rem; font-weight: 700;
}
.sol__title { font-size: 1rem; font-weight: 600; }
.sol__desc { font-size: 0.84rem; color: var(--text-sec); line-height: 1.6; flex: 1; }
.sol__metric {
  align-self: flex-start;
  margin-top: 6px;
  font-family: var(--mono); font-size: 0.7rem;
  color: var(--green); letter-spacing: 0.04em;
  padding: 4px 10px; border: 1px solid var(--green-border); border-radius: 100px;
  background: rgba(34,197,94,0.06);
}

@media (max-width: 600px) {
  .grid { grid-template-columns: 1fr; }
  .sol { padding: 22px; }
  .sol__desc { font-size: 0.82rem; }
}
</style>
