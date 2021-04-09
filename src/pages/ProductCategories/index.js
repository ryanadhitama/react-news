import Post from "../../components/Post";
import Hero from "../../components/Hero";

function ProductCategories({match}) {
    return (
        <div>
            <Hero name={match.params.slug}/>
            <h4>Posts by {match.params.slug}</h4>
            <Post category={match.params.slug}/>
            <br/>
        </div>
    )
}

export default ProductCategories;