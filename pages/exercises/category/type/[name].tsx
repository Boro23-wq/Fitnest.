import { ExerciseCard } from '@/components/ExerciseCard';
import { Layout } from '@/components/Layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ExerciseType } from 'src/types';
import { fetchExerciseByType } from 'pages/exercises/utils';
import { capitalize } from '@/utils/index';
import { Spinner } from '@/components/Spinner';
import { BodyIcon } from '@/components/Icons';
import { useTheme } from 'next-themes';

export default function ExercisePageByTypeWithName() {
    const router = useRouter();
    const { theme } = useTheme();
    const [loading, setLoading] = useState<Boolean>(false);
    const [exercises, setExercises] = useState<ExerciseType[]>([]);
    let type = router.query.name as string;

    type === 'weightlifting' && (type = 'olympic_weightlifting');

    useEffect(() => {
        const fetchAllExerciseByNameWithType = async () => {
            setLoading(true);

            const data = await fetchExerciseByType(type);
            setExercises(data);

            setLoading(false);
        };

        fetchAllExerciseByNameWithType();
    }, []);

    return (
        <Layout>
            {loading ? (
                <Spinner />
            ) : (
                <div>
                    <div className="bg-zinc-100 dark:bg-zinc-900 w-fit rounded-md p-2">
                        <BodyIcon
                            w={50}
                            h={50}
                            fill={theme === 'dark' ? 'white' : 'black'}
                        />
                    </div>
                    <section className="mt-4">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                            {type === 'olympic_weightlifting'
                                ? capitalize(type.split('_')[1])
                                : capitalize(type)}{' '}
                            Exercises
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            “Try getting in a 30-minute workout five or more
                            days a week that raises your heart rate for the
                            duration of the activity,” says Dr. Van Iterson. “Or
                            try three, 10-minute workouts, five or more days a
                            week.” The benefits of cardio go beyond just your
                            heart. Dr. Van Iterson says.
                        </p>
                    </section>

                    <ExerciseCard exercises={exercises} />
                </div>
            )}
        </Layout>
    );
}
