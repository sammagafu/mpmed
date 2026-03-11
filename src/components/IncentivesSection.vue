<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const sectionRef = ref<HTMLElement | null>(null)
const { isInView } = useScrollAnimation({ observeRef: sectionRef })
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section ref="sectionRef" id="incentives" class="bg-white animate-in-view" :class="{ 'in-view': isInView }">
    <div class="container">
      <div class="section-head">
        <span class="section-label">Investment incentives</span>
        <h2 class="section-title">Competitive economics for pharma and device manufacturers</h2>
      </div>
      <p class="section-lead text-center mx-auto mb-5">
        Tanzania’s TISEZA investment framework delivers one of East Africa’s most competitive incentive environments for pharmaceutical and medical device manufacturers—including zero import duty, reduced corporate tax, and MSD preferential procurement for local production.
      </p>
      <div class="row g-4 incentives-grid">
        <div class="col-md-6 col-lg-3">
          <div class="card h-100 border-0 incentive-card incentive-card--accent">
            <div class="card-body">
              <div class="incentive-card__icon"><i class="bi bi-percent"></i></div>
              <div class="incentive-card__content">
                <span class="incentive-card__stat">10 yrs</span>
                <h3 class="incentive-card__title">Corporate tax holiday</h3>
                <p class="incentive-card__copy">Zero corporate income tax for the first 10 years for qualifying pharma and medical device investments in the zone.</p>
                <button type="button" class="incentive-card__link" @click.prevent="scrollTo('documents')">
                  Read incentive framework
                  <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card h-100 border-0 incentive-card incentive-card--primary">
            <div class="card-body">
              <div class="incentive-card__icon"><i class="bi bi-box-arrow-in-down"></i></div>
              <div class="incentive-card__content">
                <span class="incentive-card__stat">0%</span>
                <h3 class="incentive-card__title">Import duty on capital goods</h3>
                <p class="incentive-card__copy">Zero import duty on equipment, capital goods, and raw materials for pharma and device production.</p>
                <button type="button" class="incentive-card__link" @click.prevent="scrollTo('documents')">
                  Read incentive framework
                  <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card h-100 border-0 incentive-card incentive-card--warm">
            <div class="card-body">
              <div class="incentive-card__icon"><i class="bi bi-globe"></i></div>
              <div class="incentive-card__content">
                <span class="incentive-card__stat">100%</span>
                <h3 class="incentive-card__title">100% foreign ownership</h3>
                <p class="incentive-card__copy">Qualifying pharma and device investments can be 100% foreign-owned with full capital and profit repatriation.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card h-100 border-0 incentive-card incentive-card--muted">
            <div class="card-body">
              <div class="incentive-card__icon"><i class="bi bi-award"></i></div>
              <div class="incentive-card__content">
                <span class="incentive-card__stat">3 days</span>
                <h3 class="incentive-card__title">Investment certificate in 3 days</h3>
                <p class="incentive-card__copy">TISEZA investment certificate within 3 working days for qualifying projects—unlocks tax exemptions, land access, and immigration benefits.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card h-100 border-0 incentive-card incentive-card--accent">
            <div class="card-body">
              <div class="incentive-card__icon"><i class="bi bi-receipt"></i></div>
              <div class="incentive-card__content">
                <h3 class="incentive-card__title">VAT relief</h3>
                <p class="incentive-card__copy">VAT exemption on goods and services purchased within the zone.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card h-100 border-0 incentive-card incentive-card--primary">
            <div class="card-body">
              <div class="incentive-card__icon"><i class="bi bi-cart-check"></i></div>
              <div class="incentive-card__content">
                <h3 class="incentive-card__title">Preferential procurement</h3>
                <p class="incentive-card__copy">15% government price preference for locally manufactured products. MSD runs dedicated tenders for local manufacturers; zero importation for products made locally in sufficient quantity.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card h-100 border-0 incentive-card incentive-card--warm">
            <div class="card-body">
              <div class="incentive-card__icon"><i class="bi bi-clipboard-check"></i></div>
              <div class="incentive-card__content">
                <h3 class="incentive-card__title">GMP and ISO 13485 advisory</h3>
                <p class="incentive-card__copy">TMDA technical unit in-zone provides pre-licensing GMP and ISO 13485 support for investors.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card h-100 border-0 incentive-card incentive-card--muted">
            <div class="card-body">
              <div class="incentive-card__icon"><i class="bi bi-layers"></i></div>
              <div class="incentive-card__content">
                <h3 class="incentive-card__title">TISEZA One Stop Centre</h3>
                <p class="incentive-card__copy">Single facilitation window—TISEZA coordinates certificates, licences, permits, immigration, tax, and TMDA liaison through the One Stop Facilitation Centre.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-cta d-flex flex-wrap gap-3 justify-content-center align-items-center">
        <a href="#documents" class="btn btn-outline-primary rounded-pill px-4" @click.prevent="scrollTo('documents')">Read full framework</a>
        <a href="#inquiry" class="btn btn-primary rounded-pill px-4" @click.prevent="scrollTo('inquiry')">Submit expression of interest</a>
        <a href="#regulatory" class="link-cta" @click.prevent="scrollTo('regulatory')">Regulatory pathways <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.incentives-grid {
  margin-top: 0.75rem;
}

.incentive-card {
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 16px 40px rgba(10, 37, 64, 0.1);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}
.incentive-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 50px rgba(10, 37, 64, 0.16);
}

.incentive-card .card-body {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 1rem;
  padding: 1.4rem 1.4rem;
}

.incentive-card__icon {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: #fff;
}

.incentive-card--accent .incentive-card__icon { background: linear-gradient(135deg, #1a7f5e, #0d3b66); }
.incentive-card--primary .incentive-card__icon { background: linear-gradient(135deg, #0d3b66, #082847); }
.incentive-card--warm .incentive-card__icon { background: linear-gradient(135deg, #c49345, #8a5d15); }
.incentive-card--muted .incentive-card__icon { background: linear-gradient(135deg, #5c6b7a, #1a2b3c); }

.incentive-card--accent {
  background: linear-gradient(135deg, #f0faf6, #e6f3ff);
}
.incentive-card--primary {
  background: linear-gradient(135deg, #edf3ff, #f5f7fb);
}
.incentive-card--warm {
  background: linear-gradient(135deg, #fff7ea, #fdf4e6);
}
.incentive-card--muted {
  background: linear-gradient(135deg, #f3f4f6, #eef1f6);
}

.incentive-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.incentive-card__stat {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-primary);
}

.incentive-card__title {
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 0;
  color: var(--color-text);
}

.incentive-card__copy {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin: 0.15rem 0 0;
}

.incentive-card__link {
  margin-top: 0.45rem;
  padding: 0;
  border: none;
  background: none;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-accent);
  cursor: pointer;
}

.incentive-card__link i {
  font-size: 0.85em;
}

@media (max-width: 575px) {
  .incentive-card .card-body {
    grid-template-columns: 1fr;
  }

  .incentive-card__icon {
    width: 2.4rem;
    height: 2.4rem;
  }
}
</style>
