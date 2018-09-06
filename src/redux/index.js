import { createStore, combineReducers, applyMiddleware, compose } from "redux";

//actions
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_AMOUNT = "INCREMENT_AMOUNT";
export const RELOAD = "RELOAD";
export const SAYMYNAME = "SAYMYNAME"

export const increment = () => {
  return { type: INCREMENT }
}

export const decrement =() => {
  return {type : DECREMENT }
}

export const incrementAmount = (amount) => {
  return { type: INCREMENT_AMOUNT, amount }
}

export const reload = () => {
  return { type: RELOAD }
}

export const sayMyName = (name) => {
  return { type: SAYMYNAME, name }
}

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT: return state + 1;
    case DECREMENT: return state - 1;
    case INCREMENT_AMOUNT: return state + action.amount;
    case RELOAD: return state - state;
    default: return state;
  }
}

const name = (state = 'User', action) => {
  switch(action.type){
    case SAYMYNAME: return state + " " + action.name;
    default: return state;
  }
}

const reducers = combineReducers({
  counter, name
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [];
const initialState = {};

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store
