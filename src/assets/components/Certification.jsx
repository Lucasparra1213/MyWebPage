import React from 'react'
import '../styles/Certification.css'

const Certification = () => {
    return (
    <div className='cert-container'>
        <h1>CERTIFICATIONS</h1>
        <p>Since starting my journey in college to pursue a BS in Management Information Systems, I have always been eager to expand my knowledge in technology. 
            AI is a topic I find particularly fascinating, and I enjoy exploring it in my free time. 
            It is something I am passionate about and eager to continue learning more about.</p>
        <ul className='cert-list'>
            <li><img src="/Images/IBM.svg"/>
            <strong>Machine Learning Specialist: IBM Associate</strong>
            </li>
            <li><img src="/Images/IBM.svg"/>
            <strong>Watson Assistant Foundation</strong>
            </li>
            <li><img className='microsoft' src="/Images/Microsoft.svg"/>
            <strong>Microsoft Specialist: Excel Associate</strong>
            </li>
        </ul>
    </div>
    )
}

export default Certification