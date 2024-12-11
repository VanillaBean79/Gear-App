import React from 'react'

function GearCard( { gearItem }){
    return(
        <div className="card" key={gearItem.id}>
            <div className="card-content">
                <h3 className="card-Title">{gearItem.name}</h3>
                <img
                    src={gearItem.image}
                    alt={gearItem.name}
                    className="card-image"
                />
                <p className="card-description">{gearItem.description}</p>
                <p className="card-serial">Serial #{gearItem.serial}</p>
            </div>

        </div>
    )
}


export default GearCard