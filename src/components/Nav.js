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
        <nav className="navbar navbar-expand-xxl bg-primary sticky-top">
            <div className="container-fluid">


                <div className="row">
                    <Link className="navbar-brand col-md-auto" to="/" style={{ fontFamily: "Times New Roman", fontSize: "50px", fontWeight: "bold" }}>Therapy Talks</Link>

                </div>


                <div className="row" style={{ fontFamily: "Arial", fontSize: "20px" }}>
                    <div className="navbar-item my-auto col-md-auto">
                        <a className="nav-link active" href="#">Our Mission</a>
                    </div>

                    <div className="navbar-item my-auto col-md-auto">
                        <a className="nav-link active" href="#">Programs</a>
                    </div>

                    <div className="navbar-item my-auto col-md-auto">
                        <Link className="nav-link active" to="/blog">Blogs</Link>
                    </div>

                    <div className="navbar-item my-auto col-md-auto">
                        <a className="nav-link active" href="#">Communities</a>
                    </div>

                    <div className="navbar-item my-auto col-md-auto">
                        {isLoggedIn ? (
                            <button className="btn btn-danger btn-lg login-button"><Link style={{ textDecoration: "none", color: "white" }} to="/profile" >Profile</Link></button>
                        ) : (
                            <button className="btn btn-danger btn-lg login-button"><Link style={{ textDecoration: "none", color: "white" }} to="/signin" >Login</Link></button>
                        )}
                    </div>


                </div>
            </div>

        </nav>


    );
}

