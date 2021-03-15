import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import './styles/tailwind.css';
import * as serviceWorker from './serviceWorker';
import Auth0ProviderWithHistory from './auth0-provider-with-history';
import MoviesReducer from './store/reducers/MoviesReducer';
import MovieReducer from './store/reducers/MovieReducer';
import UserReducer from './store/reducers/UserReducer';
import FavoritesReducer from './store/reducers/FavoritesReducer';
import SeenReducer from './store/reducers/SeenMoviesReducer';

// Redux devotools Google chrome extension
let composeEnhancers = null;
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}

// Combining all reducers
const rootreducer = combineReducers({
  movies: MoviesReducer,
  movie: MovieReducer,
  user: UserReducer,
  favorites: FavoritesReducer,
  seen: SeenReducer,
});

const store = createStore(
  rootreducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
