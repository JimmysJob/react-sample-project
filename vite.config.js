import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // 新增以下路徑處理
  // 可分成開發中以及產品路徑         // 產品路徑.       // g-pages專案名稱
  base: process.env.NODE_ENV === 'production' ? '/react-sample-project/' : '/',

  plugins: [react()],
});
