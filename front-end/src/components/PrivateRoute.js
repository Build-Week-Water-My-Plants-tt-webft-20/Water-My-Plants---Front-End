import React from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'
const PrivateRoute = ({ component: Component }, ...rest) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token") || localStorage.getItem("token") === "") {
          return <Component {...props} />
        } 
        else {
          // If no token exists, component currectly runs this code but page doesn't get redirected //
          // console.log("No token found, else path triggered")
          return <Login/>
        }
    }} />
  );
}

export default PrivateRoute