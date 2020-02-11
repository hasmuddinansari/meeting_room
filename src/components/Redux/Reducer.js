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
                let oldData = state.rooms.find(room=>{
                    return room.id == action.id
                })
                let allRooms = state.rooms.filter(room=>{
                    return room.id != action.id
                })

                return {
                    ...state,
                    rooms:[...allRooms, {...oldData, available:false}]
                }

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
        authenticated:false,
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
            let orders = JSON.parse(localStorage.getItem("orders"))
            if(orders==null){
                orders=[]
            }
            let updatedOrders = [...orders, action.user]
            localStorage.setItem("orders", JSON.stringify(updatedOrders))
            return {
                booked:[...state.booked, action.user]
            }
        default:return state
    }
}