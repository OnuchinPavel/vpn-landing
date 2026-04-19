<script setup>
import { reactive } from 'vue'
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
const form = reactive({ company: '', users: '', contact: '', message: '' })
function submit() {
  const L = t.value.contact
  const text = `${L.leadHeader}\n\n${L.leadCompany}: ${form.company}\n${L.leadUsers}: ${form.users || '—'}\n${L.leadContact}: ${form.contact}\n\n${form.message || ''}`
  window.open(`https://t.me/maratiksci?text=${encodeURIComponent(text)}`, '_blank')
}
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="head">
        <p class="label">{{ t.contact.label }}</p>
        <h2 class="title">{{ t.contact.title }}</h2>
        <p class="sub">{{ t.contact.sub }}</p>
      </div>
      <div class="body">
        <form class="form" @submit.prevent="submit">
          <div class="form__row">
            <label class="form__field">
              <span class="form__lbl">{{ t.contact.lblCompany }}</span>
              <input v-model="form.company" required type="text" :placeholder="t.contact.phCompany" />
            </label>
            <label class="form__field">
              <span class="form__lbl">{{ t.contact.lblUsers }}</span>
              <input v-model="form.users" type="text" :placeholder="t.contact.phUsers" />
            </label>
          </div>
          <label class="form__field">
            <span class="form__lbl">{{ t.contact.lblContact }}</span>
            <input v-model="form.contact" required type="text" :placeholder="t.contact.phContact" />
          </label>
          <label class="form__field">
            <span class="form__lbl">{{ t.contact.lblMessage }}</span>
            <textarea v-model="form.message" rows="3" :placeholder="t.contact.phMessage"></textarea>
          </label>
          <button type="submit" class="btn btn-w form__submit">{{ t.contact.submit }}</button>
          <p class="form__note">{{ t.contact.submitNote }}</p>
        </form>
        <div class="aside">
          <a href="mailto:ceo@revstre.am" class="contact-card">
            <span class="contact-card__lbl">{{ t.contact.emailLbl }}</span>
            <span class="contact-card__val">ceo@revstre.am</span>
          </a>
          <a href="https://t.me/maratiksci" target="_blank" class="contact-card">
            <span class="contact-card__lbl">{{ t.contact.telegramLbl }}</span>
            <span class="contact-card__val">@maratiksci</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

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
@media (max-width: 500px) {
  .form { padding: 22px; }
  .form__submit { width: 100%; align-self: stretch; }
}
</style>
