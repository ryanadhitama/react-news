import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Post() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL+'/posts')
        .then(res => {
            const data = res.data.data;
            setPost(data);
        })
    }, [])

    return (
        <div className="trending">
            <h4>All Post</h4>
            <ul>
               {
                   post && post.map(function(item){
                       return (
                           <li key={item.id}>
                               <Link to={`post/${item.slug}`}>{item.title}</Link>
                           </li>
                       )
                   })
               }
              
            </ul>
        </div>
    )
}

export default Post;