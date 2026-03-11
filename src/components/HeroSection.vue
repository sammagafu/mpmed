<script setup lang="ts">
import { ref } from 'vue'
import { useCountUp } from '../composables/useCountUp'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const statsBarRef = ref<HTMLElement | null>(null)
const { count: countSectors } = useCountUp(15, { duration: 1800, startOnView: true, observeRef: statsBarRef })
const { count: countB } = useCountUp(2, { duration: 1600, startOnView: true, observeRef: statsBarRef })
const { count: countHa } = useCountUp(600, { duration: 2200, startOnView: true, observeRef: statsBarRef })
</script>

<template>
  <header class="hero">
    <div class="hero__bg">
      <span class="hero__orb hero__orb--1" aria-hidden="true"></span>
      <span class="hero__orb hero__orb--2" aria-hidden="true"></span>
      <span class="hero__orb hero__orb--3" aria-hidden="true"></span>
    </div>
    <div class="hero__inner container">
      <div class="hero__grid">
        <div class="hero__content">
          <p class="hero__eyebrow hero__reveal hero__reveal--1">Ministry of Health · Tanzania</p>
          <h1 class="hero__title hero__reveal hero__reveal--2">
            East Africa’s only dual-sector <strong>Special Economic Zone</strong> for pharma &amp; medical devices
          </h1>
          <p class="hero__lead hero__reveal hero__reveal--3">
            Official investment portal for Mloganzila—tax incentives, 100% foreign ownership, TISEZA One Stop facilitation. Invest in pharmaceutical manufacturing and medical device assembly in one governed zone.
          </p>
          <div class="hero__ctas hero__reveal hero__reveal--4">
            <a href="#inquiry" class="hero__cta hero__cta--primary" @click.prevent="scrollTo('inquiry')">Express interest</a>
            <a href="#opportunities" class="hero__cta hero__cta--secondary" @click.prevent="scrollTo('opportunities')">Explore opportunities</a>
          </div>
        </div>
        <div ref="statsBarRef" class="hero__stats hero__reveal hero__reveal--5">
          <div class="hero-stat">
            <span class="hero-stat__value">{{ countSectors }}<span class="hero-stat__suffix">+</span></span>
            <span class="hero-stat__label">Sectors open</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat__value">${{ countB }}<span class="hero-stat__suffix">B+</span></span>
            <span class="hero-stat__label">Pipeline potential</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat__value">{{ countHa }}<span class="hero-stat__suffix">ha</span></span>
            <span class="hero-stat__label">Dual-sector zone</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section class="quick-nav" aria-label="Quick links">
    <div class="container">
      <div class="quick-nav__grid">
        <a href="#investor-hub" class="quick-nav__item" @click.prevent="scrollTo('investor-hub')">
          <span class="quick-nav__icon" aria-hidden="true"><i class="bi bi-briefcase"></i></span>
          <span class="quick-nav__title">Investor hub</span>
        </a>
        <a href="#opportunities" class="quick-nav__item" @click.prevent="scrollTo('opportunities')">
          <span class="quick-nav__icon" aria-hidden="true"><i class="bi bi-graph-up-arrow"></i></span>
          <span class="quick-nav__title">Opportunities</span>
        </a>
        <a href="#events" class="quick-nav__item" @click.prevent="scrollTo('events')">
          <span class="quick-nav__icon" aria-hidden="true"><i class="bi bi-calendar-event"></i></span>
          <span class="quick-nav__title">Events</span>
        </a>
        <a href="#inquiry" class="quick-nav__item quick-nav__item--cta" @click.prevent="scrollTo('inquiry')">
          <span class="quick-nav__icon" aria-hidden="true"><i class="bi bi-send"></i></span>
          <span class="quick-nav__title">Express interest</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: clamp(3rem, 7vw, 4.5rem) 0 clamp(2.75rem, 5vw, 3.5rem);
  color: var(--color-text);
  background: radial-gradient(circle at top left, rgba(31, 183, 139, 0.18) 0, #e0ecff 26%, #f5f7ff 52%, #f5f7ff 100%);
  overflow: hidden;
}
.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.hero__orb {
  display: none;
}
.hero__inner {
  position: relative;
  z-index: 1;
}
.hero__grid {
  display: grid;
  gap: 2.25rem;
  align-items: stretch;
}
@media (min-width: 992px) {
  .hero__grid {
    grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
    gap: 2.75rem;
  }
}
.hero__content {
  max-width: 640px;
  background: #ffffff;
  border-radius: 24px;
  padding: 2rem 2rem 2.25rem;
  box-shadow: 0 22px 60px rgba(10, 37, 64, 0.14);
  border: 1px solid rgba(13, 59, 102, 0.07);
}
.hero__eyebrow {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.85rem;
}
.hero__title {
  font-size: clamp(1.75rem, 4.5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.15;
  margin-bottom: 1.1rem;
  color: var(--color-primary);
}
.hero__title strong {
  color: var(--color-primary-dark);
}
.hero__lead {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--color-text-muted);
  margin-bottom: 1.6rem;
}
.hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
}
.hero__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 1.5rem;
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: transform 0.2s var(--ease-out), box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
}
.hero__cta--primary {
  background: linear-gradient(135deg, var(--color-accent), var(--color-primary));
  color: #fff;
  border: none;
  box-shadow: 0 8px 24px rgba(10, 37, 64, 0.25);
}
.hero__cta--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 38px rgba(10, 37, 64, 0.3);
}
.hero__cta--secondary {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid rgba(13, 59, 102, 0.22);
}
.hero__cta--secondary:hover {
  background: rgba(13, 59, 102, 0.04);
  border-color: rgba(13, 59, 102, 0.4);
}
.hero__reveal {
  opacity: 0;
  transform: translateY(16px);
  animation: hero-reveal 0.6s var(--ease-out) forwards;
}
.hero__reveal--1 { animation-delay: 0.05s; }
.hero__reveal--2 { animation-delay: 0.15s; }
.hero__reveal--3 { animation-delay: 0.28s; }
.hero__reveal--4 { animation-delay: 0.4s; }
.hero__reveal--5 { animation-delay: 0.5s; }
@keyframes hero-reveal {
  to { opacity: 1; transform: translateY(0); }
}
.hero__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  align-items: stretch;
}
@media (min-width: 992px) {
  .hero__stats {
    grid-template-columns: 1fr;
    align-self: center;
  }
}
.hero-stat {
  padding: 1.1rem 1.25rem;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 10px 26px rgba(10, 37, 64, 0.16);
  border: 1px solid rgba(13, 59, 102, 0.06);
}
.hero__stats .hero-stat:nth-child(2) {
  background: linear-gradient(135deg, var(--color-accent), var(--color-primary));
  border-color: transparent;
  box-shadow: 0 14px 34px rgba(10, 37, 64, 0.28);
  color: #ffffff;
}
.hero-stat__value {
  display: block;
  font-size: 1.5rem;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  color: var(--color-primary);
}
.hero__stats .hero-stat:nth-child(2) .hero-stat__value {
  color: #ffffff;
}
.hero-stat__suffix {
  opacity: 0.9;
  font-weight: 700;
}
.hero-stat__label {
  display: block;
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-top: 0.2rem;
}
.hero__stats .hero-stat:nth-child(2) .hero-stat__label {
  color: rgba(255, 255, 255, 0.86);
}

/* Quick nav strip */
.quick-nav {
  padding: 0;
  margin-top: 0.75rem;
  margin-bottom: 0;
  position: relative;
  z-index: 2;
}
.quick-nav__grid {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 0.75rem;
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}
.quick-nav__item {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 0.85rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 999px;
  border: 1px solid rgba(13, 59, 102, 0.08);
  text-decoration: none;
  color: inherit;
  font-size: 0.82rem;
  font-weight: 500;
  white-space: nowrap;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}
.quick-nav__item:hover {
  background: #ffffff;
  border-color: rgba(13, 59, 102, 0.18);
}
.quick-nav__icon {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 999px;
  background: rgba(26, 127, 94, 0.12);
  color: var(--color-accent);
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.quick-nav__title {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-text);
}
.quick-nav__item--cta {
  background: linear-gradient(135deg, var(--color-accent), var(--color-primary));
  border-color: transparent;
  color: #fff;
}
.quick-nav__item:nth-child(1):not(.quick-nav__item--cta) {
  background: linear-gradient(135deg, #f0faf6, #e6f3ff);
}
.quick-nav__item:nth-child(2):not(.quick-nav__item--cta) {
  background: linear-gradient(135deg, #edf3ff, #f5f7fb);
}
.quick-nav__item:nth-child(3):not(.quick-nav__item--cta) {
  background: linear-gradient(135deg, #fff7ea, #fdf4e6);
}
.quick-nav__item--cta .quick-nav__title { color: #fff; }
.quick-nav__item--cta .quick-nav__icon {
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
}
@media (max-width: 767px) {
  .hero__ctas {
    flex-direction: column;
    align-items: stretch;
  }
  .hero__cta {
    width: 100%;
  }
}
</style>
