import React, { useEffect, useState } from 'react';
import {Redirect, useLocation} from "react-router-dom"

const Confirm = (props) => {
  const [time, setTime] = useState(5000);
  const [redirect,setRedirect] = useState(false)
  const [show, setShow] = useState(5)


  
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
        <div>
         {show}
        </div>
      );

  }
 
};

export default Confirm