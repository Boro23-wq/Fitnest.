import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Hero } from '@/components/Hero';
import { saveUser, userExist } from './api/user/utils';
import { Layout } from '@/components/Layout';
import { Spinner } from '@/components/Spinner';
import { PageSeo } from '@/components/SEO';

import siteMetadata from '@/data/siteMetadata.json';
import { HeroLayout } from '@/components/HeroLayout';
import { HomeProfileCard } from '@/components/HomeProfileCard';

const Home: NextPage = ({ allUsers }: any) => {
    const { data: session, status } = useSession();

    useEffect(() => {
        const loggedInUser = {
            name: session?.user?.name,
            email: session?.user?.email,
            image: session?.user?.image,
        };

        const retrieveUser = async () => {
            let user = await userExist(loggedInUser?.email);
            return user;
        };

        if (session && retrieveUser() !== null) {
            saveUser(loggedInUser);
        }
    }, [session]);

    return (
        <>
            {session ? (
                <PageSeo
                    title={`Home - ${session?.user?.name}`}
                    description={session?.user?.email}
                    url={session?.user?.image}
                />
            ) : (
                <PageSeo
                    title={`${siteMetadata.title}`}
                    description={siteMetadata.description}
                    url={siteMetadata.siteUrl}
                />
            )}

            {status === 'loading' && (
                <Layout>
                    <div className="flex items-center justify-center flex-col dark:bg-black">
                        <Spinner />
                    </div>
                </Layout>
            )}

            {status === 'unauthenticated' && !session && (
                <HeroLayout>
                    <Hero />
                </HeroLayout>
            )}

            {status === 'authenticated' && (
                <Layout>
                    <HomeProfileCard session={session} />
                </Layout>
            )}
        </>
    );
};

export default Home;
