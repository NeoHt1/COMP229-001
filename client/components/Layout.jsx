import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
    return (
    <>
        <div id="left-layout">
            <img src='./src/images/logo.png' alt='logo' height={75} width={75}></img> 
        </div>
        <h1>My Portfolio</h1>
        <nav>
        <Link to="/">Home</Link> | <Link to="/about">About Me</Link> | <Link to="/services">Services</Link> | <Link to="/project">Project</Link> | <Link to="/contact">Contact</Link>
      </nav>
         <br/>
      <hr />
      
    </>
    
  );
}