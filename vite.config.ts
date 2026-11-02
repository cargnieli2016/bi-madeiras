import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { env } from "node:process";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const basePath = env.VITE_BASE_PATH || "/";
const normalizedBasePath = basePath.endsWith("/") ? basePath : `${basePath}/`;
const routerBasepath =
  normalizedBasePath === "/" ? "/" : normalizedBasePath.slice(0, -1);

export default defineConfig({
  base: normalizedBasePath,
  plugins: [
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      client: { base: `${normalizedBasePath}_build` },
      prerender: {
        enabled: true,
        crawlLinks: false,
        failOnError: true,
        pages: [{ path: "/", prerender: { outputPath: "/" } }],
      },
      router: { basepath: routerBasepath },
      server: { entry: "server" },
    }),
    react(),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "react/jsx-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
});
