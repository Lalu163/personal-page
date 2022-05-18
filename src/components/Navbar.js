import React from 'react';
import "./Navbar.css"
import { Link } from "react-scroll";

function Navbar() {
    return (
        <div className="navbar">

            <ul>
                <li><Link to="about-me">Home</Link></li>
                <li><Link to="portfolio">Portfolio</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>

        </div>
    )
}

export default Navbar;