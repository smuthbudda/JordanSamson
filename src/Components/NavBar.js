import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="nav-body">
            <div className="nav-links">
                <Link to="/"><h1>Jordan Samson</h1></Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
            </div>
        </nav>
    );
}

export default NavBar;