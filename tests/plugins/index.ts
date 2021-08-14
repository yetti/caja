import { resolve } from 'path'
import { startDevServer } from '@cypress/vite-dev-server'

const plugin: Cypress.PluginConfig = (on, config) => {
  if (config.testingType === 'component') {
    const viteConfig = {
      configFile: resolve(__dirname, '..', '..', 'vite.config.ts'),
    }
    on('dev-server:start', async (options) => {
      const server = await startDevServer({
        options,
        viteConfig,
      })
      return server as Cypress.ResolvedDevServerConfig
    })
  }
  return config
}

module.exports = plugin
