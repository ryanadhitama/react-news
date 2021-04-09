import Category from "../../components/Category";
import Hero from "../../components/Hero";
import Trending from "../../components/Trending";

function Home() {
    return (
        <div>
            <Hero name="Welcome to My Blog"/>
            <Trending/>
            <h4>Categories</h4>
            <Category/>
            <br/>
        </div>
    )
}

export default Home;