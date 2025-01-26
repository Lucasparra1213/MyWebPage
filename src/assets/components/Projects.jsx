import React from 'react'
import '../styles/Projects.css'

const Projects = () => {
    return (
    <div className='projects-container'>
        <h1>PROJECTS</h1>
        <p>Here is a brief overview of the projects I have worked on, ranging from small personal projects to full-stack MERN applications, as well as collaborative projects. 
            My primary focus has been front-end development, where I designed and implemented user interfaces and integrated them with a back-end developed either by myself or other team member.
        </p>
        <p>
            I am always looking for new opportunities to grow and learn, so don't hesitate to reach out if you have a project you're interested in working on with me.
            Feel free to browse through my projects, or reach out if you have any questions or need further information.
        </p>
        <ul className='project-list'>
            <li className='projects'>
                <a href='https://github.com/Lucasparra1213/MyWebPage'> 
                <img  src="/Images/Lucas .2.png"/>
                </a>
                    <div className='details'>
                    <strong>Personal Website</strong>
                    <p>lucasjparra.com</p>
                    </div>
                <p>(January 2025 - Present)</p>
            </li>
            <li className='projects'>
                <a href='https://github.com/Lucasparra1213/Solo-Project'>
                <img src="/Images/CodingDojo.png"/>
                </a>
                    <div className='details'>
                    <strong>Coding Dojo Project</strong>
                    <p>Patient Management Application</p>
                    </div>
                <p>(Fall 2024 - Present)</p>
            </li>
            <li className='projects'>
                <a href='https://github.com/alexanderpn37/WLPBF'>
                <img  src="/Images/CodingDojo.png"/>
                </a>
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