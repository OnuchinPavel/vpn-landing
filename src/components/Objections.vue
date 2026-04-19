<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <section id="objections" class="section">
    <div class="container">
      <p class="label">{{ t.objections.label }}</p>
      <h2 class="title">{{ t.objections.title }}</h2>
      <p class="sub" style="margin-bottom: 48px;">{{ t.objections.sub }}</p>
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
  </section>
</template>

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
@media (max-width: 500px) {
  .obj__q, .obj__a { padding: 18px 20px; }
  .obj__q p { font-size: 0.88rem; }
  .obj__a p { font-size: 0.85rem; }
}
</style>
