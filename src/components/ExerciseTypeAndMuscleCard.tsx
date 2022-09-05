import { useRouter } from 'next/router';
import { capitalize } from '../utils';
import {
    AbdominalsIcon,
    BicepsIcon,
    BodyIcon,
    CardioIcon,
    ChestIcon,
    ForearmIcon,
    LowerbackMiddlebackIcon,
    NeckIcon,
    PlyometricsIcon,
    PowerliftingIcon,
    StrengthIcon,
    StretchingIcon,
    StrongmanIcon,
    TricepsIcon,
    WeightliftingIcon,
} from './Icons';

export const ExerciseTypeAndMuscleCard = ({ types, theme }) => {
    const router = useRouter();
    const category = router.asPath.split('/')[3];

    const handleClick = (type) => {
        category === 'type'
            ? router.push(`type/${type}`)
            : router.push(`muscle/${type}`);
    };

    return (
        <div className="grid gap-x-2 sm:gap-x-0 grid-cols-2 lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-3 mb-4">
            {types.map((type) => (
                <div
                    key={type.id}
                    onClick={() => handleClick(type.name)}
                    className="relative block px-4 pt-4 pb-6 cursor-pointer overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 rounded-lg mr-0 mt-4 sm:mr-6 transition ease-in-out delay-60">
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-purple-500 to-pink-500"></span>

                    <div className="mb-6 bg-zinc-100 dark:bg-zinc-900 p-2 w-fit rounded-md">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {type.name === 'cardio' && (
                            <CardioIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'weightlifting' && (
                            <WeightliftingIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'plyometrics' && (
                            <PlyometricsIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'powerlifting' && (
                            <PowerliftingIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'strength' && (
                            <StrengthIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'stretching' && (
                            <StretchingIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'strongman' && (
                            <StrongmanIcon
                                w={35}
                                h={35}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'abdominals' && (
                            <AbdominalsIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'abductors' && (
                            <BodyIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}
                        {type.name === 'adductors' && (
                            <BodyIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'biceps' && (
                            <BicepsIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'calves' && (
                            <BodyIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'chest' && (
                            <ChestIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'forearms' && (
                            <ForearmIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'glutes' && (
                            <BodyIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'hamstrings' && (
                            <BodyIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'lats' && (
                            <BodyIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'lowerback middleback' && (
                            <LowerbackMiddlebackIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'neck' && (
                            <NeckIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'quadriceps' && (
                            <NeckIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'traps' && (
                            <NeckIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}

                        {type.name === 'triceps' && (
                            <TricepsIcon
                                w={30}
                                h={30}
                                fill={theme === 'dark' ? 'white' : 'black'}
                            />
                        )}
                    </div>

                    <div className="justify-between sm:flex">
                        <div>
                            <h5 className="text-sm font-sm text-zinc-800 dark:text-zinc-100">
                                {capitalize(type.name)}
                            </h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
