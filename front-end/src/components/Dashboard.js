import React, {useState, useEffect} from 'react'
import PlantCard from './PlantCard'
import plantData from '../plantData'
import "../components/CSS/Dashboard.css";

const initialList = []

export default function Dashboard() {
  const [plantList, setPlantList] = useState(initialList)

  useEffect(() => {
    setPlantList(plantData)
  }, [])

  return (
    <div className="dashboard">
      <h1>My Plants</h1>
      <div className="plant-container">
        {plantList.map(plant => {
          return <PlantCard key={plant.id} plantDetails={plant}/>
        })}
      </div>
    </div>
  )
}
