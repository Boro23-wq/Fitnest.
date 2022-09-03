import { Footer } from './Footer';
import { Header } from './Header';

export const HeroLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header />
            <section className="bg-white dark:bg-black h-screen">
                {children}
            </section>
            <Footer />
        </div>
    );
};
