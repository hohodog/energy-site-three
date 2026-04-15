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
</script>

<template>
  <ImageStackPage :images="images" />
</template>
