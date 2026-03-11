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
  <section ref="sectionRef" id="sectors" class="animate-in-view" :class="{ 'in-view': isInView }">
    <div class="container">
      <header class="sectors-head">
        <span class="section-label">Investment sectors</span>
        <h2 class="sectors-head__title">Two mandates. One zone. Full supply chain.</h2>
        <p class="sectors-head__lead">
          East Africa’s only <span class="text-highlight-primary">Special Economic Zone</span> combining <span class="text-highlight-accent">pharmaceutical manufacturing</span> and <span class="text-highlight-accent">medical device assembly</span> in one governed site—from API to finished product.
        </p>
        <span class="sectors-head__pill">Dual-sector zone · 600ha</span>
      </header>

      <div class="row g-3 sectors-grid">
        <div class="col-md-6">
          <article class="card sectors-card">
            <div class="card-body">
              <div class="sectors-card__icon sectors-card__icon--pharma" aria-hidden="true">
                <i class="bi bi-capsule"></i>
              </div>
              <div class="sectors-card__content">
                <div class="sectors-card__meta">
                  <span class="sectors-card__badge">Primary mandate</span>
                  <span class="sectors-card__tag">Pharmaceuticals</span>
                </div>
                <p class="sectors-card__copy">
              Tanzania imports over 80% of its medicines, with only 19 domestic pharmaceutical manufacturing facilities versus 726 authorised foreign manufacturers. MPMED-SEZ is the designated site for expanding domestic production at WHO-GMP scale.
                </p>
                <ul class="sectors-card__list">
                  <li>Generic and specialty medicines</li>
                  <li>Biologics and vaccines</li>
                  <li>API and excipient synthesis</li>
                  <li>Traditional medicines (GMP)</li>
                  <li>Pharma-grade packaging</li>
                </ul>
                <button
                  type="button"
                  class="sectors-card__cta"
                  @click.prevent="scrollTo('opportunities')"
                >
                  View pharma opportunities
                  <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </article>
        </div>

        <div class="col-md-6">
          <article class="card sectors-card">
            <div class="card-body">
              <div class="sectors-card__icon sectors-card__icon--devices" aria-hidden="true">
                <i class="bi bi-tools"></i>
              </div>
              <div class="sectors-card__content">
                <div class="sectors-card__meta">
                  <span class="sectors-card__badge">Second mandate</span>
                  <span class="sectors-card__tag">Medical devices</span>
                </div>
                <p class="sectors-card__copy">
              Over 90% of Tanzania’s medical devices and the vast majority of diagnostics are imported. MPMED-SEZ is East Africa’s first dedicated medical device assembly zone—ISO 13485 and TMDA alignment.
                </p>
                <ul class="sectors-card__list">
                  <li>Precision and surgical devices</li>
                  <li>Clinical consumables and PPE</li>
                  <li>In‑vitro diagnostics (IVDs)</li>
                  <li>Digital health hardware</li>
                  <li>Sterilisation and sterile packaging</li>
                </ul>
                <button
                  type="button"
                  class="sectors-card__cta"
                  @click.prevent="scrollTo('opportunities')"
                >
                  View device opportunities
                  <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
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
.sectors-head {
  text-align: center;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.5rem;
}

.sectors-head__title {
  font-size: clamp(1.8rem, 4vw, 2.3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
}

.sectors-head__lead {
  font-size: 0.98rem;
  color: var(--color-text-muted);
  max-width: 42rem;
  margin: 0 auto 0.9rem;
}

.sectors-head__pill {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-primary);
  background: rgba(13, 59, 102, 0.08);
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  letter-spacing: 0.02em;
}

.sectors-card {
  border-radius: 18px;
  border: 1px solid rgba(13, 59, 102, 0.06);
  box-shadow: 0 16px 44px rgba(10, 37, 64, 0.12);
  overflow: hidden;
  position: relative;
}

.sectors-grid > .col-md-6:first-child .sectors-card {
  background: linear-gradient(145deg, #f0faf6, #e6f3ff);
}

.sectors-grid > .col-md-6:last-child .sectors-card {
  background: linear-gradient(145deg, #edf3ff, #f5f7fb);
}

.sectors-card .card-body {
  padding: 1.4rem 1.5rem 1.5rem;
}

.sectors-card__icon {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #fff;
}

.sectors-card__icon--pharma { background: linear-gradient(135deg, #1a7f5e, #0d3b66); }
.sectors-card__icon--devices { background: linear-gradient(135deg, #0d3b66, #082847); }

.sectors-card__content {
  margin-top: 0.75rem;
}

.sectors-card__badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.sectors-card__tag {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.15rem 0.65rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: rgba(13, 59, 102, 0.05);
  color: var(--color-primary);
}

.sectors-card__copy {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0.65rem 0 0.75rem;
}

.sectors-card__list {
  padding-left: 0;
  margin: 0 0 0.9rem;
  font-size: 0.8rem;
  color: var(--color-text);
  list-style: none;
}

.sectors-card__list li {
  position: relative;
  padding-left: 1rem;
  margin-bottom: 0.25rem;
}

.sectors-card__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.42rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 999px;
  background: rgba(26, 127, 94, 0.9);
}

.sectors-card__cta {
  border: none;
  background: none;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-accent);
  cursor: pointer;
}

.sectors-card__cta i {
  font-size: 0.85em;
}

@media (max-width: 575px) {
  .sectors-head {
    text-align: left;
  }
}
</style>
