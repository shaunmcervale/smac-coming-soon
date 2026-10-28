import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    "name": "smac-coming-soon",
    "compatibilityDate": "2026-09-21",
    "observability": {
      "enabled": true
    }
  }
});
