import {AxiosWithAuth} from '../utils/AxiosWithAuth'

export const GET_PLANTS = "GET_PLANTS"
export const ADD_PLANT = "ADD_PLANT"
export const EDIT_PLANT = "EDIT_PLANT"
export const DELETE_PLANT = "DELETE_PLANT"

const user_id = 2
export const getPlants = () => {
  return (dispatch => {
    AxiosWithAuth()
      .get(`/plants/user/${user_id}`)
      .then(res => {
      dispatch({type:GET_PLANTS, payload: res.data})
    })
  })
}

export const addPlant = (form) => {
  return({type:ADD_PLANT, payload: form})
}

export const editPlant = (form) => {
  return({type:EDIT_PLANT, payload: form})
}

export const deletePlant = (id) => {
  return({type:DELETE_PLANT, payload: id})
}