import React from 'react'

export default function PlantCard(props) {
  const {type, species, nickname, diameter, frequency, image} = props.plantDetails

  return (
    <div className="plant-card">
      <h2>{nickname}</h2>
      <img src={image} alt={species}/>
      <p>{type}</p>
      <p>{species}</p>
      <p>{diameter}</p>
      <p>{frequency}</p>
    </div>
  )
}
