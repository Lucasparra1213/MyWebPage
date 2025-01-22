import React from 'react'
import '../styles/Projects.css'

const Projects = () => {
    return (
    <div>
        <h1>Projects</h1>
        <p>Enter Projects description here</p>
        <ul className='project-list'>
            <li className='projects'>
                <img  src="/Images/Lucas .2.png"/>
                    <div className='details'>
                    <strong>Personal Website</strong>
                    <p>lucasjparra.com</p>
                    </div>
                <p>(January 2025 - Present)</p>
            </li>
            <li className='projects'>
                <img src="/Images/CodingDojo.png"/>
                <div className='details'>
                <strong>Coding Dojo Project</strong>
                <p>Patient Management Application</p>
                </div>
                <p>(Fall 2024 - Present)</p>
            </li>
            <li className='projects'>
                <img  src="/Images/CodingDojo.png"/>
                    <div className='details'>
                    <strong>Coding Dojo Collaborative Project</strong>
                    <p>Paintball Field Reservation Management</p>
                    </div>
                <p>(Fall 2024 - Present)</p>
            </li>

        </ul>
    </div>  
)
}

export default Projects