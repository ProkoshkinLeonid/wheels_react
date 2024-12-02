import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        svgo: true,
      },
      include: "**/*.svg?react",
    }),
    tsconfigPaths(),
  ],
})
