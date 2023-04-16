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
                credentailsError: './credentialsError.html',
                detailsError: './detailsError.html',
                emailError: './emailError.html',
                emailLoginError: './emailLoginError.html',
                fieldRequiredError: './fieldRequiredError.html',
                passwordError: './passwordError.html',
                usernameError: './usernameError.html',
                mainjs: './src/script.js',
            },
        },
    },
})