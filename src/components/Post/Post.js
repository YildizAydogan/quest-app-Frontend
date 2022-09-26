import React, {useEffect, useState} from 'react'
import  ReactDOM  from 'react-dom';




function Post () {
     const [error, setError]= useState(null);
     const [isLoaded, setIsLoaded] = useState(false);
     const [postList, setPostList]= useState([]);

     useEffect(()=> {
        fetch("https://localhost:8080/posts")
        .then(res => res.json())
        .then ((result) => {
         setIsLoaded(true);
         setPostList(result)},

        (error) => {
            setIsLoaded(false);
            setPostList(error)
        })
     },[])



}

