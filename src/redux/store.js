import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies)
  yield takeLatest('FETCH_DETAILS', fetchDetails)
}


// ***** SAGA FUNCTIONS *****

// get movies from db, set reducer with data
function* fetchAllMovies() {
  try {
    const moviesResponse = yield axios.get('/api/movies')
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    })
  } catch (error) {
    console.log('fetchAllMovies error:', error)
  }
}

// finds movie id and genre
// i/o: id / { id: __, genres: __ }
function* fetchDetails(action) {
  let id = action.payload
  try {
    const genreResponse = yield axios({
      method: 'GET',
      url: `/api/genres/${id}`
    })
    yield put({
      type: 'SET_DETAILS',
      payload: {
        id: id,
        genres: genreResponse.data
      }
    })
  }
  catch (error) {
    console.error('fetchDetails error:', error)
  }
}


// ***** MIDDLEWARE *****

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// ***** REDUCERS *****

// stores movies from db
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

// stores specific movie details
// state: { id: ___, genres: ___ }
const details = (state = {}, action) => {
  if (action.type === 'SET_DETAILS') {
    return action.payload
  }
  return state
}



// ***** STORE *****

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    details
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
