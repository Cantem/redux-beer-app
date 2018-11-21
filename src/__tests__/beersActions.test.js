import * as actions from "../actions/beersActions";
import * as types from "../actions/beersActions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  it("should create an action that is loading spinner", () => {
    const payload = true;
    const expectedAction = {
      type: types.FETCH_BEERS_LOADING,
      payload
    };
    expect(actions.fetchBeersLoading(payload)).toEqual(expectedAction);
  });
});

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_BEERS_SUCCESS when fetching data has been done', () => {
    fetchMock.getOnce('/beers', {
      body: { beers: ['a beer'] },
      headers: { 'content-type': 'application/json' }
    })
​
    const expectedActions = [
      { type: types.FETCH_BEERS_LOADING },
      { type: types.FETCH_BEERS_SUCCESS, body: { beers: ['a beer'] } }
    ]
    const store = mockStore({ beers: [] })
​
    return store.dispatch(actions.fetchBeers()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
