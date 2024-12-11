import React, { useState, useEffect } from "react"


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
            Gear Manager
            <ul>
                {gearData.map((gearItem)=> (
                    <div className="card" key={gearItem.id}>
                        <div className="card-content">
                        <h3 className="card-title">{gearItem.name}</h3>
                            <img 
                              src={gearItem.image}
                              alt={gearItem.name}
                              className="card-image"
                              />
                           <p className="card-description">{gearItem.description}</p>
                          <p className="card-serial">Serial #{gearItem.serial}</p>
                      </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default GearPage