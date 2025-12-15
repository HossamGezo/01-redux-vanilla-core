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
// *** Import redux
const {createStore, combineReducers, applyMiddleware} = require("redux");
// *** Import Redux Logger
const {createLogger} = require("redux-logger");

// - - - - - - - - - - Cake & Icecream Store Logic

// *** Actions
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// *** Action Functions
const buyCake = () => {
  return {
    type: BUY_CAKE,
    payload: 1,
  };
};

const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
    payload: 2,
  };
};

// *** Store States
const cakeInitialState = {numberOfCakes: 10};
const icecreamInitialState = {numberOfIcecreams: 20};

// *** Action Recucers

// * Cake Reducer
const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    default:
      return state;
  }
};

// * Icecream Reducer
const icecreamReducer = (state = icecreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - action.payload,
      };
    default:
      return state;
  }
};

// * Root Reducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

// *** Store
const store = createStore(rootReducer, applyMiddleware(createLogger()));

// *** Apply Actions
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
