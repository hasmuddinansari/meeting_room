import React from 'react'


function BookedHistory(props) {
    const booked = JSON.parse(localStorage.getItem("orders"))
    console.log("booked", booked)
    if(booked.length==0 || booked==null){
    return (
        <h4>No meeting Rooms are booked</h4>
    )
    }
    else{
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
            {booked.map(room=>{
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
        )
    }
}

export default BookedHistory