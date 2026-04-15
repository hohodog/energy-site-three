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
</script>

<template>
  <ImageStackPage :images="images" crop-first-image />
</template>
