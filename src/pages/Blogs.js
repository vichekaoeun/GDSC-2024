import React from "react";
import Nav from '../components/Nav';
import '../scss/style.scss';
import '../scss/_variables.scss';
import './blog.css';
import SingleProject from "../components/single-project";

export default function Blog() {
    return (
        <div>
            <div>
                <Nav />
            </div>
            <div className="post-bg rounded m-5 min-vh-100" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="card mb-4 m-5">
                    {/* Post Details */}
                    <div className="card-header">
                        <small className="text-muted">Author: John Doe | Posted on: October 5, 2023</small>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Post Title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe adipisci totam cum eum tempore veritatis odio, nulla est vero autem iusto ducimus, labore illo neque! Voluptatum non voluptates optio enim aliquid obcaecati aut similique. Voluptates consequuntur eius pariatur perspiciatis non dolores nihil quos, quod delectus ea laboriosam voluptatibus quasi. Necessitatibus illo, ipsam omnis placeat aperiam laboriosam autem rem, deleniti soluta tempore, accusantium tenetur?.</p>
                    </div>
                    <div className="p-4">
                        <u>Comments: 5</u>
                    </div>
                </div>
                <div className="card mb-4 m-5">
                    {/* Post Details */}
                    <div className="card-header">
                        <small className="text-muted">Author: John Doe | Posted on: October 5, 2023</small>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Post Title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe adipisci totam cum eum tempore veritatis odio, nulla est vero autem iusto ducimus, labore illo neque! Voluptatum non voluptates optio enim aliquid obcaecati aut similique. Voluptates consequuntur eius pariatur perspiciatis non dolores nihil quos, quod delectus ea laboriosam voluptatibus quasi. Necessitatibus illo, ipsam omnis placeat aperiam laboriosam autem rem, deleniti soluta tempore, accusantium tenetur?.</p>
                    </div>
                    <div className="p-4">
                        <u>Comments: 21</u>
                    </div>
                </div>
            </div>
        </div>
    )
}