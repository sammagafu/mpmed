<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const sectionRef = ref<HTMLElement | null>(null)
const { isInView } = useScrollAnimation({ observeRef: sectionRef })

type SectorFilter = 'all' | 'pharmaceuticals' | 'medical-devices' | 'logistics' | 'rnd'

const activeFilter = ref<SectorFilter>('all')

const opportunities = [
  {
    sector: 'pharmaceuticals' as const,
    icon: 'bi-capsule',
    title: 'Generic medicines manufacturing plant',
    description: "WHO-GMP facility for Tanzania's essential medicines list—solid dosage, injectables, oral liquids, topicals. Only 19 domestic manufacturers versus 726 foreign; domestic production is a national priority. TMDA 60-day fast-track for domestic products; MSD 15% price preference and dedicated local tenders.",
    minInvestment: '$8M USD',
    land: '5.2 ha',
    extra: 'Tax holiday',
  },
  {
    sector: 'medical-devices' as const,
    icon: 'bi-box-seam',
    title: 'Clinical consumables manufacturing facility',
    description: "High-volume production of gloves, syringes, IV sets, wound care, PPE. Tanzania's largest import-substitution opportunity by unit volume. Direct MoH public procurement and MSD tender access for local manufacturers.",
    minInvestment: '$5M USD',
    land: '4.0 ha',
    extra: 'East Africa',
  },
  {
    sector: 'pharmaceuticals' as const,
    icon: 'bi-droplet',
    title: 'API synthesis and raw materials facility',
    description: "Active Pharmaceutical Ingredient production—no API or excipients manufacturing exists in Tanzania or the wider EAC; 100% of APIs are imported. Dedicated API cluster with chemical engineering infrastructure.",
    minInvestment: '$12M USD',
    land: '6.5 ha',
    extra: 'IRR target 20–25%',
  },
  {
    sector: 'medical-devices' as const,
    icon: 'bi-clipboard-pulse',
    title: 'In-vitro diagnostics (IVD) production unit',
    description: 'Reagents, rapid test kits, lab equipment for malaria, HIV, TB, NCDs. Vast majority of diagnostics are imported; WHO Emergency Use Listing pathway supported in-zone.',
    minInvestment: '$3.5M USD',
    land: '2.2 ha',
    extra: 'Payback 5–7 yrs',
  },
  {
    sector: 'logistics' as const,
    icon: 'bi-truck',
    title: 'Cold-chain pharmaceutical logistics hub',
    description: 'GMP cold-chain storage and distribution for vaccines, biologics, and temperature-sensitive medicines—serving the zone and East African supply chain.',
    minInvestment: '$2.2M USD',
    land: '2,400 m²',
    extra: 'East Africa',
  },
  {
    sector: 'rnd' as const,
    icon: 'bi-lightbulb',
    title: 'Biomedical R&D and innovation centre',
    description: 'Clinical research and health tech development—linked to Muhimbili National Hospital and Tanzanian universities. Partnership-ready.',
    minInvestment: '$2.8M USD',
    land: 'MNH / UDSM',
    extra: 'Demand gap high',
  },
]

const filteredOpportunities = computed(() => {
  if (activeFilter.value === 'all') return opportunities
  return opportunities.filter((o) => o.sector === activeFilter.value)
})

const filters: { value: SectorFilter; label: string }[] = [
  { value: 'all', label: 'All sectors' },
  { value: 'pharmaceuticals', label: 'Pharmaceuticals' },
  { value: 'medical-devices', label: 'Medical devices' },
  { value: 'logistics', label: 'Logistics' },
  { value: 'rnd', label: 'R&D' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section ref="sectionRef" id="opportunities" class="section--alt animate-in-view" :class="{ 'in-view': isInView }">
    <div class="container">
      <div class="section-head">
        <span class="section-label">Investment opportunities</span>
        <h2 class="section-title">Open for investment right now</h2>
      </div>
      <p class="section-lead text-center mx-auto mb-4">
        Priority opportunities in MPMED-SEZ. Filter by sector and submit your expression of interest.
      </p>
      <div class="d-flex flex-wrap gap-2 justify-content-center mb-4">
        <button
          v-for="f in filters"
          :key="f.value"
          type="button"
          class="btn rounded-pill"
          :class="activeFilter === f.value ? 'btn-primary' : 'btn-outline-secondary'"
          @click="activeFilter = f.value"
        >
          {{ f.label }}
        </button>
      </div>
      <div class="row g-4 opportunities-grid">
        <div v-for="(opp, idx) in filteredOpportunities" :key="opp.title" class="col-md-6">
          <article class="card opportunity-card" :class="'opportunity-card--' + ['accent','primary','warm','muted'][idx % 4]">
            <div class="card-body">
              <div class="opportunity-card__icon">
                <i :class="['bi', opp.icon]"></i>
              </div>
              <div class="opportunity-card__content">
                <div class="opportunity-card__meta">
                  <span class="opportunity-card__pill text-capitalize">{{ opp.sector.replace('-', ' ') }}</span>
                  <span class="opportunity-card__figure">{{ opp.minInvestment }} · {{ opp.land }}</span>
                </div>
                <h3 class="opportunity-card__title">{{ opp.title }}</h3>
                <button
                  type="button"
                  class="opportunity-card__cta"
                  @click.prevent="scrollTo('inquiry')"
                >
                  Express interest
                  <span class="opportunity-card__cta-icon" aria-hidden="true">
                    <i class="bi bi-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="section-cta">
        <a href="#inquiry" class="btn btn-primary rounded-pill px-4" @click.prevent="scrollTo('inquiry')">Submit expression of interest</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.opportunities-grid {
  margin-top: 0.75rem;
}

.opportunity-card {
  border-radius: 18px;
  border: 1px solid rgba(13, 59, 102, 0.06);
  box-shadow: 0 14px 36px rgba(10, 37, 64, 0.1);
  overflow: hidden;
}

.opportunity-card .card-body {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 1.25rem;
  padding: 1.5rem 1.5rem;
}

.opportunity-card__icon {
  width: 3rem;
  height: 3rem;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #fff;
}

.opportunity-card--accent .opportunity-card__icon { background: linear-gradient(135deg, #1fb78b, #0d3b66); }
.opportunity-card--primary .opportunity-card__icon { background: linear-gradient(135deg, #0d3b66, #082847); }
.opportunity-card--warm .opportunity-card__icon { background: linear-gradient(135deg, #c49345, #8a5d15); }
.opportunity-card--muted .opportunity-card__icon { background: linear-gradient(135deg, #5c6b7a, #1a2b3c); }

.opportunity-card--accent {
  background: linear-gradient(135deg, #f0faf6, #e6f3ff);
}
.opportunity-card--primary {
  background: linear-gradient(135deg, #edf3ff, #f5f7fb);
}
.opportunity-card--warm {
  background: linear-gradient(135deg, #fff7ea, #fdf4e6);
}
.opportunity-card--muted {
  background: linear-gradient(135deg, #f3f4f6, #eef1f6);
}

.opportunity-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.opportunity-card__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.75rem;
  font-size: 0.8rem;
}

.opportunity-card__pill {
  padding: 0.18rem 0.6rem;
  border-radius: 999px;
  background: rgba(13, 59, 102, 0.06);
  color: var(--color-primary);
  font-weight: 600;
}

.opportunity-card__figure {
  color: var(--color-text-muted);
}

.opportunity-card__title {
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--color-text);
}

.opportunity-card__cta {
  margin-top: 0.35rem;
  padding: 0;
  border: none;
  background: none;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-accent);
  cursor: pointer;
}

.opportunity-card__cta-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.35rem;
  height: 1.35rem;
  border-radius: 999px;
  background: rgba(31, 183, 139, 0.12);
}

.opportunity-card__cta:hover .opportunity-card__cta-icon {
  background: rgba(31, 183, 139, 0.22);
}

@media (max-width: 575px) {
  .opportunity-card .card-body {
    grid-template-columns: 1fr;
  }

  .opportunity-card__icon {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
