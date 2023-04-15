// adding different pages in vite

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                indexMain:'./Home.html',
                loginPage: './login.html',
                registerPage: './register.html',
                block1: './solutin.html',
                block2: './bugDetector.html',
                block3: './beautify.html',
                block5: './ContactUs.html',
                mainjs: './src/script.js',
            },
        },
    },
})