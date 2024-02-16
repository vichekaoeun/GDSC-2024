import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app'; // Import initializeApp
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig); // Initialize Firebase app
const auth = getAuth(app);

export default function Profile() {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("User has logged out.")
                navigate("/");
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            })
    }


    return (
        <>
            <h1>Profile</h1>
            <button onClick={handleSignOut} className="btn btn-primary">Logout</button>
            <Link to='/'>Return to home</Link>
        </>
    )
}