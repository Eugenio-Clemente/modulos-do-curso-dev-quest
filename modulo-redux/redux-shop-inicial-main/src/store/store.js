import { createStore } from "redux";
import { combineReducers } from "redux";
import cartReducer from './reducers/cart'

const rootReducer = combineReducers({
    cartProducts: cartReducer
    // posso passar outro reducer 
})

export const store = createStore(rootReducer)

