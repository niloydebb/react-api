import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
    
        const [posts, setPosts] = useState([])

    useEffect(()=> {
        // fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => {
        //     setPosts(data);
        // })

        axios.get("https://jsonplaceholder.typicode.com/users").then(res => setPosts(res.data))
    },[posts])    
   

    return (
        <div className="px-4">
           <Helmet>
            <title>Blog</title>
           </Helmet>


            {posts.map(user=>(
               <div key={user.id} className="border rounded p-4 mt-5">
                <h2 className="text-black">{user.name}</h2>
                <p className="text-black">{user.email}</p>
               </div> 
            ))}
        </div>
    );
};

export default Blog;