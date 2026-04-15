<script setup>
const solutions = [
  { label: 'Sodium-ion batteries', path: '/sodium' },
  { label: 'Supercapacitors', path: '/supercapacitor' },
  { label: 'Flow Batteries', path: '/redox' },
  { label: 'solid-state batteries', path: '/solid' },
]

const companyLinks = [
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const focusAreas = [
  'Battery technology screening',
  'Supplier connection in China',
  'Cross-border technical coordination',
]
</script>

<template>
  <footer class="site-footer">
    <div class="section-wrap">
      <div class="footer-shell">
        <section class="footer-top">
          <div class="footer-brand-block">
            <RouterLink class="footer-brand" to="/">
              <span class="footer-brand-mark" aria-hidden="true">SL</span>
              <span class="footer-brand-copy">
                <strong>StorageLink</strong>
                <span>EU-facing Battery Sourcing</span>
              </span>
            </RouterLink>

            <p class="footer-intro">
              We help European projects connect with suitable battery technologies and qualified
              manufacturing resources in China, with a focus on practical execution rather than
              generic sourcing advice.
            </p>
          </div>

          <div class="footer-grid">
            <nav class="footer-column" aria-label="Solutions">
              <p class="footer-heading">Solutions</p>
              <RouterLink
                v-for="item in solutions"
                :key="item.path"
                :to="item.path"
                class="footer-link"
              >
                {{ item.label }}
              </RouterLink>
            </nav>

            <nav class="footer-column" aria-label="Company">
              <p class="footer-heading">Company</p>
              <RouterLink
                v-for="item in companyLinks"
                :key="item.path"
                :to="item.path"
                class="footer-link"
              >
                {{ item.label }}
              </RouterLink>
            </nav>

            <section class="footer-column" aria-label="Focus areas">
              <p class="footer-heading">Focus</p>
              <ul class="footer-list">
                <li v-for="item in focusAreas" :key="item">{{ item }}</li>
              </ul>
            </section>
          </div>
        </section>

        <section class="footer-bottom">
          <p class="footer-meta">
            © 2026 StorageLink. Built for structured cross-border energy collaboration.
          </p>
          <div class="footer-bottom-links">
            <RouterLink to="/about" class="footer-mini-link">How we work</RouterLink>
            <RouterLink to="/contact" class="footer-mini-link footer-mini-link-accent">
              Contact
            </RouterLink>
          </div>
        </section>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 26px 0 44px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(242, 245, 249, 0.64));
}

.footer-shell {
  position: relative;
  border-top: 4px solid var(--brand);
  border-right: 0;
  border-bottom: 0;
  border-left: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  overflow: hidden;
}

.footer-shell::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 64px;
  height: 4px;
  background: var(--accent);
}

.footer-top {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 44px;
  padding: 34px 0 28px;
}

.footer-brand-block {
  max-width: 520px;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: inherit;
  text-decoration: none;
}

.footer-brand-mark {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  border-radius: 6px;
  background: var(--brand);
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  box-shadow: none;
}

.footer-brand-mark::after {
  content: '';
  position: absolute;
  right: 7px;
  bottom: 7px;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: var(--accent);
}

.footer-brand-copy {
  display: grid;
  gap: 3px;
}

.footer-brand-copy strong {
  color: var(--text-main);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.1;
}

.footer-brand-copy span {
  color: var(--text-muted);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer-intro {
  margin: 22px 0 0;
  color: var(--text-soft);
  font-size: 14px;
  line-height: 1.8;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.footer-column {
  min-width: 0;
}

.footer-heading {
  margin: 0 0 14px;
  color: var(--brand);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer-link,
.footer-mini-link {
  color: var(--text-soft);
  text-decoration: none;
  transition:
    color 0.2s ease,
    opacity 0.2s ease;
}

.footer-link {
  display: block;
  padding: 7px 0;
  font-size: 14px;
  line-height: 1.5;
}

.footer-link:hover,
.footer-link:focus-visible,
.footer-mini-link:hover,
.footer-mini-link:focus-visible,
.footer-brand:hover,
.footer-brand:focus-visible {
  color: var(--brand);
  text-decoration: none;
}

.footer-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-list li {
  position: relative;
  padding: 9px 0 9px 16px;
  color: var(--text-soft);
  font-size: 14px;
  line-height: 1.6;
}

.footer-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 18px;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: var(--accent);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 0 0;
  border-top: 1px solid rgba(0, 68, 148, 0.16);
}

.footer-meta {
  margin: 0;
  color: var(--text-muted);
  font-size: 13px;
  line-height: 1.6;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.footer-mini-link {
  font-size: 13px;
  font-weight: 700;
}

.footer-mini-link-accent {
  color: var(--brand);
}

.footer-link::after,
.footer-mini-link::after,
.footer-brand::after {
  display: none;
}

@media (max-width: 1080px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .footer-brand-block {
    max-width: none;
  }
}

@media (max-width: 820px) {
  .site-footer {
    padding: 20px 0 34px;
  }

  .footer-top {
    padding: 26px 0 24px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 0 0;
  }
}

@media (max-width: 560px) {
  .footer-shell {
    border-radius: 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .footer-intro {
    font-size: 13px;
    line-height: 1.75;
  }

  .footer-brand-mark {
    width: 40px;
    height: 40px;
    flex-basis: 40px;
    border-radius: 6px;
  }

  .footer-brand-copy strong {
    font-size: 15px;
  }
}
</style>
