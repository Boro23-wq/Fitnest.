import { Layout } from '@/components/Layout';
import { useRouter } from 'next/router';

export default function ExercisePageByMuscle() {
    const router = useRouter();
    const category = router.asPath.split('/')[3];

    return (
        <Layout>
            <div>Muscle</div>
        </Layout>
    );
}
