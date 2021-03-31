export const ADD_PLANT = "ADD_PLANT"
export const EDIT_PLANT = "EDIT_PLANT"
export const DELETE_PLANT = "DELETE_PLANT"
export const LOADING_PLANTS = "LOADING_PLANTS"

// Action to get plants

export const addPlant = (form) => {
  return({type:ADD_PLANT, payload: form})
}