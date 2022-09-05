export const ProfileCard = ({ session }) => {
    return (
        <div className="flex flex-col  pb-10">
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
    );
};
