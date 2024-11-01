import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import Toper from "./Toper";

const Layout = ({ children }) => {
    return (
        <div>
            <div className="container max-w-full">
                <Toper />
                <Header />
                <Search />
                    <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;