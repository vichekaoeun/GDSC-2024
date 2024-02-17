import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app'; // Import initializeApp
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [RetypePassword, setRetypePassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault(); // Prevent form submission
        if (password != RetypePassword) {
            console.log("Password Do Not Match.");
            return;
        }

        // Call createUserWithEmailAndPassword with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then(cred => {
                console.log(cred);
                setEmail('');
                setPassword('');
                setRetypePassword('');
                navigate('/profile');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // Update the error state to display to the user
                setError(errorMessage);
            });
    };

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <div>
                    <input type="email" id="text-email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    <input type="password" id="text-password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                    <input type="password" id="text-retypepassword" placeholder="retype-password" value={RetypePassword} onChange={(e) => setRetypePassword(e.target.value)} required></input>
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}