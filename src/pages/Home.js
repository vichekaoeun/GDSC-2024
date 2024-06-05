import React from "react";
import '../scss/style.scss';
import '../scss/_variables.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Content from '../components/Content'
import Community from '../components/Community';
import Test from '../components/test';
import AboutUs from '../components/About-Us';
import { initializeApp } from 'firebase/app'; // Import initializeApp
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import SingleProject from "../components/single-project";
import Sponsors from "../components/Sponsors";

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

export default function Home() {
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log('user logged in');
        }
        else {
            console.log('user logged out');
        }
    })

    return (
        <div className="vh-100 bg-color">
            <Nav />
            <Content />
            {/* Main Page */}
            {/*<Community />*/}

            {/* About Us page */}
            {/*<AboutUs /> */}
            {/* <AboutUs /> */}

            {/*} <Sponsors /> */}


            {/* <Test /> */}
            {/*<Footer />*/}
        </div>
    )
}