import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Logo from '../Components/jordanLogo.png';
import Glitch from "../Components/GlitchedText/GlitchedText";
import Resume from "../Data/JordanSamsonResume.pdf";
import { UilBars } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
const NavBar = () => {
    const [navActive, SetnavActive] = useState(false);
    var button;
    if (navActive) {
        button = <UilTimes size="2rem" />
    } else {
        button = <UilBars size="2rem" />
    }
    // if (!navActive) {
    //     var navMenu = document.getElementById('navMenu');
    //     window.addEventListener('click', function (event) {
    //         if (outsideClick(event, navMenu)) {
    //             SetnavActive(false);
    //         } else {
    //             SetnavActive(true);
    //         }
    //     });
    // }
    return (
        <nav className="navbar__links" id='navMenu'>
            <NavLink to="/" className="logolink" activeClassName="active">
                <img src={Logo} alt="Logo" className='navLogo' />
            </NavLink>
            <div className='links__list'>
                <NavLink to="/about" className="link" activeClassName="active">
                    <div><span>01. </span>About</div>
                </NavLink>
                <NavLink to="/projects" className="link" activeClassName="active">
                    <div><span>02. </span>Projects</div>
                </NavLink>
                <NavLink to="/contacts" className="link" activeClassName="active">
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
                    <NavLink to="/about" className="link" activeClassName="active">
                        <div><span>01. </span>About</div>
                    </NavLink>
                    <NavLink to="/projects" className="link" activeClassName="active">
                        <div><span>02. </span>Projects</div>
                    </NavLink>
                    <NavLink to="/contacts" className="link" activeClassName="active">
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


function outsideClick(event, notelem) {
    var clickedOut = true, i, len = notelem.length;
    for (i = 0; i < len; i++) {
        if (event.target == notelem[i] || notelem[i].contains(event.target)) {
            clickedOut = false;
        }
    }
    if (clickedOut) return true;
    else return false;
}



export default NavBar;