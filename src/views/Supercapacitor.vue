<script setup>
import ImageStackPage from '../components/ImageStackPage.vue'
import { createImageFactory } from '../utils/responsiveImages'

defineOptions({ name: 'SupercapacitorPage' })

const slideSize = { width: 3200, height: 1786 }
const makeImage = createImageFactory(
  import.meta.glob('../assets/site-content/supercapacitor/display/page-*-*.webp', {
    eager: true,
    import: 'default',
  }),
)

const images = [
  makeImage({
    path: 'supercapacitor/display/page-01',
    alt: 'Supercapacitor source deck page 1',
    ...slideSize,
  }),
  makeImage({
    path: 'supercapacitor/display/page-02',
    alt: 'Supercapacitor source deck page 2',
    ...slideSize,
  }),
  makeImage({
    path: 'supercapacitor/display/page-03',
    alt: 'Supercapacitor source deck page 3',
    ...slideSize,
  }),
  makeImage({
    path: 'supercapacitor/display/page-04',
    alt: 'Supercapacitor source deck page 4',
    ...slideSize,
  }),
  makeImage({
    path: 'supercapacitor/display/page-05',
    alt: 'Supercapacitor source deck page 5',
    ...slideSize,
  }),
  makeImage({
    path: 'supercapacitor/display/page-06',
    alt: 'Supercapacitor source deck page 6',
    ...slideSize,
  }),
]

const topic = {
  eyebrow: 'Technology brief',
  title: 'Supercapacitors',
  intro:
    'A power-response file for high-cycle applications where rapid charge, discharge, and hybrid storage architecture matter more than long energy duration.',
  status: 'Power response file',
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
    { value: '10x+', label: 'cycle-life conversation starter' },
    { value: 's-min', label: 'response-oriented use cases' },
    { value: 'hybrid', label: 'battery plus capacitor route' },
  ],
  briefs: [
    {
      kicker: 'Where it fits',
      title: 'Power quality and fast cycling',
      text: 'Strongest for regenerative braking, peak response, voltage support, industrial power smoothing, and systems paired with a battery energy layer.',
    },
    {
      kicker: 'What to verify',
      title: 'Module integration and controls',
      text: 'Screen cell consistency, thermal layout, control logic, safety documentation, cabinet design, and proof that the supplier can support integration work.',
    },
    {
      kicker: 'Decision risk',
      title: 'Energy duration can be overstated',
      text: 'The file should separate genuine high-power advantages from claims that position supercapacitors as a direct replacement for long-duration batteries.',
    },
  ],
}
</script>

<template>
  <ImageStackPage
    :images="images"
    :topic="topic"
    section-id="source-deck"
    library-title="Supercapacitor source deck"
    library-intro="Original technical visuals for high-power storage discussions, kept as supporting evidence after the brief."
  />
</template>
