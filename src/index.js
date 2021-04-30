import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';
import {
  changeLoggedInState,
  setEmail,
  setUserName,
  setPetName,
  setPetBreed,
  setLocation,
} from './modules/signIn';

const store = createStore(rootReducer, composeWithDevTools());
const email = window.sessionStorage.getItem('email');
const name = window.sessionStorage.getItem('name');
const petName = window.sessionStorage.getItem('petName');
const petBreed = window.sessionStorage.getItem('petBreed');
const location = window.sessionStorage.getItem('location');

if (email && name) {
  store.dispatch(changeLoggedInState());
  store.dispatch(setEmail(email));
  store.dispatch(setUserName(name));
}

if (petName) {
  store.dispatch(setPetName(petName));
}

if (petBreed) {
  store.dispatch(setPetBreed(petBreed));
}

if (location) {
  store.dispatch(setLocation(location));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
