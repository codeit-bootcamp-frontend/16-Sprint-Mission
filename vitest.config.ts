import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/tests/setupTests.ts',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'lcov'],
      all: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['node_modules/', 'src/tests/'],
    },
  },
});
