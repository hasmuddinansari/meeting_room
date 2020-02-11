import React from 'react'
import { connect } from 'react-redux'

function BookedHistory(props) {

    if(props.booked.length!==0){
    return (
        <table className="table">
            <thead className="bg-light">
                <tr>
                    <td>Meeting Room</td>
                    <td>Price</td>
                    <td>Floor</td>
                    <td>From</td>
                    <td>To</td>
                </tr>
            </thead>
            <tbody>
                {props.booked.map(room=>{
                    return <tr>
                        <td>{room.room_name}</td>
                        <td>{room.price}</td>
                        <td>{room.floor_num}</td>
                        <td>{room.from}</td>
                        <td>{room.to}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )}
    else{
        return <h2>No booking History Available</h2>
    }
}
const mapStateToProps=state=>{
    return {
        booked:state.Booked.booked
    }
}
export default connect(mapStateToProps)(BookedHistory)