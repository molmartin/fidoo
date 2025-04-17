import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:5173/fidoo',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: {
    command: 'yarn dev',
    port: 5173,
    timeout: 3 * 1000,
    reuseExistingServer: !process.env.CI,
  },
})
