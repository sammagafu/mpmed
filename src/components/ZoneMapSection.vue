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
  <section ref="sectionRef" id="zone-map" class="section--alt animate-in-view" :class="{ 'in-view': isInView }">
    <div class="container">
      <div class="section-head">
        <span class="section-label">Zone layout</span>
        <h2 class="section-title">The 600ha dual-sector industrial site</h2>
      </div>
      <p class="text-center text-muted mb-4 section-lead mx-auto">
        Mloganzila Plateau, 25km west of Dar es Salaam. Two industrial clusters with shared logistics, utilities, and regulatory support.
      </p>
      <div class="row g-4 mb-4">
        <div class="col-md-6">
          <div class="card card--accent card--strip">
            <div class="card-body">
              <div class="card-icon"><i class="bi bi-building"></i></div>
              <h3 class="h6 fw-bold card-title">Pharmaceutical cluster</h3>
              <p class="card-copy">GMP factory shells, pharma-grade water, API production.</p>
              <a href="#sectors" class="card-cta" @click.prevent="scrollTo('sectors')">View sectors</a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card card--primary card--strip">
            <div class="card-body">
              <div class="card-icon"><i class="bi bi-tools"></i></div>
              <h3 class="h6 fw-bold card-title">Medical device cluster</h3>
              <p class="card-copy">ISO 13485 clean-room zone, TMDA support in-zone.</p>
              <a href="#sectors" class="card-cta" @click.prevent="scrollTo('sectors')">View sectors</a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card card--warm card--strip">
            <div class="card-body">
              <div class="card-icon"><i class="bi bi-thermometer-snow"></i></div>
              <h3 class="h6 fw-bold card-title">Cold-chain logistics hub</h3>
              <p class="card-copy">GMP warehousing for both clusters and East African markets.</p>
              <a href="#opportunities" class="card-cta" @click.prevent="scrollTo('opportunities')">View opportunities</a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card card--muted card--strip">
            <div class="card-body">
              <div class="card-icon"><i class="bi bi-lightbulb"></i></div>
              <h3 class="h6 fw-bold card-title">R&D and innovation park</h3>
              <p class="card-copy">Clinical research and health tech—linked to MNH.</p>
              <a href="#opportunities" class="card-cta" @click.prevent="scrollTo('opportunities')">View opportunities</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <p class="small text-muted mb-2">MPMED-SEZ zone layout · Ministry of Health</p>
        <div class="zone-map-placeholder rounded-3 py-5 px-3 mb-3">
          <span class="text-muted">Zone map — Pharma cluster · Device cluster · Logistics · R&D</span>
        </div>
        <div class="section-cta d-flex flex-wrap gap-3 justify-content-center align-items-center">
          <a href="#inquiry" class="btn btn-primary rounded-pill px-4" @click.prevent="scrollTo('inquiry')">Request zone briefing pack</a>
          <router-link to="/about" class="link-cta">Read more about the zone <i class="bi bi-arrow-right"></i></router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.zone-map-placeholder {
  background: rgba(13, 59, 102, 0.06);
  border: 1px dashed rgba(13, 59, 102, 0.15);
  border-radius: var(--mpmed-card-radius);
}
</style>
