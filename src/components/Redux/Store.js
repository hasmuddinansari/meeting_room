import {roomsReducer} from "./Reducer"
import {createStore, applyMiddleware} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"   

export const store = createStore(roomsReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store