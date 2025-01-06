import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/profile_page"
})

//used https://www.youtube.com/watch?v=hn1IkJk24ow for showing how to deploy on github pages properly



// https://vite.dev/config/
// export default defineConfig({
//   server: {
//     watch: {
//       usePolling: true,
//     },
//   },
//   plugins: [
//     react({
//       include: "**/*.jsx",
//     }),
//   ],
// });