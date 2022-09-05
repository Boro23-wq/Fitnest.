import { CustomButton } from '@/components/CustomButton';
import { ExerciseCard } from '@/components/ExerciseCard';
import { BodyIcon } from '@/components/Icons';
import { Layout } from '@/components/Layout';
import { Spinner } from '@/components/Spinner';
import { capitalize } from '@/utils/index';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { fetchExerciseByMuscle } from 'pages/exercises/utils';
import { useEffect, useState } from 'react';
import { ExerciseType } from 'src/types';

export default function ExercisePageByMuscleWithName() {
    const router = useRouter();
    const { theme } = useTheme();
    const [loading, setLoading] = useState<Boolean>(false);
    const [offset, setOffset] = useState(0);
    const [exercises, setExercises] = useState<ExerciseType[]>([]);
    let muscle = router.query.name as string;

    useEffect(() => {
        const fetchAllExerciseByNameWithMuscle = async () => {
            setLoading(true);

            const data = await fetchExerciseByMuscle(muscle, 0);
            setExercises(data);

            setLoading(false);
        };

        fetchAllExerciseByNameWithMuscle();
    }, [muscle]);

    const handleNext = async () => {
        setOffset(offset + 9);
        setLoading(true);

        const data = await fetchExerciseByMuscle(muscle, offset + 9);
        setExercises(data);

        setLoading(false);

        // console.log('From handleNext', exercises);
    };

    const handlePrev = async () => {
        setOffset(offset - 9);
        setLoading(true);

        const data = await fetchExerciseByMuscle(muscle, offset - 9);
        setExercises(data);

        if (offset === -9) {
            setOffset(0);
        }

        setLoading(false);
    };

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
                            {capitalize(muscle)} Exercises
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Different workouts and workout programs can over-tax
                            some of these muscle groups, which can lead to
                            overtraining and a lack of proper muscle recovery.
                            For this reason, many people who are interested in
                            building muscle and strength will divide their
                            workouts into muscle group “splits.”
                        </p>
                    </section>

                    <ExerciseCard exercises={exercises} />

                    <div className="flex justify-end mr-0 sm:mr-6">
                        <CustomButton
                            handleClick={handlePrev}
                            buttonText="&larr; Previous"
                            disabled={offset === 0}
                        />
                        <CustomButton
                            disabled={offset === 1000}
                            handleClick={handleNext}
                            buttonText="Next &rarr;"
                        />
                    </div>
                </div>
            )}
        </Layout>
    );
}
