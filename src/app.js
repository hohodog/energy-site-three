import { createApp, createSSRApp } from 'vue'

import App from './App.vue'
import { createAppRouter } from './router'
import './assets/main.css'

export function createStorageLinkApp({ history, ssr = false } = {}) {
  const app = (ssr ? createSSRApp : createApp)(App)
  const router = createAppRouter(history)

  app.use(router)

  return { app, router }
}
