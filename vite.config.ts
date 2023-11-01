import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

const root = path.resolve(__dirname, 'src')
const outDir = path.resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svgr(), react()],
    root,
    base: '/',
    envDir: path.resolve(__dirname, 'environments'),
    server: { port: 3000, open: true, host: true },
    build: { outDir, emptyOutDir: true, sourcemap: true },
    resolve: { alias: { '@': path.resolve(__dirname, './src') } },
})
