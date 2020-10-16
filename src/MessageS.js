

import React,{useState} from 'react';
import './MessageS.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Avatar } from '@material-ui/core';
import {useStateValue} from './Stateprovider';
import firebase from 'firebase';
import db from './firebase';

function MessageS() {

    const [{ user }, dispatch] = useStateValue();
    const [input,setinput] =  useState('');
    const [imageurl,setimageurl] = useState('');


    const handleSubmit = e => {
        e.preventDefault();

        db.collection('Posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilesrc:user.photoURL,
            img:imageurl,
            username:user.displayName,

        })
       

};




    return (
        <div className="MessageS">

            <div className="MessageS__top">
            <Avatar src={user.photoURL}/>
                <form>
                    <input 
                    value={input}
                    onChange={e => setinput(e.target.value)}
                    className="MessageS_input"
                   placeholder=""/>
                

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
