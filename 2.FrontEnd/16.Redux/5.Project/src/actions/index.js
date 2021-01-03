// Coloque aqui suas actions
// action para Login
export const ADD_EMAIL = 'ADD_EMAIL';
export const addUserEmail = (value) => ({ type: ADD_EMAIL, value });

// ---------------------------------------------------------------------

// action para Wallet
export const GET_FETCHED = 'GET_FETCHED';
export const WAITING_FETCH = 'WAITING_FETCH';

function waitingRequest() {
  return { type: WAITING_FETCH };
}

function updateRequest(json) {
  return { type: GET_FETCHED, value: json };
}

function fetchCurrency() {
  return async (dispatch) => {
    dispatch(waitingRequest());

    const currencyRequest = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencyJson = await currencyRequest.json();
    
    dispatch(updateRequest(currencyJson));
  }
}

export const UPDATE_INPUT = 'UPDATE_INPUT';
export const updateInputValues = (input) => ({
  type: UPDATE_INPUT,
  value: input,
});

export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';
export const updateExpenses = () => ({
  type: UPDATE_EXPENSES,
});

export default fetchCurrency;
