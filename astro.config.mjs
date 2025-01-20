import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://gosorio1085.github.io",
  base: "portfolio",
  integrations: [tailwind()],
});
