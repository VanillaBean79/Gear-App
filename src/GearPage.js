import React, { useState, useEffect } from "react"


function GearPage() {
    const [gearData, setGearData] = useState([])
    const [loading, setLoading] = useState(true)

   useEffect(() => {
        fetch('http://localhost:3001/Gear')
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console .error('Error fetching data:', error);
          });
      }, []);  

    return (
        <div className="GearPage">
            Gear Manager
        </div>
    )
}

export default GearPage