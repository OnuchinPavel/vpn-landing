<template>
  <footer class="footer">
    <div class="container footer__inner">
      <span class="footer__copy">© {{ new Date().getFullYear() }} RevStream</span>
      <div class="footer__links">
        <a href="mailto:ceo@revstre.am">ceo@revstre.am</a>
        <a href="https://t.me/maratiksci" target="_blank">Telegram</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 32px 0;
  border-top: 1px solid var(--border);
}
.footer__inner {
  display: flex; justify-content: space-between; align-items: center;
}
.footer__copy { font-size: 0.78rem; color: var(--text-muted); }
.footer__links { display: flex; gap: 24px; }
.footer__links a { font-size: 0.78rem; color: var(--text-muted); transition: color 0.2s; }
.footer__links a:hover { color: var(--text-primary); }

@media (max-width: 500px) {
  .footer__inner { flex-direction: column; gap: 12px; text-align: center; }
}
</style>
