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
    title: 'Flow Batteries',
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
  <section class="home-carousel" aria-label="Technology overview">
    <div class="home-carousel-shell">
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
            :fetchpriority="index === 0 ? 'high' : undefined"
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

  <ImageStackPage :images="contentImages" />
</template>

<style scoped>
.home-carousel {
  padding: 36px 0 0;
  background:
    linear-gradient(90deg, rgba(255, 214, 23, 0.24) 0 6px, transparent 6px 100%),
    linear-gradient(180deg, rgba(242, 245, 249, 0.76), rgba(255, 255, 255, 0));
}

.home-carousel-shell {
  width: min(calc(100% - var(--layout-gutter) * 2), 1180px);
  margin: 0 auto;
}

.carousel-viewport {
  position: relative;
  overflow: hidden;
  aspect-ratio: 2 / 1;
  border: 1px solid var(--line-soft);
  border-top: 4px solid var(--brand);
  border-radius: 4px;
  background: #ffffff;
  box-shadow: var(--shadow-soft);
}

.carousel-viewport::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 4px;
  background: var(--accent);
  pointer-events: none;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 14px 0 0;
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
  color: var(--brand);
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
}

.carousel-title strong {
  min-width: 0;
  color: var(--text-main);
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
  border: 1px solid var(--line-soft);
  border-radius: 6px;
  color: var(--brand);
  background: rgba(255, 255, 255, 0.94);
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
  background: rgba(0, 68, 148, 0.24);
}

.carousel-dot-active span {
  background: var(--brand);
}

.carousel-button:hover,
.carousel-button:focus-visible,
.carousel-dot:hover span,
.carousel-dot:focus-visible span {
  background: var(--accent);
}

.carousel-slide::after,
.carousel-button::after,
.carousel-dot::after {
  display: none;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-slide {
    transition: none;
  }
}

@media (max-width: 720px) {
  .home-carousel {
    padding-top: 20px;
  }

  .home-carousel-shell {
    width: 100%;
    max-width: 430px;
  }

  .carousel-viewport {
    border-right: 0;
    border-left: 0;
    border-radius: 0;
  }

  .carousel-slide-cropped img {
    width: 111.8%;
    transform: translate(-5.2%, -9.4%);
  }

  .carousel-footer {
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 14px 0;
  }

  .carousel-controls {
    width: 100%;
    justify-content: space-between;
  }

  .carousel-title strong {
    font-size: 16px;
  }
}
</style>
