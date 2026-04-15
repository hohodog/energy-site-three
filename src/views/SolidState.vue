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
</script>

<template>
  <ImageStackPage :images="images" />
</template>
