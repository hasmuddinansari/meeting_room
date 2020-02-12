import React from 'react'
import {Link} from "react-router-dom"

export default function RoomsCard({room}) {
    return (
        <div className="col-lg-3 m-2 col-md-4 col-12 text-center shadow hover-me p-2">
           <div className="card">
               <div className="card-body">
               <img src="./meetingroom2.jpeg" className="img-fluid" alt="img"/>
                <h5 className="my-1"><span className="text-success">{room.room_name}</span> </h5>
                <p>Price: <strong>{room.price} $/Day</strong></p>
                <p>Floor: <strong>{room.floor_num}</strong></p>
                <p>Capacity: <strong>{room.capacity} Persons.</strong></p>
                <p>Available: <strong>{room.available?<span>Yes</span>:<span>No</span>} </strong></p>
                <Link to={`/meetingRooms/${room.id}`} className="btn btn-outline-danger">SELECT</Link>
               </div>
           </div>
            

        </div>
            
        
    )
}
