<script setup>
const solutions = [
  { label: 'Sodium-ion batteries', path: '/sodium' },
  { label: 'Supercapacitors', path: '/supercapacitor' },
  { label: 'Flow batteries', path: '/redox' },
  { label: 'Solid-state batteries', path: '/solid' },
]

const serviceLinks = [
  { label: 'Operating model', path: '/about' },
  { label: 'Request a briefing', path: '/contact' },
]

const focusAreas = [
  'Technology screening',
  'Supplier evidence',
  'China-Europe coordination',
  'Procurement readiness',
]
</script>

<template>
  <footer class="site-footer">
    <div class="footer-top-bar">
      <div class="section-wrap footer-service-line">
        <strong>StorageLink</strong>
        <span>Battery supply intelligence for European project teams</span>
      </div>
    </div>

    <div class="section-wrap">
      <div class="footer-shell">
        <section class="footer-intro-block">
          <RouterLink class="footer-brand" to="/">
            <span class="footer-brand-mark" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span class="footer-brand-copy">
              <strong>StorageLink</strong>
              <span>Europe-facing battery sourcing</span>
            </span>
          </RouterLink>

          <p>
            Structured technology files, supplier screening, and cross-border technical coordination
            for storage projects that need evidence before commitment.
          </p>
        </section>

        <nav class="footer-column" aria-label="Technology files">
          <p>Technology files</p>
          <RouterLink v-for="item in solutions" :key="item.path" :to="item.path">
            {{ item.label }}
          </RouterLink>
        </nav>

        <nav class="footer-column" aria-label="Service">
          <p>Service</p>
          <RouterLink v-for="item in serviceLinks" :key="item.path" :to="item.path">
            {{ item.label }}
          </RouterLink>
        </nav>

        <section class="footer-column" aria-label="Focus areas">
          <p>Focus</p>
          <ul>
            <li v-for="item in focusAreas" :key="item">{{ item }}</li>
          </ul>
        </section>
      </div>

      <section class="footer-bottom">
        <p>© 2026 StorageLink. Local project files only.</p>
        <RouterLink to="/contact">Request a briefing</RouterLink>
      </section>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  color: #ffffff;
  background: var(--brand-deep);
}

.footer-top-bar {
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(0, 0, 0, 0.14);
}

.footer-service-line {
  display: flex;
  gap: 14px;
  align-items: center;
  min-height: 46px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 13px;
}

.footer-service-line strong {
  color: #ffffff;
}

.footer-shell {
  display: grid;
  grid-template-columns: minmax(260px, 1.2fr) repeat(3, minmax(150px, 0.55fr));
  gap: clamp(26px, 4vw, 56px);
  padding: 44px 0 36px;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: #ffffff;
  text-decoration: none;
}

.footer-brand-mark {
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

.footer-brand-mark span {
  border-radius: 2px;
  background: #ffffff;
}

.footer-brand-mark span:nth-child(2) {
  background: var(--accent);
}

.footer-brand-copy {
  display: grid;
  gap: 4px;
}

.footer-brand-copy strong {
  color: #ffffff;
  font-size: 18px;
  line-height: 1.1;
}

.footer-brand-copy span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer-intro-block p {
  max-width: 520px;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 14px;
  line-height: 1.8;
}

.footer-column p {
  margin-bottom: 14px;
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer-column a {
  display: block;
  width: fit-content;
  padding: 6px 0;
  color: rgba(255, 255, 255, 0.84);
  font-size: 14px;
  line-height: 1.45;
  text-decoration: none;
}

.footer-column a:hover,
.footer-column a:focus-visible,
.footer-brand:hover,
.footer-brand:focus-visible,
.footer-bottom a:hover,
.footer-bottom a:focus-visible {
  color: #ffffff;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}

.footer-column ul {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-column li {
  color: rgba(255, 255, 255, 0.78);
  font-size: 14px;
  line-height: 1.55;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 0 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
  line-height: 1.6;
}

.footer-bottom a {
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 980px) {
  .footer-shell {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .footer-service-line,
  .footer-bottom {
    align-items: flex-start;
    flex-direction: column;
  }

  .footer-service-line {
    justify-content: center;
    gap: 4px;
    min-height: 58px;
  }

  .footer-shell {
    grid-template-columns: 1fr;
    padding: 34px 0 28px;
  }

  .footer-bottom {
    padding-bottom: 24px;
  }
}
</style>
