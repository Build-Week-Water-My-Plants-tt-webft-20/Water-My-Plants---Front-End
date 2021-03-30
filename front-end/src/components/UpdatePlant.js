import React, { useState } from 'react'
import "../components/CSS/Dashboard.css";
// import plantData from '../plantData';

const initialForm = {
  frequency: "",
  species: "",
  nickname: "",
  diameter: "",
  image: ""
}

export default function UpdatePlant({ plantList, setPlantList, plantDetails, setEditForm, id}) {
  
  const [form, setForm] = useState(plantDetails)

  const handleChange = (e) => {
      setForm({
          ...form,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    setPlantList(
      plantList.map(plant => {
        if (`${plant.id}` === id) {
          return form;
        }
        return plant;
      })
    )
    setForm(initialForm)
    setEditForm(false)
  }
  
  return (
    <div className="update-form">
      <form onSubmit={handleSubmit}>

        <input name="frequency" type="text" value={form.frequency} onChange={handleChange} placeholder="Frequency" />

        <input name="species" type="text" value={form.species} onChange={handleChange} placeholder="Species" />

        <input name="nickname" type="text" value={form.nickname} onChange={handleChange} placeholder="Nickname" />

        <input name="diameter" type="text" value={form.diameter} onChange={handleChange} placeholder="Diameter" />

        <input name="image" type="text" value={form.image} onChange={handleChange} placeholder="Image URL" />

        <button className="add" type="submit">Update</button>

      </form>
    </div>
  )
}

