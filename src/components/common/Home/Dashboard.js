import React, {useState} from 'react'
import { connect } from 'react-redux'
import RoomsCard from "./RoomsCard"
import PaginateBtn from "./PaginateBtn"
import {sortBy} from "../../Redux/Action"

//counter based on sorting 
let price = 2
let capacity = 2

function Dashboard(props) {
    const [totalRoom, setTotalRoom] = useState(30)
    const [pageNumber, setPageNumber] = useState(1)
    const current = pageNumber * 5
    const prev = current - 5
    const paginationData = props.state.rooms.rooms.slice(prev, current)
    const [filteredRooms, setFilteredRooms] = useState([])

    //paginate is working to page btn 
    function paginate(num){
        setPageNumber(num)
        props.history.push(`?page=${num}`)
    }

    //price sort
    function priceSort(){
        if(price%2==0){
            props.sortBy("price", "asc")
            props.history.push(`?sort=asc&type=price`)
        }
        else{
            props.sortBy("price", "desc")
            props.history.push(`?sort=desc&type=price`)

        }
        price++
    }

    //capacity sort

    function capacitySort(){
        if(capacity%2==0){
            props.sortBy("capacity", "asc")
            props.history.push(`?sort=asc&type=capacity`)
        }
        else{
            props.sortBy("capacity", "desc")
            props.history.push(`?sort=desc&type=capacity`)

        }
        capacity++
    }

    function floorChange(e){
        const newData = props.rooms.filter(room=>{
            return room.floor_num==e.target.value
        })
        setFilteredRooms(newData) 
    }

    console.log(paginationData)
    return (
        <div className="container">
             Sort By : <button onClick={priceSort} >Price</button> <button onClick={capacitySort} >Capacity</button>
                    <select onChange={floorChange} className="custom-select col-2 mx-2">
                    <option disabled selected>Select Floor</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
             </select>
                <div className="row justify-content-center text-left">
                {filteredRooms.length !==0 ? filteredRooms.map(room=>{
                    return <RoomsCard key={room.id} room={room}/>
                }): paginationData.map(room=>{
                    return <RoomsCard key={room.id} room={room}/>
                })}
                </div>
                <PaginateBtn paginate={paginate} total_btn={Math.ceil(totalRoom/5)}/>
            </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        state:state,
        rooms:state.rooms.rooms
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        sortBy: (key, sortType)=>dispatch(sortBy(key, sortType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


