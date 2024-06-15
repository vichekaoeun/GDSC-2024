import React from "react";
import { useState, useEffect, useRef } from "react";
import '../scss/_variables.scss';
import '../scss/style.scss';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './nav.css';

export default function Nav() {
    const auth = getAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const lastScrollTop = useRef(0);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user); // Set isLoggedIn to true if user is not null
        });

        return () => unsubscribe();
    }, [auth]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop.current) {
                setShowNav(false); // Scrolling down
            } else {
                setShowNav(true); // Scrolling up
            }

            lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-xxl sticky-top ${showNav ? 'show' : 'hide'}`} style={{ background: '#01CDA9', transition: 'top 0.3s' }}>
            <div className="container-fluid">


                <div className="row">
                    <Link className="navbar-brand col-md-auto" to="/" style={{ fontFamily: "Times New Roman", fontSize: "50px", fontWeight: "bold", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)" }}>Therapy Talks</Link>

                </div>


                <div className="row" style={{ fontFamily: "Arial", fontSize: "20px" }}>
                    <div className="navbar-item my-auto col-md-auto">
                        <Link className="nav-link active" to="/blog">Stories</Link>
                    </div>

                    <div className="navbar-item my-auto col-md-auto">
                        <Link className="nav-link active" to="/mission">Our Mission</Link>
                    </div>

                    <div className="navbar-item my-auto col-md-auto">
                        <a className="nav-link active" href="#">Programs</a>
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

