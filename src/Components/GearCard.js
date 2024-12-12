import React from 'react'

function GearCard({ gearItem, onDelete }){
    return(
        <div className="card" key={gearItem.id}>
            <div className="card-content">
                <h3 className="card-Title">{gearItem.name}</h3>
                <img
                    src={gearItem.image}
                    
                    className="card-image"
                />
                <p className="card-description">{gearItem.description}</p>
                <p className="card-serial">Serial #{gearItem.serial}</p>

                <button className="delete-button" onClick={() => onDelete(gearItem.id)}>
                    Delete
                </button>
            </div>

        </div>
    )
}


export default GearCard