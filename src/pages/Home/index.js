import Category from "../../components/Category";
import Hero from "../../components/Hero";
import Post from "../../components/Post";

function Home() {
    return (
        <div>
            <Hero name="Welcome to My Blog"/>
            <h4>Trending</h4>
            <Post trending="yes"/>
            <h4>Categories</h4>
            <Category/>
            <br/>
        </div>
    )
}

export default Home;