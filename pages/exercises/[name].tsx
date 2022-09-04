import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Layout } from '@/components/Layout';
import { ExerciseType } from 'src/types';
import { capitalize } from '@/utils/index';
import { Spinner } from '@/components/Spinner';
import { BodyIcon } from '@/components/Icons';
import { useTheme } from 'next-themes';
import { fetchExerciseByName } from './utils';

export default function ExercisePageByName() {
    const router = useRouter();
    const [exercise, setExercise] = useState<ExerciseType[]>();
    const { theme, setTheme } = useTheme();
    const { name } = router.query;

    useEffect(() => {
        const getExerciseByName = async () => {
            const data = await fetchExerciseByName(name as string | any);
            setExercise(data);
        };

        getExerciseByName();
    });

    return (
        <Layout>
            {exercise && exercise[0] ? (
                <section className="mt-2">
                    <div className="bg-zinc-100 dark:bg-zinc-900 w-fit rounded-md p-2">
                        <BodyIcon
                            w={50}
                            h={50}
                            fill={theme === 'dark' ? 'white' : 'black'}
                        />
                    </div>
                    <h1 className="max-w-2xl mt-4 mb-2 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                        {name}
                    </h1>

                    <h3 className="max-w-2xl mb-4 text-xs font-extrabold uppercase tracking-tight leading-none text-zinc-500">
                        Target Muscle - {capitalize(exercise[0]?.muscle)}
                    </h3>

                    {(exercise[0]?.difficulty as string) === 'expert' && (
                        <span className=" bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                            {capitalize(exercise[0]?.difficulty)}
                        </span>
                    )}
                    {(exercise[0]?.difficulty as string) === 'intermediate' && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                            {capitalize(exercise[0]?.difficulty)}
                        </span>
                    )}
                    {(exercise[0]?.difficulty as string) === 'beginner' && (
                        <span className=" bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                            {capitalize(exercise[0]?.difficulty)}
                        </span>
                    )}

                    <h3 className="mt-6 max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-xl xl:text-2xl dark:text-zinc-200 text-zinc-800">
                        Exercise Instruction
                    </h3>

                    <div className="border-l-4 border-zinc-100 dark:border-zinc-900">
                        <p className="max-w-2xl mb-6 ml-2 font-light text-gray-500 lg:mb-8 md:text-md lg:text-lg dark:text-gray-400">
                            {exercise[0]?.instructions.length === 0
                                ? 'No instructions available.'
                                : exercise[0].instructions}
                        </p>
                    </div>
                </section>
            ) : (
                <Spinner />
            )}
        </Layout>
    );
}
