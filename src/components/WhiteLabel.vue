<template>
  <section id="whitelabel" class="section">
    <div class="container">
      <div class="layout">
        <div class="info">
          <p class="label">White Label</p>
          <h2 class="title">Готовые приложения<br>под ваш бренд</h2>
          <p class="subtitle" style="margin-bottom: 28px;">
            Функционал как у V2RayTUN и Happ — полностью под вашим брендом.
            Готовый продукт, который выглядит как ваша собственная разработка.
          </p>
          <div class="protocols">
            <span v-for="p in protocols" :key="p">{{ p }}</span>
          </div>
          <a href="https://t.me/maratiksci" target="_blank" class="btn btn-primary" style="margin-top: 32px;">Связаться</a>
        </div>
        <div class="features">
          <div v-for="(f, i) in items" :key="f.t" class="card feat anim" :class="'d'+(i%3+1)">
            <h4>{{ f.t }}</h4>
            <p>{{ f.d }}</p>
          </div>
        </div>
      </div>
      <div class="compare">
        <div class="compare__row">
          <span class="compare__from">V2RayTUN</span>
          <span class="compare__arrow">→</span>
          <span class="compare__to">Ваш бренд</span>
        </div>
        <div class="compare__row">
          <span class="compare__from">Happ</span>
          <span class="compare__arrow">→</span>
          <span class="compare__to">Ваш бренд</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  { t: 'Кастомизация бренда', d: 'Логотип, цвета, шрифты, название — пользователи видят только вас.' },
  { t: 'V2Ray / Xray Core', d: 'VLESS, VMess, Trojan, Shadowsocks с XTLS и Reality.' },
  { t: 'Управление серверами', d: 'Админ-панель, мониторинг нагрузки и пользователей.' },
  { t: 'Подписочная модель', d: 'Тарифы, лимиты трафика, сроки действия подписок.' },
  { t: 'Автоконфигурация', d: 'Конфиги автоматически — без ручных настроек и QR-кодов.' },
  { t: 'Обход блокировок', d: 'Reality, CDN-прокси, domain fronting, фрагментация.' },
]
const protocols = ['VLESS + Reality', 'VMess + WS', 'Trojan + gRPC', 'Shadowsocks 2022', 'WireGuard', 'Hysteria 2']
</script>

<style scoped>
.layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
.features { display: flex; flex-direction: column; gap: 8px; }
.feat h4 { font-size: 0.92rem; font-weight: 600; margin-bottom: 4px; }
.feat p { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.55; }
.feat { padding: 20px 24px; }
.protocols { display: flex; flex-wrap: wrap; gap: 6px; }
.protocols span {
  font-family: var(--mono); font-size: 0.7rem; padding: 4px 10px;
  border: 1px solid var(--border); border-radius: 4px; color: var(--text-muted);
}
.compare {
  margin-top: 48px; padding: 32px;
  border: 1px solid var(--border); border-radius: var(--radius-lg);
  display: flex; gap: 24px; justify-content: center;
}
.compare__row { display: flex; align-items: center; gap: 12px; }
.compare__from { font-size: 0.88rem; color: var(--text-muted); }
.compare__arrow { color: var(--text-muted); }
.compare__to { font-size: 0.88rem; font-weight: 600; color: var(--text-primary); }

@media (max-width: 768px) {
  .layout { grid-template-columns: 1fr; }
  .compare { flex-direction: column; align-items: center; gap: 16px; }
}
</style>
