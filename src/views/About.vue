<script setup lang="ts"></script>

<template>
  <div class="about-page">
    <!-- Hero -->
    <section class="about-hero">
      <div class="container">
        <span class="section-label">About us</span>
        <h1 class="about-hero__title">About MPMED-SEZ</h1>
        <p class="about-hero__lead">
          MPMED-SEZ is the Ministry of Health’s official investment gateway for pharma and medical device investors at Mloganzila, Dar es Salaam. One zone, two mandates—from API to finished product.
        </p>
      </div>
    </section>

    <!-- Mandate -->
    <section class="section--alt">
      <div class="container">
        <div class="section-head">
          <span class="section-label">Our mandate</span>
          <h2 class="section-title">East Africa’s only dual-sector SEZ</h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="card card--accent card--elevated card--strip">
              <div class="card-body">
                <div class="card-icon"><i class="bi bi-bullseye"></i></div>
                <div>
                  <p class="mb-0">
                    East Africa’s only Special Economic Zone combining pharmaceutical manufacturing and medical device assembly in one site. Full supply chain from API synthesis to clinical deployment. Endorsed by the Ministry of Health and coordinated with TISEZA, TMDA, and BRELA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Governance -->
    <section class="bg-white">
      <div class="container">
        <div class="section-head">
          <span class="section-label">Governance</span>
          <h2 class="section-title">Who runs the zone</h2>
        </div>
        <p class="section-lead text-center mx-auto mb-5">
          The MPMED-SEZ Facilitation Desk operates under the Ministry of Health. Regulatory and registration partners ensure a single-window experience for investors.
        </p>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="card card--accent card--outline h-100">
              <div class="card-body text-center">
                <div class="card-icon mx-auto mb-3"><i class="bi bi-building"></i></div>
                <h3 class="h6 fw-bold">Ministry of Health</h3>
                <p class="small text-muted mb-0">
                  Owns the mandate and operates the MPMED-SEZ Investment Facilitation Desk. Your single point of contact for sector briefings, site visits, and investor support.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card card--primary card--outline h-100">
              <div class="card-body text-center">
                <div class="card-icon mx-auto mb-3"><i class="bi bi-shield-check"></i></div>
                <h3 class="h6 fw-bold">TMDA &amp; TISEZA</h3>
                <p class="small text-muted mb-0">
                  TMDA (Tanzania Medicines and Medical Devices Authority) and TISEZA (Export Processing Zones Authority) provide regulatory oversight and zone licensing.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card card--warm card--outline h-100">
              <div class="card-body text-center">
                <div class="card-icon mx-auto mb-3"><i class="bi bi-clipboard-check"></i></div>
                <h3 class="h6 fw-bold">BRELA</h3>
                <p class="small text-muted mb-0">
                  Business Registrations and Licensing Agency handles company registration, business name search, and sector-specific manufacturing licences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section--alt">
      <div class="container text-center">
        <h2 class="section-title mb-3">Ready to invest?</h2>
        <p class="section-lead mx-auto mb-4">
          Submit your inquiry and receive a sector-specific information pack within 48 hours.
        </p>
        <router-link to="/#inquiry" class="btn btn-primary btn-lg rounded-pill px-4">Submit an inquiry</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  padding-bottom: 0;
}
.about-hero {
  padding: 3rem 0 3.5rem;
  background: linear-gradient(165deg, var(--mpmed-primary) 0%, var(--mpmed-primary-dark) 100%);
  color: #fff;
}
.about-hero .section-label {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
}
.about-hero .section-label::after {
  background: linear-gradient(90deg, var(--mpmed-accent), rgba(255,255,255,0.5));
}
.about-hero__title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #fff;
  margin-bottom: 1rem;
}
.about-hero__lead {
  font-size: 1.125rem;
  line-height: 1.7;
  opacity: 0.95;
  max-width: 42rem;
  margin: 0;
}
@media (max-width: 767px) {
  .about-hero {
    padding: 2.5rem 0 3rem;
  }
  .about-hero__lead {
    font-size: 1rem;
  }
}
</style>
