import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Logo from '../Components/jordanLogo.png';
import Glitch from "../Components/GlitchedText/GlitchedText";

console.log(Logo);
const NavBar = () => {
    return (
        <div>
            <nav className="navbar__links">
                <NavLink to="/" className="logolink" activeClassName="active">
                    <img src={Logo} alt="Logo" className='navLogo' />
                </NavLink>
                <NavLink to="/about" className="link" activeClassName="active">
                    <Glitch text="About" id="Jordan Samson"
                        style={{ "font-size": "1rem", }} />
                </NavLink>
                <NavLink to="/works" className="link" activeClassName="active">
                    <Glitch text="works" id="Jordan Samson"
                        style={{ "font-size": "1rem"}} />
                </NavLink>
                <NavLink to="/projects" className="link" activeClassName="active">
                    <Glitch text="Projects" id="Jordan Samson"
                        style={{ "font-size": "1rem" }} />
                </NavLink>
            </nav>
        </div>
    );
}

export default NavBar;