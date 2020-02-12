import React from 'react'
import {connect} from "react-redux"



function BookedHistory(props) {
    const booked = JSON.parse(localStorage.getItem("orders"))
    console.log("booked", booked)
    if(props.booked.length==0 || props.booked==null){
    return (
        <h4>No meeting Rooms are booked</h4>
    )
    }
    else{
        return (
            <table className="table">
           <thead className="bg-danger my-1 text-white">
            <tr>
                <td>Booking Id</td>
                <td>Meeting Room</td>
                <td>Price</td>
                <td>Floor</td>
                <td>From</td>
                <td>To</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
            {booked.map(room=>{
                return <tr>
                    <td>{room.id}</td>
                    <td>{room.room_name}</td>
                    <td>{room.price}</td>
                    <td>{room.floor_num}</td>
                    <td>{room.from}</td>
                    <td>{room.to}</td>
                    <td><button onClick={()=>{
                        return props.delete_bill(room.id)
                    }} className="btn btn-danger">X</button></td>
                </tr>
            })}
        </tbody>
    </table>
        )
    }
}
const mapStateToProps=state=>{
    return {
        booked:state.Booked.booked
    }
}

export default connect(mapStateToProps)(BookedHistory)