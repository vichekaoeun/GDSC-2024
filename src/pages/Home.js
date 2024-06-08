import React, { useEffect } from "react";
import '../scss/style.scss';
import '../scss/_variables.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Content from '../components/Content';
import Graph1 from "../components/graph1";
import Graph2 from "../components/graph2";
import Test from '../components/test';
import AboutUs from '../components/About-Us';
import { initializeApp } from 'firebase/app'; // Import initializeApp
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
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

    const scrollToNextSection = () => {
        const sections = document.querySelectorAll('.section');
        const currentSection = Array.from(sections).find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= window.innerHeight;
        });

        if (currentSection) {
            const nextSection = currentSection.nextElementSibling;
            if (nextSection && nextSection.classList.contains('section')) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="custom-bg">
            <Nav />
            <button onClick={scrollToNextSection} style={{ position: 'fixed', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: '500', borderRadius: '15px', borderWidth: '1px' }}>
                <FontAwesomeIcon icon={faArrowDown} />
            </button>
            <div id='section1' className="section">
                <Content />
            </div>
            {/* Main Page */}
            <div id='section2' className="section">
                <Graph1 />
            </div>
            <div id='section3' className="section">
                <Graph2 />
            </div>

            {/* About Us page */}
            {/*<AboutUs /> */}
            {/* <AboutUs /> */}

            {/*} <Sponsors /> */}


            {/* <Test /> */}
            {/*<Footer />*/}
        </div>
    )
}