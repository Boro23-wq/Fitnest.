import { Header } from './Header';

export const HeroLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="dark:bg-black h-screen">{children}</main>
        </>
    );
};
