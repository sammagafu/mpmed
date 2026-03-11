<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
const sectionRef = ref<HTMLElement | null>(null)
const { isInView } = useScrollAnimation({ observeRef: sectionRef })
</script>

<template>
  <section ref="sectionRef" id="sectors" class="sectors animate-in-view" :class="{ 'in-view': isInView }">
    <div class="container">
      <header class="sectors-head">
        <span class="section-label">Investment sectors</span>
        <h2 class="sectors-head__title">Two health mandates. One coordinated zone.</h2>
        <p class="sectors-head__lead">
          MPMED‑SEZ is East Africa’s only Special Economic Zone that combines
          <span class="text-highlight-accent">pharmaceutical manufacturing</span> and
          <span class="text-highlight-accent">medical devices &amp; IVDs</span> in a single governed site—from API and
          raw materials to finished products and cold‑chain logistics.
        </p>
        <div class="sectors-head__meta">
          <span class="sectors-head__pill">600ha dual‑sector health manufacturing zone</span>
          <span class="sectors-head__pill sectors-head__pill--light">15+ priority projects open for investment</span>
        </div>
      </header>

      <div class="row g-4 sectors-grid">
        <div class="col-lg-6">
          <article class="sectors-card sectors-card--pharma">
            <div class="sectors-card__top">
              <div class="sectors-card__icon sectors-card__icon--pharma" aria-hidden="true">
                <i class="bi bi-capsule"></i>
              </div>
              <div class="sectors-card__meta">
                <span class="sectors-card__eyebrow">Mandate one</span>
                <h3 class="sectors-card__title">Pharmaceutical manufacturing</h3>
              </div>
            </div>
            <p class="sectors-card__copy">
              Domestic WHO‑GMP‑aligned manufacturing to cut import dependency on essential medicines and high‑value
              specialty products for Tanzania and the wider EAC.
            </p>
            <div class="sectors-card__pills">
              <span>
                <i class="bi bi-capsule me-1"></i>
                Generics & specialty
              </span>
              <span>
                <i class="bi bi-droplet-half me-1"></i>
                Biologics & vaccines
              </span>
              <span>
                <i class="bi bi-box-seam me-1"></i>
                API & packaging
              </span>
            </div>
            <button
              type="button"
              class="sectors-card__cta"
              @click.prevent="scrollTo('opportunities')"
            >
              View pharma opportunities
              <i class="bi bi-arrow-right"></i>
            </button>
          </article>
        </div>

        <div class="col-lg-6">
          <article class="sectors-card sectors-card--devices">
            <div class="sectors-card__top">
              <div class="sectors-card__icon sectors-card__icon--devices" aria-hidden="true">
                <i class="bi bi-tools"></i>
              </div>
              <div class="sectors-card__meta">
                <span class="sectors-card__eyebrow">Mandate two</span>
                <h3 class="sectors-card__title">Medical devices &amp; diagnostics</h3>
              </div>
            </div>
            <p class="sectors-card__copy">
              East Africa’s first dedicated assembly and finishing zone for clinical consumables, precision devices and
              in‑vitro diagnostics, aligned with ISO 13485 and TMDA requirements.
            </p>
            <div class="sectors-card__pills">
              <span>
                <i class="bi bi-scissors me-1"></i>
                Surgical & precision
              </span>
              <span>
                <i class="bi bi-shield-plus me-1"></i>
                Consumables & PPE
              </span>
              <span>
                <i class="bi bi-activity me-1"></i>
                IVDs & digital health
              </span>
            </div>
            <button
              type="button"
              class="sectors-card__cta"
              @click.prevent="scrollTo('opportunities')"
            >
              View device opportunities
              <i class="bi bi-arrow-right"></i>
            </button>
          </article>
        </div>
      </div>

      <div class="section-cta">
        <router-link to="/about" class="btn btn-outline-primary rounded-pill px-4">Read more about the zone</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sectors {
  padding: 3.75rem 0 3.25rem;
  background: radial-gradient(circle at top left, #e0f2fe 0, #f5f7fb 45%, #f5f7fb 100%);
}

.sectors-head {
  text-align: center;
  max-width: 820px;
  margin: 0 auto 2.5rem;
}

.sectors-head__title {
  font-size: clamp(1.9rem, 4vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--color-primary-dark);
  margin-bottom: 0.8rem;
}

.sectors-head__lead {
  font-size: 0.98rem;
  color: var(--color-text-muted);
  max-width: 44rem;
  margin: 0 auto 1.1rem;
}

.sectors-head__meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.sectors-head__pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-primary);
  background: rgba(13, 59, 102, 0.06);
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.sectors-head__pill--light {
  background: rgba(31, 183, 139, 0.08);
  color: var(--color-accent);
}

.sectors-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.6rem 1.7rem 1.7rem;
  border-radius: 22px;
  border: 1px solid rgba(13, 59, 102, 0.08);
  background: #ffffff;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.14);
  position: relative;
  overflow: hidden;
}

.sectors-card::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.85;
  background: radial-gradient(circle at top left, rgba(31, 183, 139, 0.18), transparent 55%);
  pointer-events: none;
}

.sectors-card--devices::before {
  background: radial-gradient(circle at top right, rgba(13, 59, 102, 0.22), transparent 55%);
}

.sectors-card > * {
  position: relative;
  z-index: 1;
}

.sectors-card__top {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 1rem;
}

.sectors-card__icon {
  width: 2.9rem;
  height: 2.9rem;
  border-radius: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #fff;
  flex-shrink: 0;
}

.sectors-card__icon--pharma {
  background: linear-gradient(135deg, var(--color-accent), var(--color-primary));
}

.sectors-card__icon--devices {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
}

.sectors-card__meta {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.sectors-card__eyebrow {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(15, 23, 42, 0.7);
}

.sectors-card__title {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--color-primary-dark);
}

.sectors-card__copy {
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
}

.sectors-card__pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.3rem;
}

.sectors-card__pills span {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-primary-dark);
  background: rgba(255, 255, 255, 0.9);
  padding: 0.28rem 0.7rem;
  border-radius: 999px;
  border: 1px solid rgba(13, 59, 102, 0.12);
  backdrop-filter: blur(6px);
}

.sectors-card__pills i {
  font-size: 0.9em;
  color: var(--color-accent);
}

.sectors-card__cta {
  margin-top: auto;
  border: none;
  background: #0f172a;
  color: #fff;
  padding: 0.55rem 1.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.18s ease, transform 0.15s ease, box-shadow 0.18s ease;
  align-self: flex-start;
}

.sectors-card__cta:hover {
  background: #020617;
  transform: translateY(-1px);
  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.5);
}

.sectors-card__cta i {
  font-size: 0.9em;
}

@media (max-width: 575px) {
  .sectors-head {
    text-align: left;
  }
  .sectors-head__meta {
    justify-content: flex-start;
  }
  .sectors-card__cta {
    width: 100%;
    justify-content: center;
  }
}
</style>
