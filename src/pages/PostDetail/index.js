import { useState, useEffect } from "react";
import axios from 'axios';

function PostDetail({match}) {
    
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL+'/post/'+match.params.slug)
        .then(res => {
            setImage(res.data.data.image);
            setTitle(res.data.data.title);
            setDate(res.data.data.created_at);
            setDescription(res.data.data.description);
        })
    }, [match])
    
    return (
        <>
            <img src={image} alt={title} style={{width:'100%'}}/>
            <h4>{title}</h4>
            <p>{description}</p>
            <small><b>Created at :</b> {date}</small>
        </>
    )
}

export default PostDetail;