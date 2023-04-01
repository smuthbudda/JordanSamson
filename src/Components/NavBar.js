import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/fontawesome-free-regular'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
const NavBar = () => {
    return (
        <nav className="navbar__links">
            <NavLink to="/" className="link" activeClassName="active">
                Home
            </NavLink>
            <NavLink to="/about" className="link" activeClassName="active">
                About
            </NavLink>
            <NavLink to="/works" className="link" activeClassName="active">
                Works
            </NavLink>
            <NavLink to="/projects" className="link" activeClassName="active">
                Projects
            </NavLink>
        </nav>
    );
}
export default NavBar;