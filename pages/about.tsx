import { ProfileCard } from '@/components/ProfileCard';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function AboutPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const loading = status === 'loading';

    useEffect(() => {
        if (typeof window !== 'undefined' && loading) return;
        
        if (!session) {
            router.push('/');
        }
    });

    return <ProfileCard session={session} />;
}
