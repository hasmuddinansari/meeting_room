import {roomsReducer, AuthReducer, BookingReducer} from "./Reducer"
import {createStore, applyMiddleware, combineReducers} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"   

const rootReducer = combineReducers({
    rooms:roomsReducer,
    Auth:AuthReducer,
    Booked:BookingReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store