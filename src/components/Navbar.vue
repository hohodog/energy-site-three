<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({ name: 'SiteNavbar' })

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Sodium-ion batteries', path: '/sodium' },
  { label: 'Supercapacitors', path: '/supercapacitor' },
  { label: 'Flow Batteries', path: '/redox' },
  { label: 'solid-state batteries', path: '/solid' },
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
    <div class="section-wrap">
      <div class="nav-shell">
        <RouterLink class="brand" to="/" @click="closeMenu">
          <span class="brand-mark" aria-hidden="true">SL</span>
          <span class="brand-copy">
            <strong>StorageLink</strong>
            <span>EU-facing Battery Sourcing</span>
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
          <RouterLink class="nav-contact" to="/contact">Contact</RouterLink>

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
              Contact
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
  padding: 12px 0 0;
  transition:
    padding 0.22s ease,
    transform 0.22s ease;
}

.site-nav::before {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  height: 96px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(242, 245, 249, 0));
  pointer-events: none;
}

.site-nav-scrolled,
.site-nav-open {
  padding-top: 8px;
}

.nav-shell,
.mobile-panel {
  border: 1px solid var(--line-soft);
  border-top: 4px solid var(--brand);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 10px 26px rgba(0, 40, 88, 0.07);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.nav-shell {
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 66px;
  padding: 10px 12px 10px 16px;
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
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  border-radius: 6px;
  background: var(--brand);
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  box-shadow: none;
}

.brand-mark::after {
  content: '';
  position: absolute;
  right: 7px;
  bottom: 7px;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: var(--accent);
}

.brand-copy {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.brand-copy strong {
  color: var(--text-main);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.1;
}

.brand-copy span {
  color: var(--text-muted);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0;
  border: 1px solid rgba(0, 68, 148, 0.14);
  border-radius: 8px;
  background: var(--bg-blue-soft);
  box-shadow: none;
}

.nav-link,
.mobile-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: var(--text-soft);
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 13px;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.nav-link:hover,
.mobile-link:hover,
.nav-link-active,
.mobile-link-active {
  color: var(--brand);
  background: #ffffff;
  box-shadow: inset 0 -3px 0 var(--accent);
}

.brand:hover,
.brand:focus-visible,
.nav-link:hover,
.nav-link:focus-visible,
.nav-link-active,
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
  box-shadow: 0 10px 20px rgba(0, 68, 148, 0.14);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;
}

.nav-contact:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 22px rgba(0, 68, 148, 0.18);
}

.nav-link::after,
.mobile-link::after,
.nav-contact::after,
.brand::after {
  display: none;
}

.menu-toggle {
  position: relative;
  display: none;
  width: 46px;
  height: 46px;
  padding: 0;
  border: 1px solid rgba(0, 68, 148, 0.18);
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
  margin-top: 10px;
  padding: 12px;
  border-radius: 8px;
}

.mobile-links {
  display: grid;
  gap: 8px;
}

.mobile-link {
  justify-content: flex-start;
  padding: 13px 14px;
  border-radius: 6px;
  background: var(--bg-blue-soft);
}

.mobile-link-cta {
  justify-content: center;
  margin-top: 6px;
  color: #000000;
  background: var(--accent);
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
  .site-nav {
    padding-top: 10px;
  }

  .nav-shell {
    min-height: 64px;
    padding-left: 14px;
    padding-right: 12px;
  }

  .brand-copy span {
    display: none;
  }

  .brand-copy strong {
    font-size: 14px;
  }

  .brand-mark {
    width: 38px;
    height: 38px;
    flex-basis: 38px;
    border-radius: 6px;
    font-size: 12px;
  }
}
</style>
