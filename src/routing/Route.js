import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Sponsors from "../pages/Sponsors";
import Terms from "../pages/Terms";
import Partners from "../pages/Partners";

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
    ]);
    return <RouterProvider router={router} />
}