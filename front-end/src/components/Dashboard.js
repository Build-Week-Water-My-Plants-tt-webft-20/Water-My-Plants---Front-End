import React, {useState, useEffect} from 'react'
import PlantCard from './PlantCard'
import plantData from '../plantData'
import PlantForm from './PlantForm'
import "../components/CSS/Dashboard.css";

const initialList = []

export default function Dashboard() {
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
          return <PlantCard key={plant.id} plantDetails={plant}/>
        })}
      </div>

      {!displayForm && <div className="button" onClick={openForm}>
        Add Plant
      </div>}

      {displayForm && <div className="button" onClick={closeForm}>
        Close
      </div>}

      {displayForm &&
        <PlantForm />}
    </div>
  )
}
