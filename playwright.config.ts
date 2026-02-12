import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  //reporter: 'html',

  use: {
    baseURL: 'http://127.0.0.1:3000',
    //trace: 'on-first-retry',
    trace:'on' , // 'on' para ver el paso a paso
    video: 'on',
    screenshot: 'on',
    //screenshot: 'only-on-failure',
  },

webServer: {
  command: 'npm start',
  cwd: './backend',
  url: 'http://127.0.0.1:3000',
  reuseExistingServer: true,
  stdout: 'ignore',  // LIMPIEZA
  stderr: 'pipe',   // SOLO ERRORES
  timeout: 60000,
},

  reporter: [
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'results.xml' }]
  ],

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

