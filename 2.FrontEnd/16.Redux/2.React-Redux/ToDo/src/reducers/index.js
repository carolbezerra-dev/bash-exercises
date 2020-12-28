import { combineReducers } from 'redux';
import { ADD_TODO } from '../actions';

const INITIAL_STATE = [];

function reducerToDo(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TODO:
      return [ ...state, action.task ];
    default:
      return state;
  }
};

const rootReducer = combineReducers({ reducerToDo });

export default rootReducer;
