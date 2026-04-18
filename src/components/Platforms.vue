<template>
  <section id="platforms" class="section">
    <div class="container">
      <p class="label">Приложения и витрины</p>
      <h2 class="title">2 приложения, 5 магазинов</h2>
      <p class="sub" style="margin-bottom: 48px;">Нативная разработка — только iOS и Android. Всё остальное — каналы дистрибуции одного Android-билда.</p>
      <div class="plat">
        <div class="plat__block anim d1">
          <div class="plat__head">
            <span class="plat__tag">iOS</span>
            <span class="plat__stack">Swift · StoreKit 2 · WireGuard</span>
          </div>
          <div class="plat__stores">
            <div class="store">App Store</div>
          </div>
        </div>
        <div class="plat__block anim d2">
          <div class="plat__head">
            <span class="plat__tag">Android</span>
            <span class="plat__stack">Kotlin · Play Billing · WireGuard · Xray</span>
          </div>
          <div class="plat__stores">
            <div class="store">Google Play</div>
            <div class="store">RuStore</div>
            <div class="store">Huawei AppGallery</div>
            <div class="store">Xiaomi GetApps</div>
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
</style>
