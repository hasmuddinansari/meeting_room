import React from 'react'


function BookedHistory(props) {
    const booked = JSON.parse(localStorage.getItem("orders"))
    console.log("booked", booked)
    if(booked.length!==0){
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
    )}
    else{
        return <h2>No booking History Available</h2>
    }
}

export default BookedHistory