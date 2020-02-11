import { Route, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";


const PrivateRoute = ({ component: Component, Auth, ...rest }) => {
  console.log("private Route", Auth.Auth)
  return (
    <Route
      {...rest}
      render={props => {
        if (Auth.Auth.authenticated==true) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
const mapStateToProps = state=>{
    return {
        Auth:state.Auth
    }
}

export default connect(mapStateToProps)(PrivateRoute)