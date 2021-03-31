import React, {useState} from 'react'
import "../components/CSS/Dashboard.css";
import UpdatePlant from './UpdatePlant';

export default function PlantCard({plantDetails, plantList, setPlantList}) {
  const {species, nickname, diameter, frequency, image, id} = plantDetails

  const [editForm, setEditForm] = useState(false)

  const editPlant = () => {
    setEditForm(true)
  }

  const deletePlant = () => {
    setPlantList(
      plantList.filter(
        plant => plant.id !== id
      )
    )
  }

  return (
    <div>
      {!editForm && <div className="plant-card">
        <div className="card-header">
          <h2>{nickname}</h2>
          <img src={image} alt={species}/>
        </div>
        <p>{frequency}</p>
        <p>{species}</p>
        <p>{diameter}</p>

        <div className="crud-buttons">
          <div className="button" onClick={editPlant}>
            Edit
          </div>

          <div className="button" onClick={deletePlant}>
            Delete
          </div>
        </div>
      </div>}
      {editForm && <UpdatePlant
        plantDetails={plantDetails}
        plantList={plantList}
        setPlantList={setPlantList}
        setEditForm={setEditForm}
        id={id}
      />}
    </div>
  )
}