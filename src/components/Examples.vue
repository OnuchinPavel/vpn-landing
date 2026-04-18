<template>
  <section id="examples" class="section" style="background: var(--bg-alt);">
    <div class="container">
      <p class="label">Пример</p>
      <h2 class="title">Так выглядит результат</h2>
      <p class="sub" style="margin-bottom: 40px;">BessyVPN — одна из сборок, которые мы уже опубликовали.</p>
      <div class="grid">
        <a href="https://apps.apple.com/ru/app/bessyvpn-%D0%B1%D1%8B%D1%81%D1%82%D1%80%D1%8B%D0%B9-%D0%B2%D0%BF%D0%BD/id6755730946" target="_blank" class="card ex">
          <span class="ex__store">App Store</span>
          <h3 class="ex__name">BessyVPN</h3>
          <p class="ex__desc">VPN-клиент для iOS. Опубликован и доступен для скачивания.</p>
          <span class="ex__link">Открыть →</span>
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.revstream.bessy" target="_blank" class="card ex">
          <span class="ex__store">Google Play</span>
          <h3 class="ex__name">BessyVPN</h3>
          <p class="ex__desc">VPN-клиент для Android. Опубликован и доступен для скачивания.</p>
          <span class="ex__link">Открыть →</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; max-width: 680px; }
.ex { display: flex; flex-direction: column; gap: 10px; cursor: pointer; text-decoration: none; }
.ex__store { font-family: var(--mono); font-size: 0.68rem; color: var(--text-dim); letter-spacing: 0.08em; text-transform: uppercase; }
.ex__name { font-size: 1.1rem; font-weight: 600; }
.ex__desc { font-size: 0.82rem; color: var(--text-sec); line-height: 1.55; flex: 1; }
.ex__link { font-size: 0.82rem; color: var(--text); font-weight: 500; }
@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
</style>
