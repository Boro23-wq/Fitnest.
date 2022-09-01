import { Header } from './Header';

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className="dark:bg-black h-screen">{children}</main>
        </div>
    );
};
