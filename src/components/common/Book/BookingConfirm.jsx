import React, {useState} from 'react'
import { connect } from 'react-redux'

function BookingConfirm(props) {
    console.log(props.match)
    const room = props.rooms.find(rooms=>{
        return rooms.id == props.match.params.id
    })

    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")

    //date picker 
    function handleChange(e){
        if(e.target.name=='from'){
            setFrom(e.target.value)
        }
        else{
            setTo(e.target.value)
        }
    }
    console.log("from", from)
    console.log("to", to)
    return (
        <div className="container  row justify-content-center text-left">
            
            <div className="col-6">
            <h3>Booking Confirmation</h3>
                <div className="card">
                    <div className="card-body">
                       <p>Meeting Room's Name : {room.room_name}</p> 
                       <p>Price : {room.price} $/Day</p>
                       <p>Floor : {room.floor_num}</p>
                        From:  <input onChange={handleChange} name="from" type="date" className="form-control"/>
                        TO: <input onChange={handleChange} name="to" type="date" className="form-control"/>
                        {room.available?<button className="btn btn-outline-success my-3">Confirm To Book</button>:<button className="my-3" disabled>Not Available</button>}
                    </div>
                </div>

            </div>
           
        </div>
    )
}
const mapStateToProps = state=>{
    return {
        state:state,
        rooms:state.rooms
    }
}

export default connect(mapStateToProps)(BookingConfirm)