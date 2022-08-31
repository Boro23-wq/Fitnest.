import { NextComponentType } from 'next';
import { SessionProvider } from 'next-auth/react';

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
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;
