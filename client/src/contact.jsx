/*
File: contact.jsx
Student: Jordan Than
ID: 301360824
Date: 05/21/24
*/
// Import external media from files
import { Link } from 'react-router-dom';
// Function for Contact page content
export default function Contact() {
    return (
        <>
            <div id="center">
                <h2>How to Contact Me</h2>
                <p>Phone Number: +1 437 249-1806 <br></br> 
                Email Address: jordanthan7@gmail.com</p>
                <h2>or Send a Message</h2>
                <form id="contactForm">
                    <input type="text" placeholder="First Name*" id="firstName" name="firstName" required></input> 
                    <br/>
                    <input type="text" placeholder="Last Name*" id="lastName" name="lastName" required></input> 
                    <br/>
                    <input type="tel" placeholder="Contact Number*" id="contactNumber" name="contactNumber" required></input>
                    <br/>
                    <input type="email" placeholder="Email Address" id="email" name="email" required></input>
                    <br/>
                    <textarea type="text" placeholder="Message*" id="message" name="message" rows="4" cols="30" required></textarea>
                    <br/>
                    <button type="submit">Submit</button>
                    <br/><br/>
                </form>
                <HomeLink/>
            </div>
        </>
    );
}
// Function for link to Home page
const HomeLink = () => {
    return (
        <div>
            <a href="/" target="_self" rel="noopener noreferrer"><b>Go Back Home</b></a>
        </div>
    );
};
// Function to store the form data
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('contactForm');

    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Capture form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            contactNumber: document.getElementById('contactNumber').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Log form data to the console (for demonstration purposes)
        console.log('Form Data:', formData);
    });
});