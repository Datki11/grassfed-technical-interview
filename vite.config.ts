import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Let the dev server answer on hosted preview URLs
    // (CodeSandbox: *.csb.app, StackBlitz: *.webcontainer-api.io).
    allowedHosts: ['.csb.app', '.webcontainer-api.io'],
  },
});
