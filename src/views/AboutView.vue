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
</script>

<template>
  <ImageStackPage :images="images" />
</template>
