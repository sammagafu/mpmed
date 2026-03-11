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
  <section ref="sectionRef" id="regulatory" class="section--alt animate-in-view" :class="{ 'in-view': isInView }">
    <div class="container">
      <div class="section-head">
        <span class="section-label">Regulatory pathways</span>
        <h2 class="section-title">Two sector pathways. One coordinated gateway.</h2>
      </div>
      <p class="section-lead text-center mx-auto mb-5">
        Separate licensing tracks for pharmaceutical and medical device manufacturers—both coordinated through TISEZA’s One Stop Facilitation Centre and TMDA’s dedicated desk for zone investors.
      </p>
      <div class="row g-4 mb-5">
        <div class="col-lg-6">
          <div class="card h-100 card--accent">
            <div class="card-body">
              <div class="card-icon"><i class="bi bi-capsule"></i></div>
              <h3 class="h6 fw-bold card-title">Pharmaceutical manufacturers</h3>
              <h4 class="h6 text-muted mt-2">TMDA pharmaceutical licensing</h4>
              <p class="small mb-3">From pre-application to manufacturing authorisation—specific to pharma production in MPMED-SEZ. Accelerated 60-day timeline for domestic products; reduced registration fees for zone investors.</p>
              <ol class="list-num small mb-0">
                <li>Pre-application consultation—facility classification, GMP readiness (TMDA desk at TISEZA)</li>
                <li>Industrial drawings/layout approval—TMDA supervises construction</li>
                <li>WHO-GMP site inspection and compliance evaluation by TMDA</li>
                <li>Product dossier submission (60 days domestic / 180 days import)</li>
                <li>Manufacturing Authorisation Certificate—fast-track for WHO-prequalified products</li>
                <li>Post-market surveillance and annual GMP renewal</li>
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
              <p class="small mb-3">Device and IVD assembly in MPMED-SEZ—ISO 13485 aligned with TMDA registration.</p>
              <ol class="list-num small mb-0">
                <li>Device classification (Class I–IV) and pre-submission with TMDA</li>
                <li>ISO 13485 certification for the facility</li>
                <li>Technical file—design, safety, clinical evidence (45–120 days review)</li>
                <li>TMDA Medical Device Registration Certificate</li>
                <li>Post-market surveillance and annual renewal</li>
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
                  <li>Pharma manufacturing authorisation—GMP pathway</li>
                  <li>Device registration—ISO 13485 / TMDA pathway</li>
                  <li>IVD and WHO-EUL application support</li>
                  <li>Traditional medicine GMP certification</li>
                  <li>Post-market surveillance for both sectors</li>
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
                  <li>Zone licence for pharma and device manufacturers</li>
                  <li>SEZ investor facilitation and compliance</li>
                  <li>Coordination with TMDA and BRELA for zone investors</li>
                  <li>Export processing certification</li>
                  <li>Annual zone compliance renewal</li>
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
                  <li>Investment certificate—3-day processing</li>
                  <li>Unlocks tax exemptions, land access, immigration</li>
                  <li>100% foreign ownership for pharma and device</li>
                  <li>Capital and profit repatriation guarantee</li>
                  <li>Ongoing investor aftercare</li>
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
                  <li>Company registration for local and foreign pharma and device firms</li>
                  <li>Business name search and reservation—online, 24 hours</li>
                  <li>Tax ID (TIN) via TRA integration</li>
                  <li>Sector-specific manufacturing licence</li>
                  <li>Annual renewal and compliance</li>
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
