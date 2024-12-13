import React from "react";
import './Home.css';
import instruments from '../images2/Instruments.png' 

const Home = () => {
    return(
        <div>
            <h1>My Gear Inventory</h1>
            <hr/>
            <p>This application stores all vital gear information. Upload a photo, type in the name, add a description, and the serial number for each piece of equipment that you would like to keep an inventory of for your personal records.</p>
            <div className="home-image-container">
                <img src={instruments} alt="Gear Managment" className="home-image" />
            </div>
        </div>
    )
}

export default Home