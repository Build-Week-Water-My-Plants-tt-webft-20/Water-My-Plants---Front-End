import plantData from '../plantData'

const initialState = {
  plants: plantData,
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer