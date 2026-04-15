<script setup>
import ImageStackPage from '../components/ImageStackPage.vue'
import { createImageFactory } from '../utils/responsiveImages'

defineOptions({ name: 'RedoxPage' })

const slideSize = { width: 1376, height: 768 }
const makeImage = createImageFactory(
  import.meta.glob('../assets/site-content/redox/*.webp', {
    eager: true,
    import: 'default',
  }),
)

const images = [
  makeImage({ path: 'redox/1', alt: 'Flow battery source deck page 1', ...slideSize }),
  makeImage({ path: 'redox/2', alt: 'Flow battery source deck page 2', ...slideSize }),
  makeImage({ path: 'redox/3', alt: 'Flow battery source deck page 3', ...slideSize }),
  makeImage({ path: 'redox/4', alt: 'Flow battery source deck page 4', ...slideSize }),
  makeImage({ path: 'redox/5', alt: 'Flow battery source deck page 5', ...slideSize }),
  makeImage({ path: 'redox/6', alt: 'Flow battery source deck page 6', ...slideSize }),
]

const topic = {
  eyebrow: 'Technology brief',
  title: 'Flow batteries',
  intro:
    'A long-duration storage file for stationary projects that can trade footprint for safer layouts, deeper cycling, and clearer energy-capacity separation.',
  status: 'Long-duration file',
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
    { value: '4h+', label: 'duration-led screening' },
    { value: 'site', label: 'civil and footprint review' },
    { value: 'safe', label: 'stationary layout emphasis' },
  ],
  briefs: [
    {
      kicker: 'Where it fits',
      title: 'Longer stationary discharge',
      text: 'Best reviewed for grid, renewable integration, and industrial sites where multi-hour discharge and safety posture can justify additional footprint.',
    },
    {
      kicker: 'What to verify',
      title: 'System proof, not only stacks',
      text: 'Supplier dialogue should cover electrolyte handling, pumps, controls, project references, container design, serviceability, and performance guarantees.',
    },
    {
      kicker: 'Decision risk',
      title: 'Project economics are site-specific',
      text: 'A promising chemistry can fail if land, civil works, maintenance model, or electrolyte logistics are not tested against the actual site plan.',
    },
  ],
}
</script>

<template>
  <ImageStackPage
    :images="images"
    :topic="topic"
    section-id="source-deck"
    library-title="Flow battery source deck"
    library-intro="Original technical visuals for long-duration storage discussions, kept as supporting evidence after the brief."
  />
</template>
