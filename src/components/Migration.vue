<template>
  <section id="migration" class="section">
    <div class="container">
      <p class="label">Миграция</p>
      <h2 class="title">Как переезжают ваши пользователи</h2>
      <p class="sub" style="margin-bottom: 48px;">Без потерь. Остатки подписок сохраняются. Все узнают в тот же день.</p>
      <div class="grid">
        <div v-for="(s, i) in steps" :key="s.title" class="step anim" :class="'d'+(i+1)">
          <span class="step__num">{{ String(i+1).padStart(2,'0') }}</span>
          <h3 class="step__title">{{ s.title }}</h3>
          <p class="step__desc">{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  { title: 'Выгрузка из старого бота', desc: 'Забираем базу: контакты, активные подписки, остатки дней, выданные ключи. Обычно пара вечеров.' },
  { title: 'Импорт в новый backend', desc: 'Заливаем данные с сохранением остатков. Никто не теряет оплаченные дни — пересчёт корректный.' },
  { title: 'Автоуведомление', desc: 'Ваш Telegram-бот рассылает юзерам: «Вот приложение под ваш бренд. Подписка уже перенесена, ничего заново оплачивать не нужно».' },
  { title: 'Сопровождение перехода', desc: '2 недели держим руку на пульсе: отвечаем на тикеты миграции, помогаем тем, кто не смог перейти, ловим баги.' },
]
</script>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.step {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 28px;
  display: flex; flex-direction: column; gap: 10px;
  transition: all 0.25s;
}
.step:hover { border-color: var(--border-hover); }
.step__num { font-family: var(--mono); font-size: 0.72rem; color: var(--text-dim); letter-spacing: 0.08em; }
.step__title { font-size: 1rem; font-weight: 600; }
.step__desc { font-size: 0.84rem; color: var(--text-sec); line-height: 1.6; }

@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
</style>
