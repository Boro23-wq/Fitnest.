/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { capitalize } from '../utils';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export const Dropdown = ({
    options,
    type,
    handleDropdownSelectedByTypeOrMuscle,
}) => {
    return (
        <Menu
            as="div"
            className="relative inline-block text-left w-fit mt-4 mr-2">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-black px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 shadow-sm hover:bg-zinc-100 dark:hover:border-zinc-600 focus:outline-none transition ease-in-out delay-50">
                    Exercise by {type}
                    <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
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
                <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-black border dark:border-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {options?.map((option) => (
                            <Menu.Item key={option?.id}>
                                {({ active }) => (
                                    <button
                                        onClick={() => {
                                            handleDropdownSelectedByTypeOrMuscle(
                                                { type, name: option.name }
                                            );
                                        }}
                                        className={classNames(
                                            active
                                                ? 'bg-zinc-100 dark:bg-zinc-900'
                                                : 'text-zinc-700',
                                            'block px-4 py-2 w-full text-left text-md text-gray-800 dark:text-white'
                                        )}>
                                        {capitalize(option?.name)}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};
