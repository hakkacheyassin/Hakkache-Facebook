import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Post({profilesrc,username,timestamp,message,img}) {
    return (
        <div className="Post">

            <div className="post_top">
                
                <Avatar src={profilesrc}className="Post__Avatar"/>

                <div className="post_topinfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
             </div>   



            <div className="post_bottom">

                <p>{message}</p>

            </div>

            <div className="post_imag">

                <img src={img} alt="logo"/>

            </div>


               <div className="post_options">
                   
                    <div className="post_option">
                        <ThumbUpIcon/>
                        <p>Like</p>
                    </div> 

                    <div className="post_option">
                        <ChatBubbleOutlineIcon />
                        <p>Like</p>
                    </div> 
                    
                    <div className="post_option">
                        <NearMeIcon/>
                        <p>Like</p>
                    </div> 

                    <div className="post_option">
                        <AccountCircleIcon/>
                        <ExpandMoreIcon/>

                        <p>Like</p>
                    </div> 






                </div> 
        </div>
    )
}

export default Post;
