import plantData from '../plantData'
import {ADD_PLANT, EDIT_PLANT, DELETE_PLANT} from '../actions'

const initialState = {
  plantList: plantData,
  token: null,
  userId: "",
  isLoggedIn: false,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ADD_PLANT):
      return ({
        ...state,
        plantList: [...state.plantList, action.payload]
      })
    case (EDIT_PLANT):
      return ({
        ...state,
        plantList: [
          state.plantList.map(plant => {
            if (`${plant.id}` === action.payload.id) {
              return action.payload;
            }
            return plant;
          })
        ]
      })
    case (DELETE_PLANT):
      return ({
        ...state,
        plantList: state.plantList.filter(
          plant => plant.id !== action.payload.id)
      })
    default:
      return state
  }
}

export default reducer