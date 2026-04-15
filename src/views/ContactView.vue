<script setup>
const channels = [
  {
    label: 'Briefing requests',
    value: 'briefings@storagelink.example',
    href: 'mailto:briefings@storagelink.example',
    text: 'Technology screening, supplier shortlist, and project-fit conversations.',
  },
  {
    label: 'Supplier dialogue',
    value: 'partners@storagelink.example',
    href: 'mailto:partners@storagelink.example',
    text: 'Manufacturer introductions, documentation exchange, and technical coordination.',
  },
  {
    label: 'Project desk',
    value: '+86 000 0000 0000',
    href: 'tel:+8600000000000',
    text: 'Use for scheduled calls after the first written project note.',
  },
]

const requestChecklist = [
  'Application and target market',
  'Expected capacity, power, and duty cycle',
  'Procurement stage and decision date',
  'Standards, certification, or bankability constraints',
]
</script>

<template>
  <section class="contact-hero" aria-labelledby="contact-title">
    <div class="section-wrap contact-hero-layout">
      <div class="contact-copy">
        <nav class="contact-breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true">/</span>
          <span>Contact</span>
        </nav>

        <p class="eyebrow">Request a briefing</p>
        <h1 id="contact-title">Start with the project question, not the catalogue</h1>
        <p>
          Send the application context, target market, and timeline. The first response can then
          focus on the technologies and supplier evidence worth reviewing.
        </p>
      </div>

      <aside class="response-panel" aria-label="Response guidance">
        <span>Typical first review</span>
        <strong>2 business days</strong>
        <p>For clear project notes with application, scale, and target decision date.</p>
      </aside>
    </div>
  </section>

  <section class="contact-page">
    <div class="section-wrap contact-layout">
      <div class="contact-channels">
        <article v-for="channel in channels" :key="channel.label" class="contact-card">
          <span>{{ channel.label }}</span>
          <a :href="channel.href">{{ channel.value }}</a>
          <p>{{ channel.text }}</p>
        </article>
      </div>

      <section class="request-note" aria-labelledby="request-note-title">
        <p class="eyebrow">What to include</p>
        <h2 id="request-note-title">A useful first note is short and specific</h2>
        <ul>
          <li v-for="item in requestChecklist" :key="item">{{ item }}</li>
        </ul>
        <RouterLink class="button button-primary" to="/">Review technology files</RouterLink>
      </section>
    </div>
  </section>
</template>

<style scoped>
.contact-hero {
  padding: clamp(46px, 7vw, 88px) 0;
  color: #ffffff;
  background: linear-gradient(90deg, rgba(0, 55, 118, 0.98), rgba(0, 68, 148, 0.88)), var(--brand);
}

.contact-hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 360px);
  gap: clamp(30px, 5vw, 70px);
  align-items: end;
}

.contact-breadcrumb {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 22px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 13px;
  font-weight: 700;
}

.contact-breadcrumb a {
  color: #ffffff;
}

.contact-copy .eyebrow {
  color: #000000;
  background: var(--accent);
}

.contact-copy h1 {
  max-width: 860px;
  margin-top: 18px;
  color: #ffffff;
  font-size: clamp(42px, 6.2vw, 72px);
  line-height: 1;
}

.contact-copy p:not(.eyebrow) {
  max-width: 740px;
  margin-top: 24px;
  color: rgba(255, 255, 255, 0.88);
  font-size: clamp(18px, 2vw, 22px);
  line-height: 1.65;
}

.response-panel {
  padding: 26px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-top: 5px solid var(--accent);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.18);
}

.response-panel span {
  color: rgba(255, 255, 255, 0.78);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
}

.response-panel strong {
  display: block;
  margin-top: 10px;
  color: #ffffff;
  font-size: 36px;
  line-height: 1.05;
}

.response-panel p {
  margin-top: 12px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 15px;
  line-height: 1.65;
}

.contact-page {
  padding: clamp(54px, 8vw, 96px) 0;
  background: linear-gradient(180deg, #ffffff, var(--bg-blue-soft));
}

.contact-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 420px);
  gap: 32px;
  align-items: start;
}

.contact-channels {
  display: grid;
  gap: 18px;
}

.contact-card,
.request-note {
  border: 1px solid var(--line-grey);
  border-radius: 8px;
  background: #ffffff;
  box-shadow: var(--shadow-soft);
}

.contact-card {
  display: grid;
  gap: 10px;
  padding: 26px;
}

.contact-card span {
  color: var(--success);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

.contact-card a {
  width: fit-content;
  color: var(--brand);
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 700;
  line-height: 1.12;
  overflow-wrap: anywhere;
}

.contact-card p {
  color: var(--text-soft);
  font-size: 15px;
  line-height: 1.75;
}

.request-note {
  position: sticky;
  top: 132px;
  padding: 28px;
}

.request-note h2 {
  margin-top: 16px;
  color: var(--text-main);
  font-size: clamp(28px, 3vw, 38px);
  line-height: 1.12;
}

.request-note ul {
  display: grid;
  gap: 12px;
  margin: 24px 0 28px;
  padding: 0;
  list-style: none;
}

.request-note li {
  position: relative;
  padding-left: 22px;
  color: var(--text-soft);
  font-size: 15px;
  line-height: 1.6;
}

.request-note li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: var(--accent);
}

@media (max-width: 900px) {
  .contact-hero-layout,
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .request-note {
    position: static;
  }
}

@media (max-width: 720px) {
  .contact-hero {
    padding: 34px 0 46px;
  }

  .contact-copy h1 {
    font-size: clamp(38px, 11vw, 48px);
  }

  .contact-copy p:not(.eyebrow) {
    font-size: 16px;
  }

  .response-panel,
  .contact-card,
  .request-note {
    padding: 22px;
  }
}
</style>
