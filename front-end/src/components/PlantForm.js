import React, { useState, useEffect } from 'react'
import { useHistory, } from 'react-router-dom'
import "../components/CSS/Dashboard.css";

export default function PlantForm({ addPlant, editPlant, editing, plant }) {
  
  const [form, setForm] = useState({
    frequency: "",
    species: "",
    nickname: "",
    diameter: "",
    image: ""
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
      frequency: "",
      species: "",
      nickname: "",
      diameter: "",
      image: ""
    })
    push("/dashboard")
}
  
  return (
    <div className="plant-form">
      <form onSubmit={handleSubmit}>

        <input name="frequency" type="text" value={form.frequency} onChange={handleChange} placeholder="Frequency" />

        <input name="species" type="text" value={form.species} onChange={handleChange} placeholder="Species" />

        <input name="nickname" type="text" value={form.nickname} onChange={handleChange} placeholder="Nickname" />

        <input name="diameter" type="text" value={form.diameter} onChange={handleChange} placeholder="Diameter" />

        <input name="image" type="text" value={form.image} onChange={handleChange} placeholder="Image URL" />

        <button className="add" type="submit">{editing ? "edit" : "add"}</button>

      </form>
    </div>
  )
}

