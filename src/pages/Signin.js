import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app'; // Import initializeApp
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

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

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;

                // You can access user properties here
                console.log('User ID:', user.uid);
                console.log('Email:', user.email);
                console.log('Display Name:', user.displayName);
                console.log('Photo URL:', user.photoURL);
                console.log('Linked Google Account:', user.providerData);
                navigate('/profile');
            })
            .catch((error) => {
                // Handle the canceled popup request error
                if (error.code === 'auth/cancelled-popup-request') {
                    console.log('Popup sign-in was canceled.');
                } else {
                    console.error('Error signing in with Google:', error);
                }
            });
    }

    const handleSignIn = (e) => {
        e.preventDefault(); // Prevent form submission

        signInWithEmailAndPassword(auth, email, password)
            .then(cred => {
                console.log(cred.user);
                navigate('/profile');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // Update the error state to display to the user
                setError(errorMessage);
            });
    }

    return (
        <>
            <Nav />
            <div className ="justify-content">
                <h1>SignIn Page</h1>
                <div>
                    <button onClick={signInWithGoogle} className="btn btn-primary">Sign in with Google</button>
                    <button className="btn btn-primary"><Link to='/signup'>Sign Up</Link></button>
                </div>
                <div>
                    <form onSubmit={handleSignIn}>
                        <div>
                            <input type="email" id="text-email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                            <input type="password" id="text-password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                        </div>
                        <div>
                            <button className="btn btn-primary" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            
            
            <Footer />
        </>
    )
}