import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PlantCard from './PlantCard'
import plantData from '../plantData'
import PlantForm from './PlantForm'
import "../components/CSS/Dashboard.css";

const initialList = []

const Dashboard = () => {
  const [plantList, setPlantList] = useState(initialList)
  const [displayForm, setDisplayForm] = useState(false)

  useEffect(() => {
    setPlantList(plantData)
  }, [])

  const openForm = () => {
    setDisplayForm(true)
  }

  const closeForm = () => {
    setDisplayForm(false)
  }

  return (
    <div className="dashboard">
      <h1>My Plants</h1>
      <div className="plant-container">
        {plantList.map(plant => {
          return <PlantCard
            key={plant.id}
            plantDetails={plant}
            plantList={plantList}
            setPlantList={setPlantList}
          />
        })}
      </div>

      {!displayForm && <div className="form-button" onClick={openForm}>
        Add Plant
      </div>}

      {displayForm && <div className="form-button" onClick={closeForm}>
        Close
      </div>}

      {displayForm &&
        <PlantForm 
          setDisplayForm={setDisplayForm}
        />}
    </div>
  )
}

export default connect(null, null)(Dashboard)