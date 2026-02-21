<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const scrolled = ref(false)
const open = ref(false)
const links = [
  { label: 'Платформы', href: '#platforms' },
  { label: 'Оплата', href: '#payments' },
  { label: 'Процесс', href: '#process' },
]
function onScroll() { scrolled.value = window.scrollY > 30 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav :class="['nav', { scrolled }]">
    <div class="container nav__inner">
      <a href="#" class="nav__logo">RevStream</a>
      <div :class="['nav__links', { open }]">
        <a v-for="l in links" :key="l.href" :href="l.href" class="nav__link" @click="open=false">{{ l.label }}</a>
        <a href="https://t.me/maratiksci" target="_blank" class="btn btn-primary" @click="open=false">Связаться</a>
      </div>
      <button :class="['nav__burger', { open }]" @click="open=!open"><span/><span/></button>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 20px 0;
  transition: all 0.3s;
}
.nav.scrolled {
  padding: 14px 0;
  background: rgba(10,10,10,0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}
.nav__inner { display: flex; align-items: center; justify-content: space-between; }
.nav__logo { font-size: 1.05rem; font-weight: 600; letter-spacing: -0.02em; }
.nav__links { display: flex; align-items: center; gap: 32px; }
.nav__link { font-size: 0.82rem; color: var(--text-muted); transition: color 0.2s; }
.nav__link:hover { color: var(--text-primary); }
.nav__burger {
  display: none; background: none; border: none; cursor: pointer;
  width: 24px; height: 20px; position: relative;
}
.nav__burger span {
  position: absolute; left: 0; width: 100%; height: 1.5px;
  background: var(--text-primary); transition: all 0.3s;
}
.nav__burger span:first-child { top: 4px; }
.nav__burger span:last-child { bottom: 4px; }
.nav__burger.open span:first-child { top: 50%; transform: translateY(-50%) rotate(45deg); }
.nav__burger.open span:last-child { bottom: 50%; transform: translateY(50%) rotate(-45deg); }

@media (max-width: 768px) {
  .nav__burger { display: block; }
  .nav__links {
    position: fixed; inset: 0; background: rgba(10,10,10,0.97); backdrop-filter: blur(16px);
    flex-direction: column; justify-content: center; gap: 28px;
    opacity: 0; pointer-events: none; transition: opacity 0.3s;
  }
  .nav__links.open { opacity: 1; pointer-events: all; }
  .nav__link { font-size: 1.2rem; color: var(--text-secondary); }
}
</style>
