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

const Home: NextPage = ({ allUsers }: any) => {
    const { data: session, status } = useSession();

    useEffect(() => {
        const loggedInUser = {
            name: session?.user?.name,
            email: session?.user?.email,
            image: session?.user?.image,
        };

        if (session && !userExist(loggedInUser)) {
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
                <div className="flex items-center justify-center flex-col dark:bg-black">
                    <Spinner />
                </div>
            )}

            {status === 'unauthenticated' && !session && (
                <HeroLayout>
                    <div className="flex items-center justify-center flex-col dark:bg-black">
                        <Hero />
                    </div>
                </HeroLayout>
            )}

            {status === 'authenticated' && (
                <Layout>
                    <div className="px-4">
                        <div>
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                                Fitnest entirely free
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                Here you can feel better and confident. Access
                                your personalized fit regime, focus on doing
                                something active every week, and drive your
                                personal growth.
                            </p>
                        </div>
                        <div className="p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:px-6 sm:py-4 dark:bg-black dark:border-zinc-900">
                            <div className="flex justify-between items-center mb-4">
                                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                    Profile
                                </h5>
                            </div>

                            <ul
                                role="list"
                                className="divide-y divide-gray-200 dark:divide-gray-700">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src={
                                                    session?.user
                                                        ?.image as string
                                                }
                                                alt={
                                                    session?.user
                                                        ?.name as string
                                                }
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {session?.user?.name as string}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {session?.user?.email as string}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Layout>
            )}
        </>
    );
};

export default Home;
