const initialState = [];

const fetchCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      return action.payload
    default:
      return state;    
  }
}

export default fetchCountriesReducer;