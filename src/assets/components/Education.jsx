import React from 'react'
import '../styles/Education.css'

const Education = () => {
    return (
    <div className='edu-container'>
        <h1>Education</h1>
        <p>This is the Education Block</p>
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