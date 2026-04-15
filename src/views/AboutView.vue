<script setup>
import ImageStackPage from '../components/ImageStackPage.vue'
import { createImageFactory } from '../utils/responsiveImages'

const makeImage = createImageFactory(
  import.meta.glob('../assets/site-content/home/02-team-introduction-*.webp', {
    eager: true,
    import: 'default',
  }),
)

const images = [
  makeImage({
    path: 'home/02-team-introduction',
    alt: 'Team introduction',
    width: 1792,
    height: 998,
  }),
]

const topic = {
  eyebrow: 'How we work',
  title: 'A battery sourcing desk for European project teams',
  intro:
    'StorageLink connects European energy, mobility, and industrial teams with structured supplier screening, technical translation, and China-side execution support.',
  status: 'Operating model',
  updated: 'Reviewed April 2026',
  actions: [
    { label: 'Request a briefing', to: '/contact', primary: true },
    { label: 'Technology overview', to: '/', primary: false },
  ],
  contents: [
    { label: 'Brief', href: '#brief' },
    { label: 'Source deck', href: '#source-deck' },
  ],
  metrics: [
    { value: 'EU', label: 'project-side communication' },
    { value: 'CN', label: 'supplier-side coordination' },
    { value: '1', label: 'shared evidence file' },
  ],
  briefs: [
    {
      kicker: 'Role',
      title: 'Translate requirements into supplier evidence',
      text: 'We turn project needs into structured questions, data requests, and qualification checks that suppliers can answer clearly.',
    },
    {
      kicker: 'Method',
      title: 'Keep the shortlist practical',
      text: 'Technology fit is reviewed together with standards, production readiness, documentation quality, commercial fit, and delivery constraints.',
    },
    {
      kicker: 'Output',
      title: 'Support decisions before commitment',
      text: 'The result is a decision file for internal review, supplier dialogue, pilot planning, or procurement preparation.',
    },
  ],
}
</script>

<template>
  <ImageStackPage
    :images="images"
    :topic="topic"
    section-id="source-deck"
    library-title="Team source deck"
    library-intro="Original team material, kept behind the operating brief for context."
  />
</template>
