import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
//   resolve: {
//     alias: {
//       '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
//     }
//   },
  server: {
    port: 8080,
    // hot: true
  }
}