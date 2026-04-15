<script setup>
import ImageStackPage from '../components/ImageStackPage.vue'
import { createImageFactory } from '../utils/responsiveImages'

const slideSize = { width: 3200, height: 1786 }
const makeImage = createImageFactory(
  import.meta.glob('../assets/site-content/solid/display/page-*-*.webp', {
    eager: true,
    import: 'default',
  }),
)

const images = [
  makeImage({
    path: 'solid/display/page-01',
    alt: 'Solid-state battery source deck page 1',
    ...slideSize,
  }),
  makeImage({
    path: 'solid/display/page-02',
    alt: 'Solid-state battery source deck page 2',
    ...slideSize,
  }),
  makeImage({
    path: 'solid/display/page-03',
    alt: 'Solid-state battery source deck page 3',
    ...slideSize,
  }),
  makeImage({
    path: 'solid/display/page-04',
    alt: 'Solid-state battery source deck page 4',
    ...slideSize,
  }),
  makeImage({
    path: 'solid/display/page-05',
    alt: 'Solid-state battery source deck page 5',
    ...slideSize,
  }),
  makeImage({
    path: 'solid/display/page-06',
    alt: 'Solid-state battery source deck page 6',
    ...slideSize,
  }),
  makeImage({
    path: 'solid/display/page-07',
    alt: 'Solid-state battery source deck page 7',
    ...slideSize,
  }),
]

const topic = {
  eyebrow: 'Technology brief',
  title: 'Solid-state batteries',
  intro:
    'An innovation-track file for teams planning future procurement, safety-sensitive applications, and supplier qualification before commercial volume is assumed.',
  status: 'Innovation track',
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
    { value: 'pilot', label: 'qualification-first route' },
    { value: 'safe', label: 'safety-sensitive applications' },
    { value: 'future', label: 'procurement horizon planning' },
  ],
  briefs: [
    {
      kicker: 'Where it fits',
      title: 'Premium and safety-led planning',
      text: 'Relevant for premium mobility, compact devices, aerospace-adjacent conversations, and buyers preparing a longer qualification path.',
    },
    {
      kicker: 'What to verify',
      title: 'Readiness level before claims',
      text: 'Screen sample availability, cell format, pilot-line maturity, abuse testing, interface stability, and whether commercial dates match evidence.',
    },
    {
      kicker: 'Decision risk',
      title: 'Promise can outrun production',
      text: 'The file should separate credible near-term supply from roadmap narratives that are useful strategically but not yet ready for procurement.',
    },
  ],
}
</script>

<template>
  <ImageStackPage
    :images="images"
    :topic="topic"
    section-id="source-deck"
    library-title="Solid-state source deck"
    library-intro="Original technical visuals for advanced-cell discussions, kept as supporting evidence after the brief."
  />
</template>
