import React, { useState, useEffect } from 'react'
import './gearForm.css'

function GearForm( { addGearItem }){
    const [formData, setFormData] = useState({
        image: '',
        name: '',
        description: '',
        serial: ''
      })

      const [ status, setStatus] = useState('')

      const handleChange = (e) => {
            const { name, value } = e.target
            setFormData({
                ...formData,
                [name]: value 
            })
        }

      const handleSubmit = (e) => {
        e.preventDefault()

       const newGear = {
        name: formData.name,
        image: formData.image,
        description: formData.description,
        serial: formData.serial
       }

        fetch('http://localhost:3000/Gear', {
            method:"POST",
            header: {
                "Content-type" : "application.json"
            },
            body: JSON.stringify(formData)
        })
            .then((r)=>r.json())
            .then((data)=> {
                setStatus('Gear item created.')

                setFormData({
                    image: '',
                    name: '',
                    description: '',
                    serial: ''
                })
            })
            .catch((error) => {
                setStatus('Error creating gear.')
                console.log('Error:', error)
            })
     }
    
    return(
        <div className="GearForm">
            <h2>Create New Gear Item</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="image">Image URL:</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="upload image"
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Gear Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter gear name"
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="name"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter gear description."
                        />
                </div>

                <div className='form-group'>
                    <label htmlFor="serial">Serial Number:</label>
                    <input
                        type="text"
                        id="serial"
                        name="serial"
                        value={formData.serial}
                        onChange={handleChange}
                        placholder="Enter serial number"
                        />
                </div>
                <button type='submit'>Submit</button>
            </form>
            {status && <p className="status">{status}</p>}
        </div>
    )
}

export default GearForm 