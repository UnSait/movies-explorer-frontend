import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRouteAuth = ({ loggedIn, children, ...props }) => {
  return (
      <Route {...props}>
        {loggedIn === undefined || loggedIn === true ? <Redirect to="/profile"/> : children}
      </Route>
  )
}

export default ProtectedRouteAuth;
