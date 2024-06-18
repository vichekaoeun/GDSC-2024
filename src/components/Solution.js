import React, { useRef } from "react";
import '../scss/style.scss';
import '../scss/_variables.scss';
import Lottie from 'lottie-react';
import image from '../assets/girlsad.json';
import arrow from '../assets/arrowdown.png';
import paywall from '../assets/paywall.json';
import frame1 from '../assets/frame1.png';
import frame2 from '../assets/frame2.png';
import frame3 from '../assets/frame3.png';
import { motion, useInView } from 'framer-motion';

export default function Solution() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const inView1 = useInView(ref1, { once: true });
    const inView2 = useInView(ref2, { once: true });

    return (
        <div className=" text-center p-5">
            <h1 className="text-light display-2 custom-font">
                Reaching out is tough
            </h1>
            <span className="text-light">It takes a lot of effort for many struggling out there to reach out in the first place, not to mention
                if there's a <u className="custom-red-font">paywall</u>.
            </span>
            <motion.div className="row justify-content-center"
                ref={ref1}
                initial={{ opacity: 0, y: 50 }}
                animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <Lottie animationData={image} loop={true} style={{ width: '400px' }} className="m-5" />
            </motion.div>
            <img src={arrow} alt="arrow" className="arrow-down" style={{ height: '220px' }} />
            <motion.div className="row justify-content-center"
                ref={ref2}
                initial={{ opacity: 0, y: 50 }}
                animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <Lottie animationData={paywall} loop={true} style={{ width: '400px' }} className="m-5" />
            </motion.div>
            <div className="row p-5 mt-5 mobile-vertical-stack">
                <h1 className="text-light custom-font display-2">
                    Our Solution
                </h1>
                <div className="row mx-0">
                    <div className="col d-flex align-items-center justify-content-end">
                        <img src={frame1} alt="frame1" className="image-container" />
                    </div>
                    <div className="col row align-items-center">
                        <span className="text-light custom-font-size col-6">
                            Help people in-need share their stories and find a community.
                        </span>
                    </div>
                </div>
                <div className="row mx-0">
                    <div className="col d-flex align-items-center justify-content-end">
                        <span className="text-light custom-font-size">
                            Through opening up from our various programs<br /> people become more comfortable talking.
                        </span>
                    </div>
                    <div className="col row align-items-center">
                        <img src={frame2} alt="frame1" className=" image-container" />
                    </div>
                </div>
                <div className="row mx-0">
                    <div className="col d-flex align-items-center justify-content-end">
                        <img src={frame3} alt="frame1" className="image-container" />
                    </div>
                    <div className="col row align-items-center">
                        <span className="text-light custom-font-size col-6">
                            We forge partnerships with professional therapists & organizations to help relief payments in order to connect people with care.
                        </span>
                    </div>
                </div>
            </div>
        </div >

    )
}