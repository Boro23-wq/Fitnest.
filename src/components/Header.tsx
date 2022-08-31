import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export const Header = () => {
    const { data: session, status } = useSession();

    const signInAndSave = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        signIn();

        console.log(status);

        // try {
        //     const body = {
        //         name: session?.user?.name,
        //         email: session?.user?.email,
        //         image: session?.user?.image,
        //     };

        //     const data = await fetch('/api/user', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(body),
        //     });

        //     console.log(data);
        // } catch (error) {
        //     console.error(error);
        // }
    };

    return (
        <header>
            <nav className="bg-gray-50 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a
                        href="https://fitnest.vercel.app/"
                        className="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
                        <span className="self-center text-xl font-black whitespace-nowrap ">
                            Fitnest
                            <span className="self-center text-gray-500 text-xl font-black whitespace-nowrap">
                                .
                            </span>
                        </span>
                    </a>

                    <div className="flex items-center lg:order-2">
                        {session ? (
                            <button
                                onClick={() => signOut()}
                                className="bg-gray-800 text-gray-50 hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                                Log out - {session.user?.name}
                            </button>
                        ) : (
                            <button
                                onClick={signInAndSave}
                                className="bg-gray-800 text-gray-50 hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                                Log in
                            </button>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};
