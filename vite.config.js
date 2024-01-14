import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.ENV": JSON.stringify(env.ENV),
      "process.env.SERVER_URL": JSON.stringify(env.SERVER_URL),
    },
    plugins: [react()],
    build: {
      rollupOptions: {
        external: "NonExistingPath",
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
        assets: `${path.resolve(__dirname, "./src/assets/")}`,
      },
    },
  };
});
