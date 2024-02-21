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
            <div className = "container-fluid">

            
                <div className="row">
                    <a className="navbar-brand col-md-auto" href="#" style={{fontFamily: "Times New Roman", fontSize: "50px" , fontWeight: "bold"}}>Therapy Talks</a>

                </div>
            

                <div className ="row" style={{fontFamily: "Arial", fontSize: "20px" }}>
                    <div className = "navbar-item my-auto col-md-auto">
                        <a className="nav-link active"  href="#">Our Mission</a>
                    </div>

                    <div className = "navbar-item my-auto col-md-auto">
                        <a className="nav-link active"  href="#">Programs</a>
                    </div>

                    <div className = "navbar-item my-auto col-md-auto">
                        <a className="nav-link active"  href="#">Blogs</a>
                    </div>

                    <div className = "navbar-item my-auto col-md-auto">
                        <a className="nav-link active"  href="#">Communities</a>
                    </div>

                    <div className = "navbar-item my-auto col-md-auto">
                    <button className="btn btn-primary btn-lg login-button" style= {{borderRadius: "15px"}}><Link style ={{textDecoration: "none", color:"white" }} to="signin" >Login</Link></button>
                    </div>

                
                </div>
            </div>
              
            

        </nav>


    );
}

