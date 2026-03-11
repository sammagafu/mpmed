<script setup lang="ts">
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__top">
      <div class="container">
        <div class="site-footer__grid">
          <div class="site-footer__brand-block">
            <div class="site-footer__brand">MPMED-SEZ</div>
            <p class="site-footer__tagline">
              East Africa’s only dual-sector zone for pharma and medical devices. Official investment portal of the Ministry of Health, United Republic of Tanzania.
            </p>
            <p class="site-footer__meta">🇹🇿 Ministry of Health · United Republic of Tanzania</p>
            <router-link :to="{ path: '/', hash: '#inquiry' }" class="site-footer__cta">Express interest</router-link>
          </div>
          <nav class="site-footer__nav" aria-label="Footer navigation">
            <div class="site-footer__col">
              <h6 class="site-footer__heading">Investment</h6>
              <ul class="site-footer__list">
                <li><router-link to="/#sectors" class="site-footer__link">Pharmaceuticals</router-link></li>
                <li><router-link to="/#sectors" class="site-footer__link">Medical devices</router-link></li>
                <li><router-link to="/#opportunities" class="site-footer__link">Opportunities</router-link></li>
                <li><router-link to="/#incentives" class="site-footer__link">Incentives</router-link></li>
                <li><router-link to="/#zone-map" class="site-footer__link">Zone overview</router-link></li>
              </ul>
            </div>
            <div class="site-footer__col">
              <h6 class="site-footer__heading">Regulatory</h6>
              <ul class="site-footer__list">
                <li><router-link to="/#regulatory" class="site-footer__link">TMDA — Pharma</router-link></li>
                <li><router-link to="/#regulatory" class="site-footer__link">TMDA — Devices</router-link></li>
                <li><router-link to="/#regulatory" class="site-footer__link">TISEZA</router-link></li>
                <li><router-link to="/#regulatory" class="site-footer__link">BRELA</router-link></li>
              </ul>
            </div>
            <div class="site-footer__col">
              <h6 class="site-footer__heading">Ministry</h6>
              <ul class="site-footer__list">
                <li><router-link to="/#investor-hub" class="site-footer__link">Investor hub</router-link></li>
                <li><router-link to="/#documents" class="site-footer__link">Documents</router-link></li>
                <li><router-link to="/#inquiry" class="site-footer__link">Express interest</router-link></li>
                <li><router-link to="/about" class="site-footer__link">About</router-link></li>
                <li><router-link to="/privacy" class="site-footer__link">Privacy</router-link></li>
                <li><router-link to="/terms" class="site-footer__link">Terms</router-link></li>
                <li><router-link to="/accessibility" class="site-footer__link">Accessibility</router-link></li>
                <li><router-link to="/sitemap" class="site-footer__link">Sitemap</router-link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="site-footer__bottom">
      <div class="container">
        <span>© {{ new Date().getFullYear() }} MPMED-SEZ — Ministry of Health, United Republic of Tanzania</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: 4rem;
  font-family: var(--font-display);
  background: radial-gradient(circle at top left, #041425 0%, #0d3b66 45%, #020b18 100%);
  color: rgba(255, 255, 255, 0.92);
  position: relative;
}
.site-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--mpmed-accent), var(--mpmed-primary));
  opacity: 0.9;
}
.site-footer__top {
  padding: 3rem 0 2rem;
}
.site-footer__grid {
  display: grid;
  gap: 2.5rem;
}
@media (min-width: 768px) {
  .site-footer__grid {
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
  }
}
@media (min-width: 992px) {
  .site-footer__grid {
    grid-template-columns: 340px 1fr;
  }
}
.site-footer__brand-block {
  max-width: 360px;
}
.site-footer__brand {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  margin-bottom: 0.75rem;
}
.site-footer__tagline {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: 0.75rem;
}
.site-footer__meta {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 1.25rem;
}
.site-footer__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff !important;
  background: var(--mpmed-accent);
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: background 0.2s ease, transform 0.15s ease;
}
.site-footer__cta:hover {
  background: #156b4d;
  color: #fff !important;
  transform: translateY(-1px);
}
.site-footer__nav {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
}
@media (min-width: 576px) {
  .site-footer__nav {
    grid-template-columns: repeat(3, 1fr);
  }
}
.site-footer__heading {
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.75rem;
}
.site-footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.site-footer__list li {
  margin-bottom: 0.4rem;
}
.site-footer__link {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color 0.2s ease, padding-left 0.2s ease;
}
.site-footer__link:hover {
  color: var(--mpmed-accent) !important;
  padding-left: 4px;
}
.site-footer__bottom {
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
}
.site-footer__bottom span {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.5);
}
</style>
