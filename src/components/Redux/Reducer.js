const initialState = {
    rooms:[]
}

export const roomsReducer = (state=initialState, action)=>{
        switch(action.type){
            case "FETCH_DATA":
                return {
                    rooms:action.payload
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
                        rooms:sortedRoomDesc
                    }

                }
            default: return state
        }
}

