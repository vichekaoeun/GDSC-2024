import React, { useState, useEffect } from "react";
import Nav from '../components/Nav';
import { Link, useNavigate } from 'react-router-dom';
import '../scss/_variables.scss';
import '../scss/style.scss';
import './blog.css';
import { initializeApp } from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import PostModal from '../components/PostModal';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Blog() {
    const [user] = useAuthState(auth);
    const [blogs, setBlogs] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:3001/blog');
                if (response.ok) {
                    const data = await response.json();
                    setBlogs(data); // Update the state with fetched blogs
                } else {
                    throw new Error('Failed to fetch blogs');
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    const handlePost = async (postData) => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div>
            <div>
                <Nav />
            </div>
            <div className="post-bg rounded m-5 min-vh-100" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="mx-5 mt-3 row" style={{ width: '10rem' }}>
                    <button className="btn btn-primary" onClick={handlePost}>Create a Post</button>
                </div>
                {showModal && <PostModal closeModal={closeModal} />}
                {blogs.map(blog => (
                    <div className="card mb-4 m-5">
                        {/* Post Details */}
                        <div className="card-header">
                            <small className="text-muted">Author: John Doe | Posted on: {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</small>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{blog.title}</h2>
                            <div className="row mx-sm-2 mx-md-3 mb-2 mt-3">
                                {/* Tags */}
                                {blog.tags.map((tag, idx) => (
                                    <div key={idx} className="col col-auto tag bg-danger text-white px-2 py-1 m-1 font-weight-bold rounded d-inline-block">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            <p className="card-text">{blog.content}</p>
                        </div>

                        <div className="p-4">
                            <Link to='/post'>Comments: </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}