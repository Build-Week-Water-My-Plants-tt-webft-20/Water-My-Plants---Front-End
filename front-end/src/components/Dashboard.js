import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PlantCard from './PlantCard'
import PlantForm from './PlantForm'
import {getPlants} from '../actions'
import "../components/CSS/Dashboard.css";

const Dashboard = (props) => {
  const { plantList, getPlants, user_id } = props
  const [displayForm, setDisplayForm] = useState(false)


  useEffect(() => {
    if (user_id) {
      getPlants(user_id)
    }
  }, [getPlants, user_id])

  const openForm = () => {
    setDisplayForm(true);
  };

  const closeForm = () => {
    setDisplayForm(false);
  };

  return (
    <div>
      {!localStorage.getItem("token")
        ? <h1 className="welcome">Please Log In to see your Dashboard</h1>
        : <div className="dashboard">

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
        </div>}
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    plantList: state.plantList,
    user_id: state.user_id
  })
}

export default connect(mapStateToProps, {getPlants})(Dashboard)