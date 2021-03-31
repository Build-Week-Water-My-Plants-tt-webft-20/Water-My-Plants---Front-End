import React, { useState } from 'react'
import "../components/CSS/Dashboard.css";
import { connect } from 'react-redux'
import {editPlant} from '../actions'

const initialForm = {
  id: "",
  frequency: "",
  species: "",
  nickname: "",
  diameter: "",
  image: ""
}

const UpdatePlant = (props) => {
  const {setEditForm, id, editPlant, plantList } = props
  
  const [form, setForm] = useState(plantList[id])

  const handleChange = (e) => {
      setForm({
        ...form,
        id: id,
        [e.target.name]: e.target.value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editPlant(form)
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

const mapStateToProps = state => {
  return ({
    plantList: state.plantList
  })
}

export default connect(mapStateToProps, {editPlant})(UpdatePlant)