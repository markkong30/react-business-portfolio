import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MovieState } from '../movieState';
import { motion } from 'framer-motion';
import { pageAnimation, fade, go, photoAnimation, lineAnimation, slider, sliderContainer, titleAnimation, fadeWithoutDelay, fadeWorksDelay, lineAnimationDelay } from '../animation';
import { useScroll } from '../components/useScroll';


const OurWork = () => {
    const [movies, setMovies] = useState(MovieState);
    const [element, controls] = useScroll();
    const [element_1, controls_1] = useScroll();

    const FrameColor = ["#fffebf", "#ff8efb", "#8ed2ff", "#8effa0"];

    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit"
            style={{ background: '#fff' }}>
            <motion.div variants={sliderContainer}>
                {FrameColor.map((color, index) => (
                    <Frame key={index}
                        variants={slider} color={color} />
                ))}
            </motion.div>

            {movies.map((movie, index) => {
                return (
                    index == 0 ?
                        <Movie key={index}>
                            <motion.h2 variants={fadeWorksDelay}>{movie.title}</motion.h2>
                            <motion.div variants={lineAnimationDelay} className="line"></motion.div>
                            <Link to={movie.url}>
                                <Hide>
                                    <motion.img variants={photoAnimation} src={movie.mainImg} alt="" />
                                </Hide>
                            </Link>
                        </Movie>
                        :
                        <Movie key={index}
                            ref={index == 1 ? element : element_1} variants={go} animate={index == 1 ? controls : controls_1} initial="hidden">
                            <motion.h2 variants={fadeWithoutDelay}>{movie.title}</motion.h2>
                            <motion.div variants={lineAnimation} className="line"></motion.div>
                            <Link to={movie.url}>
                                <Hide>
                                    <motion.img variants={photoAnimation} src={movie.mainImg} alt="" />
                                </Hide>
                            </Link>
                        </Movie>
                )
            })}
        </Work>
    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    /* overflow: hidden; */
    padding: 5rem 10rem;

    h2 {
        padding: 1rem 0%;
    }
`

const Movie = styled(motion.div)`
    padding-bottom: 10rem;

    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

const Hide = styled.div`
    overflow: hidden;
`

const Frame = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: ${props => props.color};
    z-index: 2;
`

export default OurWork;