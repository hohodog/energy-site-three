<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import ImageStackPage from '../components/ImageStackPage.vue'
import { createImageFactory } from '../utils/responsiveImages'

defineOptions({ name: 'HomePage' })

const carouselSizes = '(max-width: 1240px) calc(100vw - 36px), 1180px'
const carouselDelay = 5200

const makeImage = createImageFactory(
  import.meta.glob(
    [
      '../assets/site-content/home/*-640.webp',
      '../assets/site-content/home/*-960.webp',
      '../assets/site-content/home/*-1280.webp',
      '../assets/site-content/home/*-1600.webp',
      '../assets/site-content/home/04-technology-comparison.webp',
      '!../assets/site-content/home/07-partner-with-us*.webp',
      '../assets/site-content/sodium/display/page-01-*.webp',
      '../assets/site-content/supercapacitor/display/page-01-*.webp',
      '../assets/site-content/redox/1*.webp',
      '../assets/site-content/solid/display/page-01-*.webp',
    ],
    {
      eager: true,
      import: 'default',
    },
  ),
)

const carouselSlides = [
  {
    ...makeImage({
      path: 'home/01-hero-no-title',
      alt: 'Energy storage landscape with battery containers, solar panels, and wind turbines',
      width: 1952,
      height: 544,
      sizes: carouselSizes,
    }),
    title: 'Energy storage overview',
    route: '/',
  },
  {
    ...makeImage({
      path: 'sodium/display/page-01',
      alt: 'Sodium-ion batteries overview',
      width: 3200,
      height: 1786,
      sizes: carouselSizes,
    }),
    title: 'Sodium-ion batteries',
    route: '/sodium',
    crop: true,
  },
  {
    ...makeImage({
      path: 'supercapacitor/display/page-01',
      alt: 'Supercapacitors overview',
      width: 3200,
      height: 1786,
      sizes: carouselSizes,
    }),
    title: 'Supercapacitors',
    route: '/supercapacitor',
  },
  {
    ...makeImage({
      path: 'redox/1',
      alt: 'Flow batteries overview',
      width: 1376,
      height: 768,
      sizes: carouselSizes,
    }),
    title: 'Flow batteries',
    route: '/redox',
  },
  {
    ...makeImage({
      path: 'solid/display/page-01',
      alt: 'Solid-state batteries overview',
      width: 3200,
      height: 1786,
      sizes: carouselSizes,
    }),
    title: 'Solid-state batteries',
    route: '/solid',
  },
]

const pageContents = [
  { label: 'Policy briefing', href: '#briefing' },
  { label: 'Technology files', href: '#technologies' },
  { label: 'Delivery route', href: '#delivery' },
  { label: 'Source deck', href: '#source-deck' },
]

const dashboardStats = [
  {
    value: '4',
    label: 'technology routes',
    detail: 'chemistry, power density, maturity, and supplier fit',
  },
  {
    value: '2026',
    label: 'tender context',
    detail: 'screening language for European energy and industrial projects',
  },
  {
    value: '3',
    label: 'decision layers',
    detail: 'application, bankability, and cross-border execution risk',
  },
  {
    value: '1',
    label: 'delivery desk',
    detail: 'technical translation between European projects and Chinese supply',
  },
]

const briefingCards = [
  {
    title: 'Affordability and resilience',
    text: 'Storage choices are framed around energy cost pressure, long procurement cycles, and the need for reliable industrial capacity.',
  },
  {
    title: 'Technology neutrality',
    text: 'Each route is assessed by use case, lifecycle limits, safety profile, and supplier readiness instead of a single preferred chemistry.',
  },
  {
    title: 'Execution evidence',
    text: 'Shortlists focus on data rooms, certification paths, production capability, and the practical work needed before a purchase order.',
  },
]

const technologyBriefs = [
  {
    title: 'Sodium-ion batteries',
    route: '/sodium',
    image: carouselSlides[1],
    status: 'Scale-up watch',
    summary:
      'A cost-focused route for stationary storage, light mobility, and projects that value material availability over peak energy density.',
    tags: ['Grid storage', 'Cost pressure', 'Cold-chain resilience'],
  },
  {
    title: 'Supercapacitors',
    route: '/supercapacitor',
    image: carouselSlides[2],
    status: 'Power response',
    summary:
      'A high-cycle option for fast charge, voltage support, braking recovery, and hybrid systems where seconds matter more than hours.',
    tags: ['Peak shaving', 'High cycle life', 'Hybrid systems'],
  },
  {
    title: 'Flow batteries',
    route: '/redox',
    image: carouselSlides[3],
    status: 'Long-duration file',
    summary:
      'A storage route for longer discharge windows, safer stationary layouts, and applications where container footprint is acceptable.',
    tags: ['Long duration', 'Stationary sites', 'Safety case'],
  },
  {
    title: 'Solid-state batteries',
    route: '/solid',
    image: carouselSlides[4],
    status: 'Innovation track',
    summary:
      'A strategic file for premium mobility, safety-sensitive applications, and customers planning future procurement rather than immediate volume.',
    tags: ['Advanced cells', 'Mobility', 'Qualification planning'],
  },
]

const deliverySteps = [
  {
    number: '01',
    title: 'Project signal',
    text: 'Clarify application, duty cycle, site constraints, target market, and the procurement calendar.',
  },
  {
    number: '02',
    title: 'Technology screening',
    text: 'Compare chemistry fit, supplier maturity, standards path, documentation quality, and validation needs.',
  },
  {
    number: '03',
    title: 'Supplier dialogue',
    text: 'Translate requirements into technical questions, data requests, sample plans, and commercial boundaries.',
  },
  {
    number: '04',
    title: 'Decision package',
    text: 'Prepare a shortlist with risks, next evidence, and the work needed for pilots or procurement.',
  },
]

const policySignals = [
  'Clean industrial competitiveness',
  'Affordable energy for industry',
  'Battery value-chain resilience',
]

const technologyFocusHotspots = [
  {
    to: '/sodium',
    label: 'Learn more about Sodium-ion Batteries',
    left: 20.1,
    top: 50.2,
    width: 12,
    height: 5.6,
  },
  {
    to: '/solid',
    label: 'Learn more about solid-state Batteries',
    left: 68.5,
    top: 50.2,
    width: 12,
    height: 5.6,
  },
  {
    to: '/redox',
    label: 'Learn more about Redox Flow Batteries',
    left: 19.9,
    top: 89.4,
    width: 12,
    height: 5.6,
  },
  {
    to: '/supercapacitor',
    label: 'Learn more about Supercapacitors',
    left: 68.7,
    top: 89.4,
    width: 12,
    height: 5.6,
  },
]

const storageLinkAdvantageHotspots = [
  {
    to: '/sodium',
    label: 'Open Sodium-ion Batteries',
    left: 3.2,
    top: 48.6,
    width: 11.1,
    height: 3.8,
  },
  {
    to: '/solid',
    label: 'Open Solid-State Batteries',
    left: 14.9,
    top: 48.6,
    width: 11,
    height: 3.8,
  },
  {
    to: '/redox',
    label: 'Open Redox Flow Batteries',
    left: 26.4,
    top: 48.6,
    width: 12,
    height: 3.8,
  },
  {
    to: '/supercapacitor',
    label: 'Open Supercapacitors',
    left: 38.8,
    top: 48.6,
    width: 9.8,
    height: 3.8,
  },
  {
    label: 'Partnerships with Top-Tier Companies',
    left: 53,
    top: 48.6,
    width: 19.3,
    height: 3.8,
  },
  {
    label: 'Access to Latest Technologies',
    left: 75.3,
    top: 48.6,
    width: 17.1,
    height: 3.8,
  },
  {
    label: 'German Local Team',
    left: 8,
    top: 87.9,
    width: 15.7,
    height: 4,
  },
  {
    label: 'Localized Service',
    left: 28.6,
    top: 87.9,
    width: 17.5,
    height: 4,
  },
  {
    label: 'Grid Project Expertise',
    left: 52.9,
    top: 87.9,
    width: 19.2,
    height: 4,
  },
  {
    label: 'Scenario-Based Solutions',
    left: 73.4,
    top: 87.9,
    width: 18.7,
    height: 4,
  },
]

const contentImages = [
  makeImage({
    path: 'home/02-team-introduction',
    alt: 'Team introduction from the source deck',
    width: 1792,
    height: 998,
  }),
  makeImage({
    path: 'home/03-home-overview',
    alt: 'Homepage source deck page 2',
    width: 1932,
    height: 1090,
  }),
  makeImage({
    path: 'home/04-technology-comparison',
    alt: 'Homepage source deck page 3',
    width: 960,
    height: 540,
  }),
  {
    ...makeImage({
      path: 'home/05-technology-focus',
      alt: 'Homepage source deck page 4',
      width: 1925,
      height: 1089,
    }),
    hotspots: technologyFocusHotspots,
  },
  {
    ...makeImage({
      path: 'home/06-why-storagelink',
      alt: 'Homepage source deck page 5',
      width: 1924,
      height: 1085,
    }),
    hotspots: storageLinkAdvantageHotspots,
  },
]

const activeSlideIndex = ref(0)
const carouselPaused = ref(false)
let carouselTimer

const activeSlide = computed(() => carouselSlides[activeSlideIndex.value])

const normalizeSlideIndex = (index) => (index + carouselSlides.length) % carouselSlides.length

const showSlide = (index) => {
  activeSlideIndex.value = normalizeSlideIndex(index)
}

const showNextSlide = () => {
  showSlide(activeSlideIndex.value + 1)
}

const showPreviousSlide = () => {
  showSlide(activeSlideIndex.value - 1)
}

onMounted(() => {
  carouselTimer = window.setInterval(() => {
    if (!carouselPaused.value && !document.hidden) {
      showNextSlide()
    }
  }, carouselDelay)
})

onUnmounted(() => {
  window.clearInterval(carouselTimer)
})
</script>

<template>
  <section class="home-hero" aria-labelledby="home-title">
    <img
      class="hero-backdrop"
      :src="carouselSlides[0].src"
      :srcset="carouselSlides[0].srcset"
      :sizes="carouselSlides[0].sizes"
      :alt="carouselSlides[0].alt"
      width="1952"
      height="544"
      fetchpriority="high"
      decoding="async"
    />
    <div class="hero-screen" aria-hidden="true"></div>

    <div class="section-wrap hero-content">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <RouterLink to="/">Home</RouterLink>
        <span aria-hidden="true">/</span>
        <span>Energy storage sourcing</span>
      </nav>

      <p class="eyebrow">2026 battery supply dossier</p>
      <h1 id="home-title">Battery supply intelligence for European energy projects</h1>
      <p class="hero-lede">
        Structured technology screening, supplier evidence, and China-Europe coordination for
        projects that need storage decisions to survive tender, technical review, and delivery.
      </p>

      <div class="hero-actions">
        <RouterLink class="button button-primary" to="/contact">Request a briefing</RouterLink>
        <a class="button button-secondary" href="#technologies">Review technology files</a>
      </div>

      <ul class="policy-signal-list" aria-label="Policy signals">
        <li v-for="signal in policySignals" :key="signal">{{ signal }}</li>
      </ul>
    </div>
  </section>

  <section class="page-index-band" aria-label="Page contents">
    <div class="section-wrap page-index">
      <div class="page-index-copy">
        <strong>Page contents</strong>
        <p>
          Fast routes into the briefings, technology files, delivery model, and source material.
        </p>
      </div>

      <nav class="page-index-links" aria-label="Home page sections">
        <a v-for="item in pageContents" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>
    </div>
  </section>

  <section id="briefing" class="briefing-band">
    <div class="section-wrap">
      <div class="briefing-head">
        <div class="section-heading">
          <p class="eyebrow">Policy-style briefing</p>
          <h2>From slide deck to decision desk</h2>
          <p>
            European projects now need a clearer bridge between policy ambition, energy cost
            pressure, and supplier reality. The screening model treats battery sourcing as an
            evidence file, not a catalogue.
          </p>
        </div>

        <RouterLink class="link-arrow briefing-link" to="/about">How the desk works</RouterLink>
      </div>

      <div class="dashboard-grid">
        <article v-for="stat in dashboardStats" :key="stat.label" class="dashboard-tile">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
          <p>{{ stat.detail }}</p>
        </article>
      </div>

      <div class="briefing-grid">
        <article v-for="card in briefingCards" :key="card.title" class="briefing-card">
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
        </article>
      </div>
    </div>
  </section>

  <section id="technologies" class="technology-band">
    <div class="section-wrap">
      <div class="section-heading">
        <p class="eyebrow">Technology files</p>
        <h2>Shortlists by use case, not by fashion</h2>
        <p>
          Each file keeps a practical view of application fit, qualification work, production
          evidence, and supplier dialogue.
        </p>
      </div>

      <div class="technology-grid">
        <article v-for="brief in technologyBriefs" :key="brief.title" class="technology-card">
          <RouterLink
            class="technology-media"
            :to="brief.route"
            :aria-label="`Open ${brief.title}`"
          >
            <img
              :src="brief.image.src"
              :srcset="brief.image.srcset"
              :sizes="brief.image.sizes"
              :alt="brief.image.alt"
              :width="brief.image.width"
              :height="brief.image.height"
              loading="lazy"
              decoding="async"
            />
          </RouterLink>

          <div class="technology-copy">
            <span>{{ brief.status }}</span>
            <h3>{{ brief.title }}</h3>
            <p>{{ brief.summary }}</p>
            <ul>
              <li v-for="tag in brief.tags" :key="tag">{{ tag }}</li>
            </ul>
            <RouterLink class="link-arrow" :to="brief.route">Open file</RouterLink>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="visual-brief-band" aria-labelledby="visual-brief-title">
    <div class="section-wrap visual-brief">
      <div class="visual-copy">
        <p class="eyebrow">Current dossier</p>
        <h2 id="visual-brief-title">{{ activeSlide.title }}</h2>
        <p>
          The visual file remains available for fast orientation, while the surrounding pages now
          carry procurement context, policy language, and decision checkpoints.
        </p>
      </div>

      <div
        class="carousel-viewport"
        @mouseenter="carouselPaused = true"
        @mouseleave="carouselPaused = false"
        @focusin="carouselPaused = true"
        @focusout="carouselPaused = false"
      >
        <RouterLink
          v-for="(slide, index) in carouselSlides"
          :key="slide.title"
          :to="slide.route"
          :class="[
            'carousel-slide',
            {
              'carousel-slide-active': index === activeSlideIndex,
              'carousel-slide-cropped': slide.crop,
            },
          ]"
          :aria-label="`Open ${slide.title}`"
          :aria-hidden="index === activeSlideIndex ? 'false' : 'true'"
          :tabindex="index === activeSlideIndex ? 0 : -1"
        >
          <img
            :src="slide.src"
            :srcset="slide.srcset"
            :sizes="slide.sizes"
            :alt="slide.alt"
            :width="slide.width"
            :height="slide.height"
            :loading="index === 0 ? 'eager' : 'lazy'"
            decoding="async"
          />
        </RouterLink>
      </div>

      <div class="carousel-footer">
        <div class="carousel-title" aria-live="polite">
          <span>{{ String(activeSlideIndex + 1).padStart(2, '0') }}</span>
          <strong>{{ activeSlide.title }}</strong>
        </div>

        <div class="carousel-controls" aria-label="Carousel controls">
          <button type="button" class="carousel-button" @click="showPreviousSlide">Previous</button>
          <div class="carousel-dots">
            <button
              v-for="(slide, index) in carouselSlides"
              :key="`dot-${slide.title}`"
              type="button"
              class="carousel-dot"
              :class="{ 'carousel-dot-active': index === activeSlideIndex }"
              :aria-label="`Show ${slide.title}`"
              :aria-current="index === activeSlideIndex ? 'true' : undefined"
              @click="showSlide(index)"
            >
              <span></span>
            </button>
          </div>
          <button type="button" class="carousel-button" @click="showNextSlide">Next</button>
        </div>
      </div>
    </div>
  </section>

  <section id="delivery" class="delivery-band">
    <div class="section-wrap delivery-layout">
      <div class="section-heading">
        <p class="eyebrow">Delivery route</p>
        <h2>Practical steps before supplier commitment</h2>
        <p>
          The work moves from use-case definition to supplier evidence, then into a decision package
          that can support pilots, negotiations, or internal approvals.
        </p>
      </div>

      <div class="delivery-steps">
        <article v-for="step in deliverySteps" :key="step.number" class="delivery-step">
          <span>{{ step.number }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </article>
      </div>
    </div>
  </section>

  <ImageStackPage
    :images="contentImages"
    section-id="source-deck"
    library-title="Source slide library"
    library-intro="Original visual material remains available for technical review, but it now sits behind the briefing layer instead of carrying the whole site."
    compact
  />
</template>

<style scoped>
.home-hero {
  position: relative;
  isolation: isolate;
  min-height: clamp(430px, 66svh, 620px);
  overflow: hidden;
  background: var(--brand-deep);
}

.hero-backdrop,
.hero-screen {
  position: absolute;
  inset: 0;
}

.hero-backdrop {
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-screen {
  z-index: -1;
  background:
    linear-gradient(90deg, rgba(0, 28, 66, 0.88), rgba(0, 68, 148, 0.66) 48%, rgba(0, 0, 0, 0.18)),
    linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.38));
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: inherit;
  padding-top: clamp(32px, 5vw, 68px);
  padding-bottom: clamp(38px, 5vw, 72px);
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 22px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 13px;
  font-weight: 700;
}

.breadcrumb a {
  color: #ffffff;
}

.home-hero .eyebrow {
  color: #000000;
  background: var(--accent);
}

.home-hero h1 {
  max-width: 820px;
  margin-top: 20px;
  color: #ffffff;
  font-size: clamp(42px, 7vw, 76px);
  line-height: 0.98;
  letter-spacing: 0;
}

.hero-lede {
  max-width: 720px;
  margin-top: 24px;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(18px, 2vw, 22px);
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 32px;
}

.hero-actions .button-secondary {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.58);
}

.policy-signal-list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  max-width: 860px;
  margin: 32px 0 0;
  padding: 0;
  list-style: none;
}

.policy-signal-list li {
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.34);
  border-radius: 6px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.2);
  font-size: 13px;
  font-weight: 700;
}

.page-index-band {
  border-bottom: 1px solid var(--line-grey);
  background: #ffffff;
}

.page-index {
  display: grid;
  grid-template-columns: minmax(220px, 0.38fr) minmax(0, 1fr);
  gap: 28px;
  align-items: center;
  padding-top: 22px;
  padding-bottom: 22px;
}

.page-index-copy strong {
  color: var(--brand);
  font-size: 17px;
}

.page-index-copy p {
  margin-top: 4px;
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.55;
}

.page-index-links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.page-index-links a {
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 13px;
  border: 1px solid var(--line-grey);
  border-radius: 8px;
  color: var(--brand);
  background: var(--bg-blue-soft);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}

.page-index-links a:hover,
.page-index-links a:focus-visible {
  border-color: var(--line-strong);
  background: #ffffff;
}

.briefing-band,
.technology-band,
.delivery-band {
  padding: clamp(58px, 8vw, 104px) 0;
}

.briefing-band {
  background: linear-gradient(180deg, #ffffff, var(--bg-blue-soft));
}

.briefing-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 28px;
}

.briefing-link {
  flex: 0 0 auto;
  margin-bottom: 8px;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  margin-top: 38px;
  border: 1px solid var(--line-grey);
  background: var(--line-grey);
}

.dashboard-tile {
  min-height: 190px;
  padding: 26px;
  background: #ffffff;
}

.dashboard-tile strong {
  display: block;
  color: var(--brand);
  font-size: clamp(42px, 5vw, 64px);
  line-height: 0.95;
}

.dashboard-tile span {
  display: block;
  margin-top: 12px;
  color: var(--text-main);
  font-size: 16px;
  font-weight: 700;
}

.dashboard-tile p {
  margin-top: 10px;
  color: var(--text-soft);
  font-size: 14px;
  line-height: 1.65;
}

.briefing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin-top: 28px;
}

.briefing-card,
.technology-card,
.delivery-step {
  border: 1px solid var(--line-grey);
  border-radius: 8px;
  background: #ffffff;
  box-shadow: var(--shadow-soft);
}

.briefing-card {
  min-height: 220px;
  padding: 28px;
}

.briefing-card h3,
.technology-card h3,
.delivery-step h3 {
  color: var(--text-main);
  font-size: 22px;
  line-height: 1.18;
}

.briefing-card h3::before {
  content: '';
  display: block;
  width: 46px;
  height: 5px;
  margin-bottom: 18px;
  background: var(--accent);
}

.briefing-card p,
.technology-card p,
.delivery-step p {
  margin-top: 14px;
  color: var(--text-soft);
  font-size: 15px;
  line-height: 1.75;
}

.technology-band {
  background: #ffffff;
}

.technology-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-top: 36px;
}

.technology-card {
  overflow: hidden;
}

.technology-media {
  display: block;
  aspect-ratio: 16 / 9;
  background: var(--bg-blue-soft);
  overflow: hidden;
}

.technology-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.technology-card:hover .technology-media img {
  transform: scale(1.025);
}

.technology-copy {
  padding: 26px;
}

.technology-copy > span {
  display: inline-flex;
  margin-bottom: 12px;
  padding: 5px 9px;
  border-left: 4px solid var(--success);
  color: var(--success);
  background: rgba(70, 122, 57, 0.08);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

.technology-copy ul {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 18px 0 22px;
  padding: 0;
  list-style: none;
}

.technology-copy li {
  padding: 6px 9px;
  border-radius: 6px;
  color: var(--text-soft);
  background: var(--bg-grey-soft);
  font-size: 12px;
  font-weight: 700;
}

.visual-brief-band {
  padding: clamp(52px, 7vw, 96px) 0;
  color: #ffffff;
  background: var(--brand-deep);
}

.visual-brief {
  display: grid;
  grid-template-columns: minmax(260px, 0.36fr) minmax(0, 1fr);
  gap: 34px;
  align-items: start;
}

.visual-copy {
  position: sticky;
  top: 132px;
}

.visual-copy .eyebrow {
  color: #000000;
  background: var(--accent);
}

.visual-copy h2 {
  margin-top: 18px;
  color: #ffffff;
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.05;
}

.visual-copy p {
  margin-top: 18px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 16px;
  line-height: 1.75;
}

.carousel-viewport {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.22);
}

.carousel-slide {
  position: absolute;
  inset: 0;
  display: block;
  color: inherit;
  opacity: 0;
  pointer-events: none;
  text-decoration: none;
  transition: opacity 0.45s ease;
}

.carousel-slide-active {
  opacity: 1;
  pointer-events: auto;
}

.carousel-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.carousel-slide-cropped img {
  position: absolute;
  top: 0;
  left: 0;
  width: 111.2%;
  height: auto;
  max-width: none;
  transform: translate(-5%, -9.6%);
}

.carousel-footer {
  grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.carousel-title {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.carousel-title span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding-top: 6px;
  border-top: 3px solid var(--accent);
  color: var(--accent);
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
}

.carousel-title strong {
  min-width: 0;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
}

.carousel-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
}

.carousel-button {
  min-height: 38px;
  padding: 0 12px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 6px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  font-size: 13px;
  font-weight: 700;
}

.carousel-dots {
  display: flex;
  align-items: center;
  gap: 4px;
}

.carousel-dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  padding: 0;
  border-radius: 6px;
  background: transparent;
}

.carousel-dot span {
  display: block;
  width: 16px;
  height: 3px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.34);
}

.carousel-dot-active span {
  background: var(--accent);
}

.carousel-button:hover,
.carousel-button:focus-visible,
.carousel-dot:hover span,
.carousel-dot:focus-visible span {
  color: #000000;
  background: var(--accent);
}

.delivery-band {
  background: linear-gradient(180deg, var(--bg-blue-soft), #ffffff);
}

.delivery-layout {
  display: grid;
  grid-template-columns: minmax(280px, 0.36fr) minmax(0, 1fr);
  gap: 46px;
  align-items: start;
}

.delivery-steps {
  display: grid;
  gap: 16px;
}

.delivery-step {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 22px;
  align-items: start;
  padding: 24px;
}

.delivery-step span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 8px;
  color: #000000;
  background: var(--accent);
  font-size: 16px;
  font-weight: 700;
}

.delivery-step p {
  margin-top: 10px;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-slide,
  .technology-media img {
    transition: none;
  }

  .technology-card:hover .technology-media img {
    transform: none;
  }
}

@media (max-width: 1080px) {
  .dashboard-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .technology-grid,
  .visual-brief,
  .delivery-layout {
    grid-template-columns: 1fr;
  }

  .visual-copy {
    position: static;
  }

  .carousel-footer {
    grid-column: auto;
  }
}

@media (max-width: 820px) {
  .page-index {
    grid-template-columns: 1fr;
  }

  .briefing-head {
    display: grid;
  }

  .briefing-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .home-hero {
    min-height: min(520px, 64svh);
  }

  .hero-content {
    padding-top: 30px;
    padding-bottom: 34px;
  }

  .home-hero h1 {
    font-size: clamp(38px, 11vw, 48px);
  }

  .hero-lede {
    font-size: 16px;
  }

  .hero-actions,
  .carousel-footer,
  .carousel-controls {
    width: 100%;
  }

  .policy-signal-list {
    margin-top: 24px;
  }

  .policy-signal-list li {
    font-size: 12px;
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-tile {
    min-height: 0;
    padding: 22px;
  }

  .technology-copy,
  .briefing-card {
    padding: 22px;
  }

  .visual-brief {
    gap: 22px;
  }

  .carousel-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .carousel-controls {
    justify-content: space-between;
  }

  .carousel-button {
    padding: 0 10px;
  }

  .delivery-step {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
