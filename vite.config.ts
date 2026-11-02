import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/bi-madeiras/",
  plugins: [
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      client: { base: "/bi-madeiras/_build" },
      prerender: {
        enabled: true,
        crawlLinks: false,
        failOnError: true,
        pages: [{ path: "/", prerender: { outputPath: "/" } }],
      },
      router: { basepath: "/bi-madeiras" },
      server: { entry: "server" },
    }),
    react(),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "react/jsx-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
});
