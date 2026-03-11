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
            <div class="event-card__media" aria-hidden="true"></div>
            <div class="event-card__body">
              <div class="event-card__top">
                <span class="event-card__pill">Next: Q3 2026</span>
                <span class="event-card__badge">Investor forum &amp; site visit</span>
              </div>
              <h3 class="event-card__title">Investor forums and site visits</h3>
              <p class="event-card__copy">
                Ministry-hosted briefings, Mloganzila site tours, and TMDA pre‑licensing sessions for qualified investors.
              </p>
              <ul class="event-card__list">
                <li>Sector briefings with Ministry of Health</li>
                <li>Guided Mloganzila zone site visit</li>
                <li>TMDA pre‑licensing consultation window</li>
              </ul>
              <div class="event-card__footer">
                <div class="event-card__numbers">
                  <div class="event-card__number">
                    <span class="event-card__number-icon" aria-hidden="true"><i class="bi bi-people-fill"></i></span>
                    <div class="event-card__number-content">
                      <span class="event-card__number-value">50+</span>
                      <span class="event-card__number-label">Attendees expected</span>
                    </div>
                  </div>
                  <div class="event-card__number">
                    <span class="event-card__number-icon" aria-hidden="true"><i class="bi bi-calendar3"></i></span>
                    <div class="event-card__number-content">
                      <span class="event-card__number-value">3</span>
                      <span class="event-card__number-label">Days of sessions</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  class="event-card__cta"
                  @click.prevent="scrollTo('inquiry')"
                >
                  Register interest
                  <i class="bi bi-arrow-right"></i>
                </button>
              </div>
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
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(13, 59, 102, 0.08);
  background: var(--color-surface);
  box-shadow: 0 20px 60px rgba(10, 37, 64, 0.14);
}

.event-card__media {
  height: 140px;
  background: radial-gradient(circle at top left, rgba(31, 183, 139, 0.18) 0%, #e9f6ff 40%, #f5f7fb 80%, #fefefe 100%);
}

.event-card__body {
  padding: 1.2rem 1.4rem 1.4rem;
}

.event-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.event-card__pill {
  font-size: 0.78rem;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  background: rgba(13, 59, 102, 0.06);
  font-weight: 600;
}

.event-card__badge {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 600;
  color: var(--color-text-muted);
}

.event-card__title {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.55rem;
  color: var(--color-primary);
}

.event-card__copy {
  font-size: 0.86rem;
  color: var(--color-text-muted);
  margin-bottom: 0.7rem;
}

.event-card__list {
  list-style: none;
  padding-left: 0;
  margin: 0 0 0.9rem;
  font-size: 0.8rem;
  color: var(--color-text);
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

.event-card__footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(13, 59, 102, 0.06);
}

.event-card__numbers {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.event-card__number {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.5rem 0.85rem;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(26, 127, 94, 0.06), rgba(13, 59, 102, 0.04));
  border: 1px solid rgba(13, 59, 102, 0.06);
}

.event-card__number-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 10px;
  background: var(--color-accent);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.event-card__number-content {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.event-card__number-value {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-primary);
  display: block;
  line-height: 1.2;
}

.event-card__number-label {
  font-size: 0.72rem;
  color: var(--color-text-muted);
  font-weight: 500;
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
