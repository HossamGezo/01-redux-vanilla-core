// - - - - - - - - - - Import Libraries
// *** Import redux
const redux = require("redux");
// *** Import Redux Logger
const logger = require("redux-logger");

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
const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

// *** Store
const store = redux.createStore(
  rootReducer,
  redux.applyMiddleware(logger.createLogger())
);

// *** Apply Actions
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
