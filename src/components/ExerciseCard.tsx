import Link from 'next/link';
import { capitalize } from '../utils';

export const ExerciseCard = ({ exercises }) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-4 mb-4">
            {exercises?.slice(0, 9).map((exercise, index) => (
                <div
                    key={index}
                    className="relative block p-8 overflow-hidden border border-zinc-100 dark:border-zinc-800 rounded-lg mr-0 mt-4 sm:mr-6">
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"></span>

                    <div className="justify-between sm:flex">
                        <div>
                            <h5 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
                                {exercise.name}
                            </h5>
                            <p className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                                <span>
                                    <span className="font-bold">Muscle: </span>
                                    {capitalize(exercise.muscle)},{' '}
                                    <span className="font-bold">Type: </span>
                                    {capitalize(exercise.type)}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 sm:pr-8">
                        <p className="text-sm text-zinc-500">
                            {exercise.instructions.length === 0
                                ? 'No instructions available.'
                                : exercise.instructions.substring(0, 100) +
                                  '...'}
                        </p>
                    </div>

                    <dl className="flex mt-6 justify-between">
                        <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium text-zinc-600 dark:text-zinc-100">
                                Difficulty
                            </dt>
                            <dd className="text-xs text-zinc-400">
                                {capitalize(exercise.difficulty)}
                            </dd>
                        </div>

                        <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-100 flex flex-col-reverse hover:underline">
                            <Link href={`/exercises/${exercise.name}`}>
                                Learn More &rarr;
                            </Link>
                        </div>
                    </dl>
                </div>
            ))}
        </div>
    );
};
