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
</script>

<template>
  <ImageStackPage :images="images" />
</template>
