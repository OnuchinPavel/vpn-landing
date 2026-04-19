<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section id="faq" class="section" style="background: var(--bg-alt);">
    <div class="container">
      <p class="label">{{ t.questions.label }}</p>
      <h2 class="title">{{ t.questions.title }}</h2>
      <p class="sub" style="margin-bottom: 48px;">{{ t.questions.sub }}</p>

      <div class="block">
        <h3 class="block__title">{{ t.questions.objectionsTitle }}</h3>
        <div class="list">
          <div v-for="(o, i) in t.objections.items" :key="o.q" class="obj anim" :class="'d'+((i%4)+1)">
            <div class="obj__q">
              <span class="obj__tag">{{ t.objections.fearTag }}</span>
              <p>{{ o.q }}</p>
            </div>
            <div class="obj__a">
              <span class="obj__tag obj__tag--ok">{{ t.objections.okTag }}</span>
              <p v-html="o.a"></p>
            </div>
          </div>
        </div>
      </div>

      <div class="block">
        <h3 class="block__title">{{ t.questions.faqTitle }}</h3>
        <div class="faq">
          <details v-for="q in t.faq.items" :key="q.q" class="faq__item">
            <summary class="faq__q">{{ q.q }}</summary>
            <p class="faq__a">{{ q.a }}</p>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.block { margin-bottom: 48px; }
.block:last-child { margin-bottom: 0; }
.block__title {
  font-family: var(--mono); font-size: 0.75rem;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--text-sec); margin-bottom: 24px;
  padding-bottom: 14px; border-bottom: 1px solid var(--border);
}

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

@media (max-width: 700px) {
  .obj { grid-template-columns: 1fr; }
  .obj__q { border-right: none; border-bottom: 1px solid var(--border); }
}
@media (max-width: 500px) {
  .obj__q, .obj__a { padding: 18px 20px; }
  .obj__q p { font-size: 0.88rem; }
  .obj__a p { font-size: 0.85rem; }
  .faq__q { padding: 18px 20px; font-size: 0.9rem; gap: 12px; }
  .faq__a { padding: 0 20px 20px; font-size: 0.85rem; }
  .block { margin-bottom: 36px; }
}
</style>
