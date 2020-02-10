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


export const fetch_data=()=>{
    return dispatch=>{
        axios.get("./rooms.json")
        .then(res=>{
            dispatch(fetchData(res.data))
        })
        .catch(error=>{
            console.log(error)
        })
    }
}