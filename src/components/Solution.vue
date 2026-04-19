<template>
  <section id="solution" class="section">
    <div class="container">
      <p class="label" style="color: var(--green);">Как растим метрики</p>
      <h2 class="title">Один пакет — <span style="color: var(--green);">все рычаги</span></h2>
      <p class="sub" style="margin-bottom: 48px;">Каждая часть пакета двигает конкретную бизнес-метрику. Не «функции ради функций».</p>
      <div class="grid">
        <div v-for="(s, i) in solutions" :key="s.title" class="sol anim" :class="'d'+((i%4)+1)">
          <div class="sol__icon">✓</div>
          <h3 class="sol__title">{{ s.title }}</h3>
          <p class="sol__desc">{{ s.desc }}</p>
          <div class="sol__metric">{{ s.metric }}</div>
        </div>
      </div>
      <a href="#pricing" class="btn btn-w" style="margin-top: 48px;">Посмотреть тарифы</a>
    </div>
  </section>
</template>

<script setup>
const solutions = [
  { title: 'Лендинг под ваш бренд', desc: 'Продающая посадочная с вашими цветами, шрифтами, доменом. Собирает заявки в ваш CRM или Telegram.', metric: '+CR · +органика' },
  { title: '2 мобильных приложения', desc: 'iOS (Swift) и Android (Kotlin). Нативные, с WireGuard/Xray. Готовы к ревью в сторах.', metric: '+MAU · +retention' },
  { title: 'Публикация в 5 витринах', desc: 'App Store, Google Play, RuStore, AppGallery, GetApps. Готовим метаданные, скриншоты, проходим модерацию.', metric: '+охват · валютные подписки' },
  { title: 'Backend и биллинг', desc: 'Личный кабинет, подписки, автопродления, выдача и ротация ключей, управление нодами, финансы.', metric: '+MRR · −churn' },
  { title: 'Админ-панель и аналитика', desc: 'MAU, DAU, churn, LTV, выручка по витринам. Управление пользователями, рефандами, промокодами.', metric: 'решения на данных · −CAC' },
  { title: 'Telegram-бот (три роли)', desc: 'Продажи новым клиентам, поддержка текущим, выдача ключей для тех, кто не хочет приложение.', metric: '+конверсия · −саппорт' },
  { title: 'Миграция ваших пользователей', desc: 'Выгрузка из старого бота, импорт с сохранением остатков подписки, автоуведомление с новой ссылкой.', metric: '0 потерь · +LTV старых' },
  { title: 'Деплой на ваши серверы', desc: 'Развернём на вашей инфраструктуре. Документация, обучение команды, 2 недели сопровождения после запуска.', metric: 'страховка от бана' },
]
</script>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.sol {
  background: var(--green-dim); border: 1px solid var(--green-border);
  border-radius: var(--radius-lg); padding: 28px;
  display: flex; flex-direction: column; gap: 10px;
  transition: all 0.25s;
}
.sol:hover { border-color: rgba(34,197,94,0.3); }
.sol__icon {
  width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;
  background: rgba(34,197,94,0.12); border-radius: 8px;
  color: var(--green); font-size: 0.85rem; font-weight: 700;
}
.sol__title { font-size: 1rem; font-weight: 600; }
.sol__desc { font-size: 0.84rem; color: var(--text-sec); line-height: 1.6; flex: 1; }
.sol__metric {
  align-self: flex-start;
  margin-top: 6px;
  font-family: var(--mono); font-size: 0.7rem;
  color: var(--green); letter-spacing: 0.04em;
  padding: 4px 10px; border: 1px solid var(--green-border); border-radius: 100px;
  background: rgba(34,197,94,0.06);
}

@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
</style>
