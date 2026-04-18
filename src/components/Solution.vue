<template>
  <section id="solution" class="section">
    <div class="container">
      <p class="label" style="color: var(--green);">Что входит</p>
      <h2 class="title">Один пакет — <span style="color: var(--green);">всё нужное</span></h2>
      <p class="sub" style="margin-bottom: 48px;">Продукт целиком, без допов и «звёздочек». Один договор, один срок, один прайс.</p>
      <div class="grid">
        <div v-for="(s, i) in solutions" :key="s.title" class="sol anim" :class="'d'+((i%4)+1)">
          <div class="sol__icon">✓</div>
          <h3 class="sol__title">{{ s.title }}</h3>
          <p class="sol__desc">{{ s.desc }}</p>
        </div>
      </div>
      <a href="#pricing" class="btn btn-w" style="margin-top: 48px;">Посмотреть тарифы</a>
    </div>
  </section>
</template>

<script setup>
const solutions = [
  { title: 'Лендинг под ваш бренд', desc: 'Продающая посадочная с вашими цветами, шрифтами и доменом. Собирает заявки в ваш CRM или Telegram.' },
  { title: '2 мобильных приложения', desc: 'iOS (Swift) и Android (Kotlin). Нативные, с WireGuard/Xray. Готовы к ревью в сторах.' },
  { title: 'Публикация в 5 витринах', desc: 'App Store, Google Play, RuStore, AppGallery, GetApps. Готовим метаданные, скриншоты, проходим модерацию.' },
  { title: 'Backend и биллинг', desc: 'Личный кабинет, подписки, автопродления, выдача и ротация ключей, управление нодами, финансы.' },
  { title: 'Админ-панель и аналитика', desc: 'MAU, DAU, churn, LTV, выручка по витринам. Управление пользователями, рефандами, промокодами.' },
  { title: 'Telegram-бот (три роли)', desc: 'Продажи новым клиентам, поддержка текущим, выдача ключей для тех, кто не хочет приложение.' },
  { title: 'Миграция ваших пользователей', desc: 'Выгрузка из старого бота, импорт с сохранением остатков подписки, автоуведомление с новой ссылкой.' },
  { title: 'Деплой на ваши серверы', desc: 'Развернём на вашей инфраструктуре. Документация, обучение команды, 2 недели сопровождения после запуска.' },
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
.sol__desc { font-size: 0.84rem; color: var(--text-sec); line-height: 1.6; }

@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
</style>
