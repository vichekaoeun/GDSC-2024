import React from "react";
import Nav from '../components/Nav';
import '../scss/style.scss';
import '../scss/_variables.scss';
import './blog.css';

export default function Blog() {
    return (
        <div>
            <div>
                <Nav />
            </div>
            <div className="post-bg rounded m-5 min-vh-100" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="rounded m-5 bg-white">
                    <div className="m-3">
                        <div>
                            <div className="row justify-content-center">
                                Title
                            </div>
                            <div>
                                Name | Date
                            </div>
                        </div>
                        <div>
                            Tags
                        </div>
                        <div className="row justify-content-center">
                            Content
                        </div>
                    </div>
                </div>
                <div className="rounded m-5 bg-white">
                    <div className="m-3">
                        <div>
                            <div className="row justify-content-center">
                                Title
                            </div>
                            <div>
                                Name | Date
                            </div>
                        </div>
                        <div>
                            Tags
                        </div>
                        <div className="row justify-content-center">
                            Content
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}