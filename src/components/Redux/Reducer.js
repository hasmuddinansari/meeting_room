const initialState = {
    rooms:[]
}

export const roomsReducer = (state=initialState, action)=>{
        switch(action.type){
            case "FETCH_DATA":
                return {
                    ...state,
                    rooms:action.payload
                }
            case "UPDATA_AVAILABLE":
                


            case "SORTING":
                const sortedRooms = state.rooms
                if(action.sortType=="asc"){
                    sortedRooms.sort((a, b)=>{
                        if(a[action.key]> b[action.key]) return 1;
                        else if(a[action.key] < b[action.key]) return -1;
                        return 0;
                    })
                    
                    return {
                        ...state,
                        rooms:sortedRooms
                    }
                }
                else{
                    let sortedRoomDesc = state.rooms.sort((a, b)=>{
                        if(a[action.key] < b[action.key]) return 1
                        else if(a[action.key] > b[action.key]) return -1
                        return 0
                    })
                    return {
                        ...state,
                        rooms:sortedRoomDesc
                    }

                }
            default: return state
        }
}

const initialStateOfAuth = {
    Auth:{
        authenticated:true,
        token:"",
    }
}

export const AuthReducer =(state=initialStateOfAuth,action)=>{
    switch(action.type){
        case "LOGIN":
            return {
                Auth:{authenticated:action.authenticated, token:action.token}
            }
        case "LOGOUT":
            return {
                Auth:{authenticated:action.authenticated, token:action.token}
            }
        default : return state
    }
}
const initialStateOfBooking={
    booked:[]
}

export const BookingReducer = (state=initialStateOfBooking, action)=>{
    switch(action.type){
        case "BOOK":
            return {
                booked:[...state.booked, action.user]
            }
        default:return state
    }
}