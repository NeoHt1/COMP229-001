/*
File: Home.jsx
Student: Jordan Than
ID: 301360824
Date: 05/22/24
*/
import { Link } from 'react-router-dom';
export default function Home() {
    return ( 
        <>
        <main>
            <h3>Welcome to my Portfolio website! I hope by the end you get to know me better.</h3>
            <h2>Mission Statement:</h2>
            <p>My mission as a programmer is to output a consistent performance equally motivated and passionate in my projects.
            I'll be flexible and adaptive to my fellow co workers when needed.
            I strive to produce high-quality, and robust software that enhances the user epxerience.
            My solutions to problems will be creative, reliable, scalable, and user-friendly.
            To both empower individual clients and business with my software.</p>
            <AboutLink />
        </main>
        </>
    );
}
const AboutLink = () => {
    return (
        <div>
            <a href="/about" target="_self" rel="noopener noreferrer"><b>Click Here To Learn More About Me</b></a>
        </div>
    );
};