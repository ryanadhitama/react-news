import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Category() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL+'/categories')
        .then(res => {
            const data = res.data.data;
            setCategories(data);
        })
    }, [])

    return (
        <div className="categories">
            <ul>
               {
                   categories && categories.map(function(item){
                       return (
                           <li key={item.id}>
                               <Link to={`/category/${item.slug}`}>{item.name}</Link>
                           </li>
                       )
                   })
               }
              
            </ul>
        </div>
    )
}

export default Category;