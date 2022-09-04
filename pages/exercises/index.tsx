import { useEffect, useState } from 'react';
import { Dropdown } from '@/components/Dropdown';
import { ExerciseCard } from '@/components/ExerciseCard';
import { Layout } from '@/components/Layout';
import { SearchBar } from '@/components/SearchBar';
import { Spinner } from '@/components/Spinner';

// types
import { ExerciseType } from 'src/types';
import {
    fetchExerciseByMuscle,
    fetchExerciseByName,
    fetchExerciseByType,
    fetchExercises,
} from './utils';
import { exerciseCategories, exerciseTypes, muscleTypes } from './categories';
import { CustomButton } from '@/components/CustomButton';
import { useRouter } from 'next/router';

export default function ExercisesPage() {
    const [exercises, setExercises] = useState<ExerciseType[]>([]);
    const [loading, setLoading] = useState<Boolean>(false);
    const [name, setName] = useState('');
    const router = useRouter();
    const [offset, setOffset] = useState(0);

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSearchExerciseByName = () => {
        const getExerciseByName = async () => {
            const data = await fetchExerciseByName(name);
            setExercises(data);
        };

        getExerciseByName();
    };

    const handleDropdownSelected = ({ category }) => {
        router.push(`/exercises/category/${category}/`);
    };

    const handleNext = async () => {
        setLoading(true);

        const data = await fetchExercises(offset);
        setExercises(data);

        setOffset(offset + 9);

        setLoading(false);
    };

    const handlePrev = async () => {
        setLoading(true);

        const data = await fetchExercises(offset);
        setExercises(data);

        setOffset(offset - 9);

        if (offset === -9) {
            setOffset(0);
        }

        setLoading(false);
    };

    useEffect(() => {
        setOffset(0);

        const fetchAllExercise = async () => {
            setLoading(true);

            const data = await fetchExercises();
            setExercises(data);

            setLoading(false);
        };

        fetchAllExercise();
    }, []);

    return (
        <>
            <Layout>
                <section className="mt-2">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                        Explore exercises best for you
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Fitnest provides you with{' '}
                        <span className="bg-green-100 text-green-800 text-sm font-semibold px-2.5 py-1 rounded dark:bg-green-200 dark:text-green-900">
                            1000+
                        </span>{' '}
                        different exercises that you can choose from. An
                        exercise that targets a specific muscle? Or an exercise
                        that requires a specific equipment! We got you all
                        covered! Choose from range of simple and complex
                        exercises and get it started today.
                    </p>
                </section>

                {/* Search component and dropdown */}
                <SearchBar
                    maxWidth={'2xl'}
                    value={name}
                    handleChange={handleChange}
                    handleSearch={handleSearchExerciseByName}
                />

                <div className="flex">
                    <Dropdown
                        options={exerciseCategories}
                        handleDropdownSelected={handleDropdownSelected}
                    />
                    {/* <Dropdown
                        options={muscleTypes}
                        type={'Muscle'}
                        handleDropdownSelectedByTypeOrMuscle={
                            handleDropdownSelectedByTypeOrMuscle
                        }
                    /> */}
                </div>
                {/* Search component and dropdown ends here */}

                {loading ? (
                    <Spinner />
                ) : (
                    <div>
                        {exercises.length === 0 ? (
                            <p className="mt-8 text-zinc-500 dark:text-zinc-400">
                                No exercise found. Please try with a different
                                name.
                            </p>
                        ) : (
                            <ExerciseCard exercises={exercises} />
                        )}

                        {exercises.length > 0 && (
                            <div className="flex justify-end mr-0 sm:mr-6">
                                <CustomButton
                                    handleClick={handlePrev}
                                    buttonText="Previous &larr;"
                                    disabled={offset === 0}
                                />
                                <CustomButton
                                    disabled={offset === 1000}
                                    handleClick={handleNext}
                                    buttonText="Next &rarr;"
                                />
                            </div>
                        )}
                    </div>
                )}
            </Layout>
        </>
    );
}
