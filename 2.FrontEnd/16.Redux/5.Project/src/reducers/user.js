// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_EMAIL } from '../actions';

const INITIAL_STATE = {
    email: '',
};
// pode chamar o email direto porque o estado global vai ficar como user: { email: }

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EMAIL:
    return { ...state, email: action.value };
  default:
    return state;
  }
}

export default user;
