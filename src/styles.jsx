import styled from "styled-components";
import { motion } from "framer-motion";

const Layout = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;

    @media (max-width: 1000px) {
        display: block;
        padding: 2rem 5rem;
        text-align: center;
    }
`

const Description = styled.div`
    flex: 1;
    padding-right: 5rem;

    h2 {
        font-weight: lighter;
    }

    @media (max-width: 1000px) {
       padding: 0;

       button {
           margin: 2rem 0rem;
       }
    }
`

const Image = styled.div`
    flex: 1;
    overflow: hidden;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }

    @media (max-width: 1000px) {
        img {
            height: 50vh;
        }
    }

    
`
const Hide = styled.div`
    overflow: hidden;
`

export { Layout, Description, Image, Hide };