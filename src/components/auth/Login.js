import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios"
import swal from "sweetalert"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {login} from "../Redux/Action"


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        password: "",
        username: ""
    };
  }
  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
  };    
  submit = () => {
    console.log(this.state)
    const config = {
        method:"post",
        baseURL:"http://localhost:8080",
        url: '/auth/login',
        headers: {
          'Content-Type': 'application/json',
      },
        data:{
          password:this.state.password,
          username:this.state.username
        },
       
    }
    axios(config).then(res=>{
      const response = res.data
      if(!response.error){
        swal("Login successfull", "", "success")
        this.props.login(true, response.token)
        this.props.history.push("/")
      }
      else{
        alert("username or password is wrong")
      }
    })
    .catch(err=>{
      alert("username or password is wrong")
    })
    
  };
  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center p-5">
        <form className="flex-column col-md-5 col-12 bg-light  border p-2 d-flex">
          <h2 className="text-center text-danger">Login</h2>
          <TextField
            className=" m-2"
            id="outlined-basic"
            onChange={this.handleChange}
            name="username"
            label="Username"
            variant="outlined"
            
          />
          <TextField
            id="outlined-basic"
            className=" m-2"
            onChange={this.handleChange}
            name="password"
            label="Password"
            variant="outlined"
            type="password"
          />
          <Button
            onClick={this.submit}
            variant="outlined"
            className="py-2  m-2 bg-dark text-white"
            color="primary"
          >
            Login
          </Button>
          <p className="mx-1">Not have an Account ? <Link to="/register">Click Here to Register</Link></p>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    login:(authenticated,token)=>dispatch(login(authenticated,token))
  }
}

export default connect(null, mapDispatchToProps)(Login);
