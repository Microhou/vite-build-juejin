import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
// import testHookPlugin from './plugins/test-hooks-plugin';
import virtual from './plugins/virtual-module';
// import svgr from './plugins/svgr';
import inspect from 'vite-plugin-inspect';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), inspect()],
})
