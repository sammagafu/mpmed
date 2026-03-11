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
  <section ref="sectionRef" id="investor-hub" class="bg-white animate-in-view" :class="{ 'in-view': isInView }">
    <div class="container">
      <div class="section-head">
        <span class="section-label">Investor hub</span>
        <h2 class="section-title">Your one-stop hub for sector data, incentives, and regulatory pathways</h2>
      </div>
      <p class="section-lead text-center mx-auto mb-5">
        Zone maps, investment profiles, policy summaries, and feasibility tools—all in one place.
      </p>
      <div class="investor-hub-grid">
        <div class="card card--accent investor-hub-feature">
          <div class="card-body">
            <div class="card-icon"><i class="bi bi-map"></i></div>
            <h3 class="h5 fw-bold card-title">600ha zone overview</h3>
            <p class="card-copy">Maps, clusters, logistics, R&D park, and master plan.</p>
            <a href="#zone-map" class="card-cta" @click.prevent="scrollTo('zone-map')">View zone map</a>
          </div>
        </div>
        <div class="card card--primary card--outline">
          <div class="card-body">
            <div class="card-icon"><i class="bi bi-file-earmark-medical"></i></div>
            <h3 class="h6 fw-bold card-title">Pharma investment profiles</h3>
            <p class="card-copy">Market demand, GMP requirements, TMDA pathway.</p>
            <a href="#opportunities" class="card-cta" @click.prevent="scrollTo('opportunities')">View opportunities</a>
          </div>
        </div>
        <div class="card card--warm card--outline">
          <div class="card-body">
            <div class="card-icon"><i class="bi bi-cpu"></i></div>
            <h3 class="h6 fw-bold card-title">Device investment profiles</h3>
            <p class="card-copy">ISO 13485, clean-room specs, TMDA registration.</p>
            <a href="#opportunities" class="card-cta" @click.prevent="scrollTo('opportunities')">View opportunities</a>
          </div>
        </div>
        <div class="card card--primary card--outline">
          <div class="card-body">
            <div class="card-icon"><i class="bi bi-award"></i></div>
            <h3 class="h6 fw-bold card-title">Policy and incentives</h3>
            <p class="card-copy">Tax holiday, zero duty, 100% foreign ownership.</p>
            <a href="#incentives" class="card-cta" @click.prevent="scrollTo('incentives')">Read framework</a>
          </div>
        </div>
        <div class="card card--muted card--outline">
          <div class="card-body">
            <div class="card-icon"><i class="bi bi-calculator"></i></div>
            <h3 class="h6 fw-bold card-title">Feasibility templates</h3>
            <p class="card-copy">MoH-approved models for pharma and device projects.</p>
            <a href="#documents" class="card-cta" @click.prevent="scrollTo('documents')">View documents</a>
          </div>
        </div>
        <div class="card card--accent card--outline">
          <div class="card-body">
            <div class="card-icon"><i class="bi bi-people"></i></div>
            <h3 class="h6 fw-bold card-title">Forums and site visits</h3>
            <p class="card-copy">Briefings, site visits, TMDA consultations.</p>
            <a href="#inquiry" class="card-cta card-cta--primary" @click.prevent="scrollTo('inquiry')">Register interest</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.investor-hub-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  .investor-hub-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto auto;
  }
  .investor-hub-feature { grid-row: span 2; }
}
@media (min-width: 992px) {
  .investor-hub-grid {
    grid-template-columns: 1.2fr 1fr 1fr;
    grid-template-rows: auto auto;
  }
  .investor-hub-feature { grid-row: span 2; }
}
</style>
