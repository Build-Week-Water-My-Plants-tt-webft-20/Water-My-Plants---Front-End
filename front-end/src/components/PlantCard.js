import React from 'react'
import "../components/CSS/Dashboard.css";

export default function PlantCard(props) {
  const {species, nickname, diameter, frequency, image} = props.plantDetails

  return (
    <div className="plant-card">
      <div className="card-header">
       <h2>{nickname}</h2>
       <img src={image} alt={species}/>
      </div>
      <p>{frequency}</p>
      <p>{species}</p>
      <p>{diameter}</p>
    </div>
  )
}
// test