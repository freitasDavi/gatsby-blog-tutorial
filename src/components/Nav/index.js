import React from 'react';
import './nav.css'
import { Link } from 'gatsby';

const Nav = () => (
    <nav className="nav" >
        <ul className="nav-list" >
            <li className="nav-list-item">
                <Link activeStyle={{ borderBottom: "2px solid #3d2e91" }} to="/">Home</Link>
            </li>
            <li className="nav-list-item">
                <Link activeStyle={{ borderBottom: "2px solid #3d2e91" }} to="/about">About</Link>
            </li >
            <li className="nav-list-item">
                <Link activeStyle={{ borderBottom: "2px solid #3d2e91" }} to="/blog">Blog</Link>
            </li>
            <li className="nav-list-item">
                <Link activeStyle={{ borderBottom: "2px solid #3d2e91" }} to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;