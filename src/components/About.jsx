import React from 'react';
import { Layout, Description, Image, Hide } from '../styles';
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../animation';
import Wave from './Wave';

const About = () => {


    return (
        <Layout>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnimation} >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We
                    have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} src="/img/home1.png" alt="" />
            </Image>
            <Wave />
        </Layout>
    );
};


export default About;