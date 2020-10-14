import React from 'react';
import './Fed.css';
import StoryRell from './StoryRell';
import MessageS from './MessageS';
import Post from './Post';

function Fed() {
    return (
        <div className="fed">              
        <StoryRell/>
        <MessageS/>
        <Post 
        profilesrc="https://i.ibb.co/frqLLxR/B27-A302-B-F8-A4-4-A34-A9-D5-09-F9-DAD585-C5-2.jpg"
        username="Hakkache"
        timestamp="14 OCt 2020"
        message="WoW nice Work"
        img="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png"

        />

    <Post 
        profilesrc="https://i.ibb.co/frqLLxR/B27-A302-B-F8-A4-4-A34-A9-D5-09-F9-DAD585-C5-2.jpg"
        username="Hakkache"
        timestamp="14 OCt 2020"
        message="WoW nice Work"
        img="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png"

        />

        </div>
    )
}

export default Fed
