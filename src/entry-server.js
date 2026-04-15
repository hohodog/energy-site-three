import { renderToString } from '@vue/server-renderer'
import { createMemoryHistory } from 'vue-router'

import { createStorageLinkApp } from './app'

export async function render(url) {
  const { app, router } = createStorageLinkApp({
    history: createMemoryHistory(),
    ssr: true,
  })

  await router.push(url)
  await router.isReady()

  return {
    html: await renderToString(app),
  }
}
