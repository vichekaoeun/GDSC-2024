import React from "react";
import '../scss/style.scss';
import '../scss/_variables.scss';

export default function Home() {
    return (
        <div className="container-fluid" style={{ backgroundColor: "#f0ffff", paddingBottom: "100px", paddingTop: "25px"}}>
            <div className="justify-content-center align-items-center">
                <div className="row">
                    <div className="col-md-5 offset-sm-1"> 
                        <h1>
                            <div className="display-4 mt-5 text-sm">
                                <p className="fw-bold text-black">Find Communities Who Relate to You</p>
                            </div>
                        </h1>

                        <a href="#topics" className="btn btn-danger btn-lg text-white mt-3">Join Us Today</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
