import React, {useState} from 'react'
import swal from "sweetalert"
import {addToBook, updateAvailablity} from "../../Redux/Action"
import {connect} from "react-redux"

function idGenerate(){
    let chars = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let nums="1234567890"
    let ids = ""
    for(let i=0; i<=5; i++){
        ids += chars[Math.floor(Math.random() * chars.length)]+nums[Math.floor(Math.random() * nums.length)]
    }
    return ids
}


function BookingConfirm(props) {
    const roomsData = JSON.parse(localStorage.getItem("rooms"))
    if(roomsData==null){
        roomsData=[]
    }
    const room = roomsData.find(rooms=>{
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

    //booking function

    function booking(){
        if(from=="" || to==""){
            swal("Select 'from' and 'to' date both", "","warning")
        }
        else{
            swal({
                title: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  const booked = {...room, from:from, to:to, id:idGenerate()}
                  props.addToBook(booked)
                  props.updateAvailablity(room.id)
                  props.updateAvailablity(room.id)
                  swal("Meeting room is booked now", {
                    icon: "success",
                  });
                  props.history.push(`/meetingRooms/${room.id}/confirm?id=${room.id}`)
                } else {
                  swal("Cancelled !");
                }
              });
        }

    }
    return (
        <div className="container text-left p-4">
            <div className="row justify-content-center">
            <div className="col-lg-5 col-md-5 col-12 m-1">
                <img src={room.img} alt="img" className="img-fluid img-resize"/>
            </div>
            <div className="col-lg-5 col-md-5 m-1 col-12 confirm-shadow">
            <h3 className="my-1 bg-light text-danger">Booking Confirmation</h3>
                <div className="card">
                    <div className="card-body">
                       <p>Meeting Room's Name : {room.room_name}</p> 
                       <p>Price : {room.price} $/Day</p>
                       <p>Floor : {room.floor_num}</p>
                        From:  <input onChange={handleChange} name="from" type="date" className="form-control"/>
                        TO: <input onChange={handleChange} name="to" type="date" className="form-control"/>
                        {room.available?<button onClick={booking} className="btn btn-outline-success my-3">Confirm To Book</button>:<button className="my-3" disabled>Not Available</button>}
                    </div>
                </div>
                </div>
            </div>
           
        </div>
    )
}
const mapStateToProps=state=>{
    return {
        rooms:state.rooms.rooms
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        addToBook:user=>dispatch(addToBook(user)),
        updateAvailablity:id=>dispatch(updateAvailablity(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingConfirm)