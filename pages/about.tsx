import { Layout } from '@/components/Layout';
import { ProfileCard } from '@/components/ProfileCard';
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
        <Layout>
            {status === 'loading' && <Spinner />}
            <ProfileCard session={session} />
        </Layout>
    );
}
