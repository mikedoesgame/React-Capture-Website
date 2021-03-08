import React from "react";

//Import Components
import Toggle from "./Toggle";

//Import Animations
import {AnimateSharedLayout} from "framer-motion";
import {useScroll} from "./useScroll";
import {scrollReveal} from "../animation";

//Import Styles
import styled from "styled-components";
import {About} from "../styles";

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq
        variants={scrollReveal} 
        animate={controls}
        ref={element}
        initial="hidden" 
        >
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="What Services Do We Offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, eum?</p>
                    </div>
                </Toggle>
                <Toggle title="What's Our Schedule?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, eum?</p>
                    </div>
                </Toggle>
                <Toggle title="What Payment Methods?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, eum?</p>
                    </div>
                </Toggle>
                <Toggle title="How Do I Start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, eum?</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
}

const Faq = styled(About)`
    display: block;

    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #23D997;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;