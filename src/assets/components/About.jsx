import React from 'react'
import '../styles/About.css'

const About = () => {
    return (
    <div className='about-container'>
        <h1>ABOUT </h1>
        <p className='text'>Hi! My name is Lucas. I am a fresh bootcamp graduate with a bachelor's degree in Management Information Systems looking to jumpstart his career as a UI developer. 
        I strongly appreciate a good UI can uplift a company's brand and create a stronger engagement with it's users.</p>
        <p>During my studies, I gained experience in React and CSS as the main tools for front-end development, but I am always looking to learn new technologies that can enhance my skill repertoire</p>
            <h1>MY SKILLS</h1>
        <div className='skills-container'>
            <div className='javaScript'>
                <img src='/Images/JavaScript logo.png'></img>
                <h2>JavaScript</h2>
            </div>
            <div className='react'>
                <img src='/Images/React logo.png'></img>
                <h2>React</h2>
            </div>
            <div className='css'>
                <img src='/Images/CSS.png'></img>
                <h2>CSS</h2>
            </div>
            <div className='html'>
                <img src='/Images/HTML logo.png'></img>
                <h2>HTML</h2>
            </div>
            <div className='mongoDB'>
                <img src='/Images/MongoDB logo.png'></img>
                <h2>MongoDB</h2>
            </div>
            <div className='node'>
                <img src='/Images/NodeJs logo.png'></img>
                <h2>NodeJS</h2>
            </div>

        </div>
    </div>
)
}

export default About