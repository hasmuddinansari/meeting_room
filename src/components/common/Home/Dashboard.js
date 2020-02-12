import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import RoomsCard from "./RoomsCard"
import PaginateBtn from "./PaginateBtn"
import {sortBy, fetch_filter} from "../../Redux/Action"

//counter based on sorting 
let price = 2
let capacity = 2
const num_ar = [1,2,3,4,5]

function Dashboard(props) {
    const [totalRoom, setTotalRoom] = useState(30)
    const [pageNumber, setPageNumber] = useState(1)
    const current = pageNumber * 6
    let rooms = props.rooms
    if(rooms.length==0){
        rooms = props.duplicate
    }
    const prev = current - 6
    const paginationData = rooms.slice(prev, current)

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
            if(props.rooms.length==0){

            }
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
        const allData = props.duplicate
        if(e.target.value=="all"){
            props.fetch_filter(allData)
            setTotalRoom(allData.length)
        }
        else{
            const newData = allData.filter(room=>{
                return room.floor_num==e.target.value
            })
            props.fetch_filter(newData)
            setPageNumber(1)
            setTotalRoom(newData.length)
            props.history.push("?page=1")
        }
    }

    console.log(paginationData)
    return (
        <div className="container">
            
             <div className="row  bg-light p-3 shadow justify-content-between">
            <h1>Book your meeting Room</h1>
            <div className="col-6">
                {props.rooms.length==0?null:
                <span>
                <button className="btn my-3 btn-outline-dark mx-3 mb-3" onClick={priceSort} >Price {price%2==0?<span>(Asc)</span>:<span>(Desc)</span>} </button> 
                <button className="btn btn-outline-success my-3" onClick={capacitySort} >Capacity {capacity%2==0?<span>(Asc)</span>:<span>(Desc)</span>} </button></span>
                }  
                    <select id="select" onChange={floorChange} className="custom-select col-lg-4  col-md-6 mx-1 col-12">
                    <option disabled selected>Select Floor</option>
                    <option value="all">All</option>
                    
                    {num_ar.map(num=>{
                    return <option value={num}>{num}</option>
                    })}
             </select>
             </div>
             </div>
                <div className="row justify-content-center text-left">
                {paginationData.map(room=>{
                    return <RoomsCard key={room.id} room={room}/>
                })}
                </div>
                <PaginateBtn paginate={paginate} total_btn={Math.ceil(totalRoom/6)}/>
            </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        state:state,
        rooms:state.rooms.rooms,
        duplicate:state.rooms.duplicate
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        sortBy: (key, sortType)=>dispatch(sortBy(key, sortType)),
        fetch_filter:(data)=>dispatch(fetch_filter(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


