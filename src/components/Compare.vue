<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section id="compare" class="section">
    <div class="container">
      <p class="label">{{ t.compare.label }}</p>
      <h2 class="title">{{ t.compare.title }}</h2>
      <p class="sub" style="margin-bottom: 48px;">{{ t.compare.sub }}</p>
      <div class="cmp">
        <div class="cmp__header">
          <div></div>
          <div class="cmp__col cmp__col--dim">{{ t.compare.colDiy }}</div>
          <div class="cmp__col cmp__col--us">{{ t.compare.colUs }}</div>
        </div>
        <div v-for="(r, i) in t.compare.rows" :key="r.k" class="cmp__row anim" :class="'d'+(i+1)">
          <div class="cmp__key">{{ r.k }}</div>
          <div class="cmp__val cmp__val--dim" :data-prefix="t.compare.prefixDiy">{{ r.self }}</div>
          <div class="cmp__val cmp__val--us" :data-prefix="t.compare.prefixUs">{{ r.us }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cmp { border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
.cmp__header, .cmp__row { display: grid; grid-template-columns: 1.3fr 1fr 1fr; align-items: center; }
.cmp__header { padding: 18px 24px; border-bottom: 1px solid var(--border); font-family: var(--mono); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-dim); }
.cmp__col--us { color: var(--text); }
.cmp__row { padding: 18px 24px; border-bottom: 1px solid var(--border); }
.cmp__row:last-child { border-bottom: none; }
.cmp__key { font-size: 0.88rem; color: var(--text-sec); }
.cmp__val { font-size: 0.9rem; }
.cmp__val--dim { color: var(--text-dim); }
.cmp__val--us { color: var(--text); font-weight: 500; }

@media (max-width: 700px) {
  .cmp__header { display: none; }
  .cmp__row { grid-template-columns: 1fr; gap: 6px; padding: 16px 20px; }
  .cmp__key { font-weight: 600; color: var(--text); font-size: 0.9rem; margin-bottom: 2px; }
  .cmp__val::before { content: attr(data-prefix) ': '; font-family: var(--mono); font-size: 0.68rem; color: var(--text-dim); letter-spacing: 0.08em; text-transform: uppercase; margin-right: 6px; }
}
</style>
