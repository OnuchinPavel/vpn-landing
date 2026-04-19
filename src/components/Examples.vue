<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section id="examples" class="section" style="background: var(--bg-alt);">
    <div class="container">
      <p class="label">{{ t.examples.label }}</p>
      <h2 class="title">{{ t.examples.title }}</h2>
      <p class="sub" style="margin-bottom: 32px;">{{ t.examples.sub }}</p>
      <div class="stats">
        <div v-for="s in t.examples.stats" :key="s.lbl" class="stat">
          <span class="stat__val">{{ s.val }}</span>
          <span class="stat__lbl">{{ s.lbl }}</span>
        </div>
      </div>
      <div class="grid">
        <a v-for="item in t.examples.items" :key="item.name" :href="item.url" target="_blank" class="card ex">
          <span class="ex__store">{{ item.store }}</span>
          <h3 class="ex__name">{{ item.name }}</h3>
          <p class="ex__desc">{{ item.desc }}</p>
          <span class="ex__link">{{ item.link }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;
  margin-bottom: 32px;
  padding: 22px; background: var(--bg-card);
  border: 1px solid var(--border-hover); border-radius: var(--radius-lg);
}
.stat { display: flex; flex-direction: column; gap: 4px; align-items: flex-start; padding: 0 12px; border-left: 1px solid var(--border); }
.stat:first-child { border-left: none; padding-left: 0; }
.stat__val { font-size: 1.5rem; font-weight: 700; color: var(--text); letter-spacing: -0.02em; line-height: 1.1; }
.stat__lbl { font-family: var(--mono); font-size: 0.7rem; color: var(--text-dim); letter-spacing: 0.08em; text-transform: uppercase; }

.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; max-width: 680px; }
.ex { display: flex; flex-direction: column; gap: 10px; cursor: pointer; text-decoration: none; }
.ex__store { font-family: var(--mono); font-size: 0.68rem; color: var(--text-dim); letter-spacing: 0.08em; text-transform: uppercase; }
.ex__name { font-size: 1.1rem; font-weight: 600; }
.ex__desc { font-size: 0.82rem; color: var(--text-sec); line-height: 1.55; flex: 1; }
.ex__link { font-size: 0.82rem; color: var(--text); font-weight: 500; }

@media (max-width: 700px) {
  .stats { grid-template-columns: repeat(2, 1fr); gap: 16px 20px; padding: 20px; }
  .stat { border-left: none; padding-left: 0; padding: 0; }
}
@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
@media (max-width: 420px) {
  .stat__val { font-size: 1.3rem; }
  .stat__lbl { font-size: 0.64rem; }
}
</style>
