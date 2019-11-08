import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const immutable = require('redux-immutable-state-invariant').default();

const exampleInitialState = {
  sidebar: false
};

export const actionTypes = {
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
  CLOSE_SIDEBAR: 'CLOSE_SIDEBAR'
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar: !state.sidebar
      };
    case actionTypes.CLOSE_SIDEBAR:
      return {
        ...state,
        sidebar: false
      };
    default:
      return state;
  }
};

// ACTIONS
export const toggleSidebar = () => dispatch => {
  return dispatch({
    type: actionTypes.TOGGLE_SIDEBAR
  });
};

export const closeSidebar = () => dispatch => {
  return dispatch({
    type: actionTypes.CLOSE_SIDEBAR
  });
};

export const initStore = (initialState = exampleInitialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, immutable, logger))
  );
};
