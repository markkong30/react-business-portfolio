import React from 'react';
import About from '../components/About';
import Service from '../components/Service';
import Faq from '../components/Faq';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <About />
            <Service />
            <Faq />
        </motion.div>
    );
};

export default AboutUs;