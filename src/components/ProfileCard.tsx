export const ProfileCard = ({ session }) => {
    return (
        <>
            <div
                id="dropdown"
                className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                <ul className="py-1" aria-labelledby="dropdownButton">
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Edit
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Export Data
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Delete
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col items-center pb-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="mb-3 w-24 h-24 rounded-md shadow-lg"
                    src={session?.user?.image}
                    alt={session?.user?.name}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {session?.user?.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    {session?.user?.email}
                </span>
            </div>
        </>
    );
};
