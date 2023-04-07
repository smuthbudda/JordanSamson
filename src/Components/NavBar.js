import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Logo from '../Components/jordanLogo.png';
import Glitch from "../Components/GlitchedText/GlitchedText";
import Resume from "../Data/JordanSamsonResume.pdf";


const NavBar = () => {

    return (
        <nav className="navbar__links">
            <NavLink to="/" className="logolink" activeClassName="active">
                <img src={Logo} alt="Logo" className='navLogo' />
            </NavLink>
            <div className='links__list'>
                <NavLink to="/about" className="link" activeClassName="active">
                    {/* <Glitch text="About" id="Jordan Samson"
                        style={{ "font-size": "1rem", }} /> */}
                    <div><span>01. </span>About</div>
                </NavLink>
                <NavLink to="/projects" className="link" activeClassName="active">
                    {/* <Glitch text="works" id="Jordan Samson"
                        style={{ "font-size": "1rem" }} /> */}
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
        </nav>
    );
}






export default NavBar;