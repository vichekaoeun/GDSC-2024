import React from "react";
import Profile from "./Profile";
import { initializeApp } from 'firebase/app'; // Import initializeApp
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCMbqv6Zz8Op91vz9PZ_A24j7lFUZdxfA",
    authDomain: "therapytalk-395da.firebaseapp.com",
    projectId: "therapytalk-395da",
    storageBucket: "therapytalk-395da.appspot.com",
    messagingSenderId: "593810777330",
    appId: "1:593810777330:web:2d48a3aeb80bb77abadc6b",
    measurementId: "G-WBVM3FF8FG"
};

const app = initializeApp(firebaseConfig); // Initialize Firebase app
const auth = getAuth(app);

export default function Signin() {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .catch((error) => {
                // Handle the canceled popup request error
                if (error.code === 'auth/cancelled-popup-request') {
                    console.log('Popup sign-in was canceled.');
                } else {
                    console.error('Error signing in with Google:', error);
                }
            });
    }

    return (
        <>
            <h1>SignIn Page</h1>
            <div>
                <button onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
        </>
    )
}