import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Hero } from '@/components/Hero';
import { saveUser, userExist } from './api/user/utils';
import { Layout } from '@/components/Layout';
import { Spinner } from '@/components/Spinner';

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
            <Layout>
                <div className="flex items-center justify-center flex-col dark:bg-black">
                    {status === 'loading' && <Spinner />}
                    {status === 'unauthenticated' && !session && <Hero />}
                </div>
            </Layout>
        </>
    );
};

export default Home;
