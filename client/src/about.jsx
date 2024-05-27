/*
File: about.jsx
Student: Jordan Than
ID: 301360824
Date: 05/21/24
*/
// Import external media from files
import pdfFile from './resume.pdf';
import meImage from './images/me.jpg';
import exResume from './images/example resume.png';
// Function for About page content
export default function About() {
    return (
        <>
            <div id="center">
                <h2>About Me</h2>
            </div>
            <div id="left-about">
                <img src={meImage} alt="picture of me" width={400} height={533.33}></img>
            </div>
            <p>My full name is Jordan Wai-Lun Than, and I'm a Canadian-born Web Developer based in Ontario. 
            I'm a current student studying the Software Engineering Technician Program at Centennial College. 
            I started programming during high school with Scratch and Processing. 
            Ever since I have been growing my knowledge. I have tackled group projects and my role is to be a vocal member with feedback and improvements. 
            My goal after graduating is to seek further education either with university or online certificates like Google or Harvard.</p>
            <PdfLink />
        </>
    );
}    
// Function for link to Resume pdf
const PdfLink = () => {
    return (
        <div>
            <a href={pdfFile} target="_blank" rel="noopener noreferrer"><b>My Resume</b></a>
            <br/>
            <img src={exResume} alt="picture of me" width={220} height={284.71}></img>
        </div>
    );
};