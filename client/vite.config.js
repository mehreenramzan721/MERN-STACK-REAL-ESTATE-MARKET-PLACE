import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { FaSketch } from "react-icons/fa";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // "/api": "http://localhost:2000",
      "/api": {
        target: "http://localhost:2000",
        secure: false,
      },
    },
  },
  plugins: [tailwindcss(), react()],
});
