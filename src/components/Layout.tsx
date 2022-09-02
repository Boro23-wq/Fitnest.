import { Header } from './Header';

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <section className="bg-white dark:bg-black">
                <div className="grid max-w-screen-xl px-4 lg:px-0 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <main className="dark:bg-black h-screen">
                            {children}
                        </main>
                    </div>
                </div>
            </section>
        </>
    );
};
