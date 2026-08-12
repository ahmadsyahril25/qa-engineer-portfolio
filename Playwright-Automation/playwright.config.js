import { defineConfig } from '@playwright/test';

export default defineConfig({
     workers : 1,
  use: {
    headless: false,
    launchOptions: {
      slowMo: 1000, // delay 1 detik
    },
  },
});