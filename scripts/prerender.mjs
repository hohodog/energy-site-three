import { access, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const routes = ['/', '/sodium', '/supercapacitor', '/redox', '/solid', '/about', '/contact']
const appShell = '<div id="app"></div>'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = resolve(rootDir, 'dist')
const serverDir = join(distDir, 'server')

async function findServerEntry() {
  const candidates = ['entry-server.js', 'entry-server.mjs']

  for (const candidate of candidates) {
    const entryPath = join(serverDir, candidate)

    try {
      await access(entryPath)
      return entryPath
    } catch (error) {
      if (error?.code !== 'ENOENT') {
        throw error
      }
    }
  }

  throw new Error('Could not find the SSR server entry in dist/server.')
}

function routeFilePaths(route) {
  if (route === '/') {
    return [join(distDir, 'index.html')]
  }

  const routeName = route.slice(1)

  return [join(distDir, routeName, 'index.html'), join(distDir, `${routeName}.html`)]
}

const template = await readFile(join(distDir, 'index.html'), 'utf8')

if (!template.includes(appShell)) {
  throw new Error('Could not find the app shell placeholder in dist/index.html.')
}

const serverEntryPath = await findServerEntry()
const { render } = await import(pathToFileURL(serverEntryPath))

for (const route of routes) {
  const { html } = await render(route)
  const filePaths = routeFilePaths(route)
  const page = template.replace(appShell, `<div id="app">${html}</div>`)

  for (const filePath of filePaths) {
    await mkdir(dirname(filePath), { recursive: true })
    await writeFile(filePath, page)
  }

  console.log(`prerendered ${route}`)
}

await rm(serverDir, { recursive: true, force: true })
