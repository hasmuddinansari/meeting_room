import React from 'react'
import {Link} from "react-router-dom"
import { connect } from 'react-redux'
import {logout} from "../../Redux/Action"

function Navbar(props) {
    const {Auth} = props
    if(Auth.authenticated){
        return (
             <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                 <a className='nav-brand'>
                 <Link to="/" className="h3 text-white ">
                    Home
                </Link>
                 </a>
                
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                </button>
    <div class="collapse navbar-collapse row justify-content-center" id="navbarSupportedContent">
     <ul class="navbar-nav row justify-content-end  col-12">
      <li class="nav-item active mr-5 ml-2 my-2">
      <a className='nav-item '>
        <Link to="/orders" className="h3  text-white">Orders</Link>
        </a>
      </li>
      <li class="nav-item mr-5 ml-2">
             <p className="text-white">Token : <span className="btn btn-success nav-link">{Auth.token}</span> </p>
      </li>
       <li class="nav-item mr-3 ml-2 my-2">
        
             <button onClick={()=>props.logout(false, "")}  className="btn btn-danger nav-link">
                    Logout
                </button> 
      </li>
      </ul>
  </div>
</nav>
        )
    }
    else{
        return (
            <div className="d-flex justify-content-between bg-dark p-1">
                <Link to="/" className="h3 text-white nav-item">
                    Home
                </Link>
                <Link  to="/login" className="nav-item h3 mx-2 btn btn-outline-success">
                    Login/Register
                </Link>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return {
        Auth:state.Auth.Auth,
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        logout:(authenticated, token)=>dispatch(logout(authenticated, token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)



