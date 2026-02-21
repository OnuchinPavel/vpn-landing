<template>
  <section id="process" class="section" style="background: var(--bg-secondary);">
    <div class="container">
      <p class="label">Процесс</p>
      <h2 class="title">От идеи до запуска за 30 дней</h2>
      <p class="subtitle" style="margin-bottom: 48px;">Отлаженный процесс. Каждый этап прозрачен.</p>
      <div class="steps">
        <div v-for="(s, i) in steps" :key="s.num" class="step anim" :class="'d'+(i+1)">
          <div class="step__left">
            <span class="step__num">{{ s.num }}</span>
            <div v-if="i < steps.length - 1" class="step__line"></div>
          </div>
          <div class="step__body">
            <span class="step__time">{{ s.time }}</span>
            <h3 class="step__title">{{ s.title }}</h3>
            <p class="step__desc">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  { num: '01', title: 'Бриф и аналитика', desc: 'Требования, рынки, протоколы, монетизация, брендинг.', time: '3–5 дней' },
  { num: '02', title: 'Дизайн', desc: 'UI/UX под ваш бренд для всех платформ.', time: '5–7 дней' },
  { num: '03', title: 'Разработка', desc: 'Кастомизация приложений, серверная часть, платежи.', time: '14–21 день' },
  { num: '04', title: 'Запуск', desc: 'QA, публикация в сторах, документация.', time: '5–7 дней' },
]
</script>

<style scoped>
.steps { max-width: 520px; }
.step { display: flex; gap: 24px; }
.step__left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
.step__num {
  width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--border); border-radius: 50%;
  font-family: var(--mono); font-size: 0.78rem; color: var(--text-muted);
}
.step__line { width: 1px; flex: 1; background: var(--border); min-height: 32px; }
.step__body { padding-bottom: 36px; }
.step__time {
  font-family: var(--mono); font-size: 0.68rem; color: var(--text-muted);
  letter-spacing: 0.06em; text-transform: uppercase;
}
.step__title { font-size: 1rem; font-weight: 600; margin: 6px 0 4px; }
.step__desc { font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6; }
</style>
