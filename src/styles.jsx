import styled from "styled-components";
import { motion } from "framer-motion";

const Layout = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`

const Description = styled.div`
    flex: 1;
    padding-right: 5rem;

    h2 {
        font-weight: lighter;
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
    
`
const Hide = styled.div`
    overflow: hidden;
`

export { Layout, Description, Image, Hide };