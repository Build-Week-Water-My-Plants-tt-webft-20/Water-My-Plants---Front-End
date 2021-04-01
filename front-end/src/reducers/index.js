import plantData from '../plantData'
import {SIGNUP, LOGIN, LOGOUT, GET_PLANTS, ADD_PLANT, EDIT_PLANT, DELETE_PLANT} from '../actions'

const initialState = {
  plantList: plantData,
  token: null,
  user_id: "",
  user_username: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return state
    case LOGIN:
      return ({
        ...state,
        token: action.payload.token,
        user_id: action.payload.user_id,
        user_username: action.payload.user_username
      })
    case LOGOUT:
      return (initialState)
    case GET_PLANTS:
      console.log(action)
      return ({
        ...state,
        plantList: action.payload
      })
    case (ADD_PLANT):
      return ({
        ...state,
        plantList: [...state.plantList, action.payload]
      })
    case (EDIT_PLANT):
      return ({
        ...state,
        plantList: state.plantList.map(plant => {
            if (`${plant.id}` === action.payload.id) {
              return action.payload;
            }
            return plant;
          })
      })
    case (DELETE_PLANT):
      return ({
        ...state,
        plantList: state.plantList.filter(
          plant => plant.id !== action.payload)
      })
    default:
      return state
  }
}

export default reducer