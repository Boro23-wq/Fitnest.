import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { signOut, useSession, signIn } from 'next-auth/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ToggleButton } from './ToggleButton';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export const Header = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const navigation = [
        {
            name: 'Exercises',
            href: '/exercises',
            current: router.asPath.split('/')[1] === 'exercises',
        },
        // { name: 'Team', href: '#', current: false },
        // { name: 'Projects', href: '#', current: false },
        // { name: 'Calendar', href: '#', current: false },
    ];

    return (
        <Disclosure
            as="nav"
            className="bg-zinc-50 border-zinc-200 lg:px-0 py-2 dark:bg-black border-b dark:border-zinc-900">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-4">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="items-center justify-center rounded-md p-2 bg-black text-white dark:text-white border border-black dark:border-zinc-800 hover:dark:border-zinc-600 hover:bg-zinc-800 transition ease-in-out delay-50">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>

                            <div className="flex  items-center justify-center sm:items-stretch sm:justify-start">
                                <Link href="/" className="flex items-center">
                                    <span className="self-center text-xl font-black whitespace-nowrap ">
                                        Fitnest
                                        <span className="self-center text-gray-500 text-xl font-black whitespace-nowrap">
                                            .
                                        </span>
                                    </span>
                                </Link>

                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <button
                                                key={item.name}
                                                onClick={() =>
                                                    router.push(item.href)
                                                }
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-black text-white border border-black dark:border-zinc-800 dark:hover:border-zinc-600 hover:bg-zinc-800 dark:hover:bg-black'
                                                        : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-400',
                                                    'px-3 py-2 rounded-md text-sm font-medium transition ease-in-out delay-50'
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? 'page'
                                                        : undefined
                                                }>
                                                {item.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mr-8 sm:mr-0 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {session ? (
                                    <>
                                        <Menu
                                            as="div"
                                            className="relative ml-3">
                                            <div>
                                                <Menu.Button className="flex rounded-full bg-gray-100 text-sm">
                                                    <span className="sr-only">
                                                        Open User Menu
                                                    </span>
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        className="h-10 w-10 rounded-full"
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
                                                                        ? 'bg-zinc-100 dark:bg-zinc-900'
                                                                        : '',
                                                                    'block px-4 py-2 w-full text-left text-md text-zinc-800 dark:text-white'
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
                                        className="border border-zinc-800 bg-black dark:bg-black text-gray-50 hover:bg-zinc-900 dark:hover:border-zinc-500 focus:ring-4 focus:ring-gray-200 dark:focus:ring-zinc-900 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2 focus:outline-none transition ease-in-out delay-50">
                                        Sign in
                                    </button>
                                )}
                                <ToggleButton />
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-zinc-900 text-white border border-zinc-800'
                                            : 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-800 dark:hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={
                                        item.current ? 'page' : undefined
                                    }>
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};
