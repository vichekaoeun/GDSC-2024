import React from "react";
import '../scss/style.scss';
import '../scss/_variables.scss';
import './Animation.css';
import videoBg from '../assets/therapyVideo.mp4';
import { Link } from 'react-router-dom';

export default function Content() {
    return (
        <div className="container d-flex flex-column align-items-center">
            <video src={videoBg} autoPlay loop muted className="video-bg flex-grow-1" />
            <div className="overlay">
                <h1 className="roboto-regular text-white underline-animation fade-in-container">Find a Community like you</h1>
            </div>
        </div>

    );
}
