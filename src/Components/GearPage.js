import React, { useState, useEffect } from "react"
import GearCard from './GearCard'


function GearPage() {
    const [gearData, setGearData] = useState([])
    const [loading, setLoading] = useState(true)

   useEffect(() => {
        fetch('http://localhost:3000/Gear')
          .then((response) => response.json())
          .then((data) => {
            setGearData(data)
            setLoading(false);
          })
          .catch((error) => {
            console .error('Error fetching data:', error);
            setLoading(false)
          });
      }, []);  

      return (
        <div className="GearPage">
            <h2>Gear Manager</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <ul>
                {gearData.map((gearItem) => (
                  <GearCard key={gearItem.id} gearItem={gearItem} />
                ))}
              </ul>
            )}
        </div>
    );
}

export default GearPage