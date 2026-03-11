<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const sectionRef = ref<HTMLElement | null>(null)
const { isInView } = useScrollAnimation({ observeRef: sectionRef })
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

// Per QA: show "Coming Soon" when files are not available — do not show fake file sizes with dead links.
const documents = [
  { title: 'Pharmaceutical Manufacturing Licensing Guide — TMDA', category: 'Regulatory · TMDA' },
  { title: 'Medical Device Registration and ISO 13485 Guide — TMDA', category: 'Regulatory · TMDA' },
  { title: 'MPMED-SEZ 600ha Zone Master Development Plan', category: 'Planning · Ministry of Health / TISEZA' },
  { title: 'Tax Incentives and Investment Certificate Guide — TISEZA', category: 'Incentives · TISEZA' },
  { title: 'Tanzania Pharmaceuticals Market Analysis — Import Substitution 2025', category: 'Research · Ministry of Health' },
  { title: 'Medical Devices and Consumables Market Profile — Tanzania 2025', category: 'Research · Ministry of Health' },
  { title: 'National Health Investment Policy 2024–2030', category: 'Policy · Ministry of Health' },
  { title: 'Pharmaceutical and Medical Device Facility Feasibility Templates (XLSX)', category: 'Template · Ministry of Health' },
  { title: 'Pharmaceutical Sector Profile — East Africa (WHO AFRO)', category: 'Sector · WHO AFRO' },
]
</script>

<template>
  <section ref="sectionRef" id="documents" class="bg-white animate-in-view" :class="{ 'in-view': isInView }">
    <div class="container">
      <div class="section-head">
        <span class="section-label">Documents</span>
        <h2 class="section-title">Policy, regulatory guides, and market intelligence</h2>
      </div>
      <p class="section-lead text-center mx-auto mb-5">
        Licensing guides, zone plans, incentives, and market reports from MoH and partner authorities.
      </p>
      <div class="row g-2 documents-list">
        <div v-for="doc in documents" :key="doc.title" class="col-12">
          <article class="card document-card">
            <div class="card-body">
              <div class="document-card__icon">
                <i class="bi bi-file-earmark-text"></i>
              </div>
              <div class="document-card__content">
                <h3 class="document-card__title">{{ doc.title }}</h3>
                <span class="document-card__meta">{{ doc.category }}</span>
              </div>
              <button
                type="button"
                class="document-card__cta"
                @click.prevent="scrollTo('inquiry')"
              >
                Request copy
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </article>
        </div>
      </div>
      <div class="section-cta">
        <a href="#inquiry" class="btn btn-primary rounded-pill px-4" @click.prevent="scrollTo('inquiry')">Request document pack</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.documents-list {
  margin-top: 0.25rem;
}

.document-card {
  border-radius: 14px;
  border: 1px solid rgba(13, 59, 102, 0.06);
  box-shadow: 0 10px 28px rgba(10, 37, 64, 0.08);
}

.document-card .card-body {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.9rem 1rem;
  align-items: center;
  padding: 0.9rem 1.1rem;
}

.document-card__icon {
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 999px;
  background: rgba(13, 59, 102, 0.06);
  color: var(--color-primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.05rem;
}

.document-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.document-card__title {
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0;
  color: var(--color-text);
}

.document-card__meta {
  font-size: 0.78rem;
  color: var(--color-text-muted);
}

.document-card__cta {
  border: none;
  background: none;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-accent);
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  cursor: pointer;
  white-space: nowrap;
}

.document-card__cta i {
  font-size: 0.85em;
}

@media (max-width: 575px) {
  .document-card .card-body {
    grid-template-columns: auto minmax(0, 1fr);
    grid-auto-rows: auto;
  }

  .document-card__cta {
    justify-self: flex-start;
    margin-left: 2.5rem;
  }
}
</style>
