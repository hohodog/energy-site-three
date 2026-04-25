<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import ImageStackPage from '../components/ImageStackPage.vue'
import { createImageFactory } from '../utils/responsiveImages'

defineOptions({ name: 'HomePage' })

const slideSizes = '(max-width: 1240px) calc(100vw - 36px), 1180px'
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

const heroImage = makeImage({
  path: 'home/01-hero-no-title',
  alt: 'Energy storage landscape with battery containers, solar panels, and wind turbines',
  width: 1952,
  height: 544,
  sizes: slideSizes,
})

const routeSlides = [
  makeImage({
    path: 'sodium/display/page-01',
    alt: 'Sodium-ion batteries overview',
    width: 3200,
    height: 1786,
    sizes: slideSizes,
  }),
  makeImage({
    path: 'supercapacitor/display/page-01',
    alt: 'Supercapacitors overview',
    width: 3200,
    height: 1786,
    sizes: slideSizes,
  }),
  makeImage({
    path: 'redox/1',
    alt: 'Flow batteries overview',
    width: 1376,
    height: 768,
    sizes: slideSizes,
  }),
  makeImage({
    path: 'solid/display/page-01',
    alt: 'Solid-state batteries overview',
    width: 3200,
    height: 1786,
    sizes: slideSizes,
  }),
]

const dossierSlides = [
  {
    ...makeImage({
      path: 'home/03-home-overview',
      alt: 'StorageLink source overview page',
      width: 1932,
      height: 1090,
      sizes: slideSizes,
    }),
    title: 'StorageLink overview',
  },
  {
    ...makeImage({
      path: 'home/04-technology-comparison',
      alt: 'Technology comparison source page',
      width: 960,
      height: 540,
      sizes: slideSizes,
    }),
    title: 'Technology comparison',
  },
  {
    ...makeImage({
      path: 'home/05-technology-focus',
      alt: 'Technology focus source page',
      width: 1925,
      height: 1089,
      sizes: slideSizes,
    }),
    title: 'Technology focus',
  },
  {
    ...makeImage({
      path: 'home/06-why-storagelink',
      alt: 'StorageLink advantage source page',
      width: 1924,
      height: 1085,
      sizes: slideSizes,
    }),
    title: 'Why StorageLink',
  },
]

const pageContents = [
  { label: 'Briefing', href: '#briefing' },
  { label: 'Technology files', href: '#technologies' },
  { label: 'Visual dossier', href: '#dossier' },
  { label: 'Delivery route', href: '#delivery' },
  { label: 'Source deck', href: '#source-deck' },
]

const dashboardStats = [
  {
    value: '4',
    label: 'technology routes',
    detail: 'sodium-ion, supercapacitor, flow battery, and solid-state files',
  },
  {
    value: '3',
    label: 'evidence layers',
    detail: 'application fit, supplier proof, and pilot readiness',
  },
  {
    value: 'EU',
    label: 'buyer context',
    detail: 'language shaped for European project teams and tender review',
  },
  {
    value: 'CN',
    label: 'supplier channel',
    detail: 'technical coordination with Chinese manufacturers and partners',
  },
]

const briefingCards = [
  {
    title: 'Start with project duty',
    text: 'Runtime, power response, safety constraints, temperature range, site footprint, and warranty expectations decide the route before supplier outreach.',
  },
  {
    title: 'Separate evidence from promise',
    text: 'Supplier claims are translated into data-room requests: test reports, certifications, production capacity, validation status, and sample terms.',
  },
  {
    title: 'Keep the decision file clean',
    text: 'The output is not a catalogue. It is a shortlist logic that explains what to check next, what to reject early, and where pilots make sense.',
  },
]

const technologyBriefs = [
  {
    title: 'Sodium-ion batteries',
    route: '/sodium',
    image: routeSlides[0],
    status: 'Stationary cost route',
    summary:
      'A practical file for backup power, cold-climate storage, and projects that care more about supply resilience than maximum energy density.',
    tags: ['Cabinet storage', 'Temperature window', 'Cost pressure'],
  },
  {
    title: 'Supercapacitors',
    route: '/supercapacitor',
    image: routeSlides[1],
    status: 'Fast-response power',
    summary:
      'A high-cycle route for rail, UPS, braking recovery, voltage support, and hybrid systems where seconds matter more than hours.',
    tags: ['Peak power', 'High cycle life', 'Hybrid support'],
  },
  {
    title: 'Flow batteries',
    route: '/redox',
    image: routeSlides[2],
    status: 'Long-duration file',
    summary:
      'A stationary route for longer discharge windows, safer site layouts, and projects where service model and footprint can be planned early.',
    tags: ['4-12+ hours', 'C&I sites', 'Service model'],
  },
  {
    title: 'Solid-state batteries',
    route: '/solid',
    image: routeSlides[3],
    status: 'Qualification track',
    summary:
      'A forward-looking file for safety-sensitive, premium, or mobility-linked projects that need sample validation before procurement language hardens.',
    tags: ['Samples', 'Safety case', 'Roadmap review'],
  },
]

const deliverySteps = [
  {
    number: '01',
    title: 'Project signal',
    text: 'Clarify application, duty cycle, site constraints, target market, and procurement calendar.',
  },
  {
    number: '02',
    title: 'Technology screening',
    text: 'Compare route fit, maturity, standards path, documentation quality, and validation needs.',
  },
  {
    number: '03',
    title: 'Supplier dialogue',
    text: 'Translate project needs into technical questions, data requests, sample plans, and commercial boundaries.',
  },
  {
    number: '04',
    title: 'Decision package',
    text: 'Prepare a shortlist with risks, next evidence, and the work needed for pilots or procurement.',
  },
]

const policySignals = [
  'Route before supplier',
  'Evidence before commitment',
  'China-Europe execution',
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
    alt: 'Homepage source deck overview',
    width: 1932,
    height: 1090,
  }),
  makeImage({
    path: 'home/04-technology-comparison',
    alt: 'Technology comparison source deck page',
    width: 960,
    height: 540,
  }),
  {
    ...makeImage({
      path: 'home/05-technology-focus',
      alt: 'Technology focus source deck page',
      width: 1925,
      height: 1089,
    }),
    hotspots: technologyFocusHotspots,
  },
  {
    ...makeImage({
      path: 'home/06-why-storagelink',
      alt: 'StorageLink advantage source deck page',
      width: 1924,
      height: 1085,
    }),
    hotspots: storageLinkAdvantageHotspots,
  },
]

const activeSlideIndex = ref(0)
const carouselPaused = ref(false)
let carouselTimer

const activeSlide = computed(() => dossierSlides[activeSlideIndex.value])

const normalizeSlideIndex = (index) => (index + dossierSlides.length) % dossierSlides.length

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
  <main class="home-page">
    <section class="home-hero" aria-labelledby="home-title">
      <img
        class="hero-backdrop"
        :src="heroImage.src"
        :srcset="heroImage.srcset"
        :sizes="heroImage.sizes"
        :alt="heroImage.alt"
        width="1952"
        height="544"
        fetchpriority="high"
        decoding="async"
      />
      <div class="hero-screen" aria-hidden="true"></div>

      <div class="section-wrap hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">2026 battery supply dossier</p>
          <h1 id="home-title">Battery supply intelligence for European energy projects</h1>
          <p class="hero-lede">
            Structured technology screening, supplier evidence, and China-Europe coordination for
            storage decisions that need to survive tender review, technical diligence, and delivery.
          </p>

          <div class="hero-actions">
            <RouterLink class="button button-primary" to="/contact">Request a briefing</RouterLink>
            <a class="button button-secondary" href="#technologies">Review technology files</a>
          </div>

          <ul class="policy-signal-list" aria-label="Positioning signals">
            <li v-for="signal in policySignals" :key="signal">{{ signal }}</li>
          </ul>
        </div>

        <aside class="hero-dossier" aria-label="StorageLink dossier focus">
          <span>StorageLink desk</span>
          <strong>Route fit, evidence quality, and supplier readiness in one review path.</strong>
          <dl>
            <div>
              <dt>Scope</dt>
              <dd>storage projects and industrial buyers</dd>
            </div>
            <div>
              <dt>Output</dt>
              <dd>shortlist logic, data requests, pilot next steps</dd>
            </div>
            <div>
              <dt>Bridge</dt>
              <dd>European requirements, Chinese supply capability</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>

    <section class="page-index-band" aria-label="Page contents">
      <div class="section-wrap page-index">
        <div class="page-index-copy">
          <strong>Page contents</strong>
          <p>Briefing logic, route files, visual dossier, delivery path, and source deck.</p>
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
              The homepage should feel like a usable sourcing brief: enough visual material to trust
              the subject, enough structure to know what happens next.
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
            The route images are shown as complete dossier pages, not decorative crops, so the
            desktop page keeps the visual language of the original material.
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

    <section id="dossier" class="visual-brief-band" aria-labelledby="visual-brief-title">
      <div class="section-wrap visual-brief">
        <div class="visual-copy">
          <p class="eyebrow">Current dossier</p>
          <h2 id="visual-brief-title">{{ activeSlide.title }}</h2>
          <p>
            The original slides stay visible at presentation size. The page around them supplies
            procurement context instead of forcing the slide artwork to do all the work.
          </p>
        </div>

        <div
          class="carousel-viewport"
          @mouseenter="carouselPaused = true"
          @mouseleave="carouselPaused = false"
          @focusin="carouselPaused = true"
          @focusout="carouselPaused = false"
        >
          <article
            v-for="(slide, index) in dossierSlides"
            :key="slide.title"
            :class="['carousel-slide', { 'carousel-slide-active': index === activeSlideIndex }]"
            :aria-hidden="index === activeSlideIndex ? 'false' : 'true'"
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
          </article>
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
                v-for="(slide, index) in dossierSlides"
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
            The work moves from use-case definition to supplier evidence, then into a decision
            package that can support pilots, negotiations, or internal approvals.
          </p>
        </div>

        <div class="delivery-steps">
          <article v-for="step in deliverySteps" :key="step.number" class="delivery-step">
            <span>{{ step.number }}</span>
            <div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <ImageStackPage
      :images="contentImages"
      section-id="source-deck"
      library-title="Source slide library"
      library-intro="Original visual material remains available for technical review at a readable size, with click areas preserved where the source deck expects route navigation."
      compact
    />
  </main>
</template>

<style scoped>
.home-page {
  background: #ffffff;
}

.home-hero {
  position: relative;
  isolation: isolate;
  min-height: clamp(560px, 68svh, 720px);
  overflow: hidden;
  color: #ffffff;
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
    linear-gradient(90deg, rgba(0, 24, 58, 0.92), rgba(0, 68, 148, 0.7) 48%, rgba(0, 0, 0, 0.22)),
    linear-gradient(180deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.42));
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(310px, 0.38fr);
  gap: clamp(34px, 5.5vw, 76px);
  align-items: center;
  min-height: inherit;
  padding-top: clamp(52px, 6vw, 84px);
  padding-bottom: clamp(52px, 6vw, 84px);
}

.hero-copy {
  max-width: 860px;
}

.home-hero .eyebrow,
.visual-copy .eyebrow {
  color: #000000;
  background: var(--accent);
}

.home-hero h1 {
  max-width: 900px;
  margin-top: 20px;
  color: #ffffff;
  font-size: clamp(52px, 6.3vw, 84px);
  line-height: 0.98;
  letter-spacing: 0;
}

.hero-lede {
  max-width: 760px;
  margin-top: 24px;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(18px, 1.8vw, 22px);
  line-height: 1.62;
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

.hero-dossier {
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  border-top: 5px solid var(--accent);
  border-radius: 8px;
  background: rgba(0, 28, 66, 0.72);
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(14px);
}

.hero-dossier > span {
  display: inline-flex;
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-dossier strong {
  display: block;
  margin-top: 14px;
  color: #ffffff;
  font-size: 25px;
  line-height: 1.18;
}

.hero-dossier dl {
  display: grid;
  gap: 16px;
  margin: 26px 0 0;
}

.hero-dossier div {
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
}

.hero-dossier dt {
  color: rgba(255, 255, 255, 0.58);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-dossier dd {
  margin: 5px 0 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 15px;
  line-height: 1.55;
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
  padding: clamp(64px, 8vw, 108px) 0;
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
  min-height: 186px;
  padding: 26px;
  background: #ffffff;
}

.dashboard-tile strong {
  display: block;
  color: var(--brand);
  font-size: clamp(42px, 5vw, 62px);
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
  min-height: 230px;
  padding: 30px;
}

.briefing-card h3,
.technology-card h3,
.delivery-step h3 {
  color: var(--text-main);
  font-size: 23px;
  line-height: 1.18;
}

.briefing-card h3::before {
  content: '';
  display: block;
  width: 48px;
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
  gap: 28px;
  margin-top: 38px;
}

.technology-card {
  overflow: hidden;
}

.technology-media {
  display: grid;
  place-items: center;
  min-height: 360px;
  padding: 18px;
  background:
    linear-gradient(135deg, rgba(0, 68, 148, 0.08), rgba(255, 214, 23, 0.1)),
    var(--bg-blue-soft);
  overflow: hidden;
}

.technology-media img {
  width: 100%;
  height: 100%;
  max-height: 340px;
  object-fit: contain;
  border: 1px solid rgba(0, 68, 148, 0.12);
  background: #ffffff;
  box-shadow: 0 12px 28px rgba(0, 40, 88, 0.1);
  transition: transform 0.3s ease;
}

.technology-card:hover .technology-media img {
  transform: scale(1.018);
}

.technology-copy {
  padding: 28px;
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
  padding: clamp(62px, 8vw, 108px) 0;
  color: #ffffff;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.16)),
    var(--brand-deep);
}

.visual-brief {
  display: grid;
  grid-template-columns: minmax(270px, 0.34fr) minmax(0, 1fr);
  gap: 36px;
  align-items: start;
}

.visual-copy {
  position: sticky;
  top: 132px;
}

.visual-copy h2 {
  margin-top: 18px;
  color: #ffffff;
  font-size: clamp(34px, 4vw, 50px);
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
  display: grid;
  place-items: center;
  opacity: 0;
  pointer-events: none;
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
  object-fit: contain;
  object-position: center;
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

.delivery-step > span {
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
  .hero-grid,
  .visual-brief,
  .delivery-layout {
    grid-template-columns: 1fr;
  }

  .hero-dossier {
    max-width: 560px;
  }

  .dashboard-grid,
  .technology-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .visual-copy {
    position: static;
  }

  .carousel-footer {
    grid-column: auto;
  }
}

@media (max-width: 820px) {
  .page-index,
  .briefing-head,
  .briefing-grid {
    grid-template-columns: 1fr;
  }

  .briefing-head {
    display: grid;
  }
}
</style>
