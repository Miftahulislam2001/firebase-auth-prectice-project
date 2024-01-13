import React, { useState } from 'react';
import { GithubAuthProvider, TwitterAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from '../../Firebase/firebase.init';
import './LogIn.css'



const LogIn = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const [user, setUser] = useState(null)
    console.log(user);


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)

            })
            .then(error => {
                console.log(error?.message);
            })
    }

    const handleGitHubSignIn = () =>{
        signInWithPopup(auth, gitHubProvider)
        .then(result =>{
            const user = result.user;
            setUser(user)
        })
        .then(error =>{
            const errorMessage = error?.message;
            console.log(errorMessage);
        })
    }

    const handleTwitterSignIn = () =>{
        signInWithPopup(auth, twitterProvider)
        .then(result =>{
            const twitterUser = result.user;
            setUser(twitterUser)
        })
        .then(error =>{
            const errorMess = error.message;
            console.log(errorMess);
        })
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(result => {
                setUser(null)
            })
            .then(error => {
                console.log(error?.message);
            })
    }

    return (
        <div>


            <div className='space'>
                {user ?
                    <button onClick={handleGoogleSignOut}>SignOut</button> :
                    <div>
                        <button className='space1' onClick={handleGoogleSignIn}>LogIn with Google</button>
                        <button className='space1' onClick={handleGitHubSignIn}>LogIn with GitHub</button>
                        <button onClick={handleTwitterSignIn}>LogIn with Twitter</button>

                    </div>}

                {user && <div div className='space'>
                    <img src={user.photoURL} alt="" />
                    <h3>Name: {user?.displayName}</h3>
                    <h3>Email: {user?.email}</h3>
                </div>}
            </div>
        </div>

    );
};

export default LogIn;