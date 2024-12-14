import React, { useState } from 'react'
import './gearForm.css'

function GearForm({addGearItem}){
    const [formData, setFormData] = useState({
        image: '',
        name: '',
        description: '',
        serial: ''
      })

      const [ status, setStatus] = useState('')
      const [loading, setLoading] = useState(false)

      const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
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
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(newGear)
        })
            .then((r)=>r.json())
            .then((addedGear)=> {
                addGearItem(addedGear)
                setStatus('Gear item created.')
                setLoading(true)
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
                    <label htmlFor="image">Image:</label>
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
                        id="description"
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
                        placeholder="Enter serial number"
                        />
                </div>
                <button type='submit' disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
            {status && <p className="status">{status}</p>}
        </div>
    )
}

export default GearForm 