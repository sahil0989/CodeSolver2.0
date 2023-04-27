// adding different pages in vite

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                blog:'./blog.html',
                Home:'./Home.html',
                main: './index.html',
                terms:'./terms.html',
                login: './login.html',
                Contact: './Contact.html',
                beautify: './beautify.html',
                solution: './solution.html',
                register: './register.html',
                ContactUs: './ContactUs.html',
                emailError: './emailError.html',
                bugDetector: './bugDetector.html',
                detailsError: './detailsError.html',
                contactFailed: './contactFailed.html',
                passwordError: './passwordError.html',
                usernameError: './usernameError.html',
                termsCondition:'./termsCondition.html',
                contactSuccess: './contactSuccess.html',
                emailLoginError: './emailLoginError.html',
                credentailsError: './credentialsError.html',
                fieldRequiredError: './fieldRequiredError.html',
            },
        },
    },
})