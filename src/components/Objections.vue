<template>
  <section id="objections" class="section">
    <div class="container">
      <p class="label">Возражения</p>
      <h2 class="title">«А если…» — давайте сразу</h2>
      <p class="sub" style="margin-bottom: 48px;">Пять страхов, которые слышим чаще всего. Честно — что с ними на самом деле.</p>
      <div class="list">
        <div v-for="(o, i) in items" :key="o.q" class="obj anim" :class="'d'+((i%4)+1)">
          <div class="obj__q">
            <span class="obj__tag">Страх</span>
            <p>{{ o.q }}</p>
          </div>
          <div class="obj__a">
            <span class="obj__tag obj__tag--ok">На самом деле</span>
            <p v-html="o.a"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    q: 'Слишком дорого — 300 000 ₽ за пакет',
    a: 'Сам: 1.2 млн ₽ и 6–9 месяцев. Мы: <strong>300 000 ₽ и 4–8 недель</strong>. Разница окупается первым месяцем рекуррентных подписок в сторе.',
  },
  {
    q: 'Не верю, что будет рост ×3–×10',
    a: '<strong>BessyVPN</strong> — наша сборка: 1 млн MAU и $300k MRR за 5 месяцев после публикации. Это не маркетинговый слайд — живое приложение в сторах.',
  },
  {
    q: 'Apple или Google забанят приложение',
    a: 'Проходили ревью в категории VPN десятки раз — знаем формулировки описания и настройки, которые проходят. При бане подаём переделку или переходим на RuStore / AppGallery / GetApps.',
  },
  {
    q: 'Хочу сам попробовать — это же не ракета',
    a: 'Ок. Пока вы собираете первые iOS и Android билды — конкурент уже в сторе и забирает ваших юзеров. Самостоятельный путь — 6+ месяцев и риск провала.',
  },
  {
    q: 'Всё ещё не понял, что именно я получаю',
    a: 'Одной фразой: ваш Telegram-бот превращается в <strong>бренд</strong> — с сайтом, двумя приложениями, биллингом, автопродлением и админкой. Юзеры переезжают без потерь. Метрики растут.',
  },
]
</script>

<style scoped>
.list { display: flex; flex-direction: column; gap: 10px; }
.obj {
  display: grid; grid-template-columns: 1fr 1.4fr;
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); overflow: hidden;
  transition: border-color 0.2s;
}
.obj:hover { border-color: var(--border-hover); }
.obj__q, .obj__a { padding: 22px 24px; display: flex; flex-direction: column; gap: 10px; }
.obj__q { border-right: 1px solid var(--border); background: rgba(239,68,68,0.04); }
.obj__a { background: var(--bg-card); }
.obj__q p { font-size: 0.92rem; color: var(--text); font-weight: 500; margin: 0; line-height: 1.55; }
.obj__a p { font-size: 0.88rem; color: var(--text-sec); line-height: 1.7; margin: 0; }
.obj__a p :deep(strong) { color: var(--text); font-weight: 600; }
.obj__tag {
  align-self: flex-start; font-family: var(--mono); font-size: 0.65rem;
  letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--red); padding: 3px 10px;
  border: 1px solid var(--red-border); border-radius: 100px;
}
.obj__tag--ok { color: var(--green); border-color: var(--green-border); }

@media (max-width: 700px) {
  .obj { grid-template-columns: 1fr; }
  .obj__q { border-right: none; border-bottom: 1px solid var(--border); }
}
</style>
