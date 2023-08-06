import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const root = path.resolve(__dirname, 'src')
const outDir = path.resolve(__dirname, 'dist')
const publicDir = path.resolve(__dirname, 'public')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root,
    publicDir,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: path.resolve(root, 'index.html'),
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
