import { ExerciseTypeAndMuscleCard } from '@/components/ExerciseTypeAndMuscleCard';
import { Layout } from '@/components/Layout';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { muscleTypes } from 'pages/exercises/categories';

export default function ExercisePageByMuscle() {
    const router = useRouter();
    const { theme } = useTheme();
    const category = router.asPath.split('/')[3];

    return (
        <Layout>
            <section className="mt-2">
                <h1 className="max-w-xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                    Muscle focus workouts
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Here you can find{' '}
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-2.5 py-1 rounded dark:bg-green-200 dark:text-green-900">
                        25+
                    </span>{' '}
                    exercises that can target each and every muscle type. Be it
                    your biceps, or abdominals, or your lats. We have got you
                    covered with all the exercises you would ever need.
                </p>
            </section>

            <ExerciseTypeAndMuscleCard types={muscleTypes} theme={theme} />
        </Layout>
    );
}
