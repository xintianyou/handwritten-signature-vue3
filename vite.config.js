import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/packages/index.js'),
      name: 'handwritten-signature-vue3',
      fileName: 'handwritten-signature-vue3'
    },
    rollupOptions: {
      // 不需要打包进库的依赖，忽略vue
      external: ['vue'],
      output: {
        // UMD构建模式下为这些外部的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }  
})
