import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import sass from 'sass';

export default defineConfig({
  base: '/', // 빌드 결과물의 기본 경로 설정
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
        implementation: sass,
        //issue : includePath 를 불러오지 못함

        // 자동 주입
        additionalData: `
          @use "@/styles/variables" as *;
          @use "@/styles/mixins" as *;
          `,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  // 빌드 결과물 경로나 최적화 옵션은 필요에 따라…
});
