import { PaperClipIcon } from '@heroicons/react/20/solid';
import { useSession } from 'next-auth/react';

export default function ProfileTable() {
    const { data: session } = useSession();

    return (
        <div className="overflow-hidden dark:bg-black bg-white shadow sm:rounded-lg">
            <div className="flex flex-col sm:flex-row border-t border-l border-r dark:border-zinc-900 border-zinc-100 rounded-tl-lg rounded-tr-lg px-4 py-5 sm:px-6">
                <div className="flex mr-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="mb-3 w-12 h-12 rounded-md shadow-lg"
                        src={session?.user?.image as string}
                        alt={session?.user?.name as string}
                    />
                </div>
                <div className="flex flex-col ">
                    <h3 className="text-lg font-medium leading-6 text-zinc-900 dark:text-zinc-100">
                        User Information
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-zinc-500 dark:text-zinc-400">
                        Personal details and application.
                    </p>
                </div>
            </div>

            <div className=" border-zinc-200 dark:border-zinc-900">
                <dl>
                    <div className="bg-zinc-50 dark:bg-zinc-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                            Full name
                        </dt>
                        <dd className="mt-1 text-sm text-black dark:text-white sm:col-span-2 sm:mt-0">
                            {session?.user?.name}
                        </dd>
                    </div>
                    <div className="bg-zinc-100 dark:bg-zinc-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                            Email address
                        </dt>
                        <dd className="mt-1 text-sm text-black dark:text-white sm:col-span-2 sm:mt-0">
                            {session?.user?.email}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}
