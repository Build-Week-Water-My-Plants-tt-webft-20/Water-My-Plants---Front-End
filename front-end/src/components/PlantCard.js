import React, {useState} from 'react'
import "../components/CSS/Dashboard.css";
import UpdatePlant from './UpdatePlant';
import { connect } from 'react-redux'
import {deletePlant} from '../actions'

const PlantCard = (props) => {
  const {plantDetails, deletePlant} = props
  const {species, nickname, diameter, frequency, image, id} = plantDetails

  const [editForm, setEditForm] = useState(false)

  const editPlant = () => {
    setEditForm(true)
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

          <div className="button" onClick={() => deletePlant(id)}>
            Delete
          </div>
        </div>
      </div>}
      {editForm && <UpdatePlant
        plantDetails={plantDetails}
        setEditForm={setEditForm}
        id={id}
      />}
    </div>
  )
}

// const mapStateToProps = state => {
//   return ({
//     plantList: state.plantList
//   })
// }

export default connect(null, {deletePlant})(PlantCard)