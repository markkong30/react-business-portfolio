import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }

    html {
        /* overflow-x: hidden; */
        @media (max-width: 1700px) {
            font-size: 75%;
        }

    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        outline: none;
        color: white;
        transition: all 0.5s ease-in-out;

        &:hover {
            background: #23d997;
            color: white;
        }

    }


        h2 {
            font-weight: lighter;
            font-size: 3rem;            
        }

        h3 {
            color: white;
        }

        h4 {
            font-weight: bold;
        }
        
        a {
            font-size: 1.1rem;
        }

        span {
            font-weight: bold;
            color: #23d997;
        }

        p {
            padding: 3rem 0rem;
            color: white;
            font-size: 1.4rem;
            line-height: 1.5;
        }
`

export default GlobalStyle;