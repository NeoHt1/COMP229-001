/*
File: index.css
Student: Jordan Than
ID: 301360824
Date: 05/25/24
*/
import oop from './images/oop.png';
import code from './images/code.png';
import websiteDesign from './images/website design.png';
import ide1 from './images/ide1.png';
import ide2 from './images/ide2.jpg';
import data from './images/d&a.jpg';
import sql from './images/sql.png';
import query from './images/query.png';
import git from './images/git.png';
export default function Services() {
    return (
        <>
            <h2>What my skills offer:</h2>
            <ul>
                <li>Object-Oriented Programming Languages (C#, Python, Java, Processing)</li>
                <img src={oop} alt="oop languages" width={500} height={315.79}></img><img src={code} alt="object-oriented code" width={474.36} height={315.79}></img>
                <li>Web Development (HTML, CSS, Javascript, React)</li>
                <img src={websiteDesign} alt="web design" width={700} height={350}></img>
                <li>Integrated Development Environments (Eclipse, Visual Studio, Visual Studio Code)</li>
                <img src={ide1} alt="ide 1" width={491.13} height={400}></img><img src={ide2} alt="ide 2" width={661.05} height={400}></img>
                <li>Data Structures and Algorithms</li>
                <img src={data} alt="data strut and algorithms" width={600} height={252}></img>
                <li>Database and SQL</li>
                <img src={sql} alt="sql" width={493.02} height={400}></img><img src={query} alt="query" width={614.17} height={400}></img>
                <li>Git Version Control</li>
                <img src={git} alt="git version hub" width={900} height={455.73}></img>
            </ul>
        </>
    );
}    