<template>
  <section id="platforms" class="section" style="background: var(--bg-secondary);">
    <div class="container">
      <p class="label">Платформы</p>
      <h2 class="title">Все платформы. Единый бренд.</h2>
      <p class="subtitle" style="margin-bottom: 48px;">
        Нативные приложения для каждой платформы с соблюдением
        гайдлайнов Apple и Google.
      </p>
      <div class="grid">
        <div v-for="(p, i) in items" :key="p.name" class="card anim" :class="'d'+(i%4+1)">
          <span class="num">{{ String(i+1).padStart(2,'0') }}</span>
          <h3 class="name">{{ p.name }}</h3>
          <p class="desc">{{ p.desc }}</p>
          <div class="tags"><span v-for="t in p.tags" :key="t">{{ t }}</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  { name: 'iOS', desc: 'iPhone и iPad. Swift, Network Extension, In-App Purchase.', tags: ['Swift', 'StoreKit 2'] },
  { name: 'macOS', desc: 'Меню в строке состояния, автоподключение, Kill Switch.', tags: ['SwiftUI', 'App Store'] },
  { name: 'Apple TV', desc: 'Интерфейс для пультового управления и Siri.', tags: ['tvOS', 'Focus Engine'] },
  { name: 'Android', desc: 'Kotlin, Material Design 3, Google Play Billing.', tags: ['Kotlin', 'Compose'] },
  { name: 'Android TV', desc: 'Leanback UI, D-pad навигация, голосовой поиск.', tags: ['Leanback', 'D-pad'] },
  { name: 'Windows', desc: 'System Tray, автозапуск, раздельное туннелирование.', tags: ['C#/.NET', 'WinTUN'] },
  { name: 'Linux', desc: 'CLI и GUI для популярных дистрибутивов, systemd.', tags: ['GTK/Qt', 'WireGuard'] },
]
</script>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 12px; }
.num { font-family: var(--mono); font-size: 0.68rem; color: var(--text-muted); }
.name { font-size: 1.1rem; font-weight: 600; margin: 10px 0 6px; }
.desc { font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6; flex: 1; }
.tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; }
.tags span {
  font-family: var(--mono); font-size: 0.65rem; padding: 3px 8px;
  border: 1px solid var(--border); border-radius: 4px; color: var(--text-muted);
}
.card { display: flex; flex-direction: column; }
</style>
