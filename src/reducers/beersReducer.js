import {
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_FAILURE,
  FETCH_BEERS_LOADING,
  CURRENT_PAGE,
  ADD_TO_CART
} from "../actions/beersActions";

export function loading(state = true, action) {
  switch (action.type) {
    case FETCH_BEERS_LOADING:
      return action.payload;
    default:
      return state;
  }
}

export function beers(state = [], action) {
  switch (action.type) {
    case FETCH_BEERS_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export function error(state = false, action) {
  switch (action.type) {
    case FETCH_BEERS_FAILURE:
      return action.payload;
    default:
      return state;
  }
}

export function currentPage(state = 2, action) {
  switch (action.type) {
    case CURRENT_PAGE:
      return state + 1;
    default:
      return state;
  }
}

export function shoppingCart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
}
