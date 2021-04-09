import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Post(props) {
    const [post, setPost] = useState([]);

    useEffect(() => {
        let category = ""

        if (props.category != undefined) {
            category = `?category=${props.category}`
        }

        axios.get(process.env.REACT_APP_API_URL+'/posts'+category)
        .then(res => {
            const data = res.data.data;
            setPost(data);
        })
    }, [])

    return (
        <div className="trending">
            <ul>
               {
                   post && post.map(function(item){
                       return (
                           <li key={item.id}>
                               <Link to={`/post/${item.slug}`}>{item.title}</Link>
                           </li>
                       )
                   })
               }
              
            </ul>
        </div>
    )
}

export default Post;