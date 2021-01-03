// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_FETCHED, WAITING_FETCH, UPDATE_INPUT, UPDATE_EXPENSES } from '../actions';

const initialState = {
  currencies: ['empty'],
  isFetching: false,
  exchangeRates: {},
  total: 0,
  value: 0,
  description: '',
  currency: '',
  method: '',
  tag: '',
  id: 0,
  expenses: [],
}

function wallet(state = initialState, action) {
  switch(action.type) {
  case WAITING_FETCH:
    return { ...state, isFetching: true };
  case GET_FETCHED:
    delete action.value.USDT;
    return {
      ...state,
      isFetching: false,
      exchangeRates: { ...action.value },
      currencies: Object.keys(action.value),
    };
  case UPDATE_INPUT:
    const { name, value } = action.value;
    return { ...state, [name]: value };
  case UPDATE_EXPENSES:
    return {
      ...state,
      expenses: [ {
        ...state.expenses,
        ...state.id + 1,
        ...state.value,
        ...state.description,
        ...state.currency,
        ...state.method,
        ...state.tag,
        ...state.exchangeRates,
      } ] }
  default:
    return state;
  }
}

export default wallet;
