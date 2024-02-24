import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Sponsors from "../components/Sponsors";
import Terms from "../pages/Terms";
import Partners from "../pages/Partners";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Profile from "../pages/Profile";
import Blog from "../pages/Blogs";

export default function Route() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/sponsors',
            element: <Sponsors />
        },
        {
            path: '/partners',
            element: <Partners />
        },
        {
            path: '/policy',
            element: <Terms />
        },
        {
            path: '/profile',
            element: <Profile />
        },
        {
            path: '/blog',
            element: <Blog />
        },
        {
            path: '/signup',
            element: <Signup />,
            children: [
                {
                    path: 'profile',
                    element: <Profile />
                }
            ]
        },
        {
            path: '/signin',
            element: <Signin />,
            children: [
                {
                    path: 'profile',
                    element: <Profile />
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />
}