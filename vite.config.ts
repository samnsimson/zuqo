import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const root = path.resolve(__dirname, 'src')
const outDir = path.resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root,
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir,
        assetsDir: path.resolve(root, 'assets'),
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            input: {
                main: path.resolve(root, 'index.html'),
            },
            output: {
                assetFileNames: 'assets/[name]-[hash][extname]',
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
