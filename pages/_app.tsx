import { Header } from '@/components/Header';
import { NextComponentType } from 'next';
import { SessionProvider, signIn, signOut } from 'next-auth/react';

import type { AppProps } from 'next/app';

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
            <SessionProvider session={session} refetchInterval={0}>
                <Header />
                <Component {...pageProps} />
            </SessionProvider>
        </>
    );
}

export default MyApp;
