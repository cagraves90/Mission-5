import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://thedkpatel.medium.com/dockerizing-react-application-built-with-vite-a-simple-guide-4c41eb09defa
// https://stackoverflow.com/questions/73623891/vite-react-docker

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
   port: 5173,
   strictPort: true,
   host: true,
   origin: "http://0.0.0.0:5173",
  },
 });
