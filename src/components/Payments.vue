<template>
  <section id="payments" class="section">
    <div class="container">
      <p class="label">Монетизация</p>
      <h2 class="title">Четыре способа принимать оплату</h2>
      <p class="subtitle" style="margin-bottom: 48px;">
        От сторов до криптовалюты — пользователи платят так, как им удобно.
      </p>
      <div class="grid">
        <div v-for="(m, i) in items" :key="m.name" class="card anim" :class="'d'+(i+1)">
          <h3 class="name">{{ m.name }}</h3>
          <p class="desc">{{ m.desc }}</p>
          <div class="features">
            <span v-for="f in m.features" :key="f">✓ {{ f }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  { name: 'Apple App Store', desc: 'In-App Purchase и подписки через StoreKit 2. Автопродление, семейный доступ.', features: ['Подписки', 'Пробный период', 'Семейный доступ', 'Offer codes'] },
  { name: 'Google Play Billing', desc: 'Billing Library v6+ с подписками, пробными периодами и акциями.', features: ['Подписки', 'Free trial', 'Grace period', 'Account hold'] },
  { name: 'Криптовалюта', desc: 'BTC, ETH, USDT через проверенные платёжные шлюзы.', features: ['Bitcoin', 'Ethereum', 'USDT/USDC', 'Lightning'] },
  { name: 'Российские рубли', desc: 'ЮKassa, CloudPayments или другие эквайринги для РФ.', features: ['Банковские карты', 'СБП', 'ЮMoney', 'Подписки'] },
]
</script>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 12px; }
.name { font-size: 1rem; font-weight: 600; margin-bottom: 8px; }
.desc { font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6; }
.features {
  display: flex; flex-direction: column; gap: 6px;
  margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--border);
}
.features span { font-size: 0.78rem; color: var(--text-muted); }
</style>
