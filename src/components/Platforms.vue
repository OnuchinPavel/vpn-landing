<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section id="platforms" class="section">
    <div class="container">
      <p class="label">{{ t.platforms.label }}</p>
      <h2 class="title">{{ t.platforms.title }}</h2>
      <p class="sub" style="margin-bottom: 48px;">{{ t.platforms.sub }}</p>
      <div class="plat">
        <div class="plat__block anim d1">
          <div class="plat__head">
            <span class="plat__tag">{{ t.platforms.ios.tag }}</span>
            <span class="plat__stack">{{ t.platforms.ios.stack }}</span>
          </div>
          <div class="plat__stores">
            <div v-for="s in t.platforms.ios.stores" :key="s" class="store">{{ s }}</div>
          </div>
        </div>
        <div class="plat__block anim d2">
          <div class="plat__head">
            <span class="plat__tag">{{ t.platforms.android.tag }}</span>
            <span class="plat__stack">{{ t.platforms.android.stack }}</span>
          </div>
          <div class="plat__stores">
            <div v-for="s in t.platforms.android.stores" :key="s" class="store">{{ s }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.plat { display: flex; flex-direction: column; gap: 16px; }
.plat__block {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 28px;
}
.plat__head { display: flex; align-items: baseline; gap: 14px; flex-wrap: wrap; margin-bottom: 20px; }
.plat__tag { font-size: 1.3rem; font-weight: 700; letter-spacing: -0.02em; }
.plat__stack { font-family: var(--mono); font-size: 0.74rem; color: var(--text-dim); }
.plat__stores { display: flex; flex-wrap: wrap; gap: 8px; }
.store {
  padding: 10px 16px; font-size: 0.82rem; color: var(--text-sec);
  border: 1px solid var(--border); border-radius: var(--radius);
}

@media (max-width: 500px) {
  .plat__block { padding: 22px; }
  .plat__tag { font-size: 1.15rem; }
  .plat__stack { font-size: 0.68rem; }
  .store { padding: 8px 12px; font-size: 0.78rem; }
}
</style>
