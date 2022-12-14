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
import { CustomButton } from '@/components/CustomButton';

export default function ExercisePageByTypeWithName() {
    const router = useRouter();
    const { theme } = useTheme();
    const [loading, setLoading] = useState<Boolean>(false);
    const [offset, setOffset] = useState(0);
    const [exercises, setExercises] = useState<ExerciseType[]>([]);
    let type = router.query.name as string;

    type === 'weightlifting' && (type = 'olympic_weightlifting');

    useEffect(() => {
        const fetchAllExerciseByNameWithType = async () => {
            setLoading(true);

            const data = await fetchExerciseByType(type, 0);
            setExercises(data);

            setLoading(false);
        };

        fetchAllExerciseByNameWithType();
    }, [type]);

    const handleNext = async () => {
        setOffset(offset + 9);
        setLoading(true);

        const data = await fetchExerciseByType(type, offset + 9);
        setExercises(data);

        setLoading(false);

        // console.log('From handleNext', exercises);
    };

    const handlePrev = async () => {
        setOffset(offset - 9);
        setLoading(true);

        const data = await fetchExerciseByType(type, offset - 9);
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
                            {type === 'olympic_weightlifting'
                                ? capitalize(type.split('_')[1])
                                : capitalize(type)}{' '}
                            Exercises
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Most people tend to focus on one type of exercise or
                            activity and think they are doing enough. Research
                            has shown that it is important to get all four types
                            of exercise: endurance, strength, balance, and
                            flexibility. Each one has different benefits. Doing
                            one kind also can improve your ability to do the
                            others, and variety helps reduce boredom and risk of
                            injury.
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
