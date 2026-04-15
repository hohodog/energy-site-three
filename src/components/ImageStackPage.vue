<script setup>
defineProps({
  images: {
    type: Array,
    required: true,
  },
  cropFirstImage: {
    type: Boolean,
    default: false,
  },
})

const hotspotStyle = (hotspot) => ({
  left: `${hotspot.left}%`,
  top: `${hotspot.top}%`,
  width: `${hotspot.width}%`,
  height: `${hotspot.height}%`,
})
</script>

<template>
  <section class="image-stack-page" aria-label="Page image content">
    <figure
      v-for="(image, index) in images"
      :key="image.src"
      class="image-frame"
      :class="{
        'image-frame-cropped-hero': index === 0 && cropFirstImage,
      }"
    >
      <span class="frame-index" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
      <span class="image-media">
        <img
          :src="image.src"
          :srcset="image.srcset"
          :sizes="image.sizes"
          :alt="image.alt"
          :width="image.width"
          :height="image.height"
          :loading="index === 0 ? 'eager' : 'lazy'"
          :fetchpriority="index === 0 ? 'high' : undefined"
          decoding="async"
        />
        <template v-for="hotspot in image.hotspots" :key="hotspot.to || hotspot.label">
          <RouterLink
            v-if="hotspot.to"
            class="image-hotspot"
            :to="hotspot.to"
            :aria-label="hotspot.label"
            :style="hotspotStyle(hotspot)"
          >
            <span>{{ hotspot.label }}</span>
          </RouterLink>
          <button
            v-else
            type="button"
            class="image-hotspot"
            :aria-label="hotspot.label"
            :style="hotspotStyle(hotspot)"
          >
            <span>{{ hotspot.label }}</span>
          </button>
        </template>
      </span>
    </figure>
  </section>
</template>

<style scoped>
.image-stack-page {
  position: relative;
  isolation: isolate;
  display: grid;
  gap: 56px;
  width: 100%;
  margin: 0 auto;
  padding: 36px 0 88px;
  background: transparent;
}

.image-stack-page::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(90deg, rgba(255, 214, 23, 0.24) 0 6px, transparent 6px 100%),
    linear-gradient(180deg, rgba(242, 245, 249, 0.72), rgba(255, 255, 255, 0));
  pointer-events: none;
}

.image-frame {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 76px) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
  width: min(calc(100% - var(--layout-gutter) * 2), 1180px);
  margin: 0 auto;
  padding: 34px;
  min-width: 0;
  overflow: clip;
  border: 1px solid var(--line-soft);
  border-top: 4px solid var(--brand);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: var(--shadow-soft);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.frame-index {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 42px;
  padding-top: 10px;
  border-top: 3px solid var(--accent);
  color: var(--brand);
  font-size: 32px;
  font-weight: 600;
  line-height: 1;
}

.image-frame::before {
  content: '';
  position: absolute;
  left: 34px;
  right: 0;
  top: -28px;
  height: 1px;
  background: rgba(0, 68, 148, 0.18);
  pointer-events: none;
}

.image-frame::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 4px;
  background: var(--accent);
  pointer-events: none;
}

.image-frame:first-child::before {
  display: none;
}

.image-frame:hover {
  border-color: var(--line-strong);
  box-shadow: 0 18px 38px rgba(0, 40, 88, 0.1);
}

.image-media {
  position: relative;
  display: block;
  width: 100%;
  inline-size: 100%;
  min-width: 0;
  max-width: 100%;
  max-inline-size: 100%;
  overflow: hidden;
  border: 1px solid #cfcfcf;
  border-radius: 2px;
  background: #ffffff;
  box-shadow: 0 18px 38px rgba(0, 40, 88, 0.08);
}

.image-hotspot {
  position: absolute;
  z-index: 2;
  display: block;
  padding: 0;
  border: 0;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
}

.image-hotspot span {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.image-hotspot:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  background: rgba(255, 214, 23, 0.16);
}

.image-frame img {
  display: block;
  width: 100%;
  inline-size: 100%;
  min-width: 0;
  max-width: 100%;
  max-inline-size: 100%;
  height: auto;
}

.image-frame-cropped-hero .image-media {
  position: relative;
  aspect-ratio: 2 / 1;
  background: transparent;
}

.image-frame-cropped-hero img {
  position: absolute;
  top: 0;
  left: 0;
  width: 111.2%;
  max-width: none;
  max-inline-size: none;
  transform: translate(-5%, -9.6%);
}

@media (prefers-reduced-motion: reduce) {
  .image-frame {
    transition: none;
  }

  .image-frame:hover {
    transform: none;
  }
}

@media (max-width: 720px) {
  .image-stack-page {
    gap: 32px;
    padding-top: 20px;
    padding-bottom: 34px;
  }

  .image-frame {
    grid-template-columns: 1fr;
    gap: 12px;
    width: 100%;
    max-width: 430px;
    padding: 18px 14px 20px;
    border-right: 0;
    border-left: 0;
    border-radius: 0;
  }

  .image-frame::before {
    left: 0;
    top: -14px;
  }

  .image-frame::after {
    width: 40px;
  }

  .frame-index {
    justify-content: flex-start;
    min-height: 20px;
    width: 48px;
    padding-top: 7px;
    font-size: 14px;
  }

  .image-media {
    width: 100%;
    inline-size: 100%;
    max-width: 100%;
    max-inline-size: 100%;
    box-shadow: 0 10px 22px rgba(17, 28, 24, 0.07);
  }

  .image-frame img {
    width: 100%;
    inline-size: 100%;
    max-width: 100%;
    max-inline-size: 100%;
  }

  .image-frame-cropped-hero .image-media {
    border-radius: 4px;
  }

  .image-frame-cropped-hero img {
    width: 111.8%;
    max-width: none;
    max-inline-size: none;
    transform: translate(-5.2%, -9.4%);
  }

  .image-frame:hover {
    transform: none;
  }
}
</style>
