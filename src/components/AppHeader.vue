<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const isHome = () => route.path === '/'

function scrollTo(id: string) {
  if (route.path !== '/') {
    window.location.href = `/#${id}`
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="site-header" :class="{ 'site-header--scrolled': scrolled }">
    <div class="site-header__inner container">
      <router-link class="site-header__brand" to="/">MPMED‑SEZ</router-link>
      <button
        class="site-header__toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="site-header__toggler-bar"></span>
        <span class="site-header__toggler-bar"></span>
        <span class="site-header__toggler-bar"></span>
      </button>
      <div class="collapse navbar-collapse site-header__nav" id="navbarNav">
        <ul class="site-header__links">
          <template v-if="isHome()">
            <li><a class="site-header__link" href="#sectors" @click.prevent="scrollTo('sectors')">Sectors</a></li>
            <li><a class="site-header__link" href="#opportunities" @click.prevent="scrollTo('opportunities')">Opportunities</a></li>
            <li><a class="site-header__link" href="#incentives" @click.prevent="scrollTo('incentives')">Incentives</a></li>
            <li><a class="site-header__link" href="#documents" @click.prevent="scrollTo('documents')">Documents</a></li>
            <li><a class="site-header__link" href="#regulatory" @click.prevent="scrollTo('regulatory')">Regulatory</a></li>
            <li><a class="site-header__link" href="#faq" @click.prevent="scrollTo('faq')">FAQ</a></li>
            <li><a class="site-header__link" href="#events" @click.prevent="scrollTo('events')">Events</a></li>
          </template>
          <li><router-link class="site-header__link" to="/about">About</router-link></li>
        </ul>
        <a href="#inquiry" class="site-header__cta" @click.prevent="scrollTo('inquiry')">Express interest</a>
      </div>
    </div>
  </header>
  <div class="site-header__spacer"></div>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  padding: 0.6rem 0;
  transition: background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  font-family: var(--font-display);
}
.site-header:not(.site-header--scrolled) {
  background: rgba(245, 247, 251, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(13, 59, 102, 0.06);
}
.site-header--scrolled {
  background: #ffffff;
  border-bottom: 1px solid rgba(13, 59, 102, 0.12);
  box-shadow: 0 10px 30px rgba(15, 30, 60, 0.08);
}
.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}
.site-header__brand {
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--color-primary) !important;
  text-decoration: none;
  transition: opacity 0.2s ease;
}
.site-header__brand:hover {
  opacity: 0.8;
}
.site-header__nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  gap: 1.5rem;
}
.site-header__links {
  display: flex;
  align-items: center;
  gap: 0.15rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.site-header__link {
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(26, 43, 60, 0.75) !important;
  text-decoration: none;
  border-radius: var(--radius-md);
  position: relative;
  transition: color 0.2s ease;
}
.site-header__link:hover,
.site-header__link.router-link-active {
  color: var(--color-primary) !important;
}
.site-header__link::after {
  content: '';
  position: absolute;
  left: 0.75rem;
  right: 0.75rem;
  bottom: 0.2rem;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--color-accent), var(--color-primary));
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.18s ease-out;
}
.site-header__link:hover::after,
.site-header__link.router-link-active::after {
  transform: scaleX(1);
}
.site-header__cta {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #fff;
  background: linear-gradient(135deg, var(--color-accent), var(--color-primary));
  border-radius: var(--radius-full);
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(10, 37, 64, 0.16);
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}
.site-header__cta:hover {
  color: #fff;
  transform: translateY(-1px);
  box-shadow: 0 10px 30px rgba(10, 37, 64, 0.2);
}
.site-header__cta:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(26, 127, 94, 0.35);
}
.site-header__spacer {
  height: 60px;
}
.site-header__toggler {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 0.5rem;
  border: 1px solid rgba(13, 59, 102, 0.16);
  border-radius: var(--radius-md);
  background: transparent;
  cursor: pointer;
}
.site-header__toggler-bar {
  display: block;
  height: 2px;
  background: var(--color-primary);
  border-radius: 1px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.site-header__toggler[aria-expanded="true"] .site-header__toggler-bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.site-header__toggler[aria-expanded="true"] .site-header__toggler-bar:nth-child(2) {
  opacity: 0;
}
.site-header__toggler[aria-expanded="true"] .site-header__toggler-bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
@media (max-width: 991.98px) {
  .site-header__links {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 0.5rem 0;
  }
  .site-header__link {
    padding: 0.75rem 1rem;
  }
  .site-header__cta {
    margin-top: 0.5rem;
    width: 100%;
  }
}

@media (min-width: 992px) {
  .site-header__toggler {
    display: none;
  }
  .site-header__nav.collapse {
    display: flex !important;
    height: auto !important;
    visibility: visible !important;
  }
  .site-header__links {
    gap: 0.5rem;
  }
}
</style>
