export const CustomButton = ({ handleClick, buttonText, disabled }) => {
    return (
        <button
            disabled={disabled}
            onClick={handleClick}
            className="dark:disabled:border-zinc-900 dark:disabled:text-zinc-900 disabled:bg-zinc-50 disabled:border-zinc-200 disabled:text-zinc-400 border ml-2 border-zinc-800 bg-black dark:bg-black text-gray-50 hover:bg-zinc-900 dark:hover:border-zinc-500 focus:ring-4 focus:ring-gray-200 dark:focus:ring-zinc-900 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2 focus:outline-none transition ease-in-out delay-50">
            {buttonText}
        </button>
    );
};
