import axios from 'axios'
import { AxiosWithAuth } from '../utils/AxiosWithAuth'
import {useHistory} from 'react-router-dom'

export const SIGNUP = "SIGNUP"
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const ERROR = "ERROR"
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

export const LogIn = (credentials) => {
  const {push} = useHistory()
  return (dispatch => {
    axios
    .post("https://water-my-plants-back-end.herokuapp.com/api/auth/login", credentials)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      console.log('Login in response: ', res.data)
    })
    .then(() => {
      push("/dashboard");
    })

    .catch((err) => {
      console.log(err.response.data.message)
      dispatch(error(err))
    });
  })
}

export const logOut = () => {
  return ({type:LOGOUT})
}

export const error = (err) => {
  return({type:ERROR, payload:err})
}

export const getPlants = (id) => {
  return (dispatch => {
    AxiosWithAuth()
      .get(`/plants/user/${id}`)
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