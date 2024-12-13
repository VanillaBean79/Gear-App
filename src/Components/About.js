import React from 'react';
import './About.css'
import inst2 from '../images2/inst2.png'
function About() {
    return (
        <div>
            <h2>About Gear Manager</h2>
            <p>This application allows you to manage your gear collection with ease. You can add new gear, view all gear, and more!</p>
            <div className="About-image-container">
                <img src={inst2} alt="About Image" />
            </div>
        </div>
    );
}

export default About;