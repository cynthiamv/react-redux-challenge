import fetchCountriesReducer from './fetchCountriesReducer';
import formReducer from './formReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    fetchCountries : fetchCountriesReducer,
    formReducer : formReducer
})

export default allReducers;