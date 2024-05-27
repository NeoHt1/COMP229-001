/*
File: layout.jsx
Student: Jordan Than
ID: 301360824
Date: 05/21/24
*/
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/images/logo.png';
// Function for Layout of website
export default function Layout() {
    return (
    <>
        <div id="left-layout">
            <img src={logo} alt='logo' height={75} width={75}></img> 
        </div>
        <h1>My Portfolio</h1>
        <nav>
            <Link to="/">Home</Link> | <Link to="/about">About Me</Link> | <Link to="/services">Services</Link> | <Link to="/project">Project</Link> | <Link to="/contact">Contact</Link>
        </nav>
        <br/><br/>
        <hr/>
    </>
    );
}