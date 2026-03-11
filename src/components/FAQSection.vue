<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const sectionRef = ref<HTMLElement | null>(null)
const { isInView } = useScrollAnimation({ observeRef: sectionRef })
const openId = ref<string | null>(null)
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
const faqs = [
  {
    id: 'tax',
    q: 'What is the tax treatment for qualifying investments?',
    a: '10-year corporate tax holiday—zero corporate income tax for the first decade. Plus VAT relief and zero import duty on capital goods and raw materials.',
  },
  {
    id: 'land',
    q: 'How do I acquire land in the zone?',
    a: 'Land is allocated through the MPMED-SEZ Facilitation Desk with TISEZA. Sizes are set per opportunity (e.g. 5.2 ha for generic medicines). Submit an inquiry for current lease terms and cost per hectare.',
  },
  {
    id: 'repatriation',
    q: 'Can I repatriate capital and profits?',
    a: 'Yes. Qualifying pharma and device investments can be 100% foreign-owned with full capital and profit repatriation. Tanzania Investment Centre registers repatriation guarantees.',
  },
  {
    id: 'timeline',
    q: 'What is the timeline from inquiry to production?',
    a: 'Inquiry → expression of interest → land allocation → construction → GMP/ISO (TMDA) → manufacturing authorisation → production. TMDA review: 30–90 days pharma, 45–120 days devices. Single-window facilitation throughout.',
  },
  {
    id: 'sectors',
    q: 'Which sectors qualify for incentives?',
    a: 'Pharma (generic medicines, biologics, APIs, vaccines, traditional) and medical devices (precision, consumables, IVDs, digital health). Cold-chain logistics and biomedical R&D in-zone also qualify.',
  },
  {
    id: 'tmda',
    q: 'How do I get TMDA manufacturing authorisation?',
    a: 'Pre-application and GMP readiness → TMDA site inspection → product dossier (30–90 days) → Manufacturing Authorisation Certificate → post-market surveillance and annual renewal. TMDA has a technical unit in-zone for pre-licensing support.',
  },
  {
    id: 'device',
    q: 'What is required for medical device registration?',
    a: 'Device classification (Class I–IV), ISO 13485 for the facility, technical file (45–120 days review), then TMDA Medical Device Registration Certificate. Annual renewal and zone compliance apply.',
  },
  {
    id: 'response',
    q: 'How quickly will I get a response?',
    a: 'Within 48 working hours with a sector-specific information pack. Include a phone or WhatsApp number for faster follow-up.',
  },
  {
    id: 'ownership',
    q: 'Can my company be 100% foreign-owned?',
    a: 'Yes. Qualifying pharma and device investments can be 100% foreign-owned. Tanzania Investment Centre confirms ownership and repatriation for qualifying projects.',
  },
  {
    id: 'procurement',
    q: 'Do zone products get government procurement preference?',
    a: 'Yes. Medicines and medical devices manufactured in MPMED-SEZ qualify for Ministry of Health and government health preferential procurement.',
  },
]
</script>

<template>
  <section ref="sectionRef" id="faq" class="bg-white animate-in-view" :class="{ 'in-view': isInView }">
    <div class="container">
      <div class="section-head">
        <span class="section-label">FAQ</span>
        <h2 class="section-title">Answers for investors</h2>
      </div>
      <p class="section-lead text-center mx-auto mb-4">
        Tax, land, repatriation, timelines, and regulatory pathways—quick answers for pharma and device investors.
      </p>
      <div class="accordion" id="faqAccordion">
        <div v-for="faq in faqs" :key="faq.id" class="accordion-item">
          <h3 class="accordion-header">
            <button
              class="accordion-button"
              :class="{ collapsed: openId !== faq.id }"
              type="button"
              :aria-expanded="openId === faq.id"
              @click="openId = openId === faq.id ? null : faq.id"
            >
              {{ faq.q }}
            </button>
          </h3>
          <div
            :id="`collapse-${faq.id}`"
            class="accordion-collapse collapse"
            :class="{ show: openId === faq.id }"
            data-bs-parent="#faqAccordion"
          >
            <div class="accordion-body small">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>
      <div class="section-cta">
        <a href="#inquiry" class="btn btn-primary rounded-pill px-4" @click.prevent="scrollTo('inquiry')">Still have questions? Express interest</a>
      </div>
    </div>
  </section>
</template>
