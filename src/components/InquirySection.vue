<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import { siteConfig } from '../config/site'

const sectionRef = ref<HTMLElement | null>(null)
const { isInView } = useScrollAnimation({ observeRef: sectionRef })

const submitted = ref(false)
const form = reactive({
  firstName: '',
  lastName: '',
  organisation: '',
  country: '',
  email: '',
  phone: '',
  sector: '',
  investmentRange: '',
  interest: '',
  consent: false,
})
const errors = reactive<Record<string, string>>({})

const sectors = [
  'Essential Medicines Manufacturing',
  'Vaccines and Biologics',
  'API Synthesis',
  'Traditional Medicines Processing',
  'Oncology / Specialty Medicines',
  'Pharmaceutical Packaging',
  'Precision Medical Devices',
  'Clinical Consumables',
  'In-Vitro Diagnostics (IVDs)',
  'Digital Health Hardware',
  'Sterilisation Services',
  'Cold-Chain Pharmaceutical Logistics',
  'Biomedical R&D',
  'Other / Multiple Sectors',
]
const investmentRanges = [
  'Under $1M',
  '$1M – $5M',
  '$5M – $20M',
  '$20M – $100M',
  'Over $100M',
  'To be determined',
]

function validate(): boolean {
  const e: Record<string, string> = {}
  if (!form.firstName.trim()) e.firstName = 'Required'
  if (!form.lastName.trim()) e.lastName = 'Required'
  if (!form.organisation.trim()) e.organisation = 'Required'
  if (!form.country.trim()) e.country = 'Required'
  if (!form.email.trim()) e.email = 'Required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
  if (!form.consent) e.consent = 'You must consent to processing'
  Object.assign(errors, e)
  return Object.keys(e).length === 0
}

function handleSubmit() {
  if (!validate()) return
  // In production: POST to backend; for now simulate success
  submitted.value = true
}
</script>

<template>
  <section ref="sectionRef" id="inquiry" class="bg-white animate-in-view" :class="{ 'in-view': isInView }">
    <div class="container">
      <div class="section-head">
        <span class="section-label">Expression of interest</span>
        <h2 id="inquiry-title" class="section-title">Submit your expression of interest</h2>
      </div>
      <p class="text-center text-muted mb-4 section-lead mx-auto">
        The Ministry of Health invites qualified investors to submit expressions of interest for pharmaceutical and medical device investment in MPMED-SEZ. The Facilitation Desk responds within {{ siteConfig.responseTime }} with a sector-specific information pack.
      </p>
      <div class="row justify-content-center mb-4 inquiry-contacts">
        <div class="col-md-4 mb-3 mb-md-0">
          <article class="inquiry-card inquiry-card--location">
            <div class="inquiry-card__icon" aria-hidden="true">
              <i class="bi bi-geo-alt-fill"></i>
            </div>
            <div class="inquiry-card__label">Address</div>
            <p class="inquiry-card__text">{{ siteConfig.contact.address }}</p>
          </article>
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
          <article class="inquiry-card inquiry-card--email">
            <div class="inquiry-card__icon" aria-hidden="true">
              <i class="bi bi-envelope-fill"></i>
            </div>
            <div class="inquiry-card__label">Email</div>
            <a :href="`mailto:${siteConfig.contact.email}`" class="inquiry-card__link">{{ siteConfig.contact.email }}</a>
          </article>
        </div>
        <div class="col-md-4">
          <article class="inquiry-card inquiry-card--phone">
            <div class="inquiry-card__icon" aria-hidden="true">
              <i class="bi bi-telephone-fill"></i>
            </div>
            <div class="inquiry-card__label">Phone</div>
            <p class="inquiry-card__text">
              {{ siteConfig.contact.phone }}
              <span class="inquiry-card__meta">· MPMED-SEZ Facilitation Desk</span>
            </p>
          </article>
        </div>
      </div>

      <div v-if="submitted" class="row justify-content-center">
        <div class="col-lg-6">
          <div class="alert alert-success text-center rounded-3">
            <strong>Expression of interest received.</strong> The MPMED-SEZ Facilitation Desk will respond within {{ siteConfig.responseTime }}.
          </div>
        </div>
      </div>

      <div v-else class="inquiry-form">
        <form class="row g-3 justify-content-center" role="form" aria-labelledby="inquiry-title" @submit.prevent="handleSubmit">
          <div class="col-12 col-lg-10">
            <h3 class="inquiry-form__section-title">Investor details</h3>
          </div>
        <div class="col-md-6 col-lg-5">
          <label class="form-label" for="firstName">First name <span class="text-danger" aria-hidden="true">*</span></label>
          <input id="firstName" v-model="form.firstName" type="text" class="form-control" :class="{ 'is-invalid': errors.firstName }" required autocomplete="given-name" />
          <div v-if="errors.firstName" class="invalid-feedback">{{ errors.firstName }}</div>
        </div>
        <div class="col-md-6 col-lg-5">
          <label class="form-label" for="lastName">Last name <span class="text-danger" aria-hidden="true">*</span></label>
          <input id="lastName" v-model="form.lastName" type="text" class="form-control" :class="{ 'is-invalid': errors.lastName }" required autocomplete="family-name" />
          <div v-if="errors.lastName" class="invalid-feedback">{{ errors.lastName }}</div>
        </div>
        <div class="col-12 col-lg-10">
          <label class="form-label" for="organisation">Organisation <span class="text-danger" aria-hidden="true">*</span></label>
          <input id="organisation" v-model="form.organisation" type="text" class="form-control" :class="{ 'is-invalid': errors.organisation }" required autocomplete="organization" />
          <div v-if="errors.organisation" class="invalid-feedback">{{ errors.organisation }}</div>
        </div>
        <div class="col-md-6 col-lg-5">
          <label class="form-label" for="country">Country <span class="text-danger" aria-hidden="true">*</span></label>
          <input id="country" v-model="form.country" type="text" class="form-control" :class="{ 'is-invalid': errors.country }" required autocomplete="country-name" />
          <div v-if="errors.country" class="invalid-feedback">{{ errors.country }}</div>
        </div>
        <div class="col-md-6 col-lg-5">
          <label class="form-label" for="email">Email address <span class="text-danger" aria-hidden="true">*</span></label>
          <input id="email" v-model="form.email" type="email" class="form-control" :class="{ 'is-invalid': errors.email }" required autocomplete="email" />
          <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
        </div>
          <div class="col-12 col-lg-10">
            <h3 class="inquiry-form__section-title">Investment details</h3>
          </div>
        <div class="col-12 col-lg-10">
          <label class="form-label" for="phone">Phone / WhatsApp <span class="text-muted">(optional)</span></label>
          <input id="phone" v-model="form.phone" type="tel" class="form-control" placeholder="For faster follow-up" autocomplete="tel" />
        </div>
        <div class="col-12 col-lg-10">
          <label class="form-label" for="sector">Investment sector</label>
          <select id="sector" v-model="form.sector" class="form-select" aria-describedby="sector-hint">
            <option value="">Select primary sector</option>
            <option v-for="s in sectors" :key="s" :value="s">{{ s }}</option>
          </select>
          <p id="sector-hint" class="form-text small text-muted mb-0 mt-1">Choose the sector that best matches your investment focus.</p>
        </div>
          <div class="col-12 col-lg-10">
            <h3 class="inquiry-form__section-title">Consent</h3>
          </div>
        <div class="col-12 col-lg-10">
          <label class="form-label" for="investmentRange">Estimated investment (USD)</label>
          <select id="investmentRange" v-model="form.investmentRange" class="form-select">
            <option value="">Select a range</option>
            <option v-for="r in investmentRanges" :key="r" :value="r">{{ r }}</option>
          </select>
        </div>
        <div class="col-12 col-lg-10">
          <label class="form-label" for="interest">Investment interest</label>
          <textarea
            id="interest"
            v-model="form.interest"
            class="form-control"
            rows="4"
            placeholder="e.g. Generic medicines manufacturing facility, approx. 10M USD; or IVD production unit, 3.5M USD. Include key products or scope if known."
            aria-describedby="interest-hint"
          ></textarea>
          <p id="interest-hint" class="form-text small text-muted mb-0 mt-1">Brief description of your proposed investment helps us tailor our response.</p>
        </div>
        <div class="col-12 col-lg-10">
          <div class="form-check">
            <input id="consent" v-model="form.consent" type="checkbox" class="form-check-input" :class="{ 'is-invalid': errors.consent }" aria-describedby="consent-hint" />
            <label class="form-check-label" for="consent">
              I consent to the Ministry of Health, United Republic of Tanzania, processing my information to respond to this MPMED-SEZ expression of interest and for related investment facilitation.
            </label>
            <p id="consent-hint" class="form-text small text-muted mb-0 mt-1">Your details are used only to respond to your enquiry and provide sector-specific information. We do not share your data for marketing.</p>
            <div v-if="errors.consent" class="invalid-feedback d-block">{{ errors.consent }}</div>
          </div>
        </div>
        <div class="col-12 col-lg-10">
          <button type="submit" class="btn btn-primary rounded-pill px-4">Submit expression of interest</button>
        </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.inquiry-form {
  border-radius: 18px;
  padding: 1.75rem 1.5rem 1.9rem;
  background: #ffffff;
  box-shadow: 0 18px 48px rgba(10, 37, 64, 0.14);
  border: 1px solid rgba(13, 59, 102, 0.08);
}

.inquiry-form__section-title {
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-text-muted);
  margin-bottom: 0.25rem;
}

.inquiry-contacts {
  row-gap: 1rem;
}

.inquiry-card {
  height: 100%;
  border-radius: 16px;
  padding: 1rem 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  box-shadow: 0 10px 28px rgba(10, 37, 64, 0.1);
  border: 1px solid rgba(13, 59, 102, 0.08);
}

.inquiry-card--location {
  background: linear-gradient(135deg, #f0faf6, #e6f3ff);
}

.inquiry-card--email {
  background: linear-gradient(135deg, #edf3ff, #f8f5ff);
}

.inquiry-card--phone {
  background: linear-gradient(135deg, #fff7ea, #fdf4e6);
}

.inquiry-card__icon {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #fff;
}

.inquiry-card--location .inquiry-card__icon {
  background: linear-gradient(135deg, #1a7f5e, #0d3b66);
}

.inquiry-card--email .inquiry-card__icon {
  background: linear-gradient(135deg, #0d3b66, #082847);
}

.inquiry-card--phone .inquiry-card__icon {
  background: linear-gradient(135deg, #c49345, #8a5d15);
}

.inquiry-card__label {
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
  margin-top: 0.3rem;
}

.inquiry-card__text {
  font-size: 0.86rem;
  color: var(--color-text);
  margin: 0;
}

.inquiry-card__meta {
  font-size: 0.78rem;
  color: var(--color-text-muted);
}

.inquiry-card__link {
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--color-accent);
  text-decoration: none;
}

.inquiry-card__link:hover {
  text-decoration: underline;
  text-underline-offset: 2px;
}

.btn-primary {
  background-color: var(--mpmed-accent);
  border-color: var(--mpmed-accent);
}
.btn-primary:hover {
  background-color: var(--mpmed-accent-hover);
  border-color: var(--mpmed-accent-hover);
}
</style>
