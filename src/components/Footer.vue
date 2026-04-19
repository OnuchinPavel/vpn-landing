<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <span class="footer__copy">© {{ new Date().getFullYear() }} {{ t.footer.copyright }}</span>
      <div class="footer__links">
        <a href="mailto:ceo@revstre.am">ceo@revstre.am</a>
        <a href="https://t.me/maratiksci" target="_blank">Telegram</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer { padding: 28px 0; border-top: 1px solid var(--border); }
.footer__inner { display: flex; justify-content: space-between; align-items: center; }
.footer__copy { font-size: 0.75rem; color: var(--text-dim); }
.footer__links { display: flex; gap: 20px; }
.footer__links a { font-size: 0.75rem; color: var(--text-dim); transition: color 0.2s; }
.footer__links a:hover { color: var(--text); }
@media (max-width: 500px) { .footer__inner { flex-direction: column; gap: 10px; text-align: center; } }
</style>
