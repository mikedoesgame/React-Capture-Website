import React from "react";

//Import Images
import home1 from "../img/home1.png";

//Import Animations
import {motion} from "framer-motion";
import {titleAnim, fade, photoAnim} from "../animation";
import Wave from "./Wave";

//Import Styles
import styled from "styled-components";
import {About, Description, Image, Hide} from "../styles";

const AboutSection = () => {
    return(
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span>
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            come true.
                        </motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography or videography ideas that you have. We have professionals with amazing skills
                </motion.p>
                <motion.button variants={fade}>
                    Contact Us
                </motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="Man with Camera"/>
            </Image>
            <Wave />
        </About>
    );
}

export default AboutSection;

