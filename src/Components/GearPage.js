import React, { useState, useEffect } from "react"
import GearCard from './GearCard'
import GearForm from './GearForm'

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

      const addGearItem = (newGear) => {
        setGearData((prevGearData) => [...prevGearData, newGear])
      }

      const deleteGearItem = (id) => {
        fetch(`http://localhost:3000/Gear/${id}`, {
            method: 'DELETE',
        })
        .then((response) => response.json())
        .then((data) => { 
                setGearData((prevGearData) => prevGearData.filter((gearItem) => gearItem.id !== id));
            })
        
        .catch((error) => {
            console.error('Error deleting gear item:', error);
        });
    };
      

      return (
        <div className="GearPage">
            <h2>Gear Manager</h2>
            <GearForm addGearItem={addGearItem} />
            {loading ? (
                <p>Loading...</p>
            ) : (
                  <ul>
                    {gearData.map((gearItem) => (
                    <GearCard key={gearItem.id} 
                              gearItem={gearItem}
                              onDelete={deleteGearItem} 
                              />
                      ))}
                   </ul>
            )}
        </div>
    );
}

export default GearPage