<template>
  <section id="examples" class="section" style="background: var(--bg-alt);">
    <div class="container">
      <p class="label">Кейс</p>
      <h2 class="title">BessyVPN — наша сборка в сторах</h2>
      <p class="sub" style="margin-bottom: 32px;">Что происходит после публикации: цифры за первые 5 месяцев.</p>
      <div class="stats">
        <div class="stat">
          <span class="stat__val">1 млн</span>
          <span class="stat__lbl">MAU</span>
        </div>
        <div class="stat">
          <span class="stat__val">$300k</span>
          <span class="stat__lbl">MRR</span>
        </div>
        <div class="stat">
          <span class="stat__val">5 мес</span>
          <span class="stat__lbl">с публикации</span>
        </div>
        <div class="stat">
          <span class="stat__val">×10</span>
          <span class="stat__lbl">рост выручки</span>
        </div>
      </div>
      <div class="grid">
        <a href="https://apps.apple.com/ru/app/bessyvpn-%D0%B1%D1%8B%D1%81%D1%82%D1%80%D1%8B%D0%B9-%D0%B2%D0%BF%D0%BD/id6755730946" target="_blank" class="card ex">
          <span class="ex__store">App Store</span>
          <h3 class="ex__name">BessyVPN — iOS</h3>
          <p class="ex__desc">Открыть в App Store.</p>
          <span class="ex__link">Перейти →</span>
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.revstream.bessy" target="_blank" class="card ex">
          <span class="ex__store">Google Play</span>
          <h3 class="ex__name">BessyVPN — Android</h3>
          <p class="ex__desc">Открыть в Google Play.</p>
          <span class="ex__link">Перейти →</span>
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
  .stats { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .stat { border-left: none; padding-left: 0; padding: 0; }
}
@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
</style>
