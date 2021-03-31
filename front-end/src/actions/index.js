export const ADD_PLANT = "ADD_PLANT"
export const EDIT_PLANT = "EDIT_PLANT"
export const DELETE_PLANT = "DELETE_PLANT"

export const addPlant = (form) => {
  return({type:ADD_PLANT, payload: form})
}

export const editPlant = (form) => {
  return({type:EDIT_PLANT, payload: form})
}

export const deletePlant = (id) => {
  return({type:DELETE_PLANT, payload: id})
}