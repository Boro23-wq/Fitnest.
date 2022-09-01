import { Layout } from '@/components/Layout';
import { ProfileCard } from '@/components/ProfileCard';
import { PageSeo } from '@/components/SEO';
import { Spinner } from '@/components/Spinner';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function AboutPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) {
            router.push('/');
        }
    });

    return (
        <>
            <PageSeo
                title={`About - ${session?.user?.name}`}
                description={session?.user?.email}
                url={session?.user?.image}
            />
            <Layout>
                {status === 'loading' && <Spinner />}
                <ProfileCard session={session} />
            </Layout>
        </>
    );
}
