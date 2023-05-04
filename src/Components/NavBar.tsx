import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css";

import Logo from '../Components/jordanLogo.png';
import Resume from "../Data/JordanSamsonResume.pdf";

import { UilBars } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'



const NavBar = () => {
    const [navActive, SetnavActive] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    var button;
    if (navActive) {
        button = <UilTimes size="2rem" />
    } else {
        button = <UilBars size="2rem" />
    }


    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShow(false);
            } else { 
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <nav className={show ? "navbar__links ": "navbar__links hide-nav"} id='navMenu'>
            <NavLink to="/" className={"logolink"} activeClassname='active'>
                <img src={Logo} alt="Logo" className='navLogo' />
            </NavLink>
            <div className='links__list'>
                <NavLink to="/about" className="link" activeClassname="active">
                    <div><span>01. </span>About</div>
                </NavLink>
                <NavLink to="/projects" className="link" activeClassname="active">
                    <div><span>02. </span>Projects</div>
                </NavLink>
                <NavLink to="/contacts" className="link" activeClassname="active">
                    {/* <Glitch text="Projects" id="Jordan Samson"
                        style={{ "font-size": "1rem" }} /> */}
                    <div><span>03. </span>Contact</div>
                </NavLink>
                <a href={Resume} target="_blank">
                    <button className="resume__button">Resume</button>
                </a>
            </div>
            <div className='hamburger__menu' onClick={() => SetnavActive(!navActive)}>
                {button}
            </div>
            <div className={navActive ? "side-nav active" : "side-nav inactive"} >
                <div className='side-nav__links'>
                    <NavLink to="/about" className="link" activeClassname="active">
                        <div><span>01. </span>About</div>
                    </NavLink>
                    <NavLink to="/projects" className="link" activeClassname="active">
                        <div><span>02. </span>Projects</div>
                    </NavLink>
                    <NavLink to="/contacts" className="link" activeClassname="active">
                        <div><span>03. </span>Contact</div>
                    </NavLink>
                    <a href={Resume} target="_blank">
                        <button className="resume__button">Resume</button>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;