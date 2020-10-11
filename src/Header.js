import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import { Avatar, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {
    return (
        <div className="header">

            <div className="header-left">

                <img src="
                https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook-logo"/>  

                <div className="header_input">
                    
                    <SearchIcon/>
                    <input  placeholder="Search Facebook" type="text"/>

                </div>
                
            </div>


            <div className="header-middle">

                <div className="header-option
                header-option--active">
                    <HomeIcon fontSize="large"/>
                </div>

                <div className="header-option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header-option">
                    <SubscriptionsIcon fontSize="large"/>
                </div>
                <div className="header-option">
                    <StorefrontIcon fontSize="large"/>
                </div>
                <div className="header-option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>

            </div>


            <div className="header-right">

                <div className="header-info">

                    <Avatar />
                    <h4>hakkacheyassin</h4>
                </div>

                <IconButton>
                    <AddIcon/>
                </IconButton>

                <IconButton>
                    <ForumIcon/>
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>

        </div>
            
        </div>
    )
}

export default Header
