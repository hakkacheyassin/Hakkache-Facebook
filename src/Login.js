import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';



function Login() {

const SginIn = () => {

    auth.signInWithPopup(provider).then(result => {

        console.log(result.user);
    }).catch((error) => alert(error.message));
};

    return (
        <div className="Login">
            
            <div className="Login_logo">

                <img src ="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="logo"/>


                    <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="logo2"/>
            </div>  

                <Button type="submit" onClick={SginIn}>
                    Sign In
                </Button>
        </div>
    )
}

export default Login
