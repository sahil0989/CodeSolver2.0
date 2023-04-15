// adding different pages in vite

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                Home:'./Home.html',
                login: './login.html',
                register: './register.html',
                solution: './solution.html',
                bugDetector: './bugDetector.html',
                beautify: './beautify.html',
                ContactUs: './ContactUs.html',
                contactSuccess: './contactSuccess.html',
                contactFailed: './contactFailed.html',
                passwordError: './passwordError.html',
                mainjs: './src/script.js',
            },
        },
    },
})