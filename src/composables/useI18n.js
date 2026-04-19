import { ref, computed, watch } from 'vue'
import ru from '../locales/ru.js'
import en from '../locales/en.js'

const locales = { ru, en }
const STORAGE_KEY = 'locale'

function detectInitial() {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage?.getItem(STORAGE_KEY)
  if (saved && locales[saved]) return saved
  const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase()
  return nav.startsWith('ru') ? 'ru' : 'en'
}

const current = ref(detectInitial())

function applyDocumentMeta(loc) {
  if (typeof document === 'undefined') return
  const data = locales[loc]
  if (!data) return
  document.documentElement.lang = loc
  if (data.meta?.title) document.title = data.meta.title
  if (data.meta?.description) {
    const el = document.querySelector('meta[name="description"]')
    if (el) el.setAttribute('content', data.meta.description)
  }
}

applyDocumentMeta(current.value)
watch(current, applyDocumentMeta)

export function useI18n() {
  const t = computed(() => locales[current.value])
  function setLocale(l) {
    if (!locales[l]) return
    current.value = l
    try { window.localStorage?.setItem(STORAGE_KEY, l) } catch {}
  }
  return { locale: current, t, setLocale }
}
