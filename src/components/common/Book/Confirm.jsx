import React, { useEffect, useState } from 'react';
import {Redirect, Link} from "react-router-dom"
import {connect} from "react-redux"

const Confirm = (props) => {
  const [time, setTime] = useState(5000);
  const [redirect,setRedirect] = useState(false)
  const [show, setShow] = useState(5)
  const [data]= useState(props.booked)
  const last = data[data.length-1]
  const [bookingId]=useState(last.id)
  
  useEffect(()=>{
      setTimeout(()=>{
        setRedirect(true)
      }, time)
    setInterval(()=>{
      setShow(show-1)
     },1000)
  })
  if(redirect){
      return <Redirect to='/'/>
  }
  else{
    return (
        <div className="container p-5 row justify-content-center">
          <div className="col-6">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZlhd6vbs255SuR7ToQ5a9cOIZpHKbK0ETXmNKHPqmc09P2JMi" alt=""/>
          <h2>Booking Success !!</h2>
           <h4>Booking Id : <span className="text-success">{bookingId}</span> </h4>
            <h5>Redirect to home page in: {show}s</h5>
          </div>
          
        </div>
      );

  }
 
};
const mapStateToProps = state=>{
  return {
    booked:state.Booked.booked
  }
}
export default connect(mapStateToProps)(Confirm)