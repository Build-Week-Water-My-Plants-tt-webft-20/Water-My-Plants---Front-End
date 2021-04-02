import axios from 'axios'
import { AxiosWithAuth } from '../utils/AxiosWithAuth'

export const SIGNUP = "SIGNUP"
export const SET_USER = "SET_USER"
export const LOGOUT = "LOGOUT"
export const GET_PLANTS = "GET_PLANTS"
export const ADD_PLANT = "ADD_PLANT"
export const EDIT_PLANT = "EDIT_PLANT"
export const DELETE_PLANT = "DELETE_PLANT"

export const signUp = (credentials) => {
  return (dispatch => {
   axios
      .post("https://water-my-plants-back-end.herokuapp.com/api/auth/register", credentials)
      .then((res) => {
        console.log(res, "res inside handleSubmit signup form");
      })
      .catch((err) => {
        console.log(err, "error in sign up form ");
      })
  })
}

export const logOut = () => {
  return ({type:LOGOUT})
}

export const setUser = (user) => {
  return({type:SET_USER, payload:user})
}

export const getPlants = (id) => {
  return (dispatch => {
    AxiosWithAuth()
      .get(`/plants/user/${id}`)
      .then(res => {
      // dispatch({type:GET_PLANTS, payload: res.data})
    })
  })
}

export const addPlant = (form) => {
  return (dispatch => {
    AxiosWithAuth()
      .post('/plants', form)
      .then(res => {
      console.log(res)
      })
      .catch(err => console.log(err))
    // dispatch({type:ADD_PLANT, payload: form})
  })
}

export const editPlant = (form) => {
  return({type:EDIT_PLANT, payload: form})
}

export const deletePlant = (id) => {
  return({type:DELETE_PLANT, payload: id})
}