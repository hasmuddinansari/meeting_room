import React, { useEffect, useState } from 'react';
import {Redirect} from "react-router-dom"

const Confirm = (props) => {
  const [time, setTime] = useState(5000);
  const [redirect,setRedirect] = useState(false)
  useEffect(()=>{
      setTimeout(()=>{
        setRedirect(true)
      }, time)
  })
  if(redirect){
      return <Redirect to='/'/>
  }
  else{
    return (
        <div>
         Confirmation Page
        </div>
      );

  }
 
};

export default Confirm