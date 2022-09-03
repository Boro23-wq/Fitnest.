import { signIn } from 'next-auth/react';
import { FitnestIcon } from './FitnestIcon';

export const Hero = () => {
    return (
        <div className="mx-auto px-2 my-20 flex flex-col items-center justify-center max-w-screen-xl text-center">
            <FitnestIcon w={75} h={75} />
            <a
                href="#"
                className="inline-flex justify-between items-center py-1 px-1 pr-4 mt-10 mb-6 text-sm text-gray-700 bg-gray-100  rounded-full dark:bg-black border dark:border-zinc-800 dark:text-white hover:bg-gray-200 dark:hover:border-zinc-500 transition ease-in-out delay-50"
                role="alert">
                <span className="text-xs bg-primary-600 dark:bg-zinc-900 rounded-full text-white px-4 py-1.5 mr-3">
                    Free
                </span>{' '}
                <span className="text-sm font-medium">
                    Access your fit regime
                </span>
                <svg
                    className="ml-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"></path>
                </svg>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                We make fitnest entirely free
                {/* <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-violet-800"> */}
                {/* </span>{' '} */}
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                Here at Fitnest we focus on doing something active every week
                that makes you feel calm, unlock your long-term value and drive
                your personal growth.
            </p>
            <div className="w-full sm:w-fit flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <button
                    className="justify-center inline-flex text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 transition ease-in-out delay-50"
                    type="button"
                    onClick={() => signIn()}>
                    <svg
                        className="mr-2 -ml-1 w-4 h-4"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="google"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 488 512">
                        <path
                            fill="currentColor"
                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                    </svg>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};
