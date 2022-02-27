import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const { pathname } = useLocation();
    const windowWidth = window.innerWidth;

    return (
        <Nav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                    {pathname == '/' &&
                        <Line animate={{ width: windowWidth < 600 ? '100%' : '50%' }} initial={{ width: 0 }} transition={{ duration: 1 }} />
                    }
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                    {pathname.includes('/work') &&
                        <Line animate={{ width: windowWidth < 600 ? '100%' : '50%' }} initial={{ width: 0 }} transition={{ duration: 1 }} />
                    }

                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                    {pathname == '/contact' &&
                        <Line animate={{ width: windowWidth < 600 ? '100%' : '50%' }} initial={{ width: 0 }} transition={{ duration: 1 }} />
                    }

                </li>
            </ul>
        </Nav>
    );
};

const Nav = styled.nav`
    position: sticky;
    top: 0;
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 8vw;
    background-color: #282828;
    z-index: 10;

    a {
        color: white;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;
    }

    li {
        position: relative;
        padding-left: 5rem;
    }

    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        padding: 2rem 1rem;
        #logo {
            display: inline-block;
            margin: 1rem;
        }
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
            li {
                padding: 0;
            }
        }
    }
`

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 50%;

    @media (max-width: 600px) {
        left: 0;
        width: 100%;
    }
`

export default Navbar;