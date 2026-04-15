<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({ name: 'SiteNavbar' })

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Sodium-ion', path: '/sodium' },
  { label: 'Supercapacitors', path: '/supercapacitor' },
  { label: 'Flow batteries', path: '/redox' },
  { label: 'Solid-state', path: '/solid' },
  { label: 'About', path: '/about' },
]

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)

const syncScrollState = () => {
  scrolled.value = window.scrollY > 12
}

const closeMenu = () => {
  menuOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  },
)

onMounted(() => {
  syncScrollState()
  window.addEventListener('scroll', syncScrollState, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', syncScrollState)
})
</script>

<template>
  <header :class="['site-nav', { 'site-nav-scrolled': scrolled, 'site-nav-open': menuOpen }]">
    <div class="eu-service-bar">
      <div class="section-wrap service-bar-inner">
        <span class="service-label">StorageLink Intelligence Desk</span>
        <span class="service-meta">Europe-facing battery sourcing</span>
        <span class="service-meta service-meta-right">Reviewed for 2026 tenders</span>
      </div>
    </div>

    <div class="section-wrap">
      <div class="nav-shell">
        <RouterLink class="brand" to="/" @click="closeMenu">
          <span class="brand-mark" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span class="brand-copy">
            <strong>StorageLink</strong>
            <span>Battery supply briefings for Europe</span>
          </span>
        </RouterLink>

        <nav class="nav-links" aria-label="Primary">
          <RouterLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="nav-link"
            exact-active-class="nav-link-active"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <div class="nav-actions">
          <RouterLink class="nav-contact" to="/contact">Request a briefing</RouterLink>

          <button
            class="menu-toggle"
            type="button"
            :aria-expanded="menuOpen ? 'true' : 'false'"
            aria-label="Toggle navigation"
            @click="menuOpen = !menuOpen"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <transition name="mobile-fade">
        <div v-if="menuOpen" class="mobile-panel">
          <nav class="mobile-links" aria-label="Mobile">
            <RouterLink
              v-for="item in menuItems"
              :key="`mobile-${item.path}`"
              :to="item.path"
              class="mobile-link"
              exact-active-class="mobile-link-active"
              @click="closeMenu"
            >
              {{ item.label }}
            </RouterLink>
            <RouterLink to="/contact" class="mobile-link mobile-link-cta" @click="closeMenu">
              Request a briefing
            </RouterLink>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.site-nav {
  position: sticky;
  top: 0;
  z-index: 1200;
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid var(--line-grey);
  box-shadow: none;
  transition: box-shadow 0.2s ease;
}

.site-nav-scrolled,
.site-nav-open {
  box-shadow: 0 8px 22px rgba(0, 40, 88, 0.08);
}

.eu-service-bar {
  color: #ffffff;
  background: var(--brand-deep);
}

.service-bar-inner {
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 34px;
  color: #ffffff;
  font-size: 12px;
  line-height: 1.3;
}

.service-label {
  font-weight: 700;
}

.service-meta {
  color: rgba(255, 255, 255, 0.82);
}

.service-meta-right {
  margin-left: auto;
}

.nav-shell {
  display: flex;
  align-items: center;
  gap: 18px;
  min-height: 76px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
  margin-right: auto;
  color: inherit;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-mark {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  padding: 8px;
  border-radius: 6px;
  background: var(--brand);
}

.brand-mark span {
  border-radius: 2px;
  background: #ffffff;
}

.brand-mark span:nth-child(2) {
  background: var(--accent);
}

.brand-copy {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.brand-copy strong {
  color: var(--text-main);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.1;
}

.brand-copy span {
  color: var(--text-muted);
  font-size: 11px;
  letter-spacing: 0.08em;
  line-height: 1.2;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  align-items: stretch;
  align-self: stretch;
  gap: 0;
}

.nav-link,
.mobile-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: 0;
  color: var(--text-soft);
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  padding: 0 12px;
  box-shadow: inset 0 -4px 0 transparent;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
}

.nav-link:hover,
.nav-link:focus-visible,
.nav-link-active {
  color: var(--brand);
  background: var(--bg-blue-soft);
  box-shadow: inset 0 -4px 0 var(--accent);
  text-decoration: none;
}

.brand:hover,
.brand:focus-visible,
.mobile-link:hover,
.mobile-link:focus-visible,
.mobile-link-active,
.nav-contact:hover,
.nav-contact:focus-visible {
  text-decoration: none;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.nav-contact {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 8px;
  color: #000000;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  background: var(--accent);
  box-shadow: none;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.nav-contact:hover {
  transform: translateY(-1px);
  background: var(--accent-strong);
}

.menu-toggle {
  position: relative;
  display: none;
  width: 46px;
  height: 46px;
  padding: 0;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  background: #ffffff;
  box-shadow: none;
}

.menu-toggle span {
  position: absolute;
  left: 12px;
  right: 12px;
  height: 2px;
  border-radius: 2px;
  background: var(--brand);
}

.menu-toggle span:nth-child(1) {
  top: 15px;
}

.menu-toggle span:nth-child(2) {
  top: 22px;
}

.menu-toggle span:nth-child(3) {
  top: 29px;
}

.mobile-panel {
  padding: 0 0 16px;
}

.mobile-links {
  display: grid;
  gap: 1px;
  border: 1px solid var(--line-grey);
  border-radius: 8px;
  overflow: hidden;
  background: var(--line-grey);
}

.mobile-link {
  justify-content: flex-start;
  min-height: 48px;
  padding: 0 16px;
  background: #ffffff;
}

.mobile-link:hover,
.mobile-link:focus-visible,
.mobile-link-active {
  color: var(--brand);
  background: var(--bg-blue-soft);
  box-shadow: inset 4px 0 0 var(--accent);
  text-decoration: none;
}

.mobile-link-cta {
  justify-content: center;
  color: #000000;
  background: var(--accent);
  box-shadow: none;
}

.mobile-fade-enter-active,
.mobile-fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.mobile-fade-enter-from,
.mobile-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 1180px) {
  .nav-links,
  .nav-contact {
    display: none;
  }

  .menu-toggle {
    display: block;
  }
}

@media (max-width: 720px) {
  .service-bar-inner {
    gap: 10px;
    min-height: 32px;
    font-size: 11px;
  }

  .service-meta:not(.service-meta-right) {
    display: none;
  }

  .nav-shell {
    min-height: 66px;
  }

  .brand-copy span {
    display: none;
  }

  .brand-copy strong {
    font-size: 16px;
  }

  .brand-mark {
    width: 40px;
    height: 40px;
    flex-basis: 40px;
  }
}
</style>
