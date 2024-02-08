import React from "react";
import { useState, useEffect, useRef } from "react";
import '../scss/style.scss';
import '../scss/_variables.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


export default function Footer() {
    return (
        <div className="container-fluid row bg-black text-light p-5">
            <div className="col text-center">
                <h1>Contact Us</h1>
                <div>
                </div>
            </div>
            <div className="col text-center">
                <h1>Other Links</h1>
                <ul>
                    <li className="list-group-item">About Us</li>
                    <li className="list-group-item">Sponsors</li>
                    <li className="list-group-item">Partners</li>
                    <li className="list-group-item">Terms of Service</li>
                </ul>
            </div>
        </div>
    )
}