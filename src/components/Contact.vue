<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="head">
        <p class="label">Связаться</p>
        <h2 class="title">Обсудим ваш запуск</h2>
        <p class="sub">Заполните форму — ответим в Telegram или на почту в течение 24 часов. Или сразу пишите в мессенджер.</p>
      </div>
      <div class="body">
        <form class="form" @submit.prevent="submit">
          <div class="form__row">
            <label class="form__field">
              <span class="form__lbl">Компания / бот</span>
              <input v-model="form.company" required type="text" placeholder="Например, «VPN365» или @vpn365bot" />
            </label>
            <label class="form__field">
              <span class="form__lbl">Размер базы</span>
              <input v-model="form.users" type="text" placeholder="Например, 8 000 активных" />
            </label>
          </div>
          <label class="form__field">
            <span class="form__lbl">Контакт для связи</span>
            <input v-model="form.contact" required type="text" placeholder="Telegram / email / телефон" />
          </label>
          <label class="form__field">
            <span class="form__lbl">Что обсудить</span>
            <textarea v-model="form.message" rows="3" placeholder="Интересующий тариф, вопросы по миграции, сроки"></textarea>
          </label>
          <button type="submit" class="btn btn-w form__submit">Отправить в Telegram</button>
          <p class="form__note">Кнопка откроет Telegram с подготовленным сообщением — вам останется нажать «Отправить».</p>
        </form>
        <div class="aside">
          <a href="mailto:ceo@revstre.am" class="contact-card">
            <span class="contact-card__lbl">Email</span>
            <span class="contact-card__val">ceo@revstre.am</span>
          </a>
          <a href="https://t.me/maratiksci" target="_blank" class="contact-card">
            <span class="contact-card__lbl">Telegram</span>
            <span class="contact-card__val">@maratiksci</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({ company: '', users: '', contact: '', message: '' })
function submit() {
  const text = `Заявка с сайта RevStream\n\nКомпания / бот: ${form.company}\nРазмер базы: ${form.users || '—'}\nКонтакт: ${form.contact}\n\n${form.message || ''}`
  window.open(`https://t.me/maratiksci?text=${encodeURIComponent(text)}`, '_blank')
}
</script>

<style scoped>
.head { margin-bottom: 40px; max-width: 560px; }
.body { display: grid; grid-template-columns: 1.4fr 1fr; gap: 28px; align-items: start; }
.form {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 28px;
  display: flex; flex-direction: column; gap: 14px;
}
.form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.form__field { display: flex; flex-direction: column; gap: 6px; }
.form__lbl { font-family: var(--mono); font-size: 0.68rem; color: var(--text-dim); letter-spacing: 0.08em; text-transform: uppercase; }
.form input, .form textarea {
  width: 100%; padding: 12px 14px;
  background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius);
  color: var(--text); font-family: var(--font); font-size: 0.9rem;
  resize: vertical; transition: border-color 0.2s;
}
.form input:focus, .form textarea:focus { outline: none; border-color: var(--border-hover); }
.form__submit { margin-top: 6px; align-self: flex-start; }
.form__note { font-size: 0.75rem; color: var(--text-dim); margin: 0; }

.aside { display: flex; flex-direction: column; gap: 10px; }
.contact-card {
  display: flex; flex-direction: column; gap: 6px;
  padding: 20px 22px; border: 1px solid var(--border); border-radius: var(--radius-lg);
  transition: border-color 0.2s;
}
.contact-card:hover { border-color: var(--border-hover); }
.contact-card__lbl { font-family: var(--mono); font-size: 0.65rem; color: var(--text-dim); letter-spacing: 0.08em; text-transform: uppercase; }
.contact-card__val { font-size: 0.92rem; font-weight: 500; }

@media (max-width: 768px) {
  .body { grid-template-columns: 1fr; }
  .form__row { grid-template-columns: 1fr; }
}
</style>
