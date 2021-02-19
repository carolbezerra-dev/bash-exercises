import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { MOVE_CAR, CHANGE_SIGNAL } from './actionCreators';


const INITIAL_STATE_CARS = {
  red: true,
  blue: false,
  yellow: false,
}

function reducerCars(state = INITIAL_STATE_CARS, action) {
  switch(action.type) {
    case MOVE_CAR:
      return { ...state, [action.car]: action.side };
    default:
      return state;
  }
}

const INITIAL_STATE_SIGNAL = {
  color: 'yellow',
}

function reducerSignal(state = INITIAL_STATE_SIGNAL, action) {
  switch(action.type) {
    case CHANGE_SIGNAL:
      return { ...state, color: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ reducerCars, reducerSignal });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
