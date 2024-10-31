import CompanySlides from "../../components/home/CompanySlides";
import LoginTips from "../../components/home/Login-tips";
import RecentSearch from "../../components/home/RecentSearch";
import Layout from "../../components/layout/Layout";

const Home = () => {
    return (
        <Layout>
            <div>
                <RecentSearch />
                <LoginTips />
                <CompanySlides />
            </div>
        </Layout>
    );
}

export default Home;