export const HomeProfileCard = ({ session }) => {
    return (
        <div>
            <div>
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Fitnest entirely free
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Here you can feel better and confident. Access your
                    personalized fit regime, focus on doing something active
                    every week, and drive your personal growth.
                </p>
            </div>
            <div className="relative p-4 w-full max-w-sm bg-white rounded-lg border border-b-0 shadow-md sm:px-6 sm:pt-4 sm:pb-8 dark:bg-black dark:border-zinc-900 border-gradient-to-r">
                <div className="flex justify-between items-center mb-2">
                    <span className="absolute inset-x-0 bottom-0 h-2 rounded-bl-md rounded-br-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        Profile
                    </h5>
                </div>

                <ul
                    role="list"
                    className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src={session?.user?.image as string}
                                    alt={session?.user?.name as string}
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {session?.user?.name as string}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {session?.user?.email as string}
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
