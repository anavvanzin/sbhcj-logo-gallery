import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const defaultOwner = 'anavvanzin'
const defaultRepo = 'sbhcj-logo-gallery'
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? `${defaultOwner}/${defaultRepo}`).split('/')
const base = process.env.GITHUB_ACTIONS ? `/${repo}/` : '/'
const ogImageUrl = `https://${owner}.github.io/${repo}/media/logo-16.jpg`

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
