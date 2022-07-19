import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '8hoq8o',
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: "http://localhost:3000";
    },
  },
});
