export const fetchCountries = () => {
  return async(dispatch, getState) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`)
    const data = await response.json();
    dispatch({
      type: "FETCH_COUNTRIES",
      payload: data,
    })
  }
}

export const addNewUser = (userName, userCountry, userBirthday, userAge) => {
  return (dispatch, getState) => {
      
    dispatch({
      type: "ADD_USER",
      payload: {
        name: userName,
        country: userCountry,
        birthday: userBirthday,
        age: userAge
      }
    })
  
  }
}