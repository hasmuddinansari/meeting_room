import React from 'react'
import {Link} from "react-router-dom"
import { connect } from 'react-redux'
import {logout} from "../../Redux/Action"

function Navbar(props) {
    const {Auth} = props
    if(Auth.authenticated){
        return (
            <div className="d-flex justify-content-between text-white bg-dark text-light">
                <Link to="/" className="h3 text-white nav-item">
                    Home
                </Link>
                <Link to="/orders" className="h3  text-white nav-item">
                    Orders
                </Link>
                <p>Token : <span className="btn btn-success">{Auth.token}</span> </p>
                <button onClick={()=>props.logout(false, "")}  className="btn btn-danger">
                    Logout
                </button>   
            </div>
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