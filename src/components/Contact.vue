<template>
  <section id="contact" class="section">
    <div class="container center">
      <p class="label">Контакты</p>
      <h2 class="title">Обсудить проект</h2>
      <p class="subtitle" style="margin: 0 auto 40px; text-align: center;">
        Расскажите о проекте — подготовим предложение в течение 48 часов.
      </p>
      <div class="details">
        <a href="mailto:ceo@revstre.am" class="detail">
          <span class="detail__label">Email</span>
          <span class="detail__value">ceo@revstre.am</span>
        </a>
        <a href="https://t.me/maratiksci" target="_blank" class="detail">
          <span class="detail__label">Telegram</span>
          <span class="detail__value">@maratiksci</span>
        </a>
      </div>
      <a href="https://t.me/maratiksci" target="_blank" class="btn btn-primary cta">Написать в Telegram</a>
    </div>
  </section>
</template>

<style scoped>
.center { text-align: center; display: flex; flex-direction: column; align-items: center; }
.details { display: flex; gap: 40px; margin-bottom: 36px; }
.detail {
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  padding: 20px 32px; border: 1px solid var(--border); border-radius: var(--radius-lg);
  transition: border-color 0.2s;
}
.detail:hover { border-color: var(--border-hover); }
.detail__label { font-family: var(--mono); font-size: 0.68rem; color: var(--text-muted); letter-spacing: 0.08em; text-transform: uppercase; }
.detail__value { font-size: 0.95rem; font-weight: 500; }
.cta { padding: 14px 44px; }

@media (max-width: 500px) { .details { flex-direction: column; gap: 12px; } }
</style>
