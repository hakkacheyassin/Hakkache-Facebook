
import { Avatar } from '@material-ui/core';
import React from 'react';
import './MessageS.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


function MessageS() {

const handleSubmit = e => {
    e.preventDefault();
};




    return (
        <div className="MessageS">

            <div className="MessageS__top">
                <Avatar/>
                
                <form>
                    <input 
                    className="MessageS_input"
                   placeholder="hey"/>
                

                     <input placeholder="ImageUrl"/>


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
                    <h3>Live video</h3>

                </div>


            </div>

        </div>
    )
}

export default MessageS
