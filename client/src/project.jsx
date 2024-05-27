/*
File: project.jsx
Student: Jordan Than
ID: 301360824
Date: 05/25/24
*/
// Import external media from files
import project1 from './images/project1.png';
import project2 from './images/project2.png';
import project3 from './images/project3.png';
// Function for Project page content
export default function Project() {
    return (
        <>
            <fieldset class="project">
                <div class="container">
                    <div class="image">
                        <img src={project1} alt="project 1"></img>
                    </div>
                    <div class="text">
                        <h2>Web Interface Design Final Project</h2> 
                        <p>I'm proud that this is one of the first websites I made alone. 
                        I implemented both the knowledge I learned throughout the course and online inspiration. 
                        The idea was to make a personalized website for real estate agents with listings, contacts, and a biography of the individual.
                        The project ended up giving me a good mark and chance to display me learning.</p>
                    </div>
                </div>    
            </fieldset>
            <br></br>
            <fieldset class="project">
                <div class="container">
                    <div class="text">
                        <h2>SQL Group Project</h2> 
                        <p>This project in particular gave me a bigger role due to a smaller number of members. 
                        It allowed me to hone on my leadership skills as I led the charge in organization and planning like you would in a database.
                        As developers, we should not only focus on the code aspect but also the human part as well.</p>
                    </div>
                    <div class="image">
                        <img src={project2} alt="project 2"></img>
                    </div>
                </div>    
            </fieldset>
            <br></br>
            <fieldset class="project">
                <div class="container">
                    <div class="image">
                        <img src={project3} alt="project 3"></img>
                    </div>
                    <div class="text">
                        <h2>Personal Project</h2> 
                        <p>I've been making a personal project for myself not related to school. 
                        It's based on an anime I'm passionate about, so I made this website for it. 
                        I've used what I have learned to help me create this project. 
                        Each time I improve or add new code, it cements my learning and passion.</p>
                    </div>
                </div>    
            </fieldset>
        </>
    );
}    