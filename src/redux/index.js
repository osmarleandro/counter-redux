import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { INCREMENT, INCREMENT_AMOUNT, DECREMENT, RELOAD, SAY_MY_NAME } from "./actionTypes";

export const increment = () => {
  return { type: INCREMENT }
}

export const decrement = () => {
  return { type: DECREMENT }
}

export const incrementAmount = (amount) => {
  return { type: INCREMENT_AMOUNT, amount }
}

export const reload = () => {
  return { type: RELOAD }
}

export const sayMyName = (name) => {
  return { type: SAY_MY_NAME, name }
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

const nameReducer = (state = { name: "Your Name" }, action) => {
  switch (action.type) {
    case SAY_MY_NAME:
      return { ...state, name: action.name };
      
    default:
      return state;
  }
}

const reducers = combineReducers({
  counter, nameReducer
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
