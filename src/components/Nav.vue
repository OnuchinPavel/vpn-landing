<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const scrolled = ref(false)
const open = ref(false)
function onScroll() { scrolled.value = window.scrollY > 30 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav :class="['nav', { scrolled }]">
    <div class="container nav__inner">
      <a href="#" class="nav__logo">RevStream</a>
      <div :class="['nav__links', { open }]">
        <a href="#solution" class="nav__link" @click="open=false">Что входит</a>
        <a href="#migration" class="nav__link" @click="open=false">Миграция</a>
        <a href="#pricing" class="nav__link" @click="open=false">Тарифы</a>
        <a href="#faq" class="nav__link" @click="open=false">FAQ</a>
        <a href="#contact" class="btn btn-w" @click="open=false">Обсудить</a>
      </div>
      <button :class="['nav__burger', { open }]" @click="open=!open"><span/><span/></button>
    </div>
  </nav>
</template>

<style scoped>
.nav { position:fixed;top:0;left:0;right:0;z-index:100;padding:20px 0;transition:all .3s }
.nav.scrolled { padding:14px 0;background:rgba(9,9,11,.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border) }
.nav__inner { display:flex;align-items:center;justify-content:space-between }
.nav__logo { font-size:1rem;font-weight:600;letter-spacing:-.02em }
.nav__links { display:flex;align-items:center;gap:28px }
.nav__link { font-size:.8rem;color:var(--text-dim);transition:color .2s }
.nav__link:hover { color:var(--text) }
.nav__burger { display:none;background:none;border:none;cursor:pointer;width:22px;height:18px;position:relative }
.nav__burger span { position:absolute;left:0;width:100%;height:1.5px;background:var(--text);transition:all .3s }
.nav__burger span:first-child{top:3px} .nav__burger span:last-child{bottom:3px}
.nav__burger.open span:first-child{top:50%;transform:translateY(-50%) rotate(45deg)}
.nav__burger.open span:last-child{bottom:50%;transform:translateY(50%) rotate(-45deg)}
@media(max-width:768px){
  .nav__burger{display:block}
  .nav__links{position:fixed;inset:0;background:rgba(9,9,11,.97);backdrop-filter:blur(16px);flex-direction:column;justify-content:center;gap:24px;opacity:0;pointer-events:none;transition:opacity .3s}
  .nav__links.open{opacity:1;pointer-events:all}
  .nav__link{font-size:1.1rem;color:var(--text-sec)}
}
</style>
