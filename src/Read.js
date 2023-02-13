import React from "react";
import { useEffect, useState } from "react";
import { db } from "./Firebase";
import { getDocs, collection } from "firebase/firestore";
import './Read.css'

function Read() {
    const [post, setPost] = useState([]);

    const postingCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPost = async () => {
            try{
                const data = await getDocs(postingCollectionRef);
                const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
                setPost(filteredData);
                //console.log(filteredData[0].content);
            }catch(error){
                console.log(error);

            }
        };

        getPost();    
        // eslint-disable-next-line
    }, []);


    return (
        <div id="Read">
            {post.map((post) => (
                post.date === Number((window.location.pathname).replace("/read/","")) ?
                    <div key={post.id}>
                        <h1 className="title">{post.title}</h1>
                        <p className="content">{post.content}</p>
                    </div>
                : null
            ))}    
        </div>
    );
};

export default Read;