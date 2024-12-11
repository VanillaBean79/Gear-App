import React, { useState, useEffect } from 'react'

function GearForm(){
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

        if (!formData.name || !formData.description || !formData.serial || !formData.image) {
            setStatus('Please fill out all fields.')
            return
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
        <div>
        
        </div>
    )
}

export default GearForm 