<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import { siteConfig } from '../config/site'

const sectionRef = ref<HTMLElement | null>(null)
const { isInView } = useScrollAnimation({ observeRef: sectionRef })
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section ref="sectionRef" id="regulatory" class="section--dark animate-in-view" :class="{ 'in-view': isInView }">
    <div class="container">
      <div class="section-head">
        <span class="section-label">Regulatory pathways</span>
        <h2 class="section-title">Two sector pathways. One coordinated gateway.</h2>
      </div>
      <p class="section-lead text-center mx-auto mb-5">
        Clear, fast licensing for pharma and device manufacturers—coordinated through TISEZA’s One Stop Facilitation Centre and TMDA’s dedicated zone desk.
      </p>
      <div class="row g-4 mb-5">
        <div class="col-lg-6">
          <div class="card h-100 card--accent">
            <div class="card-body">
              <div class="card-icon"><i class="bi bi-capsule"></i></div>
              <h3 class="h6 fw-bold card-title">Pharmaceutical manufacturers</h3>
              <h4 class="h6 text-muted mt-2">TMDA pharmaceutical licensing</h4>
              <p class="small mb-3">
                Zone-specific TMDA pathway from first consultation to Manufacturing Authorisation, with a 60‑day review window for domestic products and reduced fees for zone investors.
              </p>
              <ol class="list-num small mb-0">
                <li>Pre‑application clinic at TMDA–TISEZA desk; facility classification and GMP readiness.</li>
                <li>Layout approval, supervised construction and WHO‑GMP inspection by TMDA.</li>
                <li>Product dossier review (60 days domestic / 180 days import) and Manufacturing Authorisation, with ongoing GMP renewal.</li>
              </ol>
              <a href="#documents" class="link-cta mt-3 d-inline-flex" @click.prevent="scrollTo('documents')">Read more — licensing guides <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card h-100 card--primary">
            <div class="card-body">
              <div class="card-icon"><i class="bi bi-cpu"></i></div>
              <h3 class="h6 fw-bold card-title">Medical device manufacturers</h3>
              <h4 class="h6 text-muted mt-2">TMDA device registration</h4>
              <p class="small mb-3">
                Streamlined TMDA registration for devices and IVDs assembled in MPMED‑SEZ, aligned with ISO 13485 requirements.
              </p>
              <ol class="list-num small mb-0">
                <li>Device classification (Class I–IV) and pre‑submission meeting with TMDA.</li>
                <li>ISO 13485 certification and technical file review (design, safety, clinical evidence).</li>
                <li>Issuance of TMDA Medical Device Registration Certificate and ongoing post‑market surveillance.</li>
              </ol>
              <a href="#documents" class="link-cta mt-3 d-inline-flex" @click.prevent="scrollTo('documents')">Read more — licensing guides <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row g-4 authority-cards">
        <div class="col-md-6 col-lg-6">
          <div class="card h-100 card--accent card--strip card--dark authority-card">
            <div class="card-body">
              <div class="card-icon"><i class="bi bi-shield-check"></i></div>
              <div class="authority-card__content">
                <h3 class="h6 fw-bold card-title mb-1">TMDA</h3>
                <p class="authority-card__subtitle">Tanzania Medicines &amp; Medical Devices Authority</p>
                <ul class="authority-card__list">
                  <li>GMP‑based authorisation for pharma manufacturers.</li>
                  <li>ISO 13485‑aligned pathway for devices and IVDs.</li>
                  <li>Ongoing pharmacovigilance and post‑market surveillance.</li>
                </ul>
                <a :href="siteConfig.externalLinks.tmda" target="_blank" rel="noopener noreferrer" class="authority-card__btn btn btn-sm rounded-pill">
                  <i class="bi bi-box-arrow-up-right me-1"></i>Open TMDA portal
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="card h-100 card--primary card--strip authority-card">
            <div class="card-body">
              <div class="card-icon"><i class="bi bi-building"></i></div>
              <div class="authority-card__content">
                <h3 class="h6 fw-bold card-title mb-1">TISEZA</h3>
                <p class="authority-card__subtitle">Export Processing Zones Authority</p>
                <ul class="authority-card__list">
                  <li>Zone licences for pharma and device manufacturers.</li>
                  <li>Investor onboarding, SEZ compliance and aftercare.</li>
                  <li>Coordination with TMDA, TIC and BRELA for zone investors.</li>
                </ul>
                <a :href="siteConfig.externalLinks.tiseza" target="_blank" rel="noopener noreferrer" class="authority-card__btn btn btn-sm rounded-pill">
                  <i class="bi bi-box-arrow-up-right me-1"></i>Open TISEZA portal
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="card h-100 card--warm card--strip authority-card">
            <div class="card-body">
              <div class="card-icon"><i class="bi bi-bank"></i></div>
              <div class="authority-card__content">
                <h3 class="h6 fw-bold card-title mb-1">Tanzania Investment Centre</h3>
                <p class="authority-card__subtitle">Investment certificate and facilitation</p>
                <ul class="authority-card__list">
                  <li>Investment certificates, typically processed within three working days.</li>
                  <li>Gateway to fiscal incentives, land access and immigration support.</li>
                  <li>Aftercare services for both domestic and foreign investors.</li>
                </ul>
                <a :href="siteConfig.externalLinks.tiseza" target="_blank" rel="noopener noreferrer" class="authority-card__btn btn btn-sm rounded-pill">
                  <i class="bi bi-box-arrow-up-right me-1"></i>Open TIC portal
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="card h-100 card--muted card--strip authority-card">
            <div class="card-body">
              <div class="card-icon"><i class="bi bi-clipboard-check"></i></div>
              <div class="authority-card__content">
                <h3 class="h6 fw-bold card-title mb-1">BRELA</h3>
                <p class="authority-card__subtitle">Business Registrations &amp; Licensing Agency</p>
                <ul class="authority-card__list">
                  <li>Incorporation for local and foreign pharma and device companies.</li>
                  <li>Online name search, reservation and TIN issuance.</li>
                  <li>Manufacturing licences and ongoing compliance renewals.</li>
                </ul>
                <a :href="siteConfig.externalLinks.brela" target="_blank" rel="noopener noreferrer" class="authority-card__btn btn btn-sm rounded-pill">
                  <i class="bi bi-box-arrow-up-right me-1"></i>Open BRELA portal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-cta d-flex flex-wrap gap-3 justify-content-center align-items-center">
        <a href="#inquiry" class="btn btn-primary rounded-pill px-4" @click.prevent="scrollTo('inquiry')">Need licensing support? Express interest</a>
        <a href="#documents" class="link-cta" @click.prevent="scrollTo('documents')">Read full licensing guides <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-head .section-label {
  background: rgba(15, 23, 42, 0.9);
  border-color: rgba(148, 163, 184, 0.65);
  color: #e5e7eb;
}

.section-head .section-label::after {
  background: var(--color-accent);
}
</style>
