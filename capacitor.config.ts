import type { CapacitorConfig } from '@capacitor/cli';

const serverUrl = process.env.CAP_SERVER_URL?.trim();

const config: CapacitorConfig = {
  appId: 'com.amjad.ironmandate',
  appName: 'Iron Mandate',
  webDir: 'mobile-dist',
  bundledWebRuntime: false,
  server: serverUrl
    ? {
        // Iron Mandate uses TanStack Start server functions for saves,
        // nation/world data, and other backend actions. Set CAP_SERVER_URL
        // to the deployed web app URL for the full app experience.
        url: serverUrl,
        cleartext: serverUrl.startsWith('http://'),
      }
    : undefined,
  android: {
    allowMixedContent: false,
  },
};

export default config;
