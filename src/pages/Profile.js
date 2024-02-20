import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app'; // Import initializeApp
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import Nav from '../components/Nav';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig); // Initialize Firebase app
const auth = getAuth(app);

export default function Profile() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [profileData, setProfileData] = useState(null);
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("User has logged out.")
                navigate("/");
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            })
    }

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // Check if user is authenticated
                if (!user) return;

                // Fetch profile data based on user's UID
                const response = await fetch(`http://localhost:3001/profile/${user.uid}`);
                if (response.ok) {
                    const data = await response.json();
                    setProfileData(data);
                } else {
                    throw new Error('Failed to fetch profile data');
                }
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfile();
    }, [user]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const checkResponse = await fetch(`http://localhost:3001/profile/${user.uid}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (checkResponse.ok) {
                const existingProfile = await checkResponse.json();
                const method = existingProfile ? 'PUT' : 'POST'; // Determine the HTTP method based on whether the profile exists
                const url = existingProfile ? `http://localhost:3001/profile/${user.uid}` : 'http://localhost:3001/profile';

                const response = await fetch(url, {
                    method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, description, email: user.email, uid: user.uid })
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('User updated/created:', data);
                } else {
                    throw new Error('Failed to update/create user');
                }
            } else {
                throw new Error('Failed to check profile existence');
            }

            // Clear
            setUsername('');
            setDescription('');
        } catch (error) {
            console.error('Error creating/updating user:', error);
        }
    };

    if (!user || !profileData) {
        return <p>Loading...</p>; // or show a loading indicator
    }

    return (
        <>
            <div>
                <Nav />
            </div>
            <div className="m-5 col text-center">
                <h1>Let's know a bit more about you</h1>
                <div>
                    <p>Email: {user.email}</p>
                    <p>Username: {profileData.username}</p>
                    <p>Description: {profileData.description}</p>
                    <div>
                        <div className="m-2">
                            <u><b>Edit here</b></u>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input type='text' id='username' placeholder="username" onChange={(e) => setUsername(e.target.value)} value={username} required></input>
                            <input type='text' id='description' placeholder="about me (max: 1000 chars)" onChange={(e) => setDescription(e.target.value)} value={description} required></input>
                        </form>
                        <button type="submit" className="btn btn-primary m-2">Save</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <button className="btn btn-primary col-sm-1" onClick={handleSignOut}>Logout</button>
                </div>
            </div>
        </>
    )
}