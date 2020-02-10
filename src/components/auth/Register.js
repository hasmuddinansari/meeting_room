import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        email: "",
        mobile: "",
        username: "",
        password: ""
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
    const { email } = this.state.form
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)){
      
    }
    else {
      alert("Email is Incorrect")
    }
  };
  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center p-5">
        <form className="flex-column col-md-5 col-12 bg-light  border p-2 d-flex">
          <h2 className="text-center text-danger">Register</h2>
          <TextField
            className=" m-2"
            id="outlined-basic"
            onChange={this.handleChange}
            name="name"
            label="Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className="m-2"
            onChange={this.handleChange}
            name="username"
            label="Username"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className=" m-2"
            onChange={this.handleChange}
            name="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className=" m-2"
            onChange={this.handleChange}
            name="mobile"
            label="Mobile Number"
            variant="outlined"
          />
          <Button
            onClick={this.submit}
            variant="outlined"
            className="py-2  m-2 bg-dark text-white"
            color="primary"
          >
            Register
          </Button>
        </form>
      </div>
    );
  }
}

export default Register;
