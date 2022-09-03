import { useState } from 'react';

export const SearchBar = ({ maxWidth, value, handleChange, handleSearch }) => {
    return (
        <div>
            <div className={`relative max-w-${maxWidth ? maxWidth : '2xl'}`}>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-zinc-400 dark:text-zinc-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    value={value}
                    onChange={handleChange}
                    className="block p-4 pl-10 w-full text-sm text-black bg-zinc-50 dark:focus:bg-black rounded-lg border border-gray-300 dark:bg-black dark:border-zinc-800 dark:placeholder-zinc-600 dark:text-white"
                    placeholder="Search Exercises (e.g. air bike, 45° side bend)"
                    required
                />
                <button
                    onClick={handleSearch}
                    className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-zinc-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-zinc-900 dark:hover:bg-zinc-800 ">
                    Search
                </button>
            </div>
        </div>
    );
};
