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
  compact: {
    type: Boolean,
    default: false,
  },
  sectionId: {
    type: String,
    default: undefined,
  },
  libraryTitle: {
    type: String,
    default: '',
  },
  libraryIntro: {
    type: String,
    default: '',
  },
  topic: {
    type: Object,
    default: null,
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
  <div class="stack-page-wrapper">
    <section v-if="topic" class="topic-hero" aria-labelledby="topic-title">
      <div class="section-wrap topic-layout">
        <div class="topic-copy">
          <nav class="topic-breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span aria-hidden="true">/</span>
            <span>{{ topic.title }}</span>
          </nav>

          <p class="eyebrow">{{ topic.eyebrow }}</p>
          <h1 id="topic-title">{{ topic.title }}</h1>
          <p class="topic-intro">{{ topic.intro }}</p>

          <div v-if="topic.actions?.length" class="topic-actions">
            <RouterLink
              v-for="action in topic.actions"
              :key="action.label"
              :to="action.to"
              :class="['button', action.primary ? 'button-primary' : 'button-secondary']"
            >
              {{ action.label }}
            </RouterLink>
          </div>
        </div>

        <aside class="topic-register" aria-label="Brief status">
          <p>Brief status</p>
          <strong>{{ topic.status }}</strong>
          <span>{{ topic.updated }}</span>

          <dl v-if="topic.metrics?.length">
            <div v-for="metric in topic.metrics" :key="metric.label">
              <dt>{{ metric.value }}</dt>
              <dd>{{ metric.label }}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>

    <section v-if="topic?.contents?.length" class="topic-index-band" aria-label="Page contents">
      <div class="section-wrap topic-index">
        <strong>Page contents</strong>
        <nav aria-label="Topic page sections">
          <a v-for="item in topic.contents" :key="item.href" :href="item.href">{{ item.label }}</a>
        </nav>
      </div>
    </section>

    <section v-if="topic?.briefs?.length" id="brief" class="topic-brief-band">
      <div class="section-wrap topic-brief-grid">
        <article v-for="brief in topic.briefs" :key="brief.title" class="topic-brief-card">
          <span>{{ brief.kicker }}</span>
          <h2>{{ brief.title }}</h2>
          <p>{{ brief.text }}</p>
        </article>
      </div>
    </section>

    <section
      :id="sectionId"
      :class="['image-stack-page', { 'image-stack-page-compact': compact }]"
      aria-label="Source slide content"
    >
      <header v-if="libraryTitle || libraryIntro" class="section-wrap stack-heading">
        <p class="eyebrow">Source material</p>
        <h2>{{ libraryTitle }}</h2>
        <p v-if="libraryIntro">{{ libraryIntro }}</p>
      </header>

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
  </div>
</template>

<style scoped>
.stack-page-wrapper {
  background: #ffffff;
}

.topic-hero {
  padding: clamp(48px, 7vw, 92px) 0;
  color: #ffffff;
  background: linear-gradient(90deg, rgba(0, 55, 118, 0.98), rgba(0, 68, 148, 0.92)), var(--brand);
}

.topic-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 360px);
  gap: clamp(32px, 5vw, 72px);
  align-items: end;
}

.topic-breadcrumb {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 22px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 13px;
  font-weight: 700;
}

.topic-breadcrumb a {
  color: #ffffff;
}

.topic-copy .eyebrow {
  color: #000000;
  background: var(--accent);
}

.topic-copy h1 {
  max-width: 860px;
  margin-top: 18px;
  color: #ffffff;
  font-size: clamp(42px, 6.2vw, 72px);
  line-height: 1;
}

.topic-intro {
  max-width: 760px;
  margin-top: 24px;
  color: rgba(255, 255, 255, 0.88);
  font-size: clamp(18px, 2vw, 22px);
  line-height: 1.65;
}

.topic-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.topic-actions .button-secondary {
  color: #ffffff;
  background: transparent;
  border-color: rgba(255, 255, 255, 0.48);
}

.topic-register {
  padding: 26px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-top: 5px solid var(--accent);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.18);
}

.topic-register p {
  color: rgba(255, 255, 255, 0.78);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
}

.topic-register strong {
  display: block;
  margin-top: 10px;
  color: #ffffff;
  font-size: 25px;
  line-height: 1.15;
}

.topic-register > span {
  display: block;
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 14px;
}

.topic-register dl {
  display: grid;
  gap: 1px;
  margin: 24px 0 0;
  background: rgba(255, 255, 255, 0.22);
}

.topic-register dl div {
  padding: 16px 0;
  background: var(--brand-deep);
}

.topic-register dt {
  color: var(--accent);
  font-size: 30px;
  font-weight: 700;
  line-height: 1;
}

.topic-register dd {
  margin: 7px 0 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 13px;
  line-height: 1.4;
}

.topic-index-band {
  border-bottom: 1px solid var(--line-grey);
  background: #ffffff;
}

.topic-index {
  display: flex;
  align-items: center;
  gap: 24px;
  min-height: 76px;
}

.topic-index strong {
  color: var(--brand);
  font-size: 17px;
}

.topic-index nav {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.topic-index a {
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 0 13px;
  border: 1px solid var(--line-grey);
  border-radius: 8px;
  color: var(--brand);
  background: var(--bg-blue-soft);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}

.topic-brief-band {
  padding: clamp(44px, 7vw, 76px) 0;
  background: linear-gradient(180deg, #ffffff, var(--bg-blue-soft));
}

.topic-brief-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.topic-brief-card {
  min-height: 250px;
  padding: 28px;
  border: 1px solid var(--line-grey);
  border-radius: 8px;
  background: #ffffff;
  box-shadow: var(--shadow-soft);
}

.topic-brief-card span {
  display: inline-flex;
  margin-bottom: 18px;
  padding: 5px 9px;
  border-left: 4px solid var(--success);
  color: var(--success);
  background: rgba(70, 122, 57, 0.08);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

.topic-brief-card h2 {
  color: var(--text-main);
  font-size: 24px;
  line-height: 1.15;
}

.topic-brief-card p {
  margin-top: 14px;
  color: var(--text-soft);
  font-size: 15px;
  line-height: 1.75;
}

.image-stack-page {
  position: relative;
  isolation: isolate;
  display: grid;
  gap: 44px;
  width: 100%;
  margin: 0 auto;
  padding: 64px 0 92px;
  background: #ffffff;
}

.image-stack-page-compact {
  padding-top: 72px;
}

.stack-heading {
  display: grid;
  gap: 14px;
  max-width: min(100%, var(--layout-width));
}

.stack-heading h2 {
  max-width: 820px;
  color: var(--text-main);
  font-size: clamp(30px, 4vw, 46px);
  line-height: 1.08;
}

.stack-heading p:not(.eyebrow) {
  max-width: 760px;
  color: var(--text-soft);
  font-size: clamp(16px, 1.8vw, 19px);
  line-height: 1.7;
}

.image-frame {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 72px) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
  width: min(calc(100% - var(--layout-gutter) * 2), 1180px);
  margin: 0 auto;
  padding: 28px;
  min-width: 0;
  overflow: clip;
  border: 1px solid var(--line-grey);
  border-radius: 8px;
  background: #ffffff;
  box-shadow: var(--shadow-soft);
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.frame-index {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 42px;
  padding-top: 10px;
  border-top: 4px solid var(--accent);
  color: var(--brand);
  font-size: 30px;
  font-weight: 700;
  line-height: 1;
}

.image-frame:hover {
  border-color: var(--line-strong);
  box-shadow: var(--shadow-lift);
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
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0 16px 34px rgba(0, 40, 88, 0.08);
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
}

@media (max-width: 960px) {
  .topic-layout,
  .topic-brief-grid {
    grid-template-columns: 1fr;
  }

  .topic-index {
    display: grid;
    padding-top: 18px;
    padding-bottom: 18px;
  }
}

@media (max-width: 720px) {
  .topic-hero {
    padding: 34px 0 46px;
  }

  .topic-copy h1 {
    font-size: clamp(38px, 11vw, 48px);
  }

  .topic-intro {
    font-size: 16px;
  }

  .topic-register,
  .topic-brief-card {
    padding: 22px;
  }

  .image-stack-page {
    gap: 30px;
    padding-top: 42px;
    padding-bottom: 44px;
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

  .frame-index {
    width: fit-content;
    font-size: 22px;
  }

  .image-media {
    border-radius: 2px;
  }

  .image-frame-cropped-hero .image-media {
    aspect-ratio: 2 / 1;
  }

  .image-frame-cropped-hero img {
    width: 111.8%;
    transform: translate(-5.2%, -9.4%);
  }
}
</style>
