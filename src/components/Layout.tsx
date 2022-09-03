import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div className="flex flex-col">
                <Header />
                <section className="bg-white dark:bg-black ">
                    <div className="grid max-w-screen-xl px-4 sm:px-4 lg:px-4 py-8 mx-auto lg:gap-0 xl:gap-0 lg:py-8 lg:grid-cols-1">
                        {/* <div className="mr-auto place-self-center sm:col-span-8"> */}
                        {children}
                        {/* </div> */}
                    </div>
                </section>
            </div>
            <div className="flex flex-col">
                <Footer />
            </div>
        </div>
    );
};
