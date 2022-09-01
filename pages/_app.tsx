import { NextComponentType } from 'next';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

//Add custom appProp type then use union to add it
type CustomAppProps = AppProps & {
    Component: NextComponentType & { auth?: boolean }; // add auth type
};

function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}: CustomAppProps) {
    return (
        <>
            <ThemeProvider attribute="class">
                <SessionProvider session={session} refetchInterval={0}>
                    <Head>
                        <title>Fitnest</title>
                        <meta
                            name="Fitnest application"
                            content="Everything fitness all in one place."
                        />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <Component {...pageProps} />
                </SessionProvider>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
