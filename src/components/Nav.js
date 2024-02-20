import React from "react";
import { useState, useEffect, useRef } from "react";
import '../scss/_variables.scss';
import '../scss/style.scss';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Nav() {
    const auth = getAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user); // Set isLoggedIn to true if user is not null
        });

        return () => unsubscribe();
    }, [auth]);

    return (
        <nav className="navbar navbar-expand-xxl bg-primary ">
            <div className="container-fluid d-flex flex-column align-items-start ">
                <Link className="navbar-brand" to='/'>Therapy Talks</Link>
                <div className="collapse navbar-collapse " >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Our Mission</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Programs</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='blog'>Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Communities</a>
                        </li>

                    </ul>
                </div>
                {isLoggedIn ? (
                    <button className="btn btn-primary">
                        <Link to='/profile'>Profile</Link>
                    </button>
                ) : (
                    <button className="btn btn-primary">
                        <Link to='/signin'>Login</Link>
                    </button>
                )}
            </div>

        </nav>


    );
}

