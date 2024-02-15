import React from "react";
import '../scss/style.scss';
import '../scss/_variables.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Content from '../components/Content'
import Community from '../components/Community';
import Test from '../components/test';
import AboutUs from '../components/About-Us';

export default function Home() {
    return (
        <div>
            <Nav />
            <Content />
            {/* Main Page */}
            <Community />

            {/* About Us page */}
            {/* <AboutUs /> */}

            {/* <Test /> */}
            <Footer />
        </div>
    )
}