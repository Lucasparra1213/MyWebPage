import React from 'react'
import '../styles/Education.css'

const Education = () => {
    return (
    <div className='edu-container'>
        <h1>EDUCATION</h1>
        <p>I have always been passionate about technology, which led me to pursue a Bachelor's degree in Management Information Systems—a perfect blend of management and technology. 
            During my studies, I discovered my strong interest in coding, particularly the visual aspects of it. 
            This realization, along with a recommendation from a friend who shared his bootcamp experience, inspired me to enroll in one myself. 
            I see this as just as the stepping stone of my journey, as I am eager to enrich my knowledge in front-end development and continuously seek opportunities to learn and grow into a better developer.
        </p>
        <ul className='edu-list'>
            <li className='studies'>
                <img src="/Images/CodingDojo.png"/>
                <div className='institution'>
                <strong>Coding Dojo</strong>
                <p>Full Stack Developer Certification</p>
                </div>
                <p>(Summer 2024 - Fall 2024)</p>
            </li>
            <li className='studies'>
                <img  src="/Images/FAU.png"/>
                    <div className='institution'>
                    <strong>Florida Atlantic University</strong>
                    <p>BS in Management Information Systems</p>
                    </div>
                <p>(Spring 2024)</p>
            </li>
        </ul>
    </div>
)
}

export default Education