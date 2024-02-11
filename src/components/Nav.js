import React from "react";
import { useState, useEffect, useRef } from "react";
import '../scss/_variables.scss';
import '../scss/style.scss';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-xxl bg-primary ">
            <div className="container-fluid d-flex flex-column align-items-start">
                <a className="navbar-brand" href="#">Therapy Talks</a>


                <div className="collapse navbar-collapse " >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Our Mission</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Programs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Communities</a>
                        </li>

                    </ul>
                </div>
            </div>

        </nav>


    );
}

