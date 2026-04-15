import { createWebHistory } from 'vue-router'

import { createStorageLinkApp } from './app'

const appRoot = document.getElementById('app')
const { app, router } = createStorageLinkApp({
  history: createWebHistory(),
  ssr: Boolean(appRoot?.hasChildNodes()),
})

router.isReady().then(() => {
  app.mount('#app')
})
