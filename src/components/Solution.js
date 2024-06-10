import React from "react";
import '../scss/style.scss';
import '../scss/_variables.scss';
import Lottie from 'lottie-react';
import image from '../assets/girlsad.json';
import VisibilitySensor from 'react-visibility-sensor';

export default function Solution() {
    return (
        <div className=" text-center p-5">
            <h1 className="text-light">
                Reaching out is tough
            </h1>
            <span className="text-light">It takes a lot of effort for many struggling out there to reach out in the first place, not to mention
                if there's a <u className="custom-red-font">paywall</u>.
            </span>
            <div className="row justify-content-center">
                <Lottie animationData={image} loop={true} style={{ width: '400px' }} className="m-5" />
            </div>
        </div>

    )
}