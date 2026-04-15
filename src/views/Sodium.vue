<script setup>
import ImageStackPage from '../components/ImageStackPage.vue'
import { createImageFactory } from '../utils/responsiveImages'

defineOptions({ name: 'SodiumPage' })

const slideSize = { width: 3200, height: 1786 }
const makeImage = createImageFactory(
  import.meta.glob('../assets/site-content/sodium/display/page-*-*.webp', {
    eager: true,
    import: 'default',
  }),
)

const images = [
  makeImage({
    path: 'sodium/display/page-01',
    alt: 'Sodium-ion battery source deck page 1',
    ...slideSize,
  }),
  makeImage({
    path: 'sodium/display/page-02',
    alt: 'Sodium-ion battery source deck page 2',
    ...slideSize,
  }),
  makeImage({
    path: 'sodium/display/page-03',
    alt: 'Sodium-ion battery source deck page 3',
    ...slideSize,
  }),
  makeImage({
    path: 'sodium/display/page-04',
    alt: 'Sodium-ion battery source deck page 4',
    ...slideSize,
  }),
  makeImage({
    path: 'sodium/display/page-05',
    alt: 'Sodium-ion battery source deck page 5',
    ...slideSize,
  }),
  makeImage({
    path: 'sodium/display/page-06',
    alt: 'Sodium-ion battery source deck page 6',
    ...slideSize,
  }),
]

const topic = {
  eyebrow: 'Technology brief',
  title: 'Sodium-ion batteries',
  intro:
    'A practical file for projects testing lower-cost storage routes, material availability, and supplier maturity beyond lithium-only procurement.',
  status: 'Scale-up watch',
  updated: 'Reviewed April 2026',
  actions: [
    { label: 'Request supplier screening', to: '/contact', primary: true },
    { label: 'Back to overview', to: '/', primary: false },
  ],
  contents: [
    { label: 'Brief', href: '#brief' },
    { label: 'Source deck', href: '#source-deck' },
  ],
  metrics: [
    { value: 'Na', label: 'abundant material route' },
    { value: '2-4h', label: 'stationary storage screening window' },
    { value: 'EU', label: 'cost-sensitive project fit' },
  ],
  briefs: [
    {
      kicker: 'Where it fits',
      title: 'Cost-led stationary storage',
      text: 'Best reviewed for stationary, mobility-adjacent, and backup applications where supply resilience and cost pressure are more important than maximum energy density.',
    },
    {
      kicker: 'What to verify',
      title: 'Factory evidence before volume',
      text: 'Supplier screening should focus on cycle data, low-temperature performance, BMS integration, certification route, and real production capability.',
    },
    {
      kicker: 'Decision risk',
      title: 'Young market, uneven claims',
      text: 'The opportunity is real, but qualification work matters because cell formats, warranty language, and bankability evidence can vary sharply by supplier.',
    },
  ],
}
</script>

<template>
  <ImageStackPage
    :images="images"
    :topic="topic"
    section-id="source-deck"
    library-title="Sodium-ion source deck"
    library-intro="Original technical visuals for sodium-ion discussions, kept as supporting evidence after the brief."
    crop-first-image
  />
</template>
