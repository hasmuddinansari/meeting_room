import axios from "axios"

export const fetchData = (data)=>{
    return {
        type:"FETCH_DATA",
        payload:data
    }
}
export const sortBy = ( key, sortType)=>{
    return {
        type:"SORTING",
        sortType:sortType,
        key:key,
    }
}

export const login = (authenticated,token)=>{
    return {
        type:"LOGIN",
        authenticated:authenticated,
        token:token
    }
}
export const fetch_duplicate =(data)=>{
    return {
        type:"FILTERED",
        data:data
    }
}

export const logout =(authenticated, token)=>{
    return {
        type:"LOGOUT",
        authenticated:authenticated,
        token:token
    }
}

export const addToBook = (user)=>{
    return {
        type:"BOOK",
        user:user
    }
}
export const updateAvailablity = (id)=>{
    return {
        type:"UPDATA_AVAILABLE",
        id:id,
    }
}


export const fetch_data=()=>{
    return dispatch=>{
        axios.get("./rooms.json")
        .then(res=>{
            localStorage.setItem("rooms", JSON.stringify(res.data))
            dispatch(fetch_duplicate(res.data))
        })
        .catch(error=>{
            console.log(error)
        })
    }
}

export const fetch_filter=(data)=>{
    return dispatch=>{
       dispatch(fetchData(data))
    }
}
