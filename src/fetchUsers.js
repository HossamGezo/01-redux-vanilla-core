/**
 * ⚠️ DEPENDENCY VERSIONS NOTE ⚠️
 * 
 * We are intentionally using specific older versions for this project:
 * - redux: ^4.1.2
 * - redux-thunk: ^2.4.2
 * 
 * REASON:
 * 1. Learning Core Concepts: Modern Redux (v5+) deprecates the original `createStore` method 
 *    in favor of Redux Toolkit. Since this project aims to understand the underlying 
 *    architecture using Vanilla JS, the legacy versions are required.
 * 
 * 2. Environment Compatibility: These versions ensure full stability within a standard 
 *    Node.js (CommonJS) environment, avoiding ES Module conflicts found in newer releases.
 */

// - - - - - - - - - - Import Libraries
// *** Import Redux
const {createStore, applyMiddleware} = require("redux");
// *** Import Redux Logger
const {createLogger} = require("redux-logger");
// *** Import Redux Thunk
const thunk = require("redux-thunk").default;
// *** Import Axios
const axios = require("axios");

// - - - - - - - - - - Fetch Users Logic
// *** Initial State
const initialState = {
  loading: false,
  data: [],
  error: "",
};

// *** Actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// *** Action Functions
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (data) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// *** Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// *** Fetch Users
const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = users.data;
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      dispatch(fetchUsersFailure(error.message));
    }
  };
};

// *** Store
const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

// *** Apply Actions
store.dispatch(fetchUsers());
