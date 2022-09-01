import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { signOut, useSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import { ToggleButton } from './ToggleButton';
import { useTheme } from 'next-themes';

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

export const Header = () => {
    const router = useRouter();
    const { data: session } = useSession();

    return (
        <header>
            <nav className="bg-gray-50 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-black border-b dark:border-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
                        <span className="self-center text-xl font-black whitespace-nowrap ">
                            Fitnest
                            <span className="self-center text-gray-500 text-xl font-black whitespace-nowrap">
                                .
                            </span>
                        </span>
                    </Link>

                    <div className="flex items-center lg:order-2">
                        {session ? (
                            <>
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-gray-100 text-sm">
                                            <span className="sr-only">
                                                Open User Menu
                                            </span>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src={
                                                    session?.user
                                                        ?.image as string
                                                }
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-black border dark:border-zinc-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={() =>
                                                            router.push(
                                                                '/about'
                                                            )
                                                        }
                                                        className={classNames(
                                                            active
                                                                ? 'bg-gray-100 dark:bg-zinc-900'
                                                                : '',
                                                            'block px-4 py-2 w-full text-left text-md text-gray-800 dark:text-white'
                                                        )}>
                                                        Profile
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={() =>
                                                            signOut()
                                                        }
                                                        className={classNames(
                                                            active
                                                                ? 'bg-gray-100 dark:bg-zinc-900'
                                                                : '',
                                                            'block px-4 py-2 w-full text-left text-md text-gray-800 dark:text-white'
                                                        )}>
                                                        Sign out
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </>
                        ) : (
                            <button
                                onClick={() => signIn()}
                                className="border border-zinc-800 bg-black dark:bg-black text-gray-50 hover:bg-zinc-900 dark:hover:border-zinc-500 focus:ring-4 focus:ring-gray-200 dark:focus:ring-zinc-900 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2 mr-2 focus:outline-none transition ease-in-out delay-50">
                                Sign in
                            </button>
                        )}
                        <ToggleButton />
                    </div>
                </div>
            </nav>
        </header>
    );
};
