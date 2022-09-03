export const Footer = () => {
    return (
        <footer className="p-4 bg-white border-t dark:border-zinc-900 border-t-zinc-200 dark:bg-black md:flex md:items-center md:justify-between md:p-6 ">
            <span className="text-sm text-zinc-500 sm:text-center dark:text-zinc-600">
                © 2022{' '}
                <a href="https://flowbite.com/" className="hover:underline">
                    Fitnest™
                </a>
                . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-zinc-500 dark:text-zinc-600 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">
                        Licensing
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline">
                        Contact
                    </a>
                </li>
            </ul>
        </footer>
    );
};
