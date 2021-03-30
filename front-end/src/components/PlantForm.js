import React, { useState, useEffect } from 'react'
import { useHistory, } from 'react-router-dom'

export default function PlantForm({ addPlant, editPlant, editing, plant }) {
  
  const [form, setForm] = useState({
    plant_type: "",
    plant_species: "",
    plant_nickname: "",
    water_freq: ""
})

const { push } = useHistory();

useEffect(() => {
    setForm({ ...plant })
    console.log(plant)
}, [plant])

const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    editing ? editPlant(plant.id, form) : addPlant(form)
    setForm({
        plant_type: "",
        plant_species: "",
        plant_nickname: "",
        water_freq: ""
    })
    push("/dashboard")
}
  
  return (
    <div>
    <form onSubmit={handleSubmit}>

      <input name="plant_type" type="text" value={form.plant_type} onChange={handleChange} placeholder="Type" />

      <input name="plant_species" type="text" value={form.plant_species} onChange={handleChange} placeholder="Species" />

      <input name="plant_nickname" type="text" value={form.plant_nickname} onChange={handleChange} placeholder="Nickname" />

      <input name="water_freq" type="text" value={form.water_freq} onChange={handleChange} placeholder="Watering Frequency" />

      <button type="submit">{editing ? "edit" : "add"}</button>

    </form>
    </div>
  )
}

