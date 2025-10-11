import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: "/profile_page"
// })

//used https://www.youtube.com/watch?v=hn1IkJk24ow for showing how to deploy on github pages properly
//to update github page(gh-pages branch) to what master branch is, do "npm run deploy"


// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    react({
      include: "**/*.jsx",
    }),
  ],
});