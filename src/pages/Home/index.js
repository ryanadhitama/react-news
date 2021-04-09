import Category from "../../components/Category";
import Hero from "../../components/Hero";
import Trending from "../../components/Trending";

function Home() {
    return (
        <div>
            <Hero name="Welcome to My Blog"/>
            <Trending/>
            <Category/>
            <br/>
        </div>
    )
}

export default Home;