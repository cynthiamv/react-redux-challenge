import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import initState from './redux/reducers/formReducer';
import allReducers from './redux/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage'


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore(allReducers, {
  ...initState,
  ...persistedState
}, applyMiddleware(thunk));

store.subscribe(() => {
  saveState({
    formReducer: store.getState().formReducer
  });
});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);