export const FETCH_BEERS_SUCCESS = "FETCH_BEERS_SUCCESS";
export const FETCH_BEERS_FAILURE = "FETCH_BEERS_FAILURE";
export const FETCH_BEERS_LOADING = "FETCH_BEERS_LOADING";
export const CURRENT_PAGE = "CURRENT_PAGE";
export const ADD_TO_CART = "ADD_TO_CART";

export const fetchBeersLoading = payload => ({
  type: FETCH_BEERS_LOADING,
  payload
});

export const fetchBeersSuccess = payload => ({
  type: FETCH_BEERS_SUCCESS,
  payload
});

export const fetchBeersFailure = payload => ({
  type: FETCH_BEERS_FAILURE,
  payload
});

export const currentPageAction = payload => ({
  type: CURRENT_PAGE,
  payload
});
export const addToCartAction = payload => ({
  type: ADD_TO_CART,
  payload
});

export function fetchBeers() {
  return dispatch => {
    dispatch(fetchBeersLoading(true));
    return fetch("https://api.punkapi.com/v2/beers?per_page=10")
      .then(response => response.json())
      .then(data => {
        dispatch(fetchBeersLoading(false));
        dispatch(fetchBeersSuccess(data));
      })
      .catch(error => dispatch(fetchBeersFailure(error)));
  };
}

export function fetchMoreBeers(pageNumber) {
  return dispatch => {
    dispatch(fetchBeersLoading(true));
    return fetch(
      `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=10`
    )
      .then(response => response.json())
      .then(data => {
        dispatch(fetchBeersLoading(false));
        dispatch(fetchBeersSuccess(data));
        dispatch(currentPageAction(pageNumber));
      })
      .catch(error => dispatch(fetchBeersFailure(error)));
  };
}
