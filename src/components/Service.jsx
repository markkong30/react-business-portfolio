import React from 'react';
import styled from 'styled-components';
import { Layout, Description, Image, Hide } from '../styles';
import { fadeWithoutDelay } from '../animation';
import { useScroll } from './useScroll';


const Service = () => {
    const [element, controls] = useScroll();

    return (
        <Services variants={fadeWithoutDelay} animate={controls} initial="hidden" ref={element}>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src="/img/clock.svg" alt="" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src="/img/teamwork.svg" alt="" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src="/img/diaphragm.svg" alt="" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src="/img/money.svg" alt="" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src="/img/home2.png" alt="" />
            </Image>
        </Services>
    );
};

const Services = styled(Layout)`

    h2 {
        padding-bottom: 5rem;
    }

    p {
        width: 70%;
        padding: 2rem 0 4rem 0;
    }

`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;

`

const Card = styled.div`
    flex-basis: 50%;

    .icon {
        display: flex;
        align-items: center;

        h3 {
            margin-left: 1rem;
            background-color: white;
            color: black;
            padding: 1rem;
            border-radius: 5px;
        }
        @media (max-width: 1000px) {
        justify-content: center;
    }

    }
`

export default Service;