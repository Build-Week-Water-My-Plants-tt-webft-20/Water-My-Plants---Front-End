import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from './Login'
const PrivateRoute = ({ component: Component }, ...rest) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(localStorage.getItem("token"))
        if (localStorage.getItem("token") || localStorage.getItem("token") === "") {
          return <Component {...props} />
        } 
        else {
          console.log("whatup")
          return <Redirect to="/login" component={Login} />
        }
    }} />
  );
}

export default PrivateRoute