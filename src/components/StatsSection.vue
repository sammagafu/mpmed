<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const sectionRef = ref<HTMLElement | null>(null)
const { isInView } = useScrollAnimation({ observeRef: sectionRef })
</script>

<template>
  <section
    ref="sectionRef"
    id="market-data"
    class="section--alt stats-section animate-in-view"
    :class="{ 'in-view': isInView }"
  >
    <div class="container">
      <div class="section-head section-head--left">
        <span class="section-label">TMDA market intelligence</span>
        <h2 class="section-title">The data behind the opportunity</h2>
      </div>
      <p class="section-lead mb-4 stats-section__lead">
        Authoritative regulatory data from TMDA shows the scale of Tanzania’s manufacturing gap—high
        import dependence, few local plants, and strong demand for in‑country production.
      </p>

      <div class="stats-grid">
        <article class="stats-card">
          <div class="stats-card__icon" aria-hidden="true">
            <i class="bi bi-capsule-pill"></i>
          </div>
          <p class="stats-card__label">Registered medicines</p>
          <p class="stats-card__value">8,465</p>
          <p class="stats-card__meta">since 2003 (TMDA)</p>
        </article>
        <article class="stats-card">
          <div class="stats-card__icon" aria-hidden="true">
            <i class="bi bi-hospital"></i>
          </div>
          <p class="stats-card__label">Domestic pharma facilities</p>
          <p class="stats-card__value">19</p>
          <p class="stats-card__meta">vs 726 authorised foreign manufacturers</p>
        </article>
        <article class="stats-card">
          <div class="stats-card__icon" aria-hidden="true">
            <i class="bi bi-activity"></i>
          </div>
          <p class="stats-card__label">Device manufacturers</p>
          <p class="stats-card__value">141</p>
          <p class="stats-card__meta">serving 61M+ people</p>
        </article>
        <article class="stats-card">
          <div class="stats-card__icon" aria-hidden="true">
            <i class="bi bi-clipboard-pulse"></i>
          </div>
          <p class="stats-card__label">Import permits (devices &amp; diagnostics)</p>
          <p class="stats-card__value">157k</p>
          <p class="stats-card__meta">issued 2022–2025 alone</p>
        </article>
      </div>

      <div class="stats-highlights">
        <div class="stats-highlights__col">
          <h3 class="stats-highlights__title">Critical manufacturing gaps</h3>
          <ul class="stats-highlights__list">
            <li>Zero human biologics or vaccine plants in Tanzania.</li>
            <li>No API or excipients manufacturing facilities in the EAC.</li>
            <li>Only two sterile IV infusion facilities for 61M+ population.</li>
          </ul>
        </div>
        <div class="stats-highlights__col">
          <h3 class="stats-highlights__title">Regional market reach</h3>
          <ul class="stats-highlights__list">
            <li>Access to 331M+ EAC and 450M+ SADC consumers.</li>
            <li>EAC Common Technical Document harmonisation and SADC mutual recognition.</li>
            <li>African Medicines Agency (AMA) treaty ratified.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-section__lead {
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.section-head--left {
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2rem;
  margin-bottom: 2rem;
}

@media (min-width: 992px) {
  .stats-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.stats-card {
  border-radius: 16px;
  padding: 1.1rem 1.2rem 1.15rem;
  background: #ffffff;
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.12);
  border: 1px solid rgba(148, 163, 184, 0.25);
  position: relative;
  overflow: hidden;
  text-align: center;
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.45s ease,
    transform 0.45s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

.stats-section.in-view .stats-card {
  opacity: 1;
  transform: translateY(0);
}

.stats-section.in-view .stats-card:nth-child(1) {
  transition-delay: 0.05s;
}
.stats-section.in-view .stats-card:nth-child(2) {
  transition-delay: 0.1s;
}
.stats-section.in-view .stats-card:nth-child(3) {
  transition-delay: 0.15s;
}
.stats-section.in-view .stats-card:nth-child(4) {
  transition-delay: 0.2s;
}

.stats-card::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.9;
}

.stats-card:nth-child(1)::before {
  background: radial-gradient(circle at top left, rgba(31, 183, 139, 0.16), transparent 60%);
}
.stats-card:nth-child(2)::before {
  background: radial-gradient(circle at top left, rgba(13, 59, 102, 0.16), transparent 60%);
}
.stats-card:nth-child(3)::before {
  background: radial-gradient(circle at top left, rgba(245, 158, 11, 0.16), transparent 60%);
}
.stats-card:nth-child(4)::before {
  background: radial-gradient(circle at top left, rgba(99, 102, 241, 0.18), transparent 60%);
}

.stats-card > * {
  position: relative;
  z-index: 1;
}

.stats-card__icon {
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.stats-card:nth-child(1) .stats-card__icon {
  background: linear-gradient(135deg, var(--color-accent), var(--color-primary));
}
.stats-card:nth-child(2) .stats-card__icon {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
}
.stats-card:nth-child(3) .stats-card__icon {
  background: linear-gradient(135deg, #c49345, #8a5d15);
}
.stats-card:nth-child(4) .stats-card__icon {
  background: linear-gradient(135deg, #6366f1, #312e81);
}

.stats-card__label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(15, 23, 42, 0.72);
  margin-bottom: 0.35rem;
}

.stats-card__value {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--color-primary);
  margin-bottom: 0.1rem;
}

.stats-card__meta {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin: 0;
}

.stats-highlights {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .stats-highlights {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.stats-highlights__title {
  font-size: 0.92rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-primary);
  margin-bottom: 0.6rem;
}

.stats-highlights__list {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.stats-highlights__list li + li {
  margin-top: 0.25rem;
}
</style>

