// adding different pages in vite

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                block1: './block1.html',
                block2: './block2.html',
                block3: './block3.html',
                block5: './block5.html',
                mainjs: './src/script.js',
            },
        },
    },
})