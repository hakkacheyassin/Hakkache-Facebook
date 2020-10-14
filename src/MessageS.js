

import React,{useState} from 'react';
import './MessageS.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Avatar } from '@material-ui/core';

function MessageS() {

    const [input,setinput] =  useState('');
    const [imageurl,setimageurl] = useState('');
const handleSubmit = e => {
    e.preventDefault();
};

    return (
        <div className="MessageS">

            <div className="MessageS__top">
                <Avatar src="https://i.ibb.co/frqLLxR/B27-A302-B-F8-A4-4-A34-A9-D5-09-F9-DAD585-C5-2.jpg"/>
                
                <form>
                    <input 
                    value={input}
                    onChange={e => setinput(e.target.value)}
                    className="MessageS_input"
                   placeholder="hey"/>
                

                     <input 
                     value={imageurl}
                     onChange={(e) => setimageurl(e.target.value)}
                     placeholder="ImageUrl"/>



                     <button onClick={handleSubmit} type="submit"> hidden sub  </button>

                </form>
            </div>


            <div className="MessageS__bottom">


                <div className="MessageS__option">

                    <VideocamIcon style={{color :"red"}}/>
                    <h3>Live video</h3>

                </div>


                <div className="MessageS__option">

                    <PhotoLibraryIcon style={{color :"green"}}/>
                    <h3>Photo/Video</h3>

                </div>


                <div className="MessageS__option">

                    <InsertEmoticonIcon style={{color :"orange"}}/>
                    <h3>Feeling/Activity</h3>

                </div>


            </div>

        </div>
    )
}

export default MessageS
