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
  <section ref="sectionRef" id="events" class="section--alt animate-in-view" :class="{ 'in-view': isInView }">
    <div class="container">
      <div class="section-head">
        <span class="section-label">Events &amp; engagement</span>
        <h2 class="section-title">Forums and site visits</h2>
      </div>
      <p class="section-lead text-center mx-auto mb-4">
        Ministry-convened investor forums, site visits to Mloganzila, and TMDA pre-licensing sessions. Register to be notified.
      </p>
      <div class="row g-4 justify-content-center events-grid">
        <div class="col-md-6 col-lg-5">
          <article class="card event-card">
            <div class="event-card__top">
              <div class="event-card__pill">Next: Q3 2026</div>
              <div class="event-card__badge">Investor forum &amp; site visit</div>
            </div>
            <div class="event-card__body">
              <h3 class="event-card__title">Investor forums and site visits</h3>
              <p class="event-card__copy">
                Ministry-hosted briefings, Mloganzila site tours, and TMDA pre‑licensing sessions for qualified investors.
              </p>
              <ul class="event-card__list">
                <li>Sector briefings with Ministry of Health</li>
                <li>Guided Mloganzila zone site visit</li>
                <li>TMDA pre‑licensing consultation window</li>
              </ul>
              <button
                type="button"
                class="event-card__cta"
                @click.prevent="scrollTo('inquiry')"
              >
                Register interest
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </article>
        </div>
      </div>
      <div class="section-cta d-flex flex-wrap gap-3 justify-content-center align-items-center">
        <router-link to="/about" class="link-cta">Read more about engagement <i class="bi bi-arrow-right"></i></router-link>
        <a href="#inquiry" class="btn btn-primary btn-sm rounded-pill px-4" @click.prevent="scrollTo('inquiry')">Register for updates</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.events-grid {
  margin-top: 0.5rem;
}

.event-card {
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(13, 59, 102, 0.08);
  background: radial-gradient(circle at top left, #0d3b66 0%, #041425 55%, #020b18 100%);
  color: #fff;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
}

.event-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1.1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.08), transparent);
}

.event-card__pill {
  font-size: 0.78rem;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  font-weight: 600;
}

.event-card__badge {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 600;
  opacity: 0.8;
}

.event-card__body {
  padding: 1.3rem 1.4rem 1.4rem;
}

.event-card__title {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.55rem;
}

.event-card__copy {
  font-size: 0.86rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 0.7rem;
}

.event-card__list {
  list-style: none;
  padding-left: 0;
  margin: 0 0 0.9rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.85);
}

.event-card__list li {
  position: relative;
  padding-left: 1.2rem;
  margin-bottom: 0.25rem;
}

.event-card__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.38rem;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: var(--color-accent);
}

.event-card__cta {
  border: none;
  background: #ffffff;
  color: var(--color-primary);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.45rem 1.1rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
}

.event-card__cta i {
  font-size: 0.85em;
}
</style>
