import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const env = (
  globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> }
  }
).process?.env ?? {}
const defaultOwner = 'anavvanzin'
const defaultRepo = 'sbhcj-logo-gallery'
const repositoryParts = env.GITHUB_REPOSITORY?.split('/') ?? []
const owner = repositoryParts[0] || defaultOwner
const repo = repositoryParts[1] || defaultRepo
const isUserOrOrgPagesRepo = repo === `${owner}.github.io`
const pagesPath = isUserOrOrgPagesRepo ? '/' : `/${repo}/`
const base = './'
const ogImageUrl = `https://${owner}.github.io${pagesPath}media/logo-16.jpg`

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-og-image-url',
      transformIndexHtml(html) {
        return html.replace('%OG_IMAGE_URL%', ogImageUrl)
      },
    },
  ],
  base,
})
