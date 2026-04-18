<template>
  <section id="timeline" class="section" style="background: var(--bg-alt);">
    <div class="container">
      <p class="label">Таймлайн</p>
      <h2 class="title">Путь от брифа до первой покупки</h2>
      <p class="sub" style="margin-bottom: 48px;">4–8 недель. Без «сейчас оценим и перезвоним».</p>
      <div class="tl">
        <div v-for="(m, i) in milestones" :key="m.week" class="tl__row anim" :class="'d'+(i+1)">
          <div class="tl__week">{{ m.week }}</div>
          <div class="tl__body">
            <h3 class="tl__title">{{ m.title }}</h3>
            <p class="tl__desc">{{ m.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const milestones = [
  { week: 'Неделя 1', title: 'Бриф и доступы', desc: 'Согласовываем бренд, получаем домены и брендбук. На вашей стороне — Apple Developer и Google Play аккаунты (либо оформляем мы отдельной услугой за 70 000 ₽).' },
  { week: 'Неделя 2–3', title: 'Сборка и бэкенд', desc: 'Собираем приложения и бэкенд, подключаем ваши VPN-серверы, готовим билды для сторов.' },
  { week: 'Неделя 4–6', title: 'Ревью и миграция', desc: 'Отправляем в сторы, проходим модерацию, параллельно мигрируем базу. Ваша команда получает первые сборки в тесты.' },
  { week: 'Неделя 6–8', title: 'Запуск и передача', desc: 'Приложения публикуются, уведомляем пользователей, первые покупки через сторы. Передаём документацию и обучаем команду.' },
]
</script>

<style scoped>
.tl { border-left: 1px solid var(--border); padding-left: 32px; margin-left: 8px; }
.tl__row { padding: 20px 0; position: relative; }
.tl__row::before {
  content: ''; position: absolute; left: -38px; top: 26px;
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--text-dim); border: 2px solid var(--bg-alt);
}
.tl__week { font-family: var(--mono); font-size: 0.72rem; color: var(--text-dim); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px; }
.tl__title { font-size: 1.05rem; font-weight: 600; margin-bottom: 6px; }
.tl__desc { font-size: 0.88rem; color: var(--text-sec); line-height: 1.65; max-width: 680px; }

@media (max-width: 600px) {
  .tl { padding-left: 24px; }
  .tl__row::before { left: -30px; }
}
</style>
