import { useSession } from 'next-auth/react';

export const ProfileCard = () => {
    const { data: session } = useSession();

    return (
        <div className="rounded-2xl p-4">
            <div className="flex items-center">
                <div className="inline-flex flex-shrink-0 justify-center items-center w-14 h-14 text-white bg-gradient-to-br from-gray-200 to-gray-100 rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="w-10 h-10 rounded-full border-2 border-white"
                        src={session?.user?.image as string}
                        alt={session?.user?.name as string}
                    />
                </div>
                <div className="flex-shrink-0 ml-3">
                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                        {session?.user?.name}
                    </span>
                    <h3 className="text-base font-normal text-gray-500">
                        {session?.user?.email}
                    </h3>
                </div>
            </div>
        </div>
    );
};
