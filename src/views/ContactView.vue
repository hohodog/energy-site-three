<script setup>
const cards = [
  {
    title: 'Contact Phone',
    subtitle: ['Official Consultation Hotline', 'Service hours:', '8:00-17:00(UTC/GMT+8)'],
    links: [{ text: '+86 null', href: 'tel:null', icon: 'phone' }],
    icon: 'phone',
  },
  {
    title: 'Contact Email',
    subtitle: ['Business Consultation'],
    links: [{ text: 'sales@null.com', href: 'mailto:sales@null.com', icon: 'mail' }],
    extraLabel: 'Market Cooperation',
    extraLinks: [{ text: 'mkt@null.com', href: 'mailto:mkt@null.com', icon: 'mail' }],
    icon: 'mail',
  },
  {
    title: 'Contact Address',
    subtitle: ['Headquarters'],
    links: [{ text: 'No.306,Heping Road(s), Qidong,Jiangsu,China', href: '#', icon: 'location' }],
    icon: 'location',
  },
  {
    title: 'Scan to Follow',
    socials: [
      { label: 'x', href: 'https://x.com/x', type: 'x' },
      { label: 'linkedin', href: 'https://www.linkedin.com/company/linkedin/', type: 'in' },
      { label: 'instagram', href: 'https://www.instagram.com/instagram/', type: 'instagram' },
      { label: 'facebook', href: 'https://www.facebook.com/facebook/', type: 'facebook' },
    ],
    links: [{ text: 'null.com', href: 'https://null.com', icon: 'link' }],
    icon: 'grid',
  },
]

const splitContactText = (text) => text.split(/(,)/)
</script>

<template>
  <section class="contact-page">
    <div class="contact-grid">
      <article
        v-for="card in cards"
        :key="card.title"
        class="contact-card"
        :class="{ 'contact-card-email': card.icon === 'mail' }"
      >
        <div class="card-icon-wrap" aria-hidden="true">
          <div class="card-icon">
            <svg v-if="card.icon === 'phone'" viewBox="0 0 96 96" fill="none">
              <circle cx="32" cy="36" r="4" fill="currentColor" />
              <circle cx="46" cy="36" r="4" fill="currentColor" />
              <circle cx="60" cy="36" r="4" fill="currentColor" />
              <path
                d="M68.7 60.6L64.8 56.6C60.1 61.3 52.9 61 46.8 54.9L41.1 49.2C35 43.1 34.7 35.9 39.4 31.2L43.5 27.1C45.1 25.5 47.7 25.5 49.3 27.1L55 32.8C56.6 34.4 56.6 37 55 38.6L51.8 41.8C51.1 42.5 51 43.7 51.7 44.4L51.8 44.5L55.5 48.2C56.2 48.9 57.4 48.9 58.1 48.2L61.3 45C62.9 43.4 65.5 43.4 67.1 45L72.8 50.7C74.4 52.3 74.4 54.9 72.8 56.5L68.7 60.6Z"
                fill="currentColor"
              />
            </svg>

            <svg v-else-if="card.icon === 'mail'" viewBox="0 0 96 96" fill="none">
              <path d="M24 31H72V65H24V31Z" stroke="currentColor" stroke-width="4" />
              <path
                d="M25 33L48 54L71 33"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg v-else-if="card.icon === 'location'" viewBox="0 0 96 96" fill="none">
              <path
                d="M48 22C38.1 22 30 30.1 30 40C30 54.6 48 72 48 72C48 72 66 54.6 66 40C66 30.1 57.9 22 48 22Z"
                fill="currentColor"
              />
              <circle cx="48" cy="40" r="7" fill="#ffffff" />
            </svg>

            <svg v-else viewBox="0 0 96 96" fill="none">
              <rect x="25" y="25" width="22" height="22" rx="4" fill="currentColor" />
              <rect x="49" y="25" width="22" height="22" rx="4" fill="currentColor" />
              <rect x="25" y="49" width="22" height="22" rx="4" fill="currentColor" />
              <rect x="49" y="51" width="6" height="20" rx="3" fill="currentColor" />
              <rect x="60" y="51" width="6" height="20" rx="3" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div class="card-content">
          <h1 class="card-title">{{ card.title }}</h1>

          <div v-if="card.subtitle?.length" class="card-subtitles">
            <p v-for="line in card.subtitle" :key="line" class="card-subtitle">{{ line }}</p>
          </div>

          <div v-if="card.socials" class="social-row">
            <a
              v-for="social in card.socials"
              :key="social.label"
              :href="social.href"
              :class="['social-link', 'social-link-' + social.type]"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
            >
              <span v-if="social.type === 'x'">X</span>
              <span v-else-if="social.type === 'in'">in</span>
              <svg v-else-if="social.type === 'instagram'" viewBox="0 0 64 64" fill="none">
                <defs>
                  <linearGradient id="instagram-gradient" x1="16" x2="49" y1="50" y2="15">
                    <stop offset="0" stop-color="#FCAF45" />
                    <stop offset="0.32" stop-color="#FD1D1D" />
                    <stop offset="0.58" stop-color="#C13584" />
                    <stop offset="0.78" stop-color="#833AB4" />
                    <stop offset="1" stop-color="#405DE6" />
                  </linearGradient>
                </defs>
                <rect
                  x="15"
                  y="15"
                  width="34"
                  height="34"
                  rx="9"
                  stroke="url(#instagram-gradient)"
                  stroke-width="4"
                />
                <circle cx="32" cy="32" r="8" stroke="url(#instagram-gradient)" stroke-width="4" />
                <circle cx="42.5" cy="21.5" r="2.5" fill="url(#instagram-gradient)" />
              </svg>
              <span v-else>f</span>
            </a>
          </div>

          <div class="contact-lines">
            <a v-for="item in card.links" :key="item.text" :href="item.href" class="contact-link">
              <svg v-if="item.icon === 'phone'" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.8 4.8C7.1 4.5 7.5 4.3 7.9 4.3H9.9C10.4 4.3 10.8 4.6 10.9 5L11.8 8.4C11.9 8.8 11.8 9.2 11.5 9.5L10.2 10.8C11 12.4 12.2 13.7 13.8 14.5L15.1 13.2C15.4 12.9 15.8 12.8 16.2 12.9L19.6 13.8C20 13.9 20.3 14.3 20.3 14.8V16.8C20.3 17.2 20.1 17.6 19.8 17.9C19.1 18.6 18.1 19 17.1 19C10.4 19 5 13.6 5 6.9C5 5.9 5.4 4.9 6.1 4.2L6.8 4.8Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg v-else-if="item.icon === 'mail'" viewBox="0 0 24 24" fill="none">
                <path d="M3 6H21V18H3V6Z" stroke="currentColor" stroke-width="2" />
                <path
                  d="M4 7L12 13L20 7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg v-else-if="item.icon === 'location'" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21C12 21 18 15.3 18 10.5C18 7.5 15.3 5 12 5C8.7 5 6 7.5 6 10.5C6 15.3 12 21 12 21Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <circle cx="12" cy="10.5" r="2.3" stroke="currentColor" stroke-width="2" />
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none">
                <path
                  d="M10 7H7C5.9 7 5 7.9 5 9V17C5 18.1 5.9 19 7 19H15C16.1 19 17 18.1 17 17V14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 5H19V10"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 5L11 13"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>
                <template
                  v-for="(part, partIndex) in splitContactText(item.text)"
                  :key="`${item.text}-${partIndex}`"
                >
                  {{ part }}<br v-if="item.icon === 'location' && partIndex === 3" /><wbr
                    v-else-if="part === ','"
                  />
                </template>
              </span>
            </a>
          </div>

          <div v-if="card.extraLabel || card.extraLinks?.length" class="extra-block">
            <p v-if="card.extraLabel" class="card-subtitle extra-label">{{ card.extraLabel }}</p>
            <div v-if="card.extraLinks?.length" class="contact-lines extra-lines">
              <a
                v-for="item in card.extraLinks"
                :key="item.text"
                :href="item.href"
                class="contact-link"
              >
                <svg v-if="item.icon === 'mail'" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6H21V18H3V6Z" stroke="currentColor" stroke-width="2" />
                  <path
                    d="M4 7L12 13L20 7"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>
                  <template
                    v-for="(part, partIndex) in splitContactText(item.text)"
                    :key="`${item.text}-${partIndex}`"
                  >
                    {{ part }}<wbr v-if="part === ','" />
                  </template>
                </span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  padding: clamp(28px, 5vw, 64px) var(--layout-gutter) clamp(42px, 6vw, 78px);
  background:
    linear-gradient(90deg, rgba(255, 214, 23, 0.2) 0 6px, transparent 6px 100%),
    linear-gradient(180deg, rgba(242, 245, 249, 0.72), rgba(255, 255, 255, 0));
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  max-width: 1180px;
  margin: 0 auto;
}

.contact-card {
  position: relative;
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  align-items: start;
  gap: 22px;
  min-width: 0;
  min-height: 260px;
  padding: 32px;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid var(--line-soft);
  border-top: 4px solid var(--brand);
  box-shadow: var(--shadow-soft);
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 46px;
  height: 4px;
  background: var(--accent);
}

.card-icon-wrap {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background: var(--brand);
  color: #ffffff;
}

.card-icon::after {
  content: '';
  position: absolute;
  right: 7px;
  bottom: 7px;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: var(--accent);
}

.card-icon svg {
  width: 32px;
  height: 32px;
}

.card-content {
  min-width: 0;
  max-width: 100%;
}

.card-title {
  margin: 0;
  color: var(--text-main);
  font-size: 30px;
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: 0;
}

.card-subtitles {
  margin-top: 20px;
}

.card-subtitle {
  margin: 0;
  color: var(--text-soft);
  font-size: 17px;
  font-weight: 700;
  line-height: 1.42;
}

.contact-lines {
  display: grid;
  gap: 10px;
  margin-top: 28px;
  min-width: 0;
  max-width: 100%;
}

.contact-link {
  display: grid;
  grid-template-columns: 25px minmax(0, 1fr);
  align-items: flex-start;
  gap: 11px;
  width: 100%;
  max-width: min(100%, 620px);
  min-width: 0;
  color: var(--brand);
  text-decoration: none;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.45;
  overflow-wrap: anywhere;
}

.contact-link svg {
  margin-top: 2px;
  width: 25px;
  height: 25px;
  flex: 0 0 25px;
}

.contact-link span {
  display: block;
  flex: 1 1 0;
  min-width: 0;
  max-width: 100%;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.extra-block {
  margin-top: 8px;
}

.extra-lines {
  margin-top: 10px;
}

.contact-card-email .card-subtitles {
  margin-top: 28px;
}

.contact-card-email .contact-lines {
  margin-top: 12px;
}

.contact-card-email .extra-block {
  margin-top: 22px;
}

.contact-card-email .extra-lines {
  margin-top: 12px;
}

.social-row {
  display: grid;
  grid-template-columns: repeat(4, 37px);
  align-items: center;
  gap: 24px;
  margin-top: 34px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 37px;
  color: #ef212b;
  text-decoration: none;
  font-size: 33px;
  font-weight: 800;
  line-height: 1;
}

.social-link svg {
  width: 37px;
  height: 37px;
}

.social-link-x {
  color: #000000;
}

.social-link-in {
  color: #0a66c2;
}

.social-link-instagram {
  color: #c13584;
}

.social-link-facebook {
  color: #0866ff;
}

.social-link span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  line-height: 1;
}

.contact-link:hover,
.contact-link:focus-visible,
.social-link:hover,
.social-link:focus-visible {
  text-decoration: none;
  opacity: 0.9;
}

.contact-link::after,
.social-link::after {
  display: none;
}

@media (max-width: 1280px) {
  .contact-page {
    padding: 34px var(--layout-gutter) 44px;
  }

  .contact-grid {
    gap: 24px;
  }

  .contact-card {
    grid-template-columns: 64px minmax(0, 1fr);
    min-height: 240px;
    padding: 30px 28px;
  }
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .contact-page {
    padding: 16px;
  }

  .contact-card {
    grid-template-columns: 1fr;
    gap: 18px;
    min-height: 0;
    padding: 24px 20px;
  }

  .card-icon-wrap {
    justify-content: flex-start;
  }

  .card-icon {
    width: 52px;
    height: 52px;
  }

  .card-icon svg {
    width: 30px;
    height: 30px;
  }

  .card-title {
    font-size: 26px;
  }

  .card-subtitles {
    margin-top: 16px;
  }

  .card-subtitle,
  .contact-link {
    font-size: 16px;
  }

  .contact-lines,
  .social-row {
    margin-top: 18px;
  }

  .social-row {
    gap: 22px;
  }

  .social-link {
    width: 31px;
    height: 31px;
    font-size: 28px;
  }

  .social-link svg {
    width: 31px;
    height: 31px;
  }
}
</style>
