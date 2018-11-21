import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import {
  loading,
  beers,
  error,
  currentPage,
  shoppingCart
} from "../reducers/beersReducer";

export default combineReducers({
  router: routerReducer,
  loading,
  beers,
  error,
  currentPage,
  shoppingCart
});
