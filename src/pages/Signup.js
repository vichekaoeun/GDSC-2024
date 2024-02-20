import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
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
    const [userUid, setUserUid] = useState(null);
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
                setUserUid(cred.user.uid);
                setEmail('');
                setPassword('');
                setRetypePassword('');
                navigate(`/profile?uid=${userUid}`);
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
        <Nav />
<div className="justify-content-center p-5" style={{ backgroundColor: '#f0ffff' }}>
    <div className="col-8 mx-auto p-5 rounded bg-white justify c">
        <h1 className="mb-4">Sign Up</h1>
        <form onSubmit={handleSignUp}>
            <div className="mb-3">
                <label htmlFor="text-email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="text-email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label htmlFor="text-password" className="form-label">Password</label>
                <input type="password" className="form-control" id="text-password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label htmlFor="text-retypepassword" className="form-label">Retype Password</label>
                <input type="password" className="form-control" id="text-retypepassword" placeholder="Retype Password" value={RetypePassword} onChange={(e) => setRetypePassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
</div>



<Footer />
        </>
    )
}