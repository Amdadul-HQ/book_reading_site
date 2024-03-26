import Banner from "../../Component/Banner/Banner";
import Books from "../../Component/Books/Books";

const Home = () => {
    return (
        <section className="md:px-0 px-5">
            <Banner></Banner>
            <Books></Books>
        </section>
    );
};

export default Home;