import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Nav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
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
`

export default Navbar;