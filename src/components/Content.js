import React from "react";
import '../scss/style.scss';
import '../scss/_variables.scss';
import './Animation.css';
import { Link } from 'react-router-dom';

export default function Content() {
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col">
                    <h1 className="roboto-regular text-black underline-animation">Find a Community like you</h1>
                </div>
            </div>
        </div>
    );
}
