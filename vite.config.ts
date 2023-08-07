import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const root = path.resolve(__dirname, 'src')
const outDir = path.resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root,
    base: '/',
    server: {
        port: 3000,
        open: true,
        host: true,
    },
    build: {
        outDir,
        emptyOutDir: true,
        sourcemap: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
