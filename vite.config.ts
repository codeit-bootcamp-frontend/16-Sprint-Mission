import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      // fast-refresh, SWC 옵션 등 필요시 추가 설정
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_variables.scss";`,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  // 빌드 결과물 경로나 최적화 옵션은 필요에 따라…
});
