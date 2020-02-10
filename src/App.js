import React, {useEffect} from "react";
import "./App.css";
import {fetch_data} from "./components/Redux/Action"
import {connect} from "react-redux"
import Routes from "./Routes/Routes"


function App(props) {
  useEffect(()=>{
    props.fetch_data()
  },[])
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}
const mapDispatchToProps = dispatch =>{
  return {
    fetch_data:()=>dispatch(fetch_data())
  }
}

export default connect(null, mapDispatchToProps)(App);
