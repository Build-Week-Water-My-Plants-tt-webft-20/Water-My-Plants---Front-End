import plantData from '../plantData'
import {ADD_PLANT, EDIT_PLANT, DELETE_PLANT, LOADING_PLANTS} from '../actions'

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
        plantList: [...plantData, action.payload]
      })
    default:
      return state
  }
}

export default reducer