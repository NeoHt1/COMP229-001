/*
File: contact.jsx
Student: Jordan Than
ID: 301360824
Date: 05/21/24
*/
import { Link } from 'react-router-dom';
export default function Contact() {
    return (
        <>
            <div id="center">
                <h2>How to Contact Me</h2>
                <p>Phone Number: +1 437 249-1806 <br></br> 
                Email Address: jordanthan7@gmail.com</p>
                <h2>or Send a Message</h2>
                <form method="post">
                    <input type="text" placeholder="First Name*"></input> 
                    <input type="text" placeholder="Last Name*"></input> 
                    <br/>
                    <input type="number" placeholder="Contact Number*"></input>
                    <br/>
                    <input type="email" placeholder="Email Address"></input>
                    <br/>
                    <textarea type="text" placeholder="Message*" rows="4" cols="30"></textarea>
                    <br/>
                    <input type="submit"></input>
                </form>
                <HomeLink/>
            </div>
        </>
    );
}
const HomeLink = () => {
    return (
        <div>
            <a href="/" target="_self" rel="noopener noreferrer"><b>Go Back Home</b></a>
        </div>
    );
};