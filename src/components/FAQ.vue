<template>
  <section id="faq" class="section" style="background: var(--bg-alt);">
    <div class="container">
      <p class="label">FAQ</p>
      <h2 class="title">Вопросы, которые задают все</h2>
      <p class="sub" style="margin-bottom: 40px;">Если остался свой — напишите, ответим.</p>
      <div class="faq">
        <details v-for="q in items" :key="q.q" class="faq__item">
          <summary class="faq__q">{{ q.q }}</summary>
          <p class="faq__a">{{ q.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  { q: 'Чьи VPN-серверы — ваши или мои?', a: 'Ваши. Пакет ставим на вашу инфраструктуру и помогаем развернуть: конфиги, автомасштабирование, мониторинг. Серверы и трафик принадлежат вам — мы их не видим.' },
  { q: 'Что если Apple или Google забанят приложение?', a: 'У нас есть опыт прохождения модерации в категории VPN — в заявке выверяем формулировки и описание. При бане помогаем переподать или перейти на альтернативные витрины (RuStore, AppGallery, GetApps).' },
  { q: 'Что с юрлицом и developer-аккаунтами?', a: 'Публикация — на ваше юрлицо и ваш Apple Developer / Google Play. Это принципиально: иначе платежи и аудитория не будут принадлежать вам. Если аккаунтов ещё нет — можете оформить сами, либо берём это на себя отдельной услугой за 70 000 ₽ (не входит в тарифы).' },
  { q: 'Я потеряю пользователей при миграции?', a: 'Нет. Мигрируем с сохранением остатков подписки, уведомляем каждого через ваш же Telegram-бот и 2 недели обрабатываем отказы. Те, кто не захотел в приложение, продолжают получать ключи через бот.' },
  { q: 'Можно поэтапную оплату?', a: 'Да. Делим на 2–3 транша: при старте, после демо и после публикации в сторах. Конкретику — в договоре.' },
  { q: 'Сколько стоит поддерживать «Старт» дальше?', a: 'Серверы — ваш счёт у провайдера. Apple Developer — 99 $/год, Google Play — 25 $ разово. Платёжные комиссии сторов — 15–30 % от оборота через них. Больше никаких наших ежемесячных платежей.' },
  { q: 'Что если я захочу уйти через полгода?', a: 'На «Старте» и «Бизнесе» код и доступы уже ваши — уходите без конфликтов. С «Облака» миграция на свой стек — отдельный договор, но делается.' },
  { q: 'Чем вы отличаетесь от готовых решений вроде Outline или V2RayTUN?', a: 'Готовые клиенты — это только приложение. У нас весь стек: сайт, биллинг, админка, бот, миграция. И бренд — полностью ваш, а не «на базе X».' },
]
</script>

<style scoped>
.faq { display: flex; flex-direction: column; gap: 8px; }
.faq__item {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: border-color 0.2s;
}
.faq__item[open] { border-color: var(--border-hover); }
.faq__q {
  list-style: none; cursor: pointer;
  padding: 20px 24px; font-size: 0.95rem; font-weight: 500;
  display: flex; justify-content: space-between; align-items: center; gap: 16px;
}
.faq__q::-webkit-details-marker { display: none; }
.faq__q::after { content: '+'; color: var(--text-dim); font-size: 1.3rem; font-weight: 400; transition: transform 0.2s; line-height: 1; }
.faq__item[open] .faq__q::after { transform: rotate(45deg); }
.faq__a { padding: 0 24px 22px; font-size: 0.88rem; color: var(--text-sec); line-height: 1.7; margin: 0; }
</style>
