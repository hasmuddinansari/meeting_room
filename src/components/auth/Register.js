import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios"
import swal from "sweetalert"
import {Link} from "react-router-dom"
// {
//   "name": "MASAI School",
//   "email": "hello@masai.com"
//   "password": "secret",
//   "username": "masai-school",
//   "mobile": "9876543210",
//   "description": "A Transformation in education!" 
// }

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description:""
      }
    };
  }
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };    
  submit = () => {
      const {name, email, password, username, mobile, description} = this.state.form
      if(name=="" || email=="" || username=="" || mobile=="" || password=="" || description==""){
        swal("All field mendotary to fill", "", "warning")
      }
      else{
        const config = {
          method:"post",
          baseURL:"http://localhost:8080",
          url: '/auth/register',
          headers: {'Content-Type': 'application/json',},
          data:{...this.state.form}}
          axios(config).then(res=>{
            const message = res.data.message
            if(message=="Registration Success"){
              swal("Registration Success", "", "success")
              this.reset()
            }
            else{
              swal(message, "", "warning")
            }
          })
      }
  };
  reset = ()=>{
    this.setState({
      form:{
        ...this.state.form,
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description:""

      }
    })
  }
  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center p-1">
        <form className="flex-column col-md-5 col-12 bg-light  border p-2 d-flex">
          <h2 className="text-center text-danger">Register</h2>
          <TextField
            className=" m-2"
            id="outlined-basic"
            onChange={this.handleChange}
            name="name"
            label="Name"
            value={this.state.form.name}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className="m-2"
            onChange={this.handleChange}
            name="email"
            label="Email"
            value={this.state.form.email}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className=" m-2"
            onChange={this.handleChange}
            name="password"
            label="password"
            value={this.state.form.password}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className=" m-2"
            onChange={this.handleChange}
            name="username"
            label="Username"
            value={this.state.form.username}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className=" m-2"
            onChange={this.handleChange}
            name="mobile"
            value={this.state.form.mobile}
            label="Mobile Number"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className=" m-2"
            onChange={this.handleChange}
            name="description"
            label="Description"
            value={this.state.form.description}
            variant="outlined"
          />
          {/* description */}
          <Button
            onClick={this.submit}
            variant="outlined"
            className="py-2  m-2 bg-dark text-white"
            color="primary"
          >
            Register
          </Button>
          <p>Already have an Account? <Link to="/login">click Here</Link></p>
        </form>
      </div>
    );
  }
}

export default Register;
