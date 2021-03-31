import React, { useState } from 'react'
import { connect } from 'react-redux'
import PlantCard from './PlantCard'
import PlantForm from './PlantForm'
import "../components/CSS/Dashboard.css";

const Dashboard = (props) => {
  const {plantList} = props
  const [displayForm, setDisplayForm] = useState(false)

  const openForm = () => {
    setDisplayForm(true);
  };

  const closeForm = () => {
    setDisplayForm(false);
  };

  return (
    <div className="dashboard">
      <h1>My Plants </h1>
    
      {!displayForm && (
        <div className="form-button" onClick={openForm}>
          Add Plant
        </div>
      )}

      {displayForm && (
        <div className="form-button" onClick={closeForm}>
          Close
        </div>
      )}

      {displayForm && (
        <PlantForm
          setDisplayForm={setDisplayForm}
          plantList={plantList}
        />
      )}
      {/* plant card */}
      <div className="main-container">
        <div className="plant-container">
          {plantList.map((plant) => {
            return (
              <PlantCard
                key={plant.id}
                plantDetails={plant}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    plantList: state.plantList
  })
}

export default connect(mapStateToProps, null)(Dashboard)