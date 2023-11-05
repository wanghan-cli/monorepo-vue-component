import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  // 增加插件的使用
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: '@templateButton',
    },
    minify: false,
    rollupOptions: {
      external: [/@template.*/, 'vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
