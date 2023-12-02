import React from 'react';
import App from 'next/app';
import Head from 'next/head';
// import Layout from "./layout"
import { ThemeProvider } from 'next-themes'
import { UserProvider } from '../contexts/UserContext';

import '../styles/globals.css';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <ThemeProvider>
                <UserProvider>
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Aprendizaje POO</title>
                    </Head>

                    <Component {...pageProps} />

                </UserProvider>
            </ThemeProvider>
        );
    }
}

export default MyApp;



