import React from "react";
import {useLocation} from "react-router-dom";

//Import Animation
import {motion} from "framer-motion";

//Import Styles
import styled from "styled-components";

//Import Router
import {Link} from "react-router-dom";

const Nav = () => {
    const {pathname} = useLocation();
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                    <Line 
                        transition={{duration: 0.75}} 
                        initial={{width: "0%"}}
                        animate={{width: pathname === "/" ? "50%" : "0%"}} 
                    />
                </li>
                <li>
                    <Link to="/work">Our Work</Link>
                    <Line 
                        transition={{duration: 0.75}} 
                        initial={{width: "0%"}}
                        animate={{width: pathname === "/work" ? "50%" : "0%"}} 
                    />
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                    <Line 
                        transition={{duration: 0.75}} 
                        initial={{width: "0%"}}
                        animate={{width: pathname === "/contact" ? "50%" : "0%"}} 
                    />
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 5;

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
    }

    ul {
        display: flex;
        list-style-type: none;
    }

    li {
        padding-left: 10rem;
        position: relative;
    }

    #logo {
        font-size: 1.75rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }

    #logo:hover {
        color: #23D997;
        transition: all 0.75s ease;
    }

    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 1rem;
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
        }
        li {
            padding: 0;
        }
        #logo {
            display: inline-block;
            margin: 2rem
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    width: 5%;
    bottom: -80%;
    left: 60%;
    position: absolute;
    background: #23D997;
    @media (max-width: 1300px) {
        height: 0.5rem;
        left: 0%;
    }
`

export default Nav;