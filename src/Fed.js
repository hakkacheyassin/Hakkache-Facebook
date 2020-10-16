import React ,{useEffect,useState} from 'react';
import './Fed.css';
import StoryRell from './StoryRell';
import MessageS from './MessageS';
import Post from './Post';
import db from "./firebase";

function Fed() {

    const [Posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("Posts").orderBy('timestamp','desc').onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data()})))
        
        );
        }, []);



    return (
        <div className="fed">              
        <StoryRell/>
        <MessageS/>

        {Posts.map((post) => (

            <Post 
                key={post.data.id}
                profilesrc={post.data.profilesrc}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                img={post.data.img}
            />
        
        ))}
        </div>
    );
}

export default Fed;
