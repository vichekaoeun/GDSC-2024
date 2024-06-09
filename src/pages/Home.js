import React, { useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Nav from '../components/Nav';
import Content from '../components/Content';
import Graph1 from "../components/graph1";
import Graph2 from "../components/graph2";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

export default function Home() {

    const scrollToNextSection = () => {
        const sections = document.querySelectorAll('.section');
        const currentSection = Array.from(sections).find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= window.innerHeight;
        });

        if (currentSection) {
            const nextSection = currentSection.nextElementSibling;
            if (nextSection && nextSection.classList.contains('section')) {
                window.scrollTo({
                    top: nextSection.offsetTop,
                    behavior: 'smooth'
                });
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
            <div id='section2' className="section">
                <Graph1 />
            </div>
            <div id='section3' className="section">
                <Graph2 />
            </div>
        </div>
    )
}
