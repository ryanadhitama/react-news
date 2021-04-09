import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Trending() {

    const [trending, setTrending] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL+'/posts?take=3&type=trending')
        .then(res => {
            const data = res.data.data;
            setTrending(data);
        })
    }, [])

    return (
        <div className="trending">
            <h4>Trending Post</h4>
            <ul>
               {
                   trending && trending.map(function(item){
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

export default Trending;